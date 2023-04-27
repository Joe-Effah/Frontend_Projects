
let oper = document.querySelector("#james");
let tagbtn = document.querySelector(".bg");
let tag2btn = document.querySelector(".jg");
let tag3btn = document.querySelector(".og");

let num = "Dogsdsds";
console.log(`${num}`);
console.log(oper.value);
tagbtn.addEventListener('click', () => {
    if (oper.value === '') {
        oper.value += tagbtn.textContent
    }
    else {
        oper.value += `,${tagbtn.textContent}`
    }
});

tag2btn.addEventListener('click', () => {
    if (oper.value === '') {
        oper.value += tag2btn.textContent
    }

    else {
        oper.value += `,${tag2btn.textContent}`
    }
});

tag3btn.addEventListener('click', () => {
    if (oper.value === '') {
        oper.value += tag3btn.textContent
    }

    else {
        oper.value += `,${tag3btn.textContent}`
    }
});