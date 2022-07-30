let squares=document.querySelectorAll('.square')

let timesClicked ={'red': 0, 'yellow':0, 'green':0}
squares.forEach((square)=>{
    square.onclick= ()=> {
        timesClicked[square.value]+=1
        square.innerText= timesClicked[square.value]
    }
})

function clearScores(){
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
    squares.forEach((square)=> square.innerText='')
}
const clrBtn =document.getElementById('clearScore')
clrBtn.onclick=()=> clearScores()