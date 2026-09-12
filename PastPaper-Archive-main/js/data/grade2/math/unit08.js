const questions = [
    {
        type: "multiple",
        question: "닮음비가 2 : 3인 두 도형의 넓이의 비는?",
        choices: ["2 : 3", "4 : 9", "6 : 9", "8 : 27"],
        answer: 1,
        explanation: "넓이의 비는 닮음비의 제곱이므로 2² : 3² = 4 : 9입니다."
    },
    {
        type: "multiple",
        question: "닮음비가 1 : 4인 두 입체도형의 부피의 비는?",
        choices: ["1 : 4", "1 : 8", "1 : 16", "1 : 64"],
        answer: 3,
        explanation: "부피의 비는 닮음비의 세제곱이므로 1³ : 4³ = 1 : 64입니다."
    },
    {
        type: "multiple",
        question: "실제 거리가 30m이고 축척이 1 : 100이라면 지도에서의 거리는?",
        choices: ["3cm", "30cm", "300cm", "0.3cm"],
        answer: 0,
        explanation: "30m = 3000cm이고 3000 ÷ 100 = 30cm입니다."
    },
    {
        type: "multiple",
        question: "닮은 두 삼각형의 닮음비가 3 : 5일 때 둘레의 비는?",
        choices: ["3 : 5", "6 : 10", "9 : 25", "27 : 125"],
        answer: 0,
        explanation: "닮은 도형의 둘레의 비는 닮음비와 같습니다."
    },
    {
        type: "multiple",
        question: "높이를 직접 잴 수 없는 나무의 높이를 닮음 관계를 이용해 구할 때 사용할 수 있는 것은?",
        choices: [
            "그림자의 길이",
            "주사위의 눈",
            "동전의 앞면과 뒷면",
            "시계의 시간"
        ],
        answer: 0,
        explanation: "같은 시간에 생긴 그림자는 닮음 관계를 이용하여 높이를 구할 수 있습니다."
    },    {
        type: "multiple",
        question: "닮음비가 2 : 3인 두 도형에서 넓이의 비는?",
        choices: ["2 : 3", "4 : 9", "6 : 9", "8 : 27"],
        answer: 1,
        explanation: "넓이의 비는 닮음비의 제곱이므로 4 : 9입니다."
    },
    {
        type: "multiple",
        question: "두 닮은 도형의 닮음비가 1 : 2라면 넓이의 비는?",
        choices: ["1 : 2", "1 : 3", "1 : 4", "2 : 4"],
        answer: 2,
        explanation: "넓이의 비는 1² : 2² = 1 : 4입니다."
    },
    {
        type: "multiple",
        question: "닮음비가 2 : 3인 두 입체도형의 부피의 비는?",
        choices: ["2 : 3", "4 : 9", "6 : 27", "8 : 27"],
        answer: 3,
        explanation: "부피의 비는 닮음비의 세제곱이므로 8 : 27입니다."
    },
    {
        type: "multiple",
        question: "실제 길이가 15m인 물체를 축척 1 : 100으로 나타내면 지도에서의 길이는?",
        choices: ["5cm", "10cm", "15cm", "20cm"],
        answer: 2,
        explanation: "15m = 1500cm이고 1500 ÷ 100 = 15cm입니다."
    },
    {
        type: "multiple",
        question: "닮은 도형에서 대응변의 길이의 비가 3 : 4라면 대응하는 둘레의 비는?",
        choices: ["3 : 4", "6 : 8", "9 : 16", "27 : 64"],
        answer: 0,
        explanation: "둘레의 비는 닮음비와 같습니다."
    },

];

export default questions;