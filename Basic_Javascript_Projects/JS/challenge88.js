function food() {
    var food= {
        texture: "sticky",
        taste: "sweet", 
        source: "Bees", 
        benefit: "natural", 
        cons: "sugar",
    };
    document.getElementById("Honey").innerHTML=food.benefit;
}