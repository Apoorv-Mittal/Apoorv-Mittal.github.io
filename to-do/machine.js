/**
 * Created by apoorvmittal on 1/12/17.
 */
function make() {
    var c=document.getElementById("thing");
    var node = document.createElement("P")
    var text=document.createTextNode(c.value);
    node.appendChild(text);
    document.getElementById("content").appendChild(node);
}