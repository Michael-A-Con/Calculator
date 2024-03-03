let prevNum = ""; //previous number before operator
let operator = ""; //operator of equation

const display = document.querySelector(".display");

display.innerHTML = "";

document.querySelector('.equals').addEventListener('click', function(e) {
    if (prevNum != "" && display.innerHTML != "" && operator != "") {
        display.innerHTML = evaluate(prevNum, display.innerHTML, operator);
    } else {
        
    }
})

document.querySelector('.clear').addEventListener('click', function(e) {
    display.innerHTML = "";
    prevNum = "";
    operator = "";
})

document.querySelectorAll(".number").forEach(element => {
    element.addEventListener("click", () => {
        let value = element.innerHTML;
        if (element.innerHTML == '.' && display.innerHTML.includes('.')) {}
        else {
            display.innerHTML += value;
        }
        // console.log(display.innerHTML);
    })
});

document.querySelectorAll(".operation").forEach(element => {
    element.addEventListener("click", () => {
        if (display.innerHTML != "" && operator == "") {
            prevNum = display.innerHTML;
            display.innerHTML = "";
            operator = element.innerHTML;
        } else if (display.innerHTML != "" && operator != "" && prevNum != "") {
            console.log("operator");
            display.innerHTML = evaluate(prevNum, display.innerHTML, operator); 
        }
    })
})

function evaluate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "-":
            return num1 - num2;
        case "+":
            return num1 + num2;
        default: 
            return -1;
    }

}