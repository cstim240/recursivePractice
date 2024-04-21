#!/usr/bin/env node

// this mergesort function takes in an array and returns a sorted array, using a recusrive merge sort algorithm
// example: an input of [3,2,1,13,8,5,0,1] will return [0,1,1,2,3,5,8,13]
// example 2: an input of [105, 79, 100, 110] 

// input: array, n for the length of the array
function mergeSort(arr){
    if (arr.length === 1){
        return arr;
    } else {
        
        //split the array into two halves
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        //recursively call mergeSort on the left and right halves
        return merge(mergeSort(left), mergeSort(right));
    }
}

// this merge function takes in two sorted arrays and returns a single sorted array
function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //loop through the left and right arrays and compare the elements, adding the smaller element to the result array
    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++; //increment the left index to move to the next element
        } else {
            result.push(right[rightIndex]);
            rightIndex++; //increment the right index to move to the next element
        }
    }
    //concatenate the remaining elements of the left and right arrays to the result array
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    //left.slice(leftIndex) returns the remaining elements of the left array
    // result.concat(left.slice(leftIndex)) returns the result array with the remaining elements of the left array appended to it
}

let myArray = [3,2,1,13,8,5,0,1];
console.log("Unsorted array:");
printArray(myArray);
let sortedArray = mergeSort(myArray, 0, myArray.length);
console.log("Sorted array:");
printArray(sortedArray);


function printArray(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

let myArray2 = [105, 79, 100, 110];
console.log("Unsorted array:");
printArray(myArray2);
let sortedArray2 = mergeSort(myArray2, 0, myArray2.length);
console.log("Sorted array:");
printArray(sortedArray2);