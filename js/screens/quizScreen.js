import { Card } from "../components/card.js";
import { Progress } from "../components/progress.js";


export function QuizScreen(
    state,
    question
) {

    let answersHTML = "";


    if (
        state.type ===
        "multiple"
    ) {

        answersHTML = `

            <div class="answer-options">

                ${
                    question.choices
                        .map(
                            (choice, index) => `
                                <button
                                    class="answer-option"
                                    data-answer="${index}"
                                >
                                    ${index + 1}. ${choice}
                                </button>
                            `
                        )
                        .join("")
                }

            </div>
        `;
    }


    return `

        <div class="quiz-header">

            <button
                id="back-btn"
                class="ghost-btn"
            >
                ← 설정으로
            </button>


            ${Progress(
                state.currentIndex + 1,
                state.questions.length
            )}


            <div class="score">

                점수

                <strong>
                    ${state.score}
                </strong>

            </div>

        </div>


        ${Card(`

            <div class="meta">

                ${state.grade}학년 ·
                ${state.subject} ·
                ${state.unit}

            </div>


            <h2 id="question-text">

                ${question.question}

            </h2>


            <div id="answer-area">

                ${answersHTML}

            </div>


            <p
                id="feedback"
                class="feedback"
            ></p>


            <button
                id="submit-btn"
                class="primary-btn"
            >
                정답 확인
            </button>


            <button
                id="next-btn"
                class="secondary-btn hidden"
            >
                다음 문제
            </button>

        `, "question-card")}

    `;
}


export function bindQuizEvents(
    state,
    actions
) {

    let selectedAnswer =
        null;


    document
        .querySelectorAll(
            ".answer-option"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        if (
                            state.answered
                        ) {
                            return;
                        }


                        document
                            .querySelectorAll(
                                ".answer-option"
                            )
                            .forEach(
                                btn => {

                                    btn.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        button.classList.add(
                            "selected"
                        );


                        selectedAnswer =
                            Number(
                                button.dataset.answer
                            );

                    }
                );

            }
        );


    document
        .getElementById(
            "submit-btn"
        )
        .addEventListener(
            "click",
            () => {

                if (
                    selectedAnswer ===
                    null
                ) {

                    alert(
                        "답을 선택해 주세요."
                    );

                    return;
                }


                actions.checkAnswer(
                    selectedAnswer
                );

            }
        );


    document
        .getElementById(
            "next-btn"
        )
        .addEventListener(
            "click",
            () => {

                actions.nextQuestion();

            }
        );


    document
        .getElementById(
            "back-btn"
        )
        .addEventListener(
            "click",
            () => {

                actions.goSetup();

            }
        );

}