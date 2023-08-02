const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    
  }
 
 

  console.log(getRandomHexColor());
  let switcherId = null;

  btnStart.addEventListener("click", ()=>{
    switcherId = setInterval(()=> body.style.backgroundColor = getRandomHexColor(), 1000)
    btnStart.disabled = true;
    btnStop.disabled = false
  })

  btnStop.addEventListener("click", ()=> 
  {clearInterval(switcherId)
    btnStart.disabled = false;
    btnStop.disabled = true})