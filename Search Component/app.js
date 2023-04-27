
let DataStore = document.querySelectorAll("article");
let searchBar = document.querySelector("#search");
let searchButton = document.querySelector("button");

// console.log(DataStore.forEach((e)=>{console.log(e.children[0])})); 
searchBar.addEventListener("input",()=> getTitles(searchBar.value,DataStore));

let gui = "ASDSADSAFDA";


console.log();

// console.log()
function getTitles(titleToSearch,DataStore){

    DataStore.forEach((element)=>{
        if (element.children[0].textContent.includes(titleToSearch)) {
            console.log(element);
        }else{
            console.log("Sorry Nothing Found");
        }
        
    })
    
    

    
}