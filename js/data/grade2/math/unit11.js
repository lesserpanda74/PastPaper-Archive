const questions = [
    {
        type: "multiple",
        question: "주사위 한 개를 한 번 던질 때 짝수가 나올 확률은?",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answer: 2,
        explanation: "짝수는 2, 4, 6의 3개이므로 3/6 = 1/2입니다."
    },
    {
        type: "multiple",
        question: "동전 한 개를 한 번 던질 때 앞면이 나올 확률은?",
        choices: ["0", "1/4", "1/2", "1"],
        answer: 2,
        explanation: "앞면과 뒷면이 나올 가능성이 같으므로 확률은 1/2입니다."
    },
    {
        type: "multiple",
        question: "주머니에 빨간 공 3개와 파란 공 2개가 들어 있다. 공 하나를 임의로 꺼낼 때 빨간 공이 나올 확률은?",
        choices: ["2/5", "3/5", "1/2", "3/2"],
        answer: 1,
        explanation: "전체 5개 중 빨간 공이 3개이므로 3/5입니다."
    },
    {
        type: "multiple",
        question: "어떤 사건이 반드시 일어날 때 그 사건의 확률은?",
        choices: ["0", "1/4", "1/2", "1"],
        answer: 3,
        explanation: "반드시 일어나는 사건의 확률은 1입니다."
    },
    {
        type: "multiple",
        question: "어떤 사건이 절대로 일어나지 않을 때 그 사건의 확률은?",
        choices: ["0", "1/4", "1/2", "1"],
        answer: 0,
        explanation: "절대로 일어나지 않는 사건의 확률은 0입니다."
    },
    {
        type: "multiple",
        question: "주사위 한 개를 던질 때 3의 배수가 나올 확률은?",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answer: 1,
        explanation: "3, 6의 2개가 가능하므로 2/6 = 1/3입니다."
    },
    {
        type: "multiple",
        question: "주사위 한 개를 던질 때 5보다 큰 수가 나올 확률은?",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answer: 0,
        explanation: "6만 가능하므로 1/6입니다."
    },
    {
        type: "multiple",
        question: "주머니에 흰 공 4개와 검은 공 6개가 있을 때 흰 공이 나올 확률은?",
        choices: ["2/5", "3/5", "4/5", "1/2"],
        answer: 0,
        explanation: "전체 10개 중 흰 공이 4개이므로 4/10 = 2/5입니다."
    },
    {
        type: "multiple",
        question: "동전 한 개를 한 번 던질 때 뒷면이 나올 확률은?",
        choices: ["0", "1/4", "1/2", "1"],
        answer: 2,
        explanation: "앞면과 뒷면의 가능성이 같으므로 1/2입니다."
    },
    {
        type: "multiple",
        question: "어떤 사건이 절대로 일어나지 않을 확률은?",
        choices: ["0", "1/4", "1/2", "1"],
        answer: 0,
        explanation: "절대로 일어나지 않는 사건의 확률은 0입니다."
    },
];

export default questions;