queue = [];
op = "";
restart = false;

function addValue(value){
    let result = document.getElementById("result");
    console.log(op);
    if (!isNaN(value)){
        if (result.textContent != "0"){
            if (restart){
                result.textContent = value;
                restart = false;
            }
            else
                result.textContent += value;
        }
            
        else {
            result.textContent = value;
        }
    }

    else if (value === "="){
        if (queue.length !== 0){
            queue.push(Number(result.textContent));
            queue.push(op);
            result.textContent = String(calculate());
            restart = true;
            op = "";
        }        
    }

    else if (value === "C") {
        result.textContent = "0";
        queue = [];
        op = "";
    }

    else {
        if (op === ""){
            op = value;
        }
        queue.push(Number(result.textContent))
        console.log("size", queue.length);
        console.log(queue);
        if (queue.length == 2){
            queue.push(op);
            result.textContent = calculate();
            queue = [Number(result.textContent)];
            op = value;
            restart = true;
        }
        else {
            result.textContent = "";
        }
    }
}

function calculate(){
    let op = queue.pop();
    let b = queue.pop();
    let a = queue.pop();

    console.log(a, b, op);

    switch (op) {
        case "+": 
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
    }
}