/**
 * Created by apoorvmittal on 1/2/17.
 */
//to open a file
document.getElementById("file1").onchange=function () {
    var file= document.getElementById("file1").files[0];
    var filereader=new FileReader();
    filereader.onload=function (e) {
        var text=e.target.result;
        document.getElementById("text_input").value=text;
    };
    filereader.readAsText(file, "UTF-8");
};
//to save a file
function save() {
    var saveText=document.getElementById("text_input").value;
    var textBLOB=new Blob([saveText],{type:"text/plain"});
    var filename=prompt("Enter file name");
    var link=document.createElement("a");
    link.download= filename;
    link.innerHTML="Download File";

    if (window.URL != null){
        link.href = window.URL.createObjectURL(textBLOB);
    }
    else {
        link.href = window.URL.createObjectURL(textBLOB);
        link.onclick=destroy;
        link.style.display="none";
        document.body.appendChild(link);

    }
    link.click();
}
function destroy(e){
    document.body.removeChild(e.target);
}
// //to bolden doesnt work right now
// $('.embolden').click(function(){
//     var highlight = window.getSelection();
//     var span = '<span class="bold">' + highlight + '</span>';
//     var text = $('.text_input').html();
//     $('.text_input').html(text.replace(highlight, span));
// });
