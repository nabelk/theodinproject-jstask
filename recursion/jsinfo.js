const { log } = console;

// Sum all numbers till the given one

function sum(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
}

function sumRecursion(n) {
  if (n === 1) {
    return n;
  } else {
    return (n += sumRecursion(n - 1));
  }
}

log(sumRecursion(1000));

function sumArithmetic(n) {
  let a = 1; // first term
  let d = -1; // common difference
  let sum = (n / 2) * (2 * a + (n - 1));
  return sum;
}

log(sumArithmetic(100));
log(sumArithmetic(1000));

// Calculate factorial

function factorialrecursion(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorialrecursion(n - 1);
  }
}

log(factorialrecursion(2));

// Output a single-linked list

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printLoop(list) {
  let temp = list;
  let arr = [];

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  arr.reverse().forEach((value) => log(value));
}

function printRecur(list) {
  log(list.value);

  if (list.next !== null) {
    printRecur(list.next);
  }
}

printLoop(list);
printRecur(list);
