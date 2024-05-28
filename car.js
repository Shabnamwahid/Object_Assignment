var car = {
    engine: {
        horsepower: 500,
    },
    getHorsepower: function () { return car.engine.horsepower; },
};
console.log("Car Horsepower:", car.getHorsepower());
