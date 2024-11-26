/*let numbers=[10, 20, 30, 40, 50]
const [a, b,c,...rest] = numbers;
console.log(a,b,c,rest);
console.log(a,b,c);
const n2 = [...numbers];
console.log(n2);

let x = 10;
let y = 20;
[x,y]= [y,x];
console.log(x,y);
function fact(n){
    if (n===0){
    return 1
    }
    else{
    return n* fact(n-1)
    }
    }
    console.log(fact(4))
    function compteur(){
        let count=0
        return function(){
        count++
        return count
        }
        }
        let next=compteur()
        console.log(next())
        console.log(next())
        console.log(next())
        console.log(next())*/
        const spanHeure = document.getElementById("spHeure");
        const spanMinute = document.getElementById("spMinute");
        const spanSecond = document.getElementById("spSecond");
        
        let initTime = { heure: 10, minute: 23, second: 5 };
        let currentTime = { ...initTime };
        let timer = null;
        
        function incrementer(temps) {
          let time = { ...temps }; 
        
          return function () {
            time.second++;
            if (time.second >= 60) {
              time.second = 0;
              time.minute++;
              if (time.minute >= 60) {
                time.minute = 0;
                time.heure++;
              }
            }
            affiche(time); 
            currentTime = { ...time };
          };
        }
        
        function affiche(time) {
          spanHeure.innerHTML = time.heure.toString().padStart(2, "0"); // Ajoute un '0' si < 10
          spanMinute.innerHTML = time.minute.toString().padStart(2, "0");
          spanSecond.innerHTML = time.second.toString().padStart(2, "0");
        }
        
        function stopTimer() {
          if (timer) {
            clearInterval(timer); 
          }
          timer = null;
        }
        
        function incrementerTimer() {
          stopTimer(); 
          let next = incrementer(currentTime); 
          timer = setInterval(next, 1000); 
        }
        