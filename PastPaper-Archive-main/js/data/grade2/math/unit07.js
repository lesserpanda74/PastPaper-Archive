const questions = [
    {
        type: "multiple",
        question: "삼각형의 세 중선이 한 점에서 만나는 점을 무엇이라고 하는가?",
        choices: ["내심", "외심", "무게중심", "수심"],
        answer: 2,
        explanation: "삼각형의 세 중선은 한 점에서 만나며 그 점을 무게중심이라고 합니다."
    },
    {
        type: "multiple",
        question: "삼각형의 무게중심은 각 중선을 어떤 비로 나누는가?",
        choices: ["1 : 1", "1 : 2", "2 : 1", "3 : 1"],
        answer: 2,
        explanation: "무게중심은 중선을 꼭짓점 쪽에서 2 : 1의 비로 나눕니다."
    },
    {
        type: "multiple",
        question: "중선 위에서 꼭짓점에서 무게중심까지의 길이가 8cm라면 무게중심에서 변의 중점까지의 길이는?",
        choices: ["2cm", "4cm", "6cm", "8cm"],
        answer: 1,
        explanation: "두 부분의 비가 2 : 1이므로 8 : x = 2 : 1, 따라서 x = 4cm입니다."
    },
    {
        type: "multiple",
        question: "삼각형에서 한 꼭짓점과 그 대변의 중점을 이은 선분은 무엇인가?",
        choices: ["높이", "각의 이등분선", "중선", "수선"],
        answer: 2,
        explanation: "꼭짓점과 대변의 중점을 이은 선분을 중선이라고 합니다."
    },
    {
        type: "multiple",
        question: "삼각형에는 중선이 모두 몇 개인가?",
        choices: ["1개", "2개", "3개", "4개"],
        answer: 2,
        explanation: "세 꼭짓점에서 각각 대변의 중점으로 그을 수 있으므로 중선은 3개입니다."
    },
    {
        type: "multiple",
        question: "삼각형의 세 중선이 만나는 점은?",
        choices: ["내심", "외심", "무게중심", "수심"],
        answer: 2,
        explanation: "세 중선은 한 점에서 만나며 그 점을 무게중심이라고 합니다."
    },
    {
        type: "multiple",
        question: "무게중심이 중선을 나누는 비는 꼭짓점에서부터?",
        choices: ["1 : 1", "1 : 2", "2 : 1", "3 : 2"],
        answer: 2,
        explanation: "꼭짓점에서 무게중심까지와 무게중심에서 중점까지의 비는 2 : 1입니다."
    },
    {
        type: "multiple",
        question: "꼭짓점에서 무게중심까지의 길이가 12cm일 때 중점까지의 나머지 길이는?",
        choices: ["4cm", "6cm", "8cm", "10cm"],
        answer: 2,
        explanation: "2 : 1의 비이므로 12 : x = 2 : 1, 따라서 x = 6cm입니다."
    },
    {
        type: "multiple",
        question: "삼각형의 한 변의 중점을 찾는 선분은 무엇인가?",
        choices: ["중선", "높이", "수선", "각의 이등분선"],
        answer: 0,
        explanation: "꼭짓점과 대변의 중점을 연결한 선분을 중선이라고 합니다."
    },
    {
        type: "multiple",
        question: "삼각형의 무게중심은 몇 개의 중선에 의해 결정되는가?",
        choices: ["1개", "2개", "3개", "4개"],
        answer: 1,
        explanation: "두 중선의 교점이 정해지면 세 번째 중선도 같은 점을 지나므로 무게중심이 결정됩니다."
    },
];

export default questions;