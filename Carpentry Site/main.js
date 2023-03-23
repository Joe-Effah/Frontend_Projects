
// Carosel Function 
function Carosel(imgCollection,imgHold,speed){
    let i =0;
    setInterval(()=>{
    if(i > imgCollection.length-1){
        i = 0
    }else{
        imgHold.src = `img/${imgCollection[i]}`;
    i++
    
    }
    console.log(i)
    },speed)
    
}
// Img Path Collection 
let imgCollection = ["adam-patterson-v13x0qU4afA-unsplash.jpg","bakhrom-tursunov-4qidjSH-9x0-unsplash.jpg","dominik-scythe-3cIvvzjE6Lk-unsplash.jpg","frank-garza-6uMFX3__AWw-unsplash.jpg","jimmy-nilsson-masth-mUEVPuwvNvE-unsplash.jpg","manu-schwendener-BORrEm_SYUY-unsplash.jpg","photo-to-canvas-com-NLfp9mXl9ho-unsplash.jpg"];



//Aotomatic Date
let year = document.querySelector("#year");
let date = new Date();
year.innerText = date.getFullYear().toString();



//Gallery Section
if(document.title === "Gallery"){
    let flipImage1 = document.querySelector(".fl1");
    let flipImage2 = document.querySelector(".fl2");
    Carosel(imgCollection,flipImage1,3000)
}

    


// Home Section 
if(document.title === "Home"){
    let home= document.querySelector("#Cimg");
Carosel(imgCollection,home,2000);

}