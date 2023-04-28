window.onload=()=>menu.ShowElement(tab1);

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
        }
        else if (this.MainContainer.dataset.elementactive === "on"){

            this.MainContainer.children[0].dataset.state="off";
            this.MainContainer.removeChild(this.MainContainer.children[0]);
            this.MainContainer.append(this.ElementToInsert);
            this.MainContainer.dataset.elementactive = "on";
        }
        else{
           console.log("The Element to Insert is Missing a State");
        }
    }
    
    
}

//Text Contents
let MainContent = document.querySelector(".mainContainer");

console.log(MainContent.children);
let tab1 = document.querySelector(".tab1");
let tab2 = document.querySelector(".tab2");
let tab3 = document.querySelector(".tab3");
let tab4 = document.querySelector(".tab4");

// buttons
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

let menu = new MenuSelector(MainContent);

menu.RemoveElements([tab1,tab2,tab3,tab4]);

btn1.onclick =()=> menu.ShowElement(tab1);
btn2.onclick =()=> menu.ShowElement(tab2);
btn3.onclick =()=> menu.ShowElement(tab3);
btn4.onclick =()=> menu.ShowElement(tab4);