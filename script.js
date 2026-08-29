// ========================================
// 학교 시험 문제 데이터
// 학년 → 과목 → 단원 → 문제
//
// 문제 추가 방법:
//
// {
//   type: "multiple",
//   question: "문제 내용",
//   choices: ["보기1", "보기2", "보기3", "보기4"],
//   answer: 1,
//   explanation: "해설"
// }
//
// answer는 배열 번호이므로
// 첫 번째 = 0
// 두 번째 = 1
// 세 번째 = 2
// 네 번째 = 3
// ========================================

const examData = {
    "1": {
        "국어": {
            "1단원": [
                {
                    type: "multiple",
                    question: "글의 중심 내용을 파악할 때 가장 중요한 것은?",
                    choices: ["핵심 내용", "글자 수", "페이지 수", "글자 색"],
                    answer: 0,
                    explanation: "글의 중심 내용을 파악하는 것이 중요합니다."
                },
                {
                    type: "multiple",
                    question: "글의 중요한 내용을 짧게 정리하는 것을 무엇이라고 하는가?",
                    choices: ["요약", "삭제", "복사", "나열"],
                    answer: 0,
                    explanation: "중요한 내용을 간단하게 정리하는 것을 요약이라고 합니다."
                },
                {
                    type: "multiple",
                    question: "글을 읽기 전에 확인하면 좋은 것은?",
                    choices: ["제목", "페이지 색", "글자 크기", "종이 두께"],
                    answer: 0,
                    explanation: "제목을 먼저 보면 글의 내용을 예상하는 데 도움이 됩니다."
                },
                {
                    type: "multiple",
                    question: "문단의 중심 내용을 찾으려면 무엇을 살펴보아야 하는가?",
                    choices: ["중요한 생각", "문단의 길이", "글자의 색", "페이지 번호"],
                    answer: 0,
                    explanation: "문단에서 가장 중요하게 전달하는 생각을 찾아야 합니다."
                },
                {
                    type: "multiple",
                    question: "글을 자신의 말로 설명해 보는 것의 장점은?",
                    choices: ["이해 정도를 확인할 수 있다.", "시험이 사라진다.", "정답을 자동으로 알 수 있다.", "공부할 필요가 없다."],
                    answer: 0,
                    explanation: "자신의 말로 설명하면 내용을 제대로 이해했는지 확인할 수 있습니다."
                }
            ],

            "2단원": [
                {
                    type: "multiple",
                    question: "글의 내용을 정확히 이해하려면 가장 먼저 무엇을 해야 하는가?",
                    choices: ["전체 내용을 읽는다.", "마지막 단어만 읽는다.", "페이지 수를 센다.", "제목을 지운다."],
                    answer: 0,
                    explanation: "전체적인 내용을 읽어야 글의 흐름을 파악할 수 있습니다."
                },
                {
                    type: "multiple",
                    question: "중심 내용을 찾는 데 도움이 되는 것은?",
                    choices: ["반복되거나 강조되는 내용", "글자의 색", "종이의 크기", "페이지 번호"],
                    answer: 0,
                    explanation: "반복되거나 강조되는 내용은 핵심 내용일 가능성이 높습니다."
                },
                {
                    type: "multiple",
                    question: "문단과 문단의 관계를 살펴보는 이유는?",
                    choices: ["글의 흐름을 이해하기 위해", "글자를 세기 위해", "종이를 정리하기 위해", "문제를 삭제하기 위해"],
                    answer: 0,
                    explanation: "문단의 관계를 살펴보면 글의 전개 과정을 이해하기 쉽습니다."
                },
                {
                    type: "multiple",
                    question: "글을 요약할 때 가장 중요한 것은?",
                    choices: ["핵심 내용만 남기는 것", "모든 문장을 그대로 쓰는 것", "제목을 없애는 것", "글을 더 길게 만드는 것"],
                    answer: 0,
                    explanation: "요약은 핵심 내용을 중심으로 간단하게 정리하는 것입니다."
                },
                {
                    type: "multiple",
                    question: "글의 주제를 파악하면 좋은 점은?",
                    choices: ["글쓴이의 중심 생각을 이해할 수 있다.", "글의 길이를 줄일 수 있다.", "페이지가 늘어난다.", "보기만 외울 수 있다."],
                    answer: 0,
                    explanation: "주제를 파악하면 글쓴이가 전달하려는 중심 생각을 이해할 수 있습니다."
                }
            ]
        },

        "수학": {
            "1단원": [
                {
                    type: "multiple",
                    question: "5 + 3의 값은?",
                    choices: ["6", "7", "8", "9"],
                    answer: 2,
                    explanation: "5 + 3 = 8입니다."
                },
                {
                    type: "multiple",
                    question: "12 - 7의 값은?",
                    choices: ["3", "4", "5", "6"],
                    answer: 2,
                    explanation: "12 - 7 = 5입니다."
                },
                {
                    type: "multiple",
                    question: "4 × 6의 값은?",
                    choices: ["20", "24", "28", "30"],
                    answer: 1,
                    explanation: "4 × 6 = 24입니다."
                },
                {
                    type: "multiple",
                    question: "36 ÷ 6의 값은?",
                    choices: ["4", "5", "6", "7"],
                    answer: 2,
                    explanation: "36 ÷ 6 = 6입니다."
                },
                {
                    type: "multiple",
                    question: "x + 5 = 12일 때 x의 값은?",
                    choices: ["5", "6", "7", "8"],
                    answer: 2,
                    explanation: "양변에서 5를 빼면 x = 7입니다."
                }
            ],

            "2단원": [
                {
                    type: "multiple",
                    question: "10 - 4의 값은?",
                    choices: ["4", "5", "6", "7"],
                    answer: 2,
                    explanation: "10 - 4 = 6입니다."
                },
                {
                    type: "multiple",
                    question: "7 + 8의 값은?",
                    choices: ["13", "14", "15", "16"],
                    answer: 2,
                    explanation: "7 + 8 = 15입니다."
                },
                {
                    type: "multiple",
                    question: "9 × 3의 값은?",
                    choices: ["18", "21", "27", "30"],
                    answer: 2,
                    explanation: "9 × 3 = 27입니다."
                },
                {
                    type: "multiple",
                    question: "24 ÷ 4의 값은?",
                    choices: ["4", "5", "6", "7"],
                    answer: 2,
                    explanation: "24 ÷ 4 = 6입니다."
                },
                {
                    type: "multiple",
                    question: "x - 2 = 5일 때 x의 값은?",
                    choices: ["5", "6", "7", "8"],
                    answer: 2,
                    explanation: "양변에 2를 더하면 x = 7입니다."
                }
            ]
        },

        "영어": {
            "1단원": [
                {
                    type: "multiple",
                    question: "'사과'를 뜻하는 영어 단어는?",
                    choices: ["apple", "book", "school", "water"],
                    answer: 0,
                    explanation: "apple은 사과를 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'학교'를 뜻하는 영어 단어는?",
                    choices: ["friend", "school", "house", "water"],
                    answer: 1,
                    explanation: "school은 학교를 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'친구'를 뜻하는 영어 단어는?",
                    choices: ["tree", "book", "friend", "desk"],
                    answer: 2,
                    explanation: "friend는 친구를 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'책'을 뜻하는 영어 단어는?",
                    choices: ["door", "book", "chair", "school"],
                    answer: 1,
                    explanation: "book은 책을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'물'을 뜻하는 영어 단어는?",
                    choices: ["water", "apple", "friend", "house"],
                    answer: 0,
                    explanation: "water는 물을 뜻합니다."
                }
            ]
        }
    },


    "2": {
        "국어": {
            "1단원": [
                {
                    type: "multiple",
                    question: "글의 중심 내용을 파악하는 가장 좋은 방법은?",
                    choices: ["핵심 내용을 찾는다.", "단어 수를 센다.", "페이지를 센다.", "글자색을 본다."],
                    answer: 0,
                    explanation: "핵심 내용을 찾아야 중심 내용을 파악할 수 있습니다."
                },
                {
                    type: "multiple",
                    question: "제목을 살펴보는 이유는?",
                    choices: ["글의 내용을 예상하기 위해", "페이지를 줄이기 위해", "글자를 세기 위해", "답을 외우기 위해"],
                    answer: 0,
                    explanation: "제목은 글의 내용을 예상하는 데 도움이 됩니다."
                },
                {
                    type: "multiple",
                    question: "중요한 내용을 간단하게 정리하는 것은?",
                    choices: ["요약", "복사", "삭제", "나열"],
                    answer: 0,
                    explanation: "핵심 내용을 간단하게 정리하는 것을 요약이라고 합니다."
                },
                {
                    type: "multiple",
                    question: "글의 흐름을 이해하려면 무엇을 살펴보아야 하는가?",
                    choices: ["문단의 연결 관계", "페이지 색", "글자 크기", "종이 두께"],
                    answer: 0,
                    explanation: "문단이 어떻게 이어지는지 살펴보면 글의 흐름을 이해할 수 있습니다."
                },
                {
                    type: "multiple",
                    question: "글을 읽은 뒤 자신의 말로 설명하면 좋은 점은?",
                    choices: ["이해 정도를 확인할 수 있다.", "문제를 삭제할 수 있다.", "시험을 볼 필요가 없다.", "답을 자동으로 얻는다."],
                    answer: 0,
                    explanation: "자신의 말로 설명하면 이해한 정도를 확인할 수 있습니다."
                }
            ]
        },

        "수학": {
            "1단원": [
                {
                    type: "multiple",
                    question: "8 + 7의 값은?",
                    choices: ["13", "14", "15", "16"],
                    answer: 2,
                    explanation: "8 + 7 = 15입니다."
                },
                {
                    type: "multiple",
                    question: "15 - 8의 값은?",
                    choices: ["5", "6", "7", "8"],
                    answer: 2,
                    explanation: "15 - 8 = 7입니다."
                },
                {
                    type: "multiple",
                    question: "6 × 4의 값은?",
                    choices: ["20", "22", "24", "26"],
                    answer: 2,
                    explanation: "6 × 4 = 24입니다."
                },
                {
                    type: "multiple",
                    question: "48 ÷ 8의 값은?",
                    choices: ["4", "5", "6", "7"],
                    answer: 2,
                    explanation: "48 ÷ 8 = 6입니다."
                },
                {
                    type: "multiple",
                    question: "x + 6 = 15일 때 x의 값은?",
                    choices: ["7", "8", "9", "10"],
                    answer: 2,
                    explanation: "15 - 6 = 9이므로 x = 9입니다."
                }
            ],

            "2단원": [
                {
                    type: "multiple",
                    question: "20 - 9의 값은?",
                    choices: ["9", "10", "11", "12"],
                    answer: 2,
                    explanation: "20 - 9 = 11입니다."
                },
                {
                    type: "multiple",
                    question: "8 × 5의 값은?",
                    choices: ["30", "35", "40", "45"],
                    answer: 2,
                    explanation: "8 × 5 = 40입니다."
                },
                {
                    type: "multiple",
                    question: "42 ÷ 7의 값은?",
                    choices: ["5", "6", "7", "8"],
                    answer: 1,
                    explanation: "42 ÷ 7 = 6입니다."
                },
                {
                    type: "multiple",
                    question: "x - 4 = 8일 때 x의 값은?",
                    choices: ["10", "11", "12", "13"],
                    answer: 2,
                    explanation: "8 + 4 = 12입니다."
                },
                {
                    type: "multiple",
                    question: "3 × 7 + 2의 값은?",
                    choices: ["21", "22", "23", "24"],
                    answer: 2,
                    explanation: "3 × 7 = 21이고 21 + 2 = 23입니다."
                }
            ]
        },

        "영어": {
            "1단원": [
                {
                    type: "multiple",
                    question: "'가족'을 뜻하는 영어 단어는?",
                    choices: ["family", "school", "water", "book"],
                    answer: 0,
                    explanation: "family는 가족을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'친구'를 뜻하는 영어 단어는?",
                    choices: ["teacher", "friend", "house", "desk"],
                    answer: 1,
                    explanation: "friend는 친구를 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'선생님'을 뜻하는 영어 단어는?",
                    choices: ["teacher", "student", "friend", "family"],
                    answer: 0,
                    explanation: "teacher는 선생님을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'학생'을 뜻하는 영어 단어는?",
                    choices: ["teacher", "student", "school", "book"],
                    answer: 1,
                    explanation: "student는 학생을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'집'을 뜻하는 영어 단어는?",
                    choices: ["house", "water", "friend", "apple"],
                    answer: 0,
                    explanation: "house는 집을 뜻합니다."
                }
            ]
        }
    },


    "3": {
        "국어": {
            "1단원": [
                {
                    type: "multiple",
                    question: "글의 주제를 파악하는 것이 중요한 이유는?",
                    choices: ["중심 생각을 이해하기 위해", "글자를 세기 위해", "페이지를 외우기 위해", "문제를 삭제하기 위해"],
                    answer: 0,
                    explanation: "주제를 파악하면 글의 중심 생각을 이해할 수 있습니다."
                },
                {
                    type: "multiple",
                    question: "요약할 때 제외해도 되는 내용은?",
                    choices: ["세부적인 내용", "핵심 내용", "중심 생각", "중요한 근거"],
                    answer: 0,
                    explanation: "요약에서는 핵심에 필요하지 않은 세부 내용을 줄일 수 있습니다."
                },
                {
                    type: "multiple",
                    question: "글의 내용을 정확하게 파악하려면?",
                    choices: ["전체적인 흐름을 읽는다.", "첫 단어만 읽는다.", "제목을 지운다.", "마지막 글자만 본다."],
                    answer: 0,
                    explanation: "전체적인 흐름을 파악해야 내용을 정확하게 이해할 수 있습니다."
                },
                {
                    type: "multiple",
                    question: "중심 생각과 가장 가까운 것은?",
                    choices: ["글에서 가장 중요한 생각", "페이지 번호", "글자 수", "문장의 길이"],
                    answer: 0,
                    explanation: "중심 생각은 글에서 가장 중요하게 전달하려는 생각입니다."
                },
                {
                    type: "multiple",
                    question: "읽은 내용을 친구에게 설명하면 무엇을 확인할 수 있는가?",
                    choices: ["이해 정도", "페이지 수", "글자 색", "종이 크기"],
                    answer: 0,
                    explanation: "설명해 보면 자신이 내용을 얼마나 이해했는지 확인할 수 있습니다."
                }
            ]
        },

        "수학": {
            "1단원": [
                {
                    type: "multiple",
                    question: "14 + 6의 값은?",
                    choices: ["18", "19", "20", "21"],
                    answer: 2,
                    explanation: "14 + 6 = 20입니다."
                },
                {
                    type: "multiple",
                    question: "21 - 9의 값은?",
                    choices: ["10", "11", "12", "13"],
                    answer: 2,
                    explanation: "21 - 9 = 12입니다."
                },
                {
                    type: "multiple",
                    question: "7 × 4의 값은?",
                    choices: ["24", "26", "28", "30"],
                    answer: 2,
                    explanation: "7 × 4 = 28입니다."
                },
                {
                    type: "multiple",
                    question: "54 ÷ 9의 값은?",
                    choices: ["4", "5", "6", "7"],
                    answer: 2,
                    explanation: "54 ÷ 9 = 6입니다."
                },
                {
                    type: "multiple",
                    question: "x + 8 = 17일 때 x의 값은?",
                    choices: ["7", "8", "9", "10"],
                    answer: 2,
                    explanation: "17 - 8 = 9이므로 x = 9입니다."
                }
            ]
        },

        "영어": {
            "1단원": [
                {
                    type: "multiple",
                    question: "'책'을 뜻하는 영어 단어는?",
                    choices: ["book", "water", "house", "friend"],
                    answer: 0,
                    explanation: "book은 책을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'학교'를 뜻하는 영어 단어는?",
                    choices: ["school", "apple", "family", "teacher"],
                    answer: 0,
                    explanation: "school은 학교를 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'물'을 뜻하는 영어 단어는?",
                    choices: ["water", "student", "book", "friend"],
                    answer: 0,
                    explanation: "water는 물을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'가족'을 뜻하는 영어 단어는?",
                    choices: ["family", "teacher", "school", "house"],
                    answer: 0,
                    explanation: "family는 가족을 뜻합니다."
                },
                {
                    type: "multiple",
                    question: "'선생님'을 뜻하는 영어 단어는?",
                    choices: ["teacher", "student", "friend", "book"],
                    answer: 0,
                    explanation: "teacher는 선생님을 뜻합니다."
                }
            ]
        }
    }
};


// ========================================
// 현재 선택 상태
// ========================================

let selectedGrade = null;
let selectedSubject = null;
let selectedUnit = null;

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;


// ========================================
// HTML 요소
// ========================================

const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const gradeList = document.getElementById("grade-list");
const subjectList = document.getElementById("subject-list");
const unitList = document.getElementById("unit-list");

const countSelect = document.getElementById("count");
const typeSelect = document.getElementById("type");

const startBtn = document.getElementById("start-btn");
const setupMessage = document.getElementById("setup-message");

const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const liveScore = document.getElementById("live-score");

const quizInfo = document.getElementById("quiz-info");
const questionText = document.getElementById("question-text");
const answerArea = document.getElementById("answer-area");
const feedback = document.getElementById("feedback");

const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

const finalScore = document.getElementById("final-score");
const resultSummary = document.getElementById("result-summary");
const correctCount = document.getElementById("correct-count");
const wrongCount = document.getElementById("wrong-count");
const resultUnit = document.getElementById("result-unit");

const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");


// ========================================
// 배열 랜덤 섞기
// ========================================

function shuffle(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [
            newArray[i],
            newArray[randomIndex]
        ] = [
            newArray[randomIndex],
            newArray[i]
        ];
    }

    return newArray;
}


// ========================================
// 과목 표시
// ========================================

function renderSubjects() {

    subjectList.innerHTML = "";

    if (!selectedGrade) {

        subjectList.innerHTML =
            '<p class="guide">먼저 학년을 선택해 주세요.</p>';

        return;
    }

    const subjects =
        Object.keys(examData[selectedGrade]);

    subjects.forEach(subject => {

        const button =
            document.createElement("button");

        button.className = "select-btn";
        button.textContent = subject;

        button.addEventListener("click", () => {

            selectedSubject = subject;
            selectedUnit = null;

            document
                .querySelectorAll(
                    "#subject-list .select-btn"
                )
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            renderUnits();
        });

        subjectList.appendChild(button);
    });
}


// ========================================
// 단원 표시
// ========================================

function renderUnits() {

    unitList.innerHTML = "";

    if (!selectedSubject) {

        unitList.innerHTML =
            '<p class="guide">먼저 과목을 선택해 주세요.</p>';

        return;
    }

    const units =
        examData[selectedGrade][selectedSubject];

    Object.keys(units).forEach(unit => {

        const button =
            document.createElement("button");

        button.className = "select-btn";
        button.textContent = unit;

        button.addEventListener("click", () => {

            selectedUnit = unit;

            document
                .querySelectorAll(
                    "#unit-list .select-btn"
                )
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            setupMessage.textContent = "";
        });

        unitList.appendChild(button);
    });
}


// ========================================
// 학년 선택
// ========================================

gradeList
    .querySelectorAll(".select-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            selectedGrade =
                button.dataset.grade;

            selectedSubject = null;
            selectedUnit = null;

            gradeList
                .querySelectorAll(".select-btn")
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            renderSubjects();
            renderUnits();

            setupMessage.textContent = "";
        });
    });


// ========================================
// 문제 만들기
// ========================================

function makeQuiz() {

    const source =
        examData
            [selectedGrade]
            [selectedSubject]
            [selectedUnit];

    if (!source || source.length === 0) {

        alert("이 단원에는 문제가 없습니다.");

        return false;
    }

    const count =
        Number(countSelect.value);

    // 등록된 문제보다 많이 선택하면
    // 같은 문제가 반복되지 않도록 막음
    if (count > source.length) {

        alert(
            `현재 ${selectedUnit}에는 ` +
            `${source.length}문제만 등록되어 있습니다.\n` +
            `문제 수를 ${source.length}문제 이하로 선택하거나 ` +
            `문제를 더 추가해 주세요.`
        );

        return false;
    }

    // 선택한 유형에 맞는 문제만 가져오기
    let filteredQuestions =
        source.filter(question => {

            if (typeSelect.value === "multiple") {
                return question.type === "multiple";
            }

            if (typeSelect.value === "ox") {
                return question.type === "ox";
            }

            if (typeSelect.value === "short") {
                return question.type === "short";
            }

            return true;
        });


    // 해당 유형 문제가 없으면 안내
    if (filteredQuestions.length === 0) {

        alert(
            `${selectedUnit}에는 ` +
            `${typeSelect.options[typeSelect.selectedIndex].text} 문제가 없습니다.`
        );

        return false;
    }


    // 문제 수보다 유형별 문제가 적으면 막음
    if (count > filteredQuestions.length) {

        alert(
            `선택한 유형의 문제는 현재 ` +
            `${filteredQuestions.length}개입니다.\n\n` +
            `문제를 더 추가하거나 문제 수를 줄여주세요.`
        );

        return false;
    }


    // 랜덤으로 섞은 뒤 필요한 수만 선택
    quizQuestions =
        shuffle(filteredQuestions).slice(0, count);


    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;

    return true;
}


// ========================================
// 문제 표시
// ========================================

function showQuestion() {

    const question =
        quizQuestions[currentQuestion];


    progressText.textContent =
        `${currentQuestion + 1} / ${quizQuestions.length}`;


    progressFill.style.width =
        `${(
            (currentQuestion + 1)
            / quizQuestions.length
        ) * 100}%`;


    liveScore.textContent = score;


    quizInfo.textContent =
        `${selectedGrade}학년 · ` +
        `${selectedSubject} · ` +
        `${selectedUnit}`;


    questionText.textContent =
        question.question;


    answerArea.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "feedback";


    submitBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");


    selectedAnswer = null;
    answered = false;


    // ====================================
    // 주관식
    // ====================================

    if (
        typeSelect.value === "short"
    ) {

        const input =
            document.createElement("input");

        input.type = "text";
        input.id = "short-answer";
        input.className = "short-answer";
        input.placeholder = "정답을 입력하세요";

        answerArea.appendChild(input);

        return;
    }


    // ====================================
    // O / X
    // ====================================

    let choices;

    if (typeSelect.value === "ox") {

        choices = ["O", "X"];

    } else {

        choices = question.choices;
    }


    // ====================================
    // 선택지 생성
    // ====================================

    const options =
        document.createElement("div");

    options.className =
        "answer-options";


    choices.forEach((choice, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";


        if (typeSelect.value === "ox") {

            button.textContent = choice;

        } else {

            button.textContent =
                `${index + 1}. ${choice}`;
        }


        button.addEventListener(
            "click",
            () => {

                if (answered) return;

                selectedAnswer = index;

                options
                    .querySelectorAll(
                        ".answer-option"
                    )
                    .forEach(btn => {
                        btn.classList.remove(
                            "selected"
                        );
                    });

                button.classList.add(
                    "selected"
                );
            }
        );


        options.appendChild(button);
    });


    answerArea.appendChild(options);
}


// ========================================
// 정답 확인
// ========================================

function checkAnswer() {

    if (answered) return;

    const question =
        quizQuestions[currentQuestion];

    let isCorrect = false;


    // ====================================
    // 주관식
    // ====================================

    if (typeSelect.value === "short") {

        const input =
            document.getElementById(
                "short-answer"
            );


        if (!input) return;


        const userAnswer =
            input.value
                .trim()
                .toLowerCase();


        if (!userAnswer) {

            feedback.textContent =
                "정답을 입력해 주세요.";

            feedback.className =
                "feedback wrong-text";

            return;
        }


        const correctAnswer =
            String(
                question.answerText
            )
            .trim()
            .toLowerCase();


        isCorrect =
            userAnswer.replace(/\s/g, "") ===
            correctAnswer.replace(/\s/g, "");
    }


    // ====================================
    // O / X
    // ====================================

    else if (typeSelect.value === "ox") {

        if (selectedAnswer === null) {

            feedback.textContent =
                "O 또는 X를 선택해 주세요.";

            feedback.className =
                "feedback wrong-text";

            return;
        }


        // oxAnswer:
        // true  = O
        // false = X

        const correctAnswer =
            question.oxAnswer
                ? 0
                : 1;


        isCorrect =
            selectedAnswer ===
            correctAnswer;
    }


    // ====================================
    // 객관식
    // ====================================

    else {

        if (selectedAnswer === null) {

            feedback.textContent =
                "답을 선택해 주세요.";

            feedback.className =
                "feedback wrong-text";

            return;
        }


        isCorrect =
            selectedAnswer ===
            question.answer;
    }


    // ====================================
    // 정답 결과
    // ====================================

    answered = true;


    if (isCorrect) {

        score++;

        liveScore.textContent = score;

        feedback.textContent =
            "정답입니다! 🎉";

        feedback.className =
            "feedback correct-text";

    } else {

        let correctText = "";


        if (typeSelect.value === "multiple") {

            correctText =
                `정답은 ${question.answer + 1}번입니다.`;

        }

        else if (typeSelect.value === "ox") {

            correctText =
                `정답은 ${
                    question.oxAnswer ? "O" : "X"
                }입니다.`;

        }

        else if (typeSelect.value === "short") {

            correctText =
                `정답: ${question.answerText}`;
        }


        feedback.textContent =
            `오답입니다. ${correctText} ` +
            `${question.explanation || ""}`;

        feedback.className =
            "feedback wrong-text";
    }


    // ====================================
    // 정답 표시
    // ====================================

    if (typeSelect.value === "short") {

        const input =
            document.getElementById(
                "short-answer"
            );

        if (input) {
            input.disabled = true;
        }

    } else {

        const buttons =
            document.querySelectorAll(
                ".answer-option"
            );


        buttons.forEach(
            (button, index) => {

                button.disabled = true;


                // 객관식
                if (
                    typeSelect.value ===
                    "multiple"
                ) {

                    if (
                        index ===
                        question.answer
                    ) {

                        button.classList.add(
                            "correct"
                        );
                    }


                    if (
                        !isCorrect &&
                        index ===
                        selectedAnswer
                    ) {

                        button.classList.add(
                            "wrong"
                        );
                    }
                }


                // OX
                if (
                    typeSelect.value ===
                    "ox"
                ) {

                    const correctIndex =
                        question.oxAnswer
                            ? 0
                            : 1;


                    if (
                        index ===
                        correctIndex
                    ) {

                        button.classList.add(
                            "correct"
                        );
                    }


                    if (
                        !isCorrect &&
                        index ===
                        selectedAnswer
                    ) {

                        button.classList.add(
                            "wrong"
                        );
                    }
                }
            }
        );
    }


    submitBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
}


// ========================================
// 문제 만들기 버튼
// ========================================

startBtn.addEventListener(
    "click",
    () => {

        if (!selectedGrade) {

            setupMessage.textContent =
                "학년을 선택해 주세요.";

            return;
        }


        if (!selectedSubject) {

            setupMessage.textContent =
                "과목을 선택해 주세요.";

            return;
        }


        if (!selectedUnit) {

            setupMessage.textContent =
                "단원을 선택해 주세요.";

            return;
        }


        const success =
            makeQuiz();


        if (!success) {
            return;
        }


        setupScreen.classList.add(
            "hidden"
        );

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.remove(
            "hidden"
        );


        showQuestion();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


// ========================================
// 정답 확인
// ========================================

submitBtn.addEventListener(
    "click",
    checkAnswer
);


// ========================================
// 다음 문제
// ========================================

nextBtn.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            showResult();

        } else {

            showQuestion();
        }
    }
);


// ========================================
// 설정으로 돌아가기
// ========================================

backBtn.addEventListener(
    "click",
    () => {

        quizScreen.classList.add(
            "hidden"
        );

        setupScreen.classList.remove(
            "hidden"
        );
    }
);


// ========================================
// 결과 화면
// ========================================

function showResult() {

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    finalScore.textContent =
        percentage;


    correctCount.textContent =
        score;


    wrongCount.textContent =
        total - score;


    resultUnit.textContent =
        selectedUnit;


    resultSummary.textContent =
        `${selectedGrade}학년 ` +
        `${selectedSubject} ` +
        `${selectedUnit} · ` +
        `${total}문제 중 ` +
        `${score}문제를 맞혔어요.`;
}


// ========================================
// 다시 풀기
// ========================================

retryBtn.addEventListener(
    "click",
    () => {

        if (!makeQuiz()) {
            return;
        }

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.remove(
            "hidden"
        );

        showQuestion();
    }
);


// ========================================
// 다른 단원 선택
// ========================================

homeBtn.addEventListener(
    "click",
    () => {

        resultScreen.classList.add(
            "hidden"
        );

        setupScreen.classList.remove(
            "hidden"
        );
    }
);


// ========================================
// 처음 실행
// ========================================

renderSubjects();
renderUnits();