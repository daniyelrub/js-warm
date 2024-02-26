// Anonymous Function
const printOddNumbers = function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);






// Anonymous Function
const convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

console.log(convertToTitleCaps(["hello", "world"]));

// IIFE
const titleCaps = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["hello", "world"]);

console.log(titleCaps);






/ Anonymous Function
const sumOfNumbers = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// IIFE
const sum = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);

console.log(sum);


// Using anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

// Using IIFE
const primes = (function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(primes);






// Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(num => {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    });
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7]));

// IIFE
const primes = (function(arr) {
    return arr.filter(num => {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    });
})([1, 2, 3, 4, 5, 6, 7]);
console.log(primes);








// Anonymous function
const findMedianSortedArrays = function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    return length % 2 === 0 ? (mergedArray[middle - 1] + mergedArray[middle]) / 2 : mergedArray[middle];
};

// IIFE
const median = (function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    return length % 2 === 0 ? (mergedArray[middle - 1] + mergedArray[middle]) / 2 : mergedArray[middle];
})([1, 3, 5], [2, 4, 6]);
console.log(median);





// Anonymous function
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
};

// IIFE
const uniqueArray = (function(arr) {
    return [...new Set(arr)];
})([1, 2, 2, 3, 3, 4, 5, 5]);
console.log(uniqueArray);




// Anonymous function
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return [...arr.slice(rotations), ...arr.slice(0, rotations)];
};

// IIFE
const rotatedArray = (function(arr, k) {
    const rotations = k % arr.length;
    return [...arr.slice(rotations), ...arr.slice(0, rotations)];
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);



















