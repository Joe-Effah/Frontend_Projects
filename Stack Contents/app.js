

let bookmarkButton = document.querySelectorAll("#bookmark-button");

let bookmarkHolder = document.querySelector(".inner-box");

let tempContent = document.querySelector(".temp-content");

tempContent.remove()

console.log(tempContent.children)


bookmarkButton.forEach((element)=>{element.addEventListener("click",()=>{
    
    let dataBlog = {
        blogTitle : element.parentElement.children[0].textContent,
        blogImg :element.parentElement.children[1].src,
        blogDesc : element.parentElement.children[2].textContent,
        blogLink :"blogLink"
    }
    localStorage.setItem(`Art-${Math.round(Math.random()*500+4)}`,JSON.stringify(dataBlog));

    tempContent.children[0].src = dataBlog.blogImg;
    tempContent.children[1].children[0] .textContent  = dataBlog.blogTitle;
    tempContent.children[1].children[1] .textContent  = dataBlog.blogDesc;
    bookmarkHolder.append(tempContent.cloneNode(true))
   
})});

