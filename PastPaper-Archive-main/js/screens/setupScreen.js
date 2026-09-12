import { Card } from "../components/card.js";
import { Button } from "../components/button.js";
import { examData } from "../data/examData.js";


export function SetupScreen(state) {

    const grades =
        Object.keys(examData);


    const gradeButtons =
        grades.map(
            grade => {

                const active =
                    state.grade === grade
                        ? "active"
                        : "";


                return `
                    <button
                        class="select-btn ${active}"
                        data-grade="${grade}"
                    >
                        ${grade}학년
                    </button>
                `;
            }
        ).join("");


    let subjectsHTML =
        `
        <p class="guide">
            먼저 학년을 선택해 주세요.
        </p>
        `;


    if (state.grade) {

        const subjects =
            Object.keys(
                examData[state.grade]
            );


        subjectsHTML =
            subjects.map(
                subject => {

                    const active =
                        state.subject === subject
                            ? "active"
                            : "";


                    return `
                        <button
                            class="select-btn ${active}"
                            data-subject="${subject}"
                        >
                            ${subject}
                        </button>
                    `;
                }
            ).join("");
    }


    let unitsHTML =
        `
        <p class="guide">
            먼저 과목을 선택해 주세요.
        </p>
        `;


    if (
        state.grade &&
        state.subject
    ) {

        const units =
            Object.keys(
                examData
                    [state.grade]
                    [state.subject]
            );


        unitsHTML =
            units.map(
                unit => {

                    const active =
                        state.unit === unit
                            ? "active"
                            : "";


                    return `
                        <button
                            class="select-btn ${active}"
                            data-unit="${unit}"
                        >
                            ${unit}
                        </button>
                    `;
                }
            ).join("");
    }


    return Card(`

        <div class="step">

            <h2>
                1. 학년 선택
            </h2>

            <div class="button-grid">

                ${gradeButtons}

            </div>

        </div>


        <div class="step">

            <h2>
                2. 과목 선택
            </h2>

            <div
                id="subject-list"
                class="button-grid"
            >

                ${subjectsHTML}

            </div>

        </div>


        <div class="step">

            <h2>
                3. 단원 선택
            </h2>

            <div
                id="unit-list"
                class="button-grid"
            >

                ${unitsHTML}

            </div>

        </div>


        <div class="settings">

            <div class="setting">

                <label for="count">
                    문제 수
                </label>

                <select id="count">

                    <option value="5">
                        5문제
                    </option>

                </select>

            </div>


            <div class="setting">

                <label for="type">
                    문제 유형
                </label>

                <select id="type">

                    <option value="multiple">
                        객관식
                    </option>

                </select>

            </div>

        </div>


        ${Button(
            "문제 만들기",
            {
                id: "start-btn",
                className: "primary-btn"
            }
        )}


        <p
            id="setup-message"
            class="message"
        ></p>

    `);
}


export function bindSetupEvents(
    actions
) {

    document
        .querySelectorAll(
            "[data-grade]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        actions.selectGrade(
                            button.dataset.grade
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-subject]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        actions.selectSubject(
                            button.dataset.subject
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-unit]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        actions.selectUnit(
                            button.dataset.unit
                        );

                    }
                );

            }
        );


    document
        .getElementById(
            "start-btn"
        )
        .addEventListener(
            "click",
            () => {

                const count =
                    Number(
                        document
                            .getElementById(
                                "count"
                            )
                            .value
                    );


                const type =
                    document
                        .getElementById(
                            "type"
                        )
                        .value;


                actions.startQuiz(
                    count,
                    type
                );

            }
        );

}