/**
 * Created by apoorvmittal on 1/3/17.
 */
var filled=new  Array(),
    winningcombo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    turn=1,
    cxt,
    content=new Array();


window.onload=function () {
    alert("PLayer 1: X and Player 2: O")
    for(var i=0;i<9;i++){
        filled[i]=false;
        content[i]='';
    }
}

function canclk(num) {
    var c="c"+num;
    var getit=document.getElementById(c);
    cxt = getit.getContext("2d");

    if(filled[num]==false){
        if(turn%2==0){
            // cxt.beginPath();
            // cxt.moveTo(10,10);
            // cxt.lineTo(40,40);
            // cxt.moveTo(40,10);
            // cxt.lineTo(10,40);
            // cxt.stroke();
            // cxt.closePath();
            cxt.font="600 100px Arial";
            cxt.fillText("X",100,100);
            content[num]='X';
        }
        else{
            // cxt.beginPath();
            // cxt.arc(25,25,20,0,Math.PI*2,true);
            // cxt.stroke();
            // cxt.closePath();
            cxt.font="600 100px Arial";
            cxt.fillText("O",100,100);
            content[num]='O';
        }
        turn++;
        filled[num]=true;
        checkwinner(content[num]);
        if (turn==10){
            alert("The game is a draw");
            location.reload(true);
        }
    }
    else {
        alert("the box is already filled")
    }
}

function checkwinner(symbol) {
    for(var a = 0; a < winningcombo.length; a++) {
        if (content[winningcombo[a][0]] == symbol && content[winningcombo[a][1]] == symbol && content[winningcombo[a][2]] == symbol) {
            alert(symbol + " WON!");
            playagain();

        }
    }
}
function playagain() {
    var y=confirm("New Game?")
    if (y==true)
        location.reload(true);
    else{
        alert("Thank You for playing");
        window.history.back();
    }
}
