class FlightlessBirds {

  constructor(props) {
    this.name = props.name
    this.height = props.height
    this.isExtinct = props.isExtinct
    this.flightless = true
    this.runningSpeed = props.runningSpeed
  }

  toString () {
    console.log(
      `The ${this.name} is ${this.height} tall. It is ${this.flightless} that it cannot fly. It is ${this.isExtinct} that it is Extinct`
    )
  }

}

let makeOst = {
  name: "Ostrich",
  height: "9ft",
  isExtinct: false,
  runningSpeed: "100mph"
}

const ostrich = new FlightlessBirds(makeOst);
console.log(ostrich);

ostrich.toString();

let makeSomaliOst = {
  name: "Somali Ostrich",
  height: "7ft",
  isExtinct: false,
  runningSpeed: "83mph"
}

let makeEmu = {
  name: "Emu",
  height: "3ft",
  isExtinct: false,
  runningSpeed: "35mph"
}

const somaliOst = new FlightlessBirds(makeSomaliOst);
somaliOst.toString();

const emu = new FlightlessBirds(makeEmu);
emu.toString();