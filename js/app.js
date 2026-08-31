import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

import {
    SetupScreen,
    bindSetupEvents
} from "./screens/setupScreen.js";

import {
    QuizScreen,
    bindQuizEvents
} from "./screens/quizScreen.js";

import {
    ResultScreen,
    bindResultEvents
} from "./screens/resultScreen.js";

import { examData } from "./data/examData.js";


// ========================================
// 상태
// ========================================

const state = {

    screen: "setup",

    grade: null,

    subject: null,

    unit: null,

    type: "multiple",

    questions: [],

    currentIndex: 0,

    score: 0,

    lastAnswerCorrect: false
};


// ========================================
// DOM
// ========================================

const header =
    document.getElementById(
        "header"
    );


const screen =
    document.getElementById(
        "screen"
    );


const footer =
    document.getElementById(
        "footer"
    );


// ========================================
// 초기 화면
// ========================================

header.innerHTML =
    Header();


footer.innerHTML =
    Footer();


// ========================================
// 화면 렌더링
// ========================================

function render() {

    if (
        state.screen ===
        "setup"
    ) {

        screen.innerHTML =
            SetupScreen(
                state
            );


        bindSetupEvents(
            state,
            actions
        );

        return;
    }


    if (
        state.screen ===
        "quiz"
    ) {

        const question =
            state.questions[
                state.currentIndex
            ];


        screen.innerHTML =
            QuizScreen(
                state,
                question
            );


        bindQuizEvents(
            state,
            actions
        );

        return;
    }


    if (
        state.screen ===
        "result"
    ) {

        screen.innerHTML =
            ResultScreen(
                state
            );


        bindResultEvents(
            actions
        );

    }
}


// ========================================
// 학년 선택
// ========================================

const actions = {

    selectGrade(grade) {

        state.grade =
            grade;

        state.subject =
            null;

        state.unit =
            null;

        render();
    },


    // ====================================
    // 과목 선택
    // ====================================

    selectSubject(subject) {

        state.subject =
            subject;

        state.unit =
            null;

        render();
    },


    // ====================================
    // 단원 선택
    // ====================================

    selectUnit(unit) {

        state.unit =
            unit;

        render();
    },


    // ====================================
    // 문제 시작
    // ====================================

    startQuiz(count, type) {

        if (!state.grade) {

            alert(
                "학년을 선택해 주세요."
            );

            return;
        }


        if (!state.subject) {

            alert(
                "과목을 선택해 주세요."
            );

            return;
        }


        if (!state.unit) {

            alert(
                "단원을 선택해 주세요."
            );

            return;
        }


        const source =
            examData
                [state.grade]
                [state.subject]
                [state.unit];


        const questions =
            source.filter(
                question =>
                    question.type === type
            );


        if (
            questions.length <
            count
        ) {

            alert(
                `현재 선택한 조건에는 ` +
                `${questions.length}문제만 있습니다.\n` +
                `문제를 더 추가해 주세요.`
            );

            return;
        }


        state.type =
            type;


        state.questions =
            shuffle(
                questions
            ).slice(
                0,
                count
            );


        state.currentIndex =
            0;


        state.score =
            0;


        state.screen =
            "quiz";


        render();
    },


    // ====================================
    // 정답 확인
    // ====================================

    checkAnswer(answer) {

        const question =
            state.questions[
                state.currentIndex
            ];


        let correct =
            false;


        // 객관식

        if (
            state.type ===
            "multiple"
        ) {

            correct =
                Number(answer) ===
                question.answer;
        }


        // OX

        else if (
            state.type ===
            "ox"
        ) {

            const correctAnswer =
                question.oxAnswer
                    ? 0
                    : 1;


            correct =
                Number(answer) ===
                correctAnswer;
        }


        // 주관식

        else if (
            state.type ===
            "short"
        ) {

            const userAnswer =
                String(answer)
                    .trim()
                    .toLowerCase()
                    .replace(
                        /\s/g,
                        ""
                    );


            const correctAnswer =
                String(
                    question.answerText
                )
                    .trim()
                    .toLowerCase()
                    .replace(
                        /\s/g,
                        ""
                    );


            correct =
                userAnswer ===
                correctAnswer;
        }


        state.lastAnswerCorrect =
            correct;


        if (correct) {

            state.score++;
        }


        showFeedback(
            question,
            correct
        );
    },


    // ====================================
    // 다음 문제
    // ====================================

    nextQuestion() {

        state.currentIndex++;


        if (
            state.currentIndex >=
            state.questions.length
        ) {

            state.screen =
                "result";

        }


        render();
    },


    // ====================================
    // 처음으로
    // ====================================

    goSetup() {

        state.screen =
            "setup";


        render();
    },


    // ====================================
    // 다시 풀기
    // ====================================

    retryQuiz() {

        const source =
            examData
                [state.grade]
                [state.subject]
                [state.unit];


        const questions =
            source.filter(
                question =>
                    question.type ===
                    state.type
            );


        state.questions =
            shuffle(
                questions
            ).slice(
                0,
                Math.min(
                    state.questions.length,
                    questions.length
                )
            );


        state.currentIndex =
            0;


        state.score =
            0;


        state.screen =
            "quiz";


        render();
    }

};


// ========================================
// 피드백 표시
// ========================================

function showFeedback(
    question,
    correct
) {

    const feedback =
        document.getElementById(
            "feedback"
        );


    const submitBtn =
        document.getElementById(
            "submit-btn"
        );


    const nextBtn =
        document.getElementById(
            "next-btn"
        );


    if (correct) {

        feedback.textContent =
            "정답입니다! 🎉";

        feedback.className =
            "feedback correct-text";

    } else {

        let answerText =
            "";


        if (
            state.type ===
            "multiple"
        ) {

            answerText =
                `정답은 ${
                    question.answer + 1
                }번입니다.`;
        }


        else if (
            state.type ===
            "ox"
        ) {

            answerText =
                `정답은 ${
                    question.oxAnswer
                        ? "O"
                        : "X"
                }입니다.`;
        }


        else {

            answerText =
                `정답: ${
                    question.answerText
                }`;
        }


        feedback.textContent =
            `오답입니다. ${answerText} ${
                question.explanation || ""
            }`;

        feedback.className =
            "feedback wrong-text";
    }


    const buttons =
        document.querySelectorAll(
            ".answer-option"
        );


    buttons.forEach(
        button => {
            button.disabled =
                true;
        }
    );


    submitBtn.classList.add(
        "hidden"
    );


    nextBtn.classList.remove(
        "hidden"
    );
}


// ========================================
// 랜덤 섞기
// ========================================

function shuffle(array) {

    const result =
        [...array];


    for (
        let i =
            result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];
    }


    return result;
}


// ========================================
// 시작
// ========================================

render();