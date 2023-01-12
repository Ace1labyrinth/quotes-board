const quotes = document.querySelector('.quotes');
const quotedom = document.querySelector('.quotedom');
const author = document.querySelector('.author');
const Quotebtn = document.querySelector('.btn');





const Quotes = [
    {
        id:0,
        quote: 
        "We all need people who will give us feedback. That's how we improve.",
        author: "- Bill Gates"
    },
    {
        id:1,
        quote:
        "Don't worry about being successful but work toward being significant and the success will naturally follow.",
        author: "- Oprah Winfrey"
    },
    {
        id:2,
        quote: 
        "The best and most beautiful things in the worl cannot be seen or even touched - they must be felt with the heart.",
        author: "- Helen Keller"
    },
    {
        id:3,
        quote:
        "With great powers comes great responsibilities.",
        author: "- SpiderMan"
    }
];
//creating the function
const shake = function(){
    const Random = Math.floor(Math.random() * Quotes.length)
    quotes.innerHTML = Quotes[Random].quote;
    author.innerHTML = Quotes[Random].author;
}

//calling the function
Quotebtn.addEventListener('click', shake)

