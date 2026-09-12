import { Header }
    from "./components/header.js";

import { Footer }
    from "./components/footer.js";


import {
    SetupScreen,
    bindSetupEvents
}
    from "./screens/setupScreen.js";


import {
    QuizScreen,
    bindQuizEvents
}
    from "./screens/quizScreen.js";


import {
    ResultScreen,
    bindResultEvents
}
    from "./screens/resultScreen.js";


import { examData }
    from "./data/examData.js";


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

    answered: false

};


// ========================================
// HTML
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
// 공통 영역
// ========================================

header.innerHTML =
    Header();


footer.innerHTML =
    Footer();


// ========================================
// 화면 표시
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
// Actions
// ========================================

const actions = {

    // ------------------------------------
    // 학년
    // ------------------------------------

    selectGrade(
        grade
    ) {

        state.grade =
            grade;

        state.subject =
            null;

        state.unit =
            null;

        render();

    },


    // ------------------------------------
    // 과목
    // ------------------------------------

    selectSubject(
        subject
    ) {

        state.subject =
            subject;

        state.unit =
            null;

        render();

    },


    // ------------------------------------
    // 단원
    // ------------------------------------

    selectUnit(
        unit
    ) {

        state.unit =
            unit;

        render();

    },


    // ------------------------------------
    // 시험 시작
    // ------------------------------------

    startQuiz(
        count,
        type
    ) {

        const source =
            examData
                [state.grade]
                [state.subject]
                [state.unit];


        if (!source) {

            alert(
                "문제를 찾을 수 없습니다."
            );

            return;
        }


        const questions =
            source.filter(
                question =>
                    question.type ===
                    type
            );


        if (
            questions.length <
            count
        ) {

            alert(
                `현재 이 단원에는 ` +
                `${questions.length}개의 ` +
                `문제만 있습니다.\n\n` +
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


        state.answered =
            false;


        state.screen =
            "quiz";


        render();

    },


    // ------------------------------------
    // 정답 확인
    // ------------------------------------

    checkAnswer(
        answer
    ) {

        const question =
            state.questions[
                state.currentIndex
            ];


        const correct =
            Number(answer) ===
            Number(question.answer);


        state.answered =
            true;


        if (correct) {

            state.score++;

        }


        const feedback =
            document.getElementById(
                "feedback"
            );


        if (correct) {

            feedback.textContent =
                "정답입니다! 🎉";

            feedback.className =
                "feedback correct-text";

        } else {

            feedback.textContent =
                `오답입니다. ` +
                `정답은 ${question.answer + 1}번입니다. ` +
                `${question.explanation || ""}`;

            feedback.className =
                "feedback wrong-text";

        }


        // 보기 잠금

        document
            .querySelectorAll(
                ".answer-option"
            )
            .forEach(
                button => {

                    button.disabled =
                        true;

                }
            );


        // 정답 표시

        document
            .querySelectorAll(
                ".answer-option"
            )
            .forEach(
                (button, index) => {

                    if (
                        index ===
                        question.answer
                    ) {

                        button.classList.add(
                            "correct"
                        );

                    }


                    if (
                        !correct &&
                        index ===
                        Number(answer)
                    ) {

                        button.classList.add(
                            "wrong"
                        );

                    }

                }
            );


        document
            .getElementById(
                "submit-btn"
            )
            .classList.add(
                "hidden"
            );


        document
            .getElementById(
                "next-btn"
            )
            .classList.remove(
                "hidden"
            );

    },


    // ------------------------------------
    // 다음 문제
    // ------------------------------------

    nextQuestion() {

        state.currentIndex++;


        state.answered =
            false;


        if (
            state.currentIndex >=
            state.questions.length
        ) {

            state.screen =
                "result";

        }


        render();

    },


    // ------------------------------------
    // 설정으로
    // ------------------------------------

    goSetup() {

        state.screen =
            "setup";

        render();

    },


    // ------------------------------------
    // 다시 풀기
    // ------------------------------------

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


        state.answered =
            false;


        state.screen =
            "quiz";


        render();

    }

};


// ========================================
// 랜덤 섞기
// ========================================

function shuffle(
    array
) {

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
// 프로그램 시작
// ========================================

render();