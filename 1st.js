
var FirstDiv = document.createElement("div")
var containerDiv = document.getElementById("container")
containerDiv.appendChild(FirstDiv)
FirstDiv.style.cssText = "display:flex;width:100%;gap:5px;"
var inp = document.createElement("input")
inp.setAttribute("class","input")
inp.placeholder = "Add Your Task Here"
var AddButton = document.createElement("button")
AddButton.innerText = "Add"
AddButton.addEventListener("click",Add)
FirstDiv.appendChild(inp)
FirstDiv.appendChild(AddButton)

function Add() {
var indexDiv = document.createElement("div");
    indexDiv.style.cssText = "display:flex;padding-top:10px;gap:5px"
var task = document.createElement("span");
    task.innerText = inp.value;
var Done = document.createElement("button");
    Done.innerText = "Done";
    Done.addEventListener("click",function (){
        if (indexDiv.style.backgroundColor ===  "burlywood" ){
            indexDiv.style.backgroundColor = "green"
            indexDiv.style.borderRadius = "30px"
            indexDiv.style.padding = "10px"
            task.style.color="red"
        }else{
            indexDiv.style.backgroundColor = "burlywood"
            task.style.color="black"  
            console.log("red")
        }
    })
var deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.addEventListener("click",function(){indexDiv.remove()})
indexDiv.appendChild(task);
indexDiv.appendChild(Done);
indexDiv.appendChild(deletebutton);
containerDiv.appendChild(indexDiv)
 }