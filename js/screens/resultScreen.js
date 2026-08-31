import { Card } from "../components/card.js";


export function ResultScreen(
    state
) {

    const total =
        state.questions.length;


    const score =
        Math.round(
            (state.score / total) * 100
        );


    return Card(`

        <div class="result">

            <div class="result-icon">
                🎉
            </div>


            <p class="eyebrow">
                RESULT
            </p>


            <h2>
                문제 풀이 완료!
            </h2>


            <div class="final-score">

                ${score}

                <small>
                    점
                </small>

            </div>


            <p>
                ${total}문제 중
                ${state.score}문제를
                맞혔어요.
            </p>


            <div class="result-grid">

                <div>

                    <span>
                        맞힌 문제
                    </span>

                    <strong>
                        ${state.score}
                    </strong>

                </div>


                <div>

                    <span>
                        틀린 문제
                    </span>

                    <strong>
                        ${total - state.score}
                    </strong>

                </div>


                <div>

                    <span>
                        선택 단원
                    </span>

                    <strong>
                        ${state.unit}
                    </strong>

                </div>

            </div>


            <button
                id="retry-btn"
                class="primary-btn"
            >
                다시 풀기
            </button>


            <button
                id="home-btn"
                class="secondary-btn"
            >
                다른 선택하기
            </button>

        </div>

    `, "result-card");
}


export function bindResultEvents(
    actions
) {

    document
        .getElementById(
            "retry-btn"
        )
        .addEventListener(
            "click",
            () => {

                actions.retryQuiz();
            }
        );


    document
        .getElementById(
            "home-btn"
        )
        .addEventListener(
            "click",
            () => {

                actions.goSetup();
            }
        );
}