function MyDictionary(){
    var Character= {
        Species: "Human",
        Home:"Earth",
        Gender: "Male",
        height:"9'0", 
        Age: "Unknown",
        Personality:"Grumpy",
        Occupation: "Guard",
        Phrase: "Fee Fi Fo Fum! I smell the blood of an English man!"
    };
    delete Character.Phrase;
    document.getElementById("Dictionary").innerHTML= Character.Phrase;
}