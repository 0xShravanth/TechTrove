import EventEmitter from "events";

const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event

eventEmitter.on("greet", (name)=>{
    console.log(`Hello ${name}`);
});

// Emit the 'greet' eventEmitter
eventEmitter.emit("greet", "Sagar");