class Car {
    constructor(){
        this.drive = "drive"
        this.stop = "stop"
        this.wheel = 4
    }
}

class MotorBike extends Car{
    constructor(){
        super()
        this.wheel = 2        
    }
}
const motor = new MotorBike()

console.log("motor:",motor)

class ECar extends Car {
    constructor(){
        super()
        this.recovery = "充电"
    }
}

class GCar extends Car {
    constructor(){
        super()
        this.recovery = "加油"
    }
}

const eCar = new ECar()
const gCar = new GCar()

console.log("eCar:",eCar)
console.log("gCar:",gCar)