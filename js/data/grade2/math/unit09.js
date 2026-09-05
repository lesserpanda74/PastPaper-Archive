const questions = [

    {
        type: "multiple",

        question:
            "직각삼각형의 두 직각변의 길이가 6cm, 8cm일 때 빗변의 길이는?",

        choices: [
            "9cm",
            "10cm",
            "12cm",
            "14cm"
        ],

        answer: 1,

        explanation:
            "6² + 8² = 100이므로 빗변은 10cm입니다."
    },

    {
        type: "multiple",

        question:
            "직각삼각형의 빗변이 13cm이고 한 직각변이 5cm일 때 다른 직각변은?",

        choices: [
            "8cm",
            "10cm",
            "12cm",
            "14cm"
        ],

        answer: 2,

        explanation:
            "13² - 5² = 144이므로 다른 변은 12cm입니다."
    },

    {
        type: "multiple",

        question:
            "다음 중 직각삼각형의 세 변으로 가능한 것은?",

        choices: [
            "4, 5, 6",
            "5, 6, 7",
            "6, 8, 10",
            "7, 8, 9"
        ],

        answer: 2,

        explanation:
            "6² + 8² = 10²이므로 직각삼각형입니다."
    },

    {
        type: "multiple",

        question:
            "한 변의 길이가 9cm인 정사각형의 대각선의 길이는?",

        choices: [
            "9cm",
            "9√2cm",
            "18cm",
            "81cm"
        ],

        answer: 1,

        explanation:
            "피타고라스 정리에 의해 대각선은 9√2cm입니다."
    },

    {
        type: "multiple",

        question:
            "직각삼각형에서 가장 긴 변은 무엇인가?",

        choices: [
            "높이",
            "밑변",
            "빗변",
            "중선"
        ],

        answer: 2,

        explanation:
            "직각의 마주 보는 변인 빗변이 가장 깁니다."
    },
    {
        type: "multiple",
        question: "직각삼각형의 두 직각변이 5cm, 12cm일 때 빗변은?",
        choices: ["13cm", "14cm", "15cm", "17cm"],
        answer: 0,
        explanation: "5² + 12² = 25 + 144 = 169 = 13²입니다."
    },
    {
        type: "multiple",
        question: "빗변이 10cm이고 한 직각변이 6cm인 직각삼각형의 다른 직각변은?",
        choices: ["6cm", "7cm", "8cm", "9cm"],
        answer: 2,
        explanation: "10² - 6² = 100 - 36 = 64이므로 8cm입니다."
    },
    {
        type: "multiple",
        question: "변의 길이가 8cm, 15cm, 17cm인 삼각형은?",
        choices: ["예각삼각형", "직각삼각형", "둔각삼각형", "정삼각형"],
        answer: 1,
        explanation: "8² + 15² = 17²이므로 직각삼각형입니다."
    },
    {
        type: "multiple",
        question: "직각삼각형에서 가장 긴 변을 무엇이라고 하는가?",
        choices: ["높이", "밑변", "빗변", "중선"],
        answer: 2,
        explanation: "직각의 맞은편에 있는 가장 긴 변을 빗변이라고 합니다."
    },
    {
        type: "multiple",
        question: "한 변의 길이가 6cm인 정사각형의 대각선 길이는?",
        choices: ["6cm", "12cm", "6√2cm", "36cm"],
        answer: 2,
        explanation: "피타고라스 정리를 이용하면 대각선은 6√2cm입니다."
    },

];


export default questions;