const questions = [
    {
        type: "multiple",
        question: "두 평행선 사이에서 두 직선이 한 점에서 만나도록 그었을 때 생기는 대응하는 선분의 길이 관계로 옳은 것은?",
        choices: [
            "항상 같다",
            "일정한 비를 이룬다",
            "항상 합이 10이다",
            "관계를 정할 수 없다"
        ],
        answer: 1,
        explanation: "평행선 사이에서 생기는 대응 선분들은 일정한 비를 이룹니다."
    },
    {
        type: "multiple",
        question: "두 평행선 사이에서 두 선분의 길이의 비가 2 : 3일 때 한 선분이 8cm라면 다른 선분은?",
        choices: ["10cm", "12cm", "14cm", "16cm"],
        answer: 1,
        explanation: "8 : x = 2 : 3이므로 x = 12cm입니다."
    },
    {
        type: "multiple",
        question: "삼각형 ABC에서 DE ∥ BC이고 AD : DB = 1 : 2라면 AE : EC는?",
        choices: ["1 : 1", "1 : 2", "2 : 1", "2 : 3"],
        answer: 1,
        explanation: "DE ∥ BC이므로 평행선에 의한 선분의 비에 따라 AD : DB = AE : EC입니다."
    },
    {
        type: "multiple",
        question: "두 평행선 사이에 있는 선분을 평행하게 나눈 경우 대응하는 선분의 길이 관계는?",
        choices: ["서로 역비례한다", "서로 같은 비를 이룬다", "항상 같다", "항상 정수이다"],
        answer: 1,
        explanation: "평행선 사이의 선분은 일정한 비의 관계를 가집니다."
    },
    {
        type: "multiple",
        question: "삼각형 ABC에서 DE ∥ BC이고 AD = 4cm, DB = 6cm일 때 AD : AB는?",
        choices: ["2 : 3", "2 : 5", "4 : 5", "4 : 10"],
        answer: 1,
        explanation: "AB = AD + DB = 10cm이므로 4 : 10 = 2 : 5입니다."
    },
    {
        type: "multiple",
        question: "삼각형 ABC에서 DE ∥ BC이고 AD : AB = 2 : 5일 때 AE : AC는?",
        choices: ["2 : 3", "2 : 5", "3 : 5", "5 : 2"],
        answer: 1,
        explanation: "DE ∥ BC이므로 작은 삼각형과 큰 삼각형은 닮음이고 AE : AC = AD : AB입니다."
    },
    {
        type: "multiple",
        question: "두 평행선 사이에서 생긴 두 대응선분의 길이가 6cm와 9cm라면 그 비는?",
        choices: ["1 : 2", "2 : 3", "3 : 2", "2 : 5"],
        answer: 1,
        explanation: "6 : 9 = 2 : 3입니다."
    },
    {
        type: "multiple",
        question: "AD = 3cm, DB = 5cm인 삼각형에서 DE ∥ BC일 때 AB의 길이는?",
        choices: ["5cm", "6cm", "8cm", "10cm"],
        answer: 2,
        explanation: "AB = AD + DB = 3 + 5 = 8cm입니다."
    },
    {
        type: "multiple",
        question: "DE ∥ BC인 삼각형 ABC에서 AD = 4cm, AB = 10cm일 때 AD : AB는?",
        choices: ["1 : 2", "2 : 5", "3 : 5", "4 : 5"],
        answer: 1,
        explanation: "4 : 10 = 2 : 5입니다."
    },
    {
        type: "multiple",
        question: "평행선 사이에서 대응하는 선분의 길이의 비가 일정한 이유와 가장 관련 있는 것은?",
        choices: ["닮음", "대칭", "회전", "합동"],
        answer: 0,
        explanation: "평행선에 의해 만들어지는 삼각형들이 닮음 관계를 이루기 때문입니다."
    },
];

export default questions;