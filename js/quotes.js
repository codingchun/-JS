const quotes = [
    {
        quote: "행복은 우연이 아니라 선택이다.",
        author: "짐 론",
    },
    {
        quote: "꿈이 있으면 잡아야 하고 절대 놓지 말아야 한다.",
        author: "캐롤 버넷",
    },
    {
        quote: "자신에게 하기 싫은 일을 남에게도 하지 말라.",
        author: "공자",
    },
    {
        quote: "행복한 사람들은 행동을 계획하지만 결과는 계획하지 않는다.",
        author: "데니스 웨이틀리",
    },
    {
        quote: "성공은 매일 반복되는 작은 노력의 합이다.",
        author: "로버트 콜리어",
    },
    {
        quote: "성장은 우리 자신의 약점을 받아들이기 시작할 때 시작됩니다.",
        author: "장 바니에",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author: "생떽쥐베리",
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리.",
        author: "셸리",
    },
    {
        quote: "가난은 가난하다고 느끼는 곳에 존재한다.",
        author: "에머슨"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

