import fs from 'fs';

function person(name, callbackfn){
    console.log(`Hello ${name}`);
    callbackfn();
}

function address() {
    console.log('Address: 123 Tech Street, Tech City');
}

person("sagar", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err){
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});