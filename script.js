

const btn = document.querySelector('button')
const box = document.querySelector('#box')
const rgb = document.querySelector('h2')

btn.addEventListener('click', generateColor)

function generateColor(){

    var red = Math.ceil(Math.random()*256)
    var green = Math.ceil(Math.random()*256)
    var blue = Math.ceil(Math.random()*256)

    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    rgb.innerHTML = `rgb(${red}, ${green}, ${blue})`
}
