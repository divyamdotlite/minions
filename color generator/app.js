let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let randomColor = getRandomColor();

    let heading = document.querySelector('h1');
    heading.innerText = randomColor;

    let box = document.querySelector('#box');
    box.style.backgroundColor = randomColor;
})

function getRandomColor() {
    let r = Math.floor(Math.random() * 156) + 100;
    let g = Math.floor(Math.random() * 156) + 100;
    let b = Math.floor(Math.random() * 156) + 100;

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}