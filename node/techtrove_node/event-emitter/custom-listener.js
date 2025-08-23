import EventEmitter from "events";

 class customEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello";
    }

    greet(name){
        this.emit("greet", `${this.greeting}, ${name}`);
    }
 }

 const myEmitter = new customEventEmitter();

 myEmitter.on("greet",(message) => 
 {
    console.log("greeting event",message);
 });

 myEmitter.greet("Sagar");
