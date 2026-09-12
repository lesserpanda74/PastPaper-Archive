const questions = [
    {
        type: "multiple",
        question: "상의 3벌과 바지 2벌이 있을 때 상의와 바지를 하나씩 골라 입는 방법은 모두 몇 가지인가?",
        choices: ["5가지", "6가지", "8가지", "12가지"],
        answer: 1,
        explanation: "3 × 2 = 6가지입니다."
    },
    {
        type: "multiple",
        question: "1, 2, 3, 4의 네 숫자 중 서로 다른 두 숫자를 사용하여 두 자리 자연수를 만드는 방법은?",
        choices: ["6가지", "8가지", "12가지", "16가지"],
        answer: 2,
        explanation: "십의 자리는 4가지, 일의 자리는 3가지이므로 4 × 3 = 12가지입니다."
    },
    {
        type: "multiple",
        question: "동전 1개와 주사위 1개를 동시에 던질 때 가능한 결과의 수는?",
        choices: ["6가지", "8가지", "10가지", "12가지"],
        answer: 3,
        explanation: "동전 2가지 × 주사위 6가지 = 12가지입니다."
    },
    {
        type: "multiple",
        question: "서로 다른 3개의 물건을 일렬로 배열하는 방법은 몇 가지인가?",
        choices: ["3가지", "6가지", "9가지", "12가지"],
        answer: 1,
        explanation: "3 × 2 × 1 = 6가지입니다."
    },
    {
        type: "multiple",
        question: "A, B, C, D, E 중 2명을 대표로 뽑는 방법은 몇 가지인가?",
        choices: ["5가지", "8가지", "10가지", "20가지"],
        answer: 2,
        explanation: "두 명의 순서는 중요하지 않으므로 5 × 4 ÷ 2 = 10가지입니다."
    },
    {
        type: "multiple",
        question: "3개의 셔츠와 4개의 바지가 있을 때 하나씩 골라 입는 방법은?",
        choices: ["7가지", "12가지", "16가지", "24가지"],
        answer: 1,
        explanation: "3 × 4 = 12가지입니다."
    },
    {
        type: "multiple",
        question: "1, 2, 3 중 서로 다른 두 숫자를 이용해 두 자리 수를 만드는 방법은?",
        choices: ["3가지", "6가지", "9가지", "12가지"],
        answer: 1,
        explanation: "첫 자리 3가지 × 둘째 자리 2가지 = 6가지입니다."
    },
    {
        type: "multiple",
        question: "동전을 두 번 던질 때 나올 수 있는 모든 결과의 수는?",
        choices: ["2가지", "3가지", "4가지", "6가지"],
        answer: 2,
        explanation: "앞앞, 앞뒤, 뒤앞, 뒤뒤의 4가지입니다."
    },
    {
        type: "multiple",
        question: "서로 다른 4권의 책을 일렬로 배열하는 방법은 몇 가지인가?",
        choices: ["8가지", "12가지", "16가지", "24가지"],
        answer: 3,
        explanation: "4 × 3 × 2 × 1 = 24가지입니다."
    },
    {
        type: "multiple",
        question: "5명 중 회장 1명과 부회장 1명을 각각 뽑는 방법은?",
        choices: ["5가지", "10가지", "20가지", "25가지"],
        answer: 2,
        explanation: "회장 5가지 × 부회장 4가지 = 20가지입니다."
    },
];

export default questions;