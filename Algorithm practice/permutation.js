function permutation(word) {

  return permutationHelper("",word);
}

function permutationHelper(perm,word) {
  // when word = "", we eliminated all possiblities, so print all
  if(word == "") {
    console.log(perm);
  } else {
      for(let i = 0;i< word.length;i++) {
        permutationHelper(perm + word[i],word.substring(0,i) + word.substring(i + 1, word.length));
      }
  }
}

let str = "j";
permutation("ops");
