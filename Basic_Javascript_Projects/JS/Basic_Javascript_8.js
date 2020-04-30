function PPAP() {
    var part_1 = "Ungh! ";
    var part_2 = "Pen ";
    var part_3 = "Pineapple ";
    var part_4 = "Apple ";
    var part_5 = "Pen!"; 
    var ppapen =part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("conc").innerHTML= ppapen;
}

function slcmt() {
    var sentence="Wendy, give me the bat.";
    var section = sentence.slice(18,23);
    document.getElementById("slice").innerHTML=section;
}