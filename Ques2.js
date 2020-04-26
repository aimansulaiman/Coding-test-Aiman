var equation = "a-b-c-d" 
var dictOfVariableValues = {a:1,b:2,c:3,d:4}


function calculateEquation(equation,dictOfVariableValues) {
    var finalValue = 0
    //changes strings to arr
    arrOfStr = equation.split("") //["a", "-", "b", "-", "c", "-", "d"]
    
    if ( (arrOfStr[0] !== "-")   && (arrOfStr[0] !== "+")) {
        finalValue =positiveStart(arrOfStr,dictOfVariableValues);
        return finalValue
    } else {
        finalValue =signStart(arrOfStr,dictOfVariableValues)
        return finalValue
    }
}

function positiveStart(arrOfStr) {
    var objOne = dictOfVariableValues;
    var totalSum = 0
    for (var i=0;i<arrOfStr.length;i+=2) {
        if (arrOfStr[i-1] === "-") {
            totalSum -= objOne[arrOfStr[i]] 
        } else {
            totalSum +=objOne[arrOfStr[i]] 
        }   
    }
    return totalSum
}

function signStart(arrOfStr) {
    var objOne = dictOfVariableValues;
    var totalSum = 0
    for (var i=1;i<arrOfStr.length;i+=2) {
        if (arrOfStr[i-1] === "-") {
            totalSum -= objOne[arrOfStr[i]] 
        } else {
            totalSum +=objOne[arrOfStr[i]] 
        }   
    }
    return totalSum
}
