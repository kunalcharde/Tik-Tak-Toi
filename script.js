let btnRef =document.querySelectorAll(".button-option");
// console.log(btnRef)
let popupRef =document.querySelector(".popup");
let newgameBtn=document.getElementById("new-game");
let restartBtn =document.getElementById("restart");
let msgRef =document.getElementById("message");

let winningPattern =[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

// player 'x' playes first button

let xTurn = true;
let count =0;

//disable all buttons

const disableButtons=()=>{
    btnRef.forEach(element=> (element.disabled = true));
    
    popupRef.classList.remove("hide");
};

const enableButtons=()=>{
    btnRef.forEach((element)=>{
        element.innerHTML = "";
        element.disabled = false;
    })
    popupRef.classList.add("hide")
};

//the function is executed when the player wins 

const winFuction = (letter)=>{
    disableButtons();
    if(letter== "X"){
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }};

// function for draw
const drawFuction = ()=>{
    disableButtons();
    msgRef.innerHTML = "&#x1F60E <br> it's a Draw";
}

//new Game
newgameBtn.addEventListener("click",()=>{
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click",()=>{
    count = 0;
    enableButtons();
})

const winChecker = ()=>{
    for( let i of winningPattern){
        let [element1, element2,element3]=[
            btnRef[i[0]].innerHTML,
            btnRef[i[1]].innerHTML,
            btnRef[i[2]].innerHTML,
            
        ]
        // check if the elements are filled
        // if 3 empty elements are same and would give win as would
        if( element1 !="" && (element2 !="") && (element3 !="")){
            if( element1==element2 && element2==element3 ){
                winFuction(element1)
            }
        }
    }
};

//Disable x/o on click

btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn =false;
            element.innerHTML = "X";
            element.disabled = true;
        }
        else{
            xTurn =true;;
            element.innerHTML = "O";
            element.disabled = true;
        }
        count +=1;
        if(count==9){
            drawFuction();
        }
        winChecker()
    });
});

window.onload = enableButtons;