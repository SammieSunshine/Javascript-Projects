function notanum(){
    document.getElementById("nan").innerHTML=0/0;
}

function tr(){
    document.getElementById("True").innerHTML= isNaN('Not a number');
}

function fa(){
    document.getElementById("false").innerHTML= isNaN('42');
}