//challenge 356: form/ form validation

function validateForm() {
    var x = document.forms["valForm"]["fname"].value;
    var y = document.forms["valForm"]["email"].value;
    var z = document.forms["valForm"]["pnumber"].value;
    if(x== "") {
        alert("Please enter infomation in all fields");
        return false;
    }
    if(y== "") {
        alert("Please enter infomation in all fields");
        return false;
    }
    if(z== "") {
        alert("Please enter infomation in all fields");
        return false;
    }
}

//challenge 357: popup contact form
function openForm() {
    document.getElementById("pop").style.display="block";
}

function closeForm(){
    document.getElementById("pop").style.display="none";
}