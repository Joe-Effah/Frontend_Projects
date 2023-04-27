

let Album =  document.querySelector(".album");

let picSlot =  document.querySelectorAll(".slot");


let ImageStore = {
    0 : {title : "Optimist",path  :'./imgs/Оптимист_и_пессимист.jpg'},
    1 : {title : "Aliens Parent Picture",path  :'./imgs/326472244_885196782772788_7845279865218369075_n.jpg'},
    2 : {title : "Japanese AI Art",path  :'./imgs/429e1f6f-8898-44b9-8040-28109839a8ef_1536x864.jpg'},
    3 : {title : "Ice Skater",path  :'./imgs/[Downloader.la]-63fa7eef213ee.jpg'},
}



class AlbumComponent {

    Album;
    ImageStore;
    defaultImageIndex = 0;

   constructor(album,ImageSource){
    this.Album = album;
    this.ImageStore = ImageSource ;
   

   }
   AlbumInit(SlotElement){  

    // Default Image Setter BIG IMage 
    if(this.defaultImageIndex > SlotElement.length)
    {
        console.error("Images Index is bigger than the ImageStore Length")
    }
    else{
        this.Album.children[0].src= this.ImageStore[this.defaultImageIndex].path;
    }
    
    // for Responding to the Click Event on the Image 
    SlotElement.forEach((slot)=> slot.addEventListener("click",(e)=>{this.Album.children[0].src = e.target.src}));

    // Setting Slot Images 
    for (let index = 0; index < SlotElement.length; index++) {
        SlotElement[index].src = this.ImageStore[index].path;
        SlotElement[index].alt = this.ImageStore[index].title;
    }
    
   }

}

let Albums = new AlbumComponent(Album,ImageStore);


Albums.AlbumInit(picSlot);