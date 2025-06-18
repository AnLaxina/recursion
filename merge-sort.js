// First, let's create the Merge helper function
// Takes in 2 parameters, the left array, and the right array
// Both arrays need to be sorted for merge to work properly
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

function mergeSort(array) {
    // Base case
    if(array.length <= 1) {
        return array;
    }
    // Rounds mid down in case an odd length for the array is there
    let mid = Math.floor(array.length / 2);
    
    // Take the left half of the array excluding the mid
    let left = mergeSort(array.slice(0, mid));
    // Take the right half of the array including the mid
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}

// Test merge function
const arr1 = [1,5,7];
const arr2 = [2,8,40];
console.log(`Testing merge function: ${merge(arr1, arr2)}\n`);

// Test mergeSort function
const arr3 = [1324323,1,-10,3123,3454,6];
console.log(`Testing mergeSort function: ${mergeSort(arr3)}`);