// 1 this print after 1 sec
setTimeout(()=> {
    console.log("Hello Everyone");
}, 1000);

// 2 if we add Infinity then 
setTimeout(()=> {
    console.log("Hello");
}, Infinity);

// op : Hello --> without any delay

// 3 JS setTimeout only accept delay of 2^32
console.log(Math.pow(2,32)/2); // 2147483648
// max time for delay

setTimeout(()=> {
    console.log("hello");
}, 2147483648);