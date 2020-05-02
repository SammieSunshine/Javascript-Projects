//counting loop 
function count() {
    var digit="";
    var c=1;
    while (c < 21) {
        digit += "<br>" + c;//<br> works same way as in HTML
        c++;
    }
    document.getElementById("loop").innerHTML= digit;
}

//string length property
function length_of_str() {
    var str = "Tomatoes";
    var len = str.length;
    document.getElementById("str_length").innerHTML=len;
}