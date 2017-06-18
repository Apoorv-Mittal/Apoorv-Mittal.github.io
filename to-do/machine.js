/**
 * Created by apoorvmittal on 1/12/17.
 */
var i;
function make() {
    var c=document.getElementById("thing");
    var node = document.createElement("LI");
    var text=document.createTextNode(c.value);
    node.appendChild(text);
    if(c.value=='')
        alert("Please Enter Some Task");
    else
        document.getElementById("content").appendChild(node);
    c.value="";
    var cl = document.createElement("SPAN");
    var close1=document.createTextNode("\u00D7");
    cl.className = "close";
    cl.appendChild(close1);
    node.appendChild(cl);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
