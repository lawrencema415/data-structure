// iterative
binarySearch = (arr,x) => {

  let low = 0;
  let high = arr.length - 1;


  while(low <= high) {
    let mid = Math.floor( ( (high + low ) / 2 ) );
    if(arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}


// recursive
// binarySearch = (arr,x,low,high) => {
//
//   if(low > high) {
//     return -1;
//   }
//
//   let mid = Math.floor((low + high) / 2);
//
//   if(arr[mid] > x) {
//     return binarySearch(arr,x,low, mid - 1);
//   } else if(arr[mid] < x) {
//     return binarySearch(arr,x, mid + 1, high);
//   } else {
//     return mid;
//   }
// }

let arr = [2,4,6,8,9,10,13,23,29,30,32,36,49,105,492,1029,2393,2393];
// console.log(binarySearch(arr,36,0,arr.length - 1));
console.log(binarySearch(arr,23));
