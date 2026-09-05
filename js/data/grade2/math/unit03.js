const questions = [
    {
        type: "multiple",
        question: "평행사변형 ABCD에서 ∠A = 70°일 때 ∠C의 크기는?",
        choices: ["70°", "90°", "110°", "140°"],
        answer: 0,
        explanation: "평행사변형의 마주 보는 각의 크기는 서로 같습니다."
    },
    {
        type: "multiple",
        question: "평행사변형에서 한 내각이 65°일 때 이웃한 내각의 크기는?",
        choices: ["65°", "90°", "105°", "115°"],
        answer: 3,
        explanation: "이웃한 두 내각의 합은 180°이므로 180 - 65 = 115°입니다."
    },
    {
        type: "multiple",
        question: "평행사변형 ABCD에서 AB = 7cm, BC = 5cm일 때 둘레는?",
        choices: ["12cm", "24cm", "35cm", "49cm"],
        answer: 1,
        explanation: "둘레는 2 × (7 + 5) = 24cm입니다."
    },
    {
        type: "multiple",
        question: "평행사변형의 두 대각선이 만나는 점을 O라 할 때 옳은 것은?",
        choices: [
            "한 대각선만 서로 이등분한다.",
            "두 대각선은 서로 이등분한다.",
            "두 대각선은 항상 수직이다.",
            "두 대각선의 길이는 항상 같다."
        ],
        answer: 1,
        explanation: "평행사변형의 두 대각선은 서로를 이등분합니다."
    },
    {
        type: "multiple",
        question: "평행사변형의 한 대각선은 평행사변형을 몇 개의 합동인 삼각형으로 나누는가?",
        choices: ["2개", "3개", "4개", "6개"],
        answer: 0,
        explanation: "한 대각선은 평행사변형을 서로 합동인 두 삼각형으로 나눕니다."
    },
    {
        type: "multiple",
        question: "평행사변형의 한 내각이 120°일 때 이웃한 내각의 크기는?",
        choices: ["30°", "60°", "90°", "120°"],
        answer: 1,
        explanation: "이웃한 두 내각의 합은 180°이므로 60°입니다."
    },
    {
        type: "multiple",
        question: "평행사변형 ABCD에서 AB = 10cm이면 CD의 길이는?",
        choices: ["5cm", "10cm", "20cm", "40cm"],
        answer: 1,
        explanation: "평행사변형의 마주 보는 변의 길이는 같습니다."
    },
    {
        type: "multiple",
        question: "평행사변형의 두 대각선이 만나는 점 O에 대해 옳은 것은?",
        choices: [
            "OA = OC",
            "OA = OB",
            "OB = OC",
            "OA = BC"
        ],
        answer: 0,
        explanation: "두 대각선은 서로를 이등분하므로 OA = OC입니다."
    },
    {
        type: "multiple",
        question: "평행사변형의 마주 보는 두 각의 크기가 각각 어떻게 되는가?",
        choices: ["항상 같다", "항상 90°이다", "합이 90°이다", "합이 360°이다"],
        answer: 0,
        explanation: "평행사변형에서 마주 보는 각의 크기는 서로 같습니다."
    },
    {
        type: "multiple",
        question: "평행사변형의 한 변이 8cm, 다른 변이 11cm일 때 둘레는?",
        choices: ["19cm", "30cm", "38cm", "44cm"],
        answer: 2,
        explanation: "2 × (8 + 11) = 38cm입니다."
    },
];

export default questions;