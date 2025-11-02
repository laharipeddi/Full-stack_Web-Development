const todo=document.getElementById("to-do");
const listContainer=document.getElementById("list-container");
function addtask(){

   if(todo.value ===''){
      alert("Enter a task!!");

    }
    else{

    let li=document.createElement("li");
    li.innerHTML= todo.value;
    listContainer.appendChild(li);
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span);
   }
todo.value ="";
saveData();

}
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
saveData();
}
else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
saveData();}
},false);
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}
function showlist(){
    listContainer.inn=localStorage.getItem("data");
}

showlist();
