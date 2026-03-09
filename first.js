let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".reset-btn");
let parah = document.querySelector(".parah");
let newbtn= document.querySelector(".newbtn");
let resetbtn= document.querySelector(".resetbtn");
let msgcontainer= document.querySelector(".msgcontainer");

let turno = true;
let count= 0;
let winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame= ()=>{
    turno = true;
    enableboxes();
    count = 0;
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(box.innerText !=="") return;
        if(turno){
            box.innerText="o";
        }else{
            box.innerText="x";
        }
        turno = !turno;
        
        box.disabled= true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
        
    });

}); 
const gameDraw = () => {
    parah.innerText = `Game Was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner = (Winner)=>{
    parah.innerText=`Congratulations, the winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let post1val = boxes[pattern[0]].innerText;
         let post2val = boxes[pattern[1]].innerText;
          let post3val = boxes[pattern[2]].innerText;
    
    if(post1val!==""&&post2val!==""&&post3val!==""){
        if(post1val==post2val&& post2val==post3val){
            console.log("Winner",post1val);
            showWinner(post1val);
            return true;
        }
    }

}

    
};
newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);
