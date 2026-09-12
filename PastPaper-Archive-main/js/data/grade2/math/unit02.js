const questions = [
    {
        type: "multiple",
        question: "삼각형 ABC에서 AB = AC이고 ∠A = 40°일 때 ∠B의 크기는?",
        choices: ["40°", "60°", "70°", "80°"],
        answer: 2,
        explanation: "이등변삼각형의 두 밑각은 같으므로 (180 - 40) ÷ 2 = 70°입니다."
    },
    {
        type: "multiple",
        question: "삼각형의 한 외각의 크기가 120°이고, 그 외각과 이웃하지 않는 두 내각 중 하나가 50°일 때 나머지 내각은?",
        choices: ["50°", "60°", "70°", "80°"],
        answer: 2,
        explanation: "삼각형의 외각은 나머지 두 내각의 합과 같으므로 120 - 50 = 70°입니다."
    },
    {
        type: "multiple",
        question: "직각삼각형의 두 예각 중 하나가 35°일 때 다른 예각은?",
        choices: ["45°", "55°", "65°", "75°"],
        answer: 1,
        explanation: "두 예각의 합은 90°이므로 90 - 35 = 55°입니다."
    },
    {
        type: "multiple",
        question: "삼각형 ABC에서 AB > AC일 때, 두 변에 마주 보는 각의 크기를 비교하면?",
        choices: ["∠B > ∠C", "∠B < ∠C", "∠B = ∠C", "항상 알 수 없다"],
        answer: 0,
        explanation: "길이가 긴 변에 마주 보는 각이 더 큽니다."
    },
    {
        type: "multiple",
        question: "삼각형에서 가장 긴 변에 마주 보는 각은?",
        choices: ["가장 작은 각", "가장 큰 각", "직각", "항상 60°"],
        answer: 1,
        explanation: "삼각형에서 가장 긴 변에 마주 보는 각이 가장 큽니다."
    },
    {
        type: "multiple",
        question: "삼각형 ABC에서 ∠A = 90°, ∠B = 35°일 때 ∠C는?",
        choices: ["45°", "55°", "65°", "75°"],
        answer: 1,
        explanation: "180 - 90 - 35 = 55°입니다."
    },
    {
        type: "multiple",
        question: "삼각형의 한 외각의 크기가 130°이고 한 내각이 60°일 때 다른 내각은?",
        choices: ["50°", "60°", "70°", "80°"],
        answer: 2,
        explanation: "외각은 두 원격 내각의 합이므로 130 - 60 = 70°입니다."
    },
    {
        type: "multiple",
        question: "삼각형에서 가장 짧은 변에 마주 보는 각은?",
        choices: ["가장 큰 각", "가장 작은 각", "직각", "항상 45°"],
        answer: 1,
        explanation: "삼각형에서는 가장 짧은 변에 마주 보는 각이 가장 작습니다."
    },
    {
        type: "multiple",
        question: "직각삼각형에서 한 예각이 48°라면 다른 예각은?",
        choices: ["32°", "42°", "52°", "62°"],
        answer: 1,
        explanation: "두 예각의 합은 90°이므로 90 - 48 = 42°입니다."
    },
    {
        type: "multiple",
        question: "삼각형 ABC에서 AB = BC라면 서로 같은 두 각은?",
        choices: ["∠A와 ∠B", "∠B와 ∠C", "∠A와 ∠C", "세 각 모두"],
        answer: 0,
        explanation: "AB와 BC가 같으므로 각각에 마주 보는 ∠C와 ∠A가 같습니다."
    },
];

export default questions;