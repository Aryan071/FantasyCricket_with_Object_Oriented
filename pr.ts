class Engine {
    start() {
      console.log("Engine started.");
    }
  }
  
  class Car {
    constructor(private engine: Engine) {}
  
    start() {
      console.log("Car started.");
      this.engine.start();
    }
  }
  
  const carEngine = new Engine();
  const myCar = new Car(carEngine);
  myCar.start();
  