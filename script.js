let clickCount = 0;
let timerCount = 5;
let timerStart = false;
let myTimer;

function handleClick() {
    if(timerCount>0) {
      clickCount++;
      document.getElementById("score").innerText=clickCount;
    }
    if(!timerStart) {
      myTimer = setInterval(()=>{
        timerCount--;
        document.getElementById("countdown").innerText=timerCount;
        if(timerCount<=0) {
          clearInterval(myTimer);
          let replayButton = document.getElementById("replay");
          replayButton.style.display = "block";
        }
      }, 1000)
      timerStart = true;
    }
}

function replayClick() {
  let replayButton = document.getElementById("replay");
  replayButton.style.display = "none";
  clickCount=0;
  document.getElementById("score").innerText=clickCount;
  timerCount=5;
  document.getElementById("countdown").innerText=timerCount;
  timerStart=false;
}
