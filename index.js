var btn = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1 = 0;
var op2 = null;
var operator = null;

//Code for virtual CACULATOR 
for (var i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        
        if (value === "AC") {
            op1 = 0;
            op2 = null;
            operator = null;
            display.innerHTML = op1;

        }
        else if (value === "+/-") {
            if(operator != null){
                if(op2 > 0){
                    op2 = -Math.abs(op2);
                }else{
                    op2 = Math.abs(op2);
                }
                display.innerHTML = op1 + operator + op2;
            }
           else if(op2 === null && operator === null){
                if(op1 > 0){
                    op1 = -Math.abs(op1);
                }else{
                    op1 = Math.abs(op1);
                }
                display.innerHTML = op1;
            }
        }
        else if (value === "%") {
            if(op2 === null){
                op1 = op1/100;
                display.innerHTML = op1;
            }else{
                op2 = op2/100;
                display.innerHTML = op1 + operator + op2;
            }
        }
        else if (value === "/") {
            operator = "/";
            if(op2 === null){
                display.innerHTML = op1 + operator;
            }else{
                display.innerHTML = op1 + operator +op2;
            }
        }
        else if (value === "*") {
            operator = "*";
            if(op2 === null){
                display.innerHTML = op1 + operator;
            }else{
                display.innerHTML = op1 + operator +op2;
            }
        }
        else if (value === "-") {
            operator = "-";
            if(op2 === null){
                display.innerHTML = op1 + operator;
            }else{
                display.innerHTML = op1 + operator +op2;
            }
        }
        else if (value === "+") {
            operator = "+";
            if(op2 === null){
                display.innerHTML = op1 + operator;
            }else{
                display.innerHTML = op1 + operator +op2;
            }
        }
        else if (value === "=") {

            if (op2 !== null) {
                if(op2 <0 && operator === "-"){
                    display.innerHTML= eval(op1 + operator + (-op2));
                    op1 = eval(op1 + operator + (-op2));
                }else{
                    display.innerHTML = eval(op1 + operator + (op2));
                    op1 = eval(op1 + operator + op2);
                }
                op2 = null;
                operator = null;
            }
        }
        
        else {
        
            if (op1 === 0) {
                op1 = value;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + value;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + value;
                }
                else{op2 = value}
                display.innerHTML = op1 + operator + op2;
            }
        }
    });
}

//Code for input from keyboard 
document.onkeydown = function(event){
    var key_press = event.key;
    // console.log(key_press);

    if (key_press === "Backspace") {
        op1 = 0;
        op2 = null;
        operator = null;
        display.innerHTML = op1;

    }
    else if (key_press === "%") {
        if(op2 === null){
            op1 = op1/100;
            display.innerHTML = op1;
        }else{
            op2 = op2/100;
            display.innerHTML = op1 + operator + op2;
        }
    }
    else if (key_press === "/") {
        operator = "/";
        if(op2 === null){
            display.innerHTML = op1 + operator;
        }else{
            display.innerHTML = op1 + operator +op2;
        }
    }
    else if (key_press === "*") {
        operator = "*";
        if(op2 === null){
            display.innerHTML = op1 + operator;
        }else{
            display.innerHTML = op1 + operator +op2;
        }
    }
    else if (key_press === "-") {
        operator = "-";
        if(op2 === null){
            display.innerHTML = op1 + operator;
        }else{
            display.innerHTML = op1 + operator +op2;
        }
    }
    else if (key_press === "+") {
        operator = "+";
        if(op2 === null){
            display.innerHTML = op1 + operator;
        }else{
            display.innerHTML = op1 + operator +op2;
        }
    }
    else if (key_press === "Enter") {

        if (op2 !== null) {
            if(op2 <0 && operator === "-"){
                display.innerHTML= eval(op1 + operator + (-op2));
                op1 = eval(op1 + operator + (-op2));
            }else{
                display.innerHTML = eval(op1 + operator + (op2));
                op1 = eval(op1 + operator + op2);
            }
            op2 = null;
            operator = null;
        }
    }
    else if (key_press === ".") {
        if(op2 === null && operator === null){
            op1 = op1 + key_press;
            display.innerHTML = op1 ;
        }else if(op1 !== null && operator !== null){
            op2 = op2 + ".";
            display.innerHTML = op1 + operator +op2;
        }
    }
    
    else {
        switch(key_press){
            case "1": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "2": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "3": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "4": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "5": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "6": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "7": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "8": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "9": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 != null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;
            case "0": 
            if (op1 === 0) {
                op1 = key_press;
                display.innerHTML = op1;

            } else if (op1 !== 0 && operator === null){
                op1 = op1 + key_press;
                display.innerHTML = op1;

            }else if (op1 !== 0 && operator !== null) {
                if(op2 !== null){
                    op2 = op2 + key_press;
                }
                else{op2 = key_press}
                display.innerHTML = op1 + operator + op2;
            }
            break;

            default: break;
        }
    }
}
