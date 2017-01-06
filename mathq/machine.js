/**
 * Created by apoorvmittal on 1/5/17.
 */
var up,
    lo,
    eleup=document.getElementById("upper"),
    elelo=document.getElementById("lower"),
    result,
    digit=3;
var up1,
    lo1,
    eleup1=document.getElementById("upper1"),
    elelo1=document.getElementById("lower1"),
    result1,
    digit1=3;
var up2,
    lo2,
    eleup2=document.getElementById("upper2"),
    elelo2=document.getElementById("lower2"),
    result2,
    digit2=2;
var up3,
    lo3,
    eleup3=document.getElementById("upper3"),
    elelo3=document.getElementById("lower3"),
    result3,
    digit3=2;
window.onload=function () {
    up=gen(digit);
    lo=gen(digit);
    eleup.innerHTML=up;
    elelo.innerHTML=lo;
    result=up+lo;
    eleup.style.fontSize = "100px";
    elelo.style.fontSize = "100px";

    up1=gen(digit1);
    lo1=gen(digit1);
    if(Math.max(up1,lo1)!=up1){
        var c=up1;
        up1=lo1;
        lo1=c;
    }
    eleup1.innerHTML=up1;
    elelo1.innerHTML=lo1;
    result1=up1-lo1;
    eleup1.style.fontSize = "100px";
    elelo1.style.fontSize = "100px";

    up2=gen(digit2);
    lo2=gen(digit2);
    if(Math.max(up2,lo2)!=up2){
        var c=up2;
        up2=lo2;
        lo2=c;
    }
    eleup2.innerHTML=up2;
    elelo2.innerHTML=lo2;
    result2=up2*lo2;
    console.log(result2);
    eleup2.style.fontSize = "100px";
    elelo2.style.fontSize = "100px";

    up3=gen(digit3);
    lo3=gen(digit3);
    if(Math.max(up3,lo3)!=up3){
        var c=up3;
        up3=lo3;
        lo3=c;
    }
    eleup3.innerHTML=up3;
    elelo3.innerHTML=lo3;
    result3=up3/lo3;
    eleup3.style.fontSize = "100px";
    elelo3.style.fontSize = "100px";
}

function gen(ele) {
    return Math.floor(Math.random()*(Math.pow(10,ele)));
}

function checkans() {
    var givans=document.getElementById("ans").value;
    var givans1=document.getElementById("ans1").value;
    var givans2=document.getElementById("ans2").value;
    var givans3=document.getElementById("ans3").value;
    if(givans==result||givans1==result1||givans2==result2||givans3==result3)
        alert("You are right");
    else
        alert("you are wrong");
    location.reload(true);
}