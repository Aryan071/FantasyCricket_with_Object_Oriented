"use strict";
class Engine {
    start() {
        console.log("Engine started.");
    }
}
class Car {
    engine;
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        console.log("Car started.");
        this.engine.start();
    }
}
const carEngine = new Engine();
const myCar = new Car(carEngine);
myCar.start();
