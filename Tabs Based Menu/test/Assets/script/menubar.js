
 export class MenuSelector {

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