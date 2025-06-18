// Identical to the iterative version. Just uses recursion.

function fibsRec(numOfElements) {
    if(numOfElements <= 0) {
        return [];
    }
    else if(numOfElements === 1) {
        return [0];
    }
    else if(numOfElements === 2) {
        return [0, 1];
    }
    else {
       // First, it continues to build a list until a base case happens like when it === 2
        const fibs = fibsRec(numOfElements - 1);
       // Then, it adds a new element to the end of the list using the last recently added numbers
       // Ex. if the base case is fulfilled when numOfElements === 2 it returns [0, 1]
       // Then it takes 0 and 1, adds them together, and adds it to the end of the list
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
        return fibs;
    }
}

// Testing
console.log(fibsRec(8));