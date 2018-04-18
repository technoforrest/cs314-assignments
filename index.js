'use strict';

function pageScroll(name) {
    let element = document.getElementById(name);
    let elemPos = element.getBoundingClientRect();
    
    window.scrollTo(0,elemPos.top);
    
}
function blueButt(){
document.getElementById("one").style.backgroundColor = "blue";
}
function greenButt(){
    document.getElementById("one").style.backgroundColor = "green";
}
function colorChange(){
    let color = document.getElementById("two").style.backgroundColor;
    if( color !== "pink" ){
        document.getElementById("two").style.backgroundColor = "pink";
        document.getElementById("colorButt").innerHTML="Click for orange!";
    }else{
    document.getElementById("two").style.backgroundColor = "orange";
    document.getElementById("colorButt").innerHTML="Click for pink!";
    }
}
function addToList(){
  
    // Create the list item:
    let item = document.createElement("li");
    let setItem = document.getElementById("textIn").value;

    // Set its contents:
    item.appendChild(document.createTextNode(setItem));
    // Add it to the list:
    document.getElementById("uList").appendChild(item);
}
function removeFromList(name){
    var elem = document.getElementById(name);
    elem.parentNode.removeChild(elem);
}
function highlightItem(num){
    let x=document.getElementsByClassName("colorClass");
    for(let i=0; i <x.length; i++){
        if(i===num){
            x[i].style.backgroundColor = "purple";
        }else
        x[i].style.backgroundColor = "white";
    }
    
}