// First, let's create the Merge helper function
// Takes in 2 parameters, the left array, and the right array
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }

     // Add remaining elements
        while (i < left.length)
        {
            result.push(left[i]);
            i++;
        }

        while (j < right.length)
        {
            result.push(right[j]);
            j++;
        }

        return result;
}

// Test Merge function
const arr1 = [1,5,7];
const arr2 = [2,8,40];
console.log(`Testing Merge function: ${merge(arr1, arr2)}`);