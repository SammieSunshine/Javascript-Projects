function student(firstname,lastname, age,grade,status) {
    this.firstname =firstname;
    this.lastname = lastname;
    this.age = age;
    this.grade=grade;
    this.status=status;
}

var student1= new student("Meg", "Smith", 15, "Freshman", active);
var student2= new student("Allen", "Strange", 15, "Freshman", inactive);
var student3= new student("Mike", "Ekim", 17, "Senior", eval);

function school() {
    document.getElementById("finals").innerHTML= student3.firstname + student3.lastname + " is a " + student3.grade + ". His status is listed as: under " + student3.status;
}