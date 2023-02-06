function countdown(n) {
  let func = function() {
    n--;
    if (n === 0) {
      console.log("DONE!");
      clearInterval(timer);
    } else {
      console.log(n);
    }
  }
  let timer = setInterval(func, 1000);
}
  
function randomGame() {
  let count = n = 0;
  let func = function() {
    count++;
    n = Math.random().toFixed(2);
    if (n >= 0.75) {
      clearInterval(timer);
    } 
    else
      console.log(`${count} tries to reach ${n}`);
  }
  let timer = setInterval(func, 1000);
}

countdown(5);
randomGame();
