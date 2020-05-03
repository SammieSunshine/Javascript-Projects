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

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function() {
    var face_ex= [];
    face_ex[0] = "smiling";
    face_ex[1] = "frowning";
    face_ex[2] = "laughing";
    face_ex[3] = "crying";
    document.getElementById("Array").innerHTML = "The girl is " + face_ex[2] +"."
}

//constant function
function constant_function() {
    const fast_food ={type:"donut", brand:"Dunkins", flavor:"lemon"};
    fast_food.flavor = "blueberry";
    fast_food.price = "$2.00";
    document.getElementById("Constant").innerHTML= "If you'd like a " + fast_food.flavor +" " + fast_food.type + " from " + fast_food.brand + ", you'll need to pay a total of " + fast_food.price + ".";
}