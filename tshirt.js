/*Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object
should have two properties:
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function
accepts a new color string as an argument. When called, it should:
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g.,
increase by 10% for red, decrease by 5% for blue)*/
var product = {
    name: "levise",
    price: 3000,
    color: "white",
    inventory: {
        stock: 10,
        colorOption: ["red", "black", "green", "yellow"],
        changeColor: function (newColor) {
            product.color = newColor;
            // Adjust the price based on the new color (implement your own logic
            if (newColor == "red") {
                // increase by 10% for red.
                product.price += product.price * 0.1;
            }
            else if (newColor == "black") {
                // increase by 15% if black is selacted 
                product.price += product.price * 0.15;
            }
            else if (newColor == "green") {
                //decrease by 5% if green is selected
                product.price -= product.price * 0.5;
            }
            else if (newColor == "yellow") {
                //decrease by 10% if yellow is selected
                product.price -= product.price * 0.1;
            }
            else {
                // color is not in the list
                console.log("".concat(newColor, " color is not available "));
            }
            console.log("Your product price change to".concat(product.price));
        }
    }
};
console.log(product.inventory.colorOption);
product.inventory.changeColor("white");
