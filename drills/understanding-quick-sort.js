// 1. Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// - The pivot could have been 17, but could not have been 14
// - The pivot could have been either 14 or 17
// - Neither 14 nor 17 could have been the pivot
// - The pivot could have been 14, but could not have been 17  

// > * The pivot could have been either 14 or 17  
//    > All values before 14 and 17 are below their respective values.  
//    > The same holds true for values after 14 or 17.  

// 2. Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// - When using the last item on the list as a pivot  
// > * `[3,9,10,12 (pivot), 19,14,17,16,13, (15)]`  
// - When using the first item on the list as a pivot  
// > * [(14),13,10,3,9,12, (pivot), 15,16,19,17]`  

// Quick Sort
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  console.log("Partition: " + array, start, end);
  return j;
};
function swap(array, i, j) {
  console.log("Swap: " + array[i] + " with " + array[j]);
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12 ]));