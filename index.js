let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
const url = 'https://api.quotable.io/random';

btn.addEventListener('click', function(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        quote.innerText = data.content;
        author.innerText = data.author;
    });
});