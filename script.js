const container = document.getElementById('container')
const colors = ['#d43e2e', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 3000
const colorRed = '#d43e2e'
const colorBlue = '#3498db'
const colorGreen = '#2ecc71'
const colorOrange = '#e67e22'
const colorPurple = '#8e44ad'

const purpleBtn = document.getElementById('#purple')
 let chosenColor = colorPurple;






for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    

    square.addEventListener('mousedown', () => setColor(square))

    // square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}






function setColor(element) {
    element.style.background = chosenColor;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}




function getSelectedColor(color){
     
   

    if(color === "purple"){
        chosenColor = colorPurple;
    }
    if(color ==="red"){
        chosenColor = colorRed;
    }
    if(color === "green"){
        chosenColor = colorGreen;
    }
    if(color === "blue"){
        chosenColor = colorBlue;
    }
    if(color === "orange"){
        chosenColor = colorOrange;
    }

  
   
}




const buttonClickedPurple = document.querySelector(".button-colorPurple");
buttonClickedPurple.addEventListener("click", (e) => {
    e.preventDefault();
    getSelectedColor(e.srcElement.id);
})  

const buttonClickedRed = document.querySelector(".button-colorRed");
buttonClickedRed.addEventListener("click", (e) => {
    e.preventDefault();
    getSelectedColor(e.srcElement.id);
})

const buttonClickedGreen = document.querySelector(".button-colorGreen");
buttonClickedGreen.addEventListener("click", (e) => {
    e.preventDefault();
    getSelectedColor(e.srcElement.id);
    
})

const buttonClickedBlue = document.querySelector(".button-colorBlue");
buttonClickedBlue.addEventListener("click", (e) => {
    e.preventDefault();
    getSelectedColor(e.srcElement.id);
})

const buttonClickedOrange = document.querySelector(".button-colorOrange");
buttonClickedOrange.addEventListener("click", (e) => {
    e.preventDefault();
    getSelectedColor(e.srcElement.id);
})



const getColor = (color) => {
    console.log(color);
    // this function will set the color for all of the boxes
}
