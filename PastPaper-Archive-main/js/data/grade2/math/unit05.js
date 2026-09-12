const questions = [
    {
        type: "multiple",
        question: "두 도형의 모양은 같고 크기만 다를 때 두 도형의 관계를 무엇이라 하는가?",
        choices: ["합동", "닮음", "대칭", "회전"],
        answer: 1,
        explanation: "모양은 같고 크기가 다른 도형의 관계를 닮음이라고 합니다."
    },
    {
        type: "multiple",
        question: "닮은 두 삼각형에서 대응변의 길이의 비가 2 : 3일 때 닮음비는?",
        choices: ["1 : 2", "2 : 3", "3 : 2", "4 : 9"],
        answer: 1,
        explanation: "대응변의 길이의 비가 바로 닮음비입니다."
    },
    {
        type: "multiple",
        question: "두 삼각형에서 세 변의 길이의 비가 각각 2 : 3으로 모두 같다면 두 삼각형은?",
        choices: ["항상 합동이다", "닮음이다", "항상 정삼각형이다", "서로 수직이다"],
        answer: 1,
        explanation: "세 쌍의 대응변의 길이의 비가 같으면 두 삼각형은 닮음입니다."
    },
    {
        type: "multiple",
        question: "닮음비가 3 : 5인 두 도형에서 작은 도형의 한 변이 12cm라면 큰 도형의 대응변은?",
        choices: ["15cm", "18cm", "20cm", "24cm"],
        answer: 2,
        explanation: "12 : x = 3 : 5이므로 x = 20입니다."
    },
    {
        type: "multiple",
        question: "닮은 두 삼각형에서 한 쌍의 대응각의 크기는?",
        choices: ["항상 다르다", "항상 같다", "합이 90°이다", "합이 180°이다"],
        answer: 1,
        explanation: "닮은 도형에서는 대응각의 크기가 서로 같습니다."
    },
    {
        type: "multiple",
        question: "닮음비가 2 : 5인 두 도형에서 작은 도형의 대응변이 8cm일 때 큰 도형의 대응변은?",
        choices: ["16cm", "20cm", "24cm", "32cm"],
        answer: 1,
        explanation: "8 : x = 2 : 5이므로 x = 20cm입니다."
    },
    {
        type: "multiple",
        question: "닮은 두 삼각형의 대응변의 길이가 6cm와 9cm라면 닮음비는?",
        choices: ["1 : 2", "2 : 3", "3 : 2", "3 : 4"],
        answer: 1,
        explanation: "6 : 9 = 2 : 3입니다."
    },
    {
        type: "multiple",
        question: "두 삼각형에서 두 쌍의 대응변의 비가 같고 그 끼인각의 크기도 같다면 두 삼각형은?",
        choices: ["합동", "닮음", "평행", "대칭"],
        answer: 1,
        explanation: "두 쌍의 대응변의 비와 그 끼인각이 같으면 닮음입니다."
    },
    {
        type: "multiple",
        question: "닮은 두 도형의 대응각의 크기가 70°라면 다른 도형의 대응각은?",
        choices: ["35°", "70°", "110°", "140°"],
        answer: 1,
        explanation: "닮은 도형의 대응각의 크기는 서로 같습니다."
    },
    {
        type: "multiple",
        question: "한 도형을 확대하여 닮은 도형을 만들 때 모든 대응변의 길이는?",
        choices: ["같은 양만큼 증가한다", "같은 비율로 변한다", "항상 두 배가 된다", "변하지 않는다"],
        answer: 1,
        explanation: "닮은 도형에서는 대응변의 길이가 일정한 비율로 변합니다."
    },
];

export default questions;