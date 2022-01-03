const container = document.getElementById('container')
const colors = ['#d43e2e', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 1200
const colorRed = '#d43e2e'
const colorBlue = '#3498db'
const colorGreen = '#2ecc71'
const colorOrange = '#e67e22'
const colorPurple = '#8e44ad'

const purpleBtn = document.getElementById('purple')





for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))



    container.appendChild(square)
}

function onButtonClick(){
    const color = selectedPurple()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function setColor(element) {
    const color = getSelectedColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

function getSelectedColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

function selectPurple(){
    const color = colorPurple;
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  
}