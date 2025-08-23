

function delayFn(time) {
    return new Promise((resolve)=> setTimeout(resolve, time));
}

console.log("promises started");
delayFn(200).then(() => console.log("200 ms delay completed"));
console.log("promises ended");

function divideFn(num1, num2) {
    return new Promise((resolve ,  reject) => {
        if (num2 === 0 ) {
            reject(new Error("Division by zero is not allowed"));
        }else {
            resolve(num1 / num2);
        }
    })
}

divideFn(10, 2)
    .then((result)=> console.log(`Result: ${result}`))
    .catch((error) => console.error(`Error: ${error.message}`));    