window.addEventListener("load",initEvents)

function initEvents(){
    loadButton();
}

winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function loadButton(){
    table = document.querySelector("#gameBoard");
    for(let i = 0;i<3;i++){
        tr = table.insertRow();
        for(let j =0 ; j<3;j++){
            td = tr.insertCell();
            btn = document.createElement("button");
            btn.className = "btn"
            btn.addEventListener("click",userMove);
            td.appendChild(btn);

        }
    }
}

function userMove(){
    this.innerHtml = "X"; 
    // user input
    this.setAttribute("disabled",true);
    // no updation is possible

    checkWinner();
    cpuMove();
}

function checkWinner(){
    btns = document.querySelectorAll(".btn");
    for(let combo of winningCombinations){
        [a,b,c] = combo;
        if(btns[a].innerHtml && 
            btns[a].innerHtml === btns[b].innerHtml 
            && btns[a].innerHtml === btns[c].innerHtml){
            alert(btns[a].innerHtml + " has won the game");
        }
    }

}