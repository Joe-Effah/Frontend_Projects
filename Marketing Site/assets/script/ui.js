let links = document.querySelector("ul");
let hoverbox = document.querySelector(".hoverbox");

let btn = document.querySelector("button");

// const content = element.innerHTML;
let vop = links.innerHTML.toString()
console.log()
hoverbox.innerHTML = vop;

 btn.addEventListener("click",()=>{
       if(hoverbox.style.display='none'){
        hoverbox.style.display='grid'
 }
 })