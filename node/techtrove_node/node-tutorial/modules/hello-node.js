function HelloNode() {
    console.log('Hello from the HelloNode function!');

console.log('Hello Node.js!');

const array = [1, 2, 3, 4, 5];

console.log('Array:', array);

setTimeout(() => {
    console.log('This message is delayed by 1 second');
}, 1000);

console.log("This message is logged immediately after the setTimeout call");

}

//module.exports = HelloNode;
export default HelloNode;