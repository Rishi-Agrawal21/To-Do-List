const inputBox=document.getElementById("inputbox");
const Listcontatiner=document.getElementById("listc");
function Addtask(){
    if(inputBox.value==''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        Listcontatiner.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();

}
Listcontatiner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);
function savedata(){
    localStorage.setItem("data",Listcontatiner.innerHTML);
}
function showtask(){
    Listcontatiner.innerHTML=localStorage.getItem("data");
}
showtask();