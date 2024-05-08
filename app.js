let operation = document.querySelector(".operation");
let buttons = document.querySelectorAll(".btn");

// just tired of css 
for(let btn of buttons){
    if(btn.innerText >= 0 || btn.innerText <= 9 || btn.innerText == "."){
        btn.style.backgroundColor = "#2b2b2b";
    } else if(btn.innerText == "AC"){
        btn.style.backgroundColor = "red";
    }
     else if(btn.innerText == "="){
        btn.style.backgroundColor = "green";
    }
    else if(btn.innerText == "back"){
        btn.style.backgroundColor = "blue";
    }
}
// to access the contents of buttons when they are clicked 
for (let btn of buttons) {
    btn.addEventListener("click", () => {
        let content = btn.innerText;
        passContent(content);
    })
}

// after the clicking the any it will be passed to this function and then according to their innerHtml the value will be provided to their next function
const passContent = (content) => {
    showOperation(content); 

    switch(content){
        case "AC" : 
            clearOperation();
            break;
        
        case "back":
            backbtn();
            break;

        case "=":
            calculation();
            break;
    }
    
}

// to display and clear the operation 
const showOperation = (content) =>{
    operation.innerText += content;
}

const clearOperation = () => {
    operation.innerText = null;
}

// the back btn
const backbtn = () => {
    operation.innerText = operation.innerText.slice(0, -5);
}

// Calculation
const calculation = () => {
    try{
        let result = eval(operation.innerText.slice(0, -1));
        operation.innerText = result;
    } catch {
        operation.innerText = "ERROR";
    }
}
