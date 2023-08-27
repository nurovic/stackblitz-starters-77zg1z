class Car {
  constructor({ doors = 4, state = 'brand new', color = 'silver' }) {
    this.doors = doors;
    this.state = state;
    this.color = color;
  }
}

class Truck {
  constructor({ state = 'used', wheelSize = 'large', color = 'brown' }) {
    this.state = state;
    this.wheelSize = wheelSize;
    this.color = color;
  }
}

// Factory Pattern

class VehicleFactory {
  constructor() {
    this.vehicleClass = Car;
  }

  createVehicle(options) {
    const { vehicleType, ...rest } = options;

    switch (vehicleType) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
    }
    return new this.vehicleClass(rest);
  }
}

const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 5,
});

const red = carFactory.createVehicle({
  vehicleType: 'truck',
  color: 'red',
  doors: 4,
});
console.log(car instanceof Car);
console.log(car);
console.log(red);
