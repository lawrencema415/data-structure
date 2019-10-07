// Quicksort - pivot, partitioning
//
// function quicksort(a,i,r) {
//   if(l < r ) {
//     let pivot = partition(a,i,r);
//     quicksort(a,i,pivot - 1);
//     quicksort(a,pivot + 1, r);
//   }
// }
//
// pivot: the value within the partitioning space that i want to find a position for.
// L       R
// 3 7 8 2 1
// i
// j
//
// i - remember the last position that an element was placed in,
// that was less than the pivot
// j - scan from l to r-1 inclusive
//
// Since 3 is bigger than 1(pivot), we don't swap
// Then move j to 7, then 8, then 2, they are not bigger than 1, so we move on
// Now we know 3 7 8 2 is bigger than 1, now we have 1 7 8 2 3
//
//
//
// pivot = 1
//
//
// best case
// nice case 3 4 5 8 9 7
// pivot = 7
// best case when pivot is median of the partition phase
// o(n*log(n)) each element 1 swap
//
// worst case
// - if pivot is the greatest or least item, in partition phase
// the space is unevenly chopped O(n^2)
