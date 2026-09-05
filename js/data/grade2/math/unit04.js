const questions = [
    {
        type: "multiple",
        question: "직사각형의 네 내각의 크기는 모두 얼마인가?",
        choices: ["45°", "60°", "90°", "120°"],
        answer: 2,
        explanation: "직사각형의 네 각은 모두 직각입니다."
    },
    {
        type: "multiple",
        question: "마름모의 네 변의 길이가 6cm일 때 둘레는?",
        choices: ["12cm", "18cm", "24cm", "36cm"],
        answer: 2,
        explanation: "마름모는 네 변의 길이가 같으므로 6 × 4 = 24cm입니다."
    },
    {
        type: "multiple",
        question: "정사각형의 대각선에 대한 설명으로 옳은 것은?",
        choices: [
            "서로 수직이다.",
            "서로 수직이등분한다.",
            "한쪽만 이등분한다.",
            "항상 길이가 다르다."
        ],
        answer: 1,
        explanation: "정사각형의 두 대각선은 서로 수직으로 이등분합니다."
    },
    {
        type: "multiple",
        question: "한 쌍의 대변이 평행하고 네 변의 길이가 모두 같은 사각형은?",
        choices: ["직사각형", "마름모", "사다리꼴", "정사각형만 가능"],
        answer: 1,
        explanation: "네 변의 길이가 모두 같은 평행사변형은 마름모입니다."
    },
    {
        type: "multiple",
        question: "정사각형이면서 직사각형인 이유로 가장 적절한 것은?",
        choices: [
            "네 변의 길이가 같고 네 각이 직각이기 때문이다.",
            "대각선이 하나뿐이기 때문이다.",
            "한 쌍의 변만 평행하기 때문이다.",
            "변의 길이가 모두 다르기 때문이다."
        ],
        answer: 0,
        explanation: "정사각형은 네 변의 길이가 같고 네 각이 모두 직각이므로 직사각형의 성질을 가집니다."
    },
    {
        type: "multiple",
        question: "마름모의 네 변의 길이가 9cm일 때 둘레는?",
        choices: ["18cm", "27cm", "36cm", "81cm"],
        answer: 2,
        explanation: "9 × 4 = 36cm입니다."
    },
    {
        type: "multiple",
        question: "직사각형의 가로가 12cm, 세로가 5cm일 때 둘레는?",
        choices: ["17cm", "24cm", "34cm", "60cm"],
        answer: 2,
        explanation: "2 × (12 + 5) = 34cm입니다."
    },
    {
        type: "multiple",
        question: "정사각형의 한 변의 길이가 7cm일 때 넓이는?",
        choices: ["14cm²", "28cm²", "49cm²", "56cm²"],
        answer: 2,
        explanation: "7 × 7 = 49cm²입니다."
    },
    {
        type: "multiple",
        question: "다음 중 네 변의 길이가 모두 같고 네 각이 모두 직각인 도형은?",
        choices: ["사다리꼴", "마름모", "직사각형", "정사각형"],
        answer: 3,
        explanation: "네 변이 같고 네 각이 모두 직각이면 정사각형입니다."
    },
    {
        type: "multiple",
        question: "직사각형의 두 대각선의 길이는 어떤 관계인가?",
        choices: ["서로 같다", "항상 수직이다", "한쪽이 두 배이다", "항상 다르다"],
        answer: 0,
        explanation: "직사각형의 두 대각선의 길이는 서로 같습니다."
    },
];

export default questions;