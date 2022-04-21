class Car {
    constructor(){
        this.drive = "running"
        this.stop = "stop"
        this.wheels = 4
    }
}

class Motorbike extends Car {
    constructor(){
        super()
        this.wheels = 2
    }
}
const motor = new Motorbike()
console.log("motor",motor)

class ECar extends Car {
    constructor(){
        super()
        this.recovery = "充电"
    }
}
class NormalCar extends Car {
    constructor(){
        super()
        this.recovery = "加油"
    }
}

const eCar = new ECar()

const normal = new NormalCar()

console.log("eCar:",eCar)
console.log("normal:",normal)
