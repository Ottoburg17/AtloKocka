const doc = {
    sideLengthInput: document.querySelector('#sideLength'),
    diagonalInput: document.querySelector('#diagonal'),
    bodyDiagonalInput: document.querySelector('#bodyDiagonal'),
    calcButton: document.querySelector('#calcButton')

}
const state = {
    sideLength: null,
    diagonal: null
}

window.addEventListener('load', () => {
    init()
})

function init() {
    onClickCalcButton()

}

function onClickCalcButton() {
    if(doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc() 
        })
    }

 
}

function startCalc() {
  let sideLengthStr =  doc.sideLengthInput.value  
 if(checkInput(sideLengthStr)) {
    state.sideLength = Number(sideLengthStr)
    state.diagonal = calcdiagonal(state.sideLength)
    render()
 }else {
    alert('Hiba! Az input nem megfelelő')
 }
 
}

function checkInput(input) {
    let inputStr = String(input)
    if(inputStr.match(/[0-9.]+/)) {
        return true
    }else {
    return false
    }

}
 
function calcdiagonal(sideLength) {
    var a = parseFloat(document.getElementById('sideLength').value);
    var diagonal = a * Math.sqrt(2);
    var bodyDiagonal = a * Math.sqrt(3);
    return diagonal;
}

function render() {
    doc.diagonalInput.value = state.diagonal

}
