// Uses iteration over the usual recursion

// Takes a number and returns an array containing that many numbers from the Fib sequence.
// Ex. numOfElements = 8 would return the array [0, 1, 1, 2, 3, 5, 8, 13]
function fibs(numOfElements) {
    if(numOfElements <= 0) {
        return [0];
    }
    else if (numOfElements === 1) {
        return [1];
    }
    else {
        const arrayToReturn = [0, 1];
        for(let i = 2; i < numOfElements; i++) {
            // Start on the first element of the array (so initially this is at index 0)
            let left = arrayToReturn[i - 2];
            let right = arrayToReturn[i - 1];
            const sum = left + right;
            arrayToReturn.push(sum);
        }
        return arrayToReturn;
    }
}

// Testing
console.log(fibs(8));
