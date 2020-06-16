function validateForm() {
    var x = document.forms["valForm"].value;
    if(x== "") {
        alert("Please enter infomation in all fields");
        return false;
    }
}