var hello = document.querySelector("h2");
var smallbtn=document.querySelector(".small-size");
var largebtn=document.querySelector(".large-size");
console.log(hello);
console.log()
function small(){
    hello.classList.remove("larger");
hello.classList.add("smaller");

}
function large(){
    hello.classList.remove("smaller")
    hello.classList.add("larger");
    
}
smallbtn.onclick = small;
largebtn.onclick = large;

