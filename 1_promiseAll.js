function fakePromise(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name}`);
        }, delay);
    });
}

const p1 = fakePromise("Ayesha", 1000);
const p2 = fakePromise("Nazila", 2000);
const p3 = fakePromise("Manara", 1500);
const p4 = fakePromise("Kaccha Badam", 1000);

// If we send requests individually, then it will take more time --> 5.5 sec

// So we use multiple promises Promise.all([]);
Promise.all([p1, p2, p3, p4]).then((response) => {
    console.log(response);
});
