// Multiples of 3 or 5

function multiples(n, total) {
  if (n <= 0) {
    return total;
  }

  if (n % 3 === 0 || n % 5 === 0) {
    total += n;
  }
  return multiples(n - 1, total);
}

console.log(multiples(1000, 0));

// Even Fibonacci numbers

function fibsEven(arr, total) {
  if (arr.length === 0) return total;
  let getIndexOne = arr.shift();
  if (getIndexOne % 2 === 0) {
    console.log(getIndexOne);
    total += getIndexOne;
  }
  return fibsEven(arr, total);
}

console.log(fibsEven([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 0));

function fibsEven2(limit, a, b, sum) {
  if (a > limit) return sum;

  if (a % 2 === 0) {
    sum += a;
  }

  return fibsEven2(limit, b, a + b, sum);
}

console.log(fibsEven2(4000000, 1, 2, 0));

// Largest prime factor

function primeFactor(factor, num, arr) {
  if (num === 1) return arr[arr.length - 1];

  if (num % factor === 0) {
    arr.push(factor);
    return primeFactor(factor, num / factor, arr);
  }
  return primeFactor(factor + 1, num, arr);
}

console.log(primeFactor(2, 600851475143, []));

// Largest palindrome product

function largestPalindromeProduct(start, end, largest) {
  if (start === end) return largest; // Base case

  for (let i = end; i >= start; i--) {
    const product = start * i;
    const getStr = product.toString();
    const reversed = getStr.split("").reverse().join("");
    if (getStr === reversed && product > largest) largest = product;
  }

  return largestPalindromeProduct(start + 1, end, largest);
}

console.log(largestPalindromeProduct(100, 999, 0));

// Smallest multiple

/* function isDivisble(num, div, current) {
      let count = 0;
      for (let i = 1; i <= div; i++) {
          if (num % i === 0) {
              count++;
          }
      }
      if (count === div) {
          return num;
      }
      return isDivisble(num + 1, div);
  }
  console.log(isDivisble(1, 20)); */

/* function isDivisble(num, div, count) {
      if (count === div) return num;
  
      if (num % count === 0) {
          return isDivisble(num, div, count + 1);
      }
      return isDivisble(num + 1, div, 1);
  }
  console.log(isDivisble(1, 10, 1)); */

function isDivisible(num, div) {
  for (let i = 1; i <= div; i++) {
    if (num % i !== 0) return false;
  }
  return true;
}

function smallestMultiple(div) {
  let num = div;
  while (!isDivisible(num, div)) {
    num += 1;
  }
  return num;
}

console.log(smallestMultiple(20));
