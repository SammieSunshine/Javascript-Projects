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

function upper() {
    var str="the letters in this sentence were originally typed in lowercase.";
    var resp= str.toUpperCase();
    document.getElementById("UCase").innerHTML=resp;
}

function srch() {
    var string="Don't worry, be happy!";
    var d =string.search("happy!");
    document.getElementById("find").innerHTML=d;
}

function strto() {
    var s=525600;
    document.getElementById("tostr").innerHTML=s;
}

function toprec() {
    var t= 52.412164;
    document.getElementById("prec").innerHTML= t.toPrecision(3);
}

function fixed() {
    var fnum= 432.2949;
    var fxd= fnum.toFixed(3);
    document.getElementById("fixd").innerHTML=fxd;
}

function val() {
    var vnum=88;
    var vmun= vnum.valueOf();
    document.getElementById("vlu").innerHTML=vmun;
}