const questions = [

    {
        type: "multiple",

        question:
            "이등변삼각형 ABC에서 AB = AC이고 ∠B = 52°일 때 ∠C의 크기는?",

        choices: [
            "38°",
            "52°",
            "76°",
            "104°"
        ],

        answer: 1,

        explanation:
            "이등변삼각형의 밑각은 서로 같습니다."
    },


    {
        type: "multiple",

        question:
            "삼각형의 두 내각이 47°, 68°일 때 나머지 한 내각의 크기는?",

        choices: [
            "55°",
            "65°",
            "75°",
            "85°"
        ],

        answer: 1,

        explanation:
            "180 - 47 - 68 = 65°입니다."
    },


    {
        type: "multiple",

        question:
            "정삼각형의 한 내각의 크기는?",

        choices: [
            "45°",
            "60°",
            "90°",
            "120°"
        ],

        answer: 1,

        explanation:
            "삼각형의 세 각의 합은 180°이고 정삼각형의 세 각은 같습니다."
    },


    {
        type: "multiple",

        question:
            "이등변삼각형의 꼭지각이 46°일 때 한 밑각의 크기는?",

        choices: [
            "46°",
            "57°",
            "67°",
            "74°"
        ],

        answer: 2,

        explanation:
            "두 밑각의 합은 134°이므로 한 밑각은 67°입니다."
    },


    {
        type: "multiple",

        question:
            "삼각형에서 두 변의 길이가 같다면 그 두 변에 마주 보는 두 각은?",

        choices: [
            "서로 같다",
            "합이 90°이다",
            "항상 두 배이다",
            "서로 보각이다"
        ],

        answer: 0,

        explanation:
            "같은 길이의 두 변에 마주 보는 두 각은 서로 같습니다."
    },
    {
        type: "multiple",
        question: "이등변삼각형에서 두 밑각의 크기가 각각 72°일 때 꼭지각의 크기는?",
        choices: ["36°", "40°", "54°", "72°"],
        answer: 0,
        explanation: "180 - 72 - 72 = 36°입니다."
    },
    
    
    {
        type: "multiple",
        question: "삼각형의 세 내각의 크기가 50°, 60°, x°일 때 x의 값은?",
        choices: ["60°", "70°", "80°", "90°"],
        answer: 1,
        explanation: "세 내각의 합은 180°이므로 x = 180 - 50 - 60 = 70°입니다."
    },
    
    
    {
        type: "multiple",
        question: "정삼각형의 한 변의 길이가 9cm일 때 둘레는?",
        choices: ["18cm", "27cm", "36cm", "81cm"],
        answer: 1,
        explanation: "정삼각형은 세 변의 길이가 같으므로 9 × 3 = 27cm입니다."
    },
    
    
    {
        type: "multiple",
        question: "이등변삼각형의 꼭지각이 80°일 때 한 밑각의 크기는?",
        choices: ["40°", "50°", "60°", "80°"],
        answer: 1,
        explanation: "(180 - 80) ÷ 2 = 50°입니다."
    },
    
    
    {
        type: "multiple",
        question: "삼각형에서 두 각의 크기가 같다면 마주 보는 두 변의 관계는?",
        choices: ["길이가 같다", "한 변이 두 배이다", "서로 평행하다", "항상 수직이다"],
        answer: 0,
        explanation: "같은 크기의 각에 마주 보는 변의 길이는 서로 같습니다."
    },
];


export default questions;