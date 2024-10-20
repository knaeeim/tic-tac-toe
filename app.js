const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".rst-btn")
const msgDiv = document.querySelector(".winner-msg")
const msg = document.querySelector("#msg");

let turnO = true; //playerX  and PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations!! ${winner} is the winner`;
    msgDiv.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        const box1 =boxes[pattern[0]].innerText;
        const box2 =boxes[pattern[1]].innerText;
        const box3 =boxes[pattern[2]].innerText;

        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 === box2 && box2 === box3){
                showWinner(box1);
                return;
            }
        }

        const isDraw = [...boxes].every((box) => box.innerText !== "");
        if(isDraw){
            msg.innerText = "It's a Draw!";
            msgDiv.classList.remove("hide");
            disableBoxes();
        }
    }
}


const resetFun = resetBtn.addEventListener('click', ()=>{
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    })
    msgDiv.classList.add("hide");
    turnO = true;
})

const newBtn = document.querySelector(".new-btn");

newBtn.addEventListener('click', ()=>{
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    })
    msgDiv.classList.add("hide");
    turnO = true;
})