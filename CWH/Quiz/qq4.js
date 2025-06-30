function sumEvenNumber(start, end) {
  let i = start;
  let sum = 0;
  while (i <= end) {
    if (i % 2 == 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumEvenNumber(1,10)); 