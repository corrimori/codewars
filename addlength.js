function addLength(words) {
  let arrayOfWords = words.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i] + ' ' + arrayOfWords[i].length;
  }
  return arrayOfWords
}

addLength('apple banana pear');
