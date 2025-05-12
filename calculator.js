function addValue(value){
    let result = document.getElementById("result");
    if (result.textContent != "0")
        result.textContent += value;
    else {
        result.textContent = value;
    }   
        
}