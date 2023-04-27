

window.onload =()=>{
    displayContent.append(homeContent);
    displayContent.dataset.elementactive= "on";
    homeContent.dataset.state ="on";
};

let displayContent = document.querySelector(".show-content");

let homeButton = document.querySelector(".home");
let homeContent = document.querySelector(".home-content");


homeButton.addEventListener("click",()=> MenuBar.ShowElement(homeContent));


let mapButton = document.querySelector(".map");
let mapContent = document.querySelector(".map-content");



mapButton.addEventListener("click",()=> MenuBar.ShowElement(mapContent));



let settingButton = document.querySelector(".setting");
let settingContent = document.querySelector(".setting-content");


settingButton.addEventListener("click",()=>  MenuBar.ShowElement(settingContent));

let contactButton = document.querySelector(".contact");
let contactContent = document.querySelector(".contact-content");


contactButton.addEventListener("click",()=>MenuBar.ShowElement(contactContent));

let anaButton = document.querySelector(".anlaysis");
let anaContent = document.querySelector(".ana-content");


anaButton.addEventListener("click",()=>MenuBar.ShowElement(anaContent));






 class MenuSelector {

    MainContainer ;
    ElementToInsert;
    
    constructor(MainContainerElement)
    {
        
        this.MainContainer = MainContainerElement;
        
    }

    RemoveElements(ArraysOFfElements){

        ArraysOFfElements.forEach(element => {
            element.remove()
        });
       
    }
    
    ShowElement(ElementToDisplay){
        this.ElementToInsert = ElementToDisplay;
        
        if(this.MainContainer.dataset.elementactive === "off"){
            this.MainContainer.append(this.ElementToInsert);
            this.MainContainer.dataset.elementactive = "on";
            this.ElementToInsert.dataset.state = "on";
        }else if (this.MainContainer.dataset.elementactive === "on"){
            this.MainContainer.children[0].dataset.state="off";
            this.MainContainer.removeChild(this.MainContainer.children[0]);
            this.MainContainer.append(this.ElementToInsert);
            this.MainContainer.dataset.elementactive = "on";
        }else{
           console.log("The Element to Insert is Missing a State");
        }
    }
    
    
}
let MenuBar = new MenuSelector(displayContent);

MenuBar.RemoveElements([homeContent,mapContent,settingContent,contactContent,anaContent]);
