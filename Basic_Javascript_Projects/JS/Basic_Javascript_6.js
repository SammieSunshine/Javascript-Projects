function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

function ridereq(height, age, token) {
    this.ridereq_height=height;
    this.ridereq_age=age;
    this.ridereq_tokens=token;
}
    var Mary =new ridereq(50, 15, 31);
    var Nick =new ridereq(61, 21, 12);
    var Tom =new ridereq(48, 17, 57);
    
    function rider() {
        document.getElementById("New_and_This").innerHTML= "Tom is " + Tom.ridereq_height + " centimeters tall, " + Tom.ridereq_age + ", and has "+ Tom.ridereq_tokens + " tokens.";
    }


function ride_amt() {
    document.getElementById("Nested_Function").innerHTML= limit();
    function limit() {
        var limit_amt = 4;
        function amt_num() {limit_amt+=5;}
        amt_num();
        return limit_amt;
    }
}