// Write an O(n) algorithm to sort an array of integers, where you know 
// in advance what the lowest and highest values are. You can't use arr.splice(),
// shift() or unshift() for this exercise.

let str = `89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`;

let dataSet = str
  .split(' ')
  .map(int => parseInt(int));
  // Lowest 1
  // Highest 98
  
const bucketSort = (arr, bucketSize = 10) => {

  if ( arr.length <= 0 ) return arr;
  
  const _insertionSort = (arr) => {
    count = count + 1;
    let length = arr.length;

    for ( let i = 1; i < length; i++ ) {
      let tmp = arr[i];
      let j = i - 1;
      for ( j; j >= 0 && arr[j] > tmp; j-- ) {
        arr[j + 1] = arr[j];
      };
      arr[j + 1] = tmp;
    }

    return arr;
  };

  let minVal = arr[0],
      maxVal = arr[0];
  
  arr.forEach(curVal => {
    if ( curVal < minVal ) {
      minVal = curVal;
    } else if ( curVal > maxVal ) {
      maxVal = curVal;
    };
  });

  let bucketCount = Math.floor(
    ( maxVal - minVal ) / bucketSize
  ) + 1;
  
  let allBuckets = new Array(bucketCount);

  for ( let i = 0; i < allBuckets.length; i++ ) {
    allBuckets[i] = [];
  };

  arr.forEach(curVal => {
    allBuckets[
      Math.floor(
        ( curVal - minVal ) / bucketSize
      )
    ].push(curVal);
  });

  arr.length = 0;

  allBuckets.forEach(bucket => {
    _insertionSort(bucket);
    bucket.forEach(int => {
      arr.push(int);
    });
  });

  return arr;
};

console.log(bucketSort(dataSet));