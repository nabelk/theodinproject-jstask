const { log, table } = console;

//Sum all numbers

function sumRange(n) {
  return n === 1 ? n : n + sumRange(n - 1);
}

log(sumRange(3));

// Power function

function power(base, exponent) {
  return exponent === 0 ? 1 : base * power(base, exponent - 1);
}

log(power(2, 4));

// Calculate factorial

function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}

log(factorial(5));

// Check all values in an array

const allAreLessThanSeven = all([10, 10, 12], function (num) {
  return num < 7;
});

log(allAreLessThanSeven);

function all(array, callback) {
  const copy = array;
  table(copy);
  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    log("first index arr has been deleted");
    return all(copy, callback);
  } else {
    return false;
  }
}

// Product of an array

function productOfArray(array, total) {
  const arr = array;
  let num = total;

  if (arr.length === 0) {
    return num;
  } else {
    num *= arr[0];
    arr.shift();
    return productOfArray(arr, num);
  }
}

log(productOfArray([1, 2, 3, 10], 1));

// Search JS object

function contains(obj, value) {
  const arr = Object.keys(obj);
  for (let key of arr) {
    if (obj[key] === value) {
      return true;
    }
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }
  }
  return false;
}

log(
  contains(
    {
      data: {
        info: {
          stuff: {
            thing: {
              moreStuff: {
                magicNumber: 44,
                something: "foo2",
              },
            },
          },
        },
      },
    },
    "foo2"
  )
);

// Parse a multi-dimensional array

function totalIntegersStraightForward(arr) {
  let i = 0;
  arr.flat(2).forEach((item) => {
    if (typeof item === "number") {
      i += 1;
    }
  });
  return i;
}

log(totalIntegersStraightForward([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));

var seven = totalIntegersRecursion([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
log(seven);

function totalIntegersRecursion(array) {
  // console.log("arr length", array.length);
  if (array.length === 0) {
    return 0;
  }

  let total = 0;
  let first = array.shift();
  // log(first);

  if (Array.isArray(first)) {
    // log("array");
    total += totalIntegersRecursion(first);
  } else if (Number.isInteger(first)) {
    // log("number");
    total += 1;
  }
  // log(array);

  return total + totalIntegersRecursion(array);
}

// Sums squares of numbers

function sumSquares(arr) {
  if (arr.length === 0) return 0;
  let getFirst = arr.shift();

  let total = 0;
  if (Array.isArray(getFirst)) {
    total += sumSquares(getFirst);
  } else if (typeof getFirst === "number") {
    total += getFirst * getFirst;
  }

  return total + sumSquares(arr);
}

log(sumSquares([[[[[[[[[1]]]]]]]]]));
log(sumSquares([1, 2, 3]));
log(sumSquares([[1, 2], 3]));
log(sumSquares([10, [[10], 10], [10]]));

// Return an array containing repetitions of the number argument

function replicate(times, num, arr = []) {
  log("enter the function"); // Check recursion
  if (times <= 0) {
    return arr;
  } else if (times > 0) {
    arr.push(num);
    return replicate(times - 1, num, arr);
  }
}

log(replicate(2, 69));
