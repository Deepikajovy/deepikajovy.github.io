var commentBoxInput=document.getElementById("name");
var submitbutton=document.getElementsByTagName("button")[0];
var existingComment=document.getElementById("firstComment");
var AddComment=function()
{	
var textBox=document.createElement("input");
textBox.type="text";
textBox.innerText=commentBoxInput.value;
existingComment.appendChild(textBox);
commentBox.value="";
}

submitbutton.onclick=AddComment;