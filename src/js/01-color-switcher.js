
const refBody = document.querySelector('body')
let refStartBTN = document.querySelector('button[data-start]');
let refStopBTN = document.querySelector('button[data-stop]');
const eventListenerBody = refBody.addEventListener('click', addEventListenerBTN, true)
let idColorFunction = 0;
refStopBTN.disabled = true;

function addEventListenerBTN(evt){
  if(evt.target.textContent === "Start"){
    refStartBTN= eventListenerBody
    evt.target.disabled = true;
    evt.currentTarget.children[2].disabled = false
    startChange()

  }else if(evt.target.textContent === "Stop"){
    refBody.removeEventListener('click',addEventListenerBTN)
    evt.target.disabled = true;
    evt.currentTarget.children[1].disabled = false
    stopChange(idColorFunction)
  }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function startChange() {
    idColorFunction = setInterval(()=>{
   return refBody.style.backgroundColor = getRandomHexColor()
},1000)
return idColorFunction
}

function stopChange(idColorFunction) {
    return clearInterval(idColorFunction)
}
