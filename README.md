//# Coding-test-Aiman
//Quest1


var arrInp = [1,1,3,3,5,5,5,999999,999999,999999,20]

function charCounter (arrInp) {
    var finalObj = {}
    for (var i=0;i<arrInp.length;i++){
        if (finalObj[arrInp[i]]){
            finalObj[arrInp[i]] +=1;
        } else {
            finalObj[arrInp[i]] =1
        }
    }
    return finalObj
}
