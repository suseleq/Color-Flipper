//Selectors
const colorButton = document.querySelector('.change-btn');
const colorText = document.querySelector('.color');

// Event Listener
document.addEventListener('DOMContentLoaded', changeColor);
colorButton.addEventListener('click', changeColor);

//Function
function colorMaker(){
    const colorArr = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++){
        newColor += colorArr[Math.floor(Math.random() * 15)];
    }
    return newColor;
}

function changeColor(){
    console.log('siema');
    let color = colorMaker();
    document.body.style.backgroundColor = color;
    colorText.style.color = color;
    colorText.innerHTML = color;
}