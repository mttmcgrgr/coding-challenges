// Here is a test to prepare for Assessment 5. This test is intended to be viewed by Presidio students ONLY. Thank you!

// MY FUNCTIONS

Array.prototype.myEach = function(callback) {

  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }

}

// console.log([2, 3, 4, 5, 6].myEach(item => console.log(item)));

Array.prototype.myMap = function(callback) {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  // USING MYEACH
  // this.myEach(function(element) {
  //   result.push(callback(element));
  // });

  return result;
}

// console.log([2, 3, 4, 5, 6].myMap(base => Math.pow(base, 2)));

Array.prototype.myAny = function(callback) {

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }

  return false;
};

// console.log([1, 3, 5, 7, 9].myAny(num => num % 2 === 0));

Array.prototype.myAll = function(callback) {

  // for (var i = 0; i < this.length; i++) {
  //   if (callback(this[i]) === false) {
  //     return false;
  //   }
  // }

  let result = true;

  this.myEach( el => {
    if (callback(el) === false) {
      result = false;
    }
  });

  return result;
};

// console.log([1, 3, 5, 7, 9].myAll(num => num % 2 !== 0));

Array.prototype.myFlatten = function(callback) {

  let result = [];

  this.myEach(function(el) {

    if (Array.isArray(el)) {
      result = result.concat(el.myFlatten());
    } else {
      result.push(el);
    }
  });

  return result;

};

// console.log([1, 2, [3, 4], [5, [6]]].myFlatten());

Array.prototype.myZip = function (...arrays) {

  let result = [];

  for (let i = 0; i < this.length; i++) {

    let subArr = [];
    subArr.push(this[i]);

    for (let j = 0; j < arrays.length; j++) {
      subArr.push(arrays[j][i]);
    }
    result.push(subArr);
  }
  return result;
};

// let a = [ 4, 5, 6 ]
// let b = [ 7, 8, 9 ]
// console.log([1, 2, 3].myZip(a, b)); // => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// console.log(a.myZip([1,2], [8]));   // => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
// console.log([1, 2].myZip(a, b));    // => [[1, 4, 7], [2, 5, 8]]
//
// let c = [10, 11, 12]
// let d = [13, 14, 15]
// console.log([1, 2].myZip(a, b, c, d));    // => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]


Array.prototype.myRotate = function (pivot = 1) {

  let pivotConv = pivot % this.length;

  let left = this.slice(0, pivotConv);
  let right = this.slice(pivotConv);

  return right.concat(left);

};

// let a = [ "a", "b", "c", "d" ]
// console.log(a.myRotate())         //=> ["b", "c", "d", "a"]
// console.log(a.myRotate(2))      //=> ["c", "d", "a", "b"]
// console.log(a.myRotate(-3))     //=> ["b", "c", "d", "a"]
// console.log(a.myRotate(15))     //=> ["d", "a", "b", "c"]


Array.prototype.myJoin = function (separator = '') {

  let resultStr = '';

  for (var i = 0; i < this.length; i++) {
    resultStr = resultStr.concat(this[i]);
    if (i !== (this.length - 1) ) {
      resultStr = resultStr.concat(separator);
    }
  }

  return resultStr;

};

// let a = [ "a", "b", "c", "d" ];
// console.log(a.myJoin());        // => "abcd"
// console.log(a.myJoin("$"));   // => "a$b$c$d"

// The Javascript 'myInject'

Array.prototype.myReduce = function (sum, callback) {

  this.myEach(function(el) {
    sum = callback(sum, el);
  });

  return sum;

};

// console.log([4, 5, 6, 2].myReduce(0, (accum, el) => accum + el ));
// console.log([4, 5, 6, 2].myReduce(1, (accum, el) => accum * el ));

Array.prototype.myReverse = function () {
  if (this.length === 1) {
    return this;
  }

  let arrMinusFirst = this.slice(1);
  let first = this.slice(0, 1);

  return arrMinusFirst.myReverse().concat(first);
};

// console.log(['h', 'e', 'l', 'l', 'o'].myReverse());

Array.prototype.myTranspose = function () {

  let subArrCount = this[0].length;
  let elCount = this.length;

  let result = [];

  for (let i = 0; i < subArrCount; i++) {
    result[i] = [];
    for (let j = 0; j < elCount; j++) {
      result[i][j] = this[j][i];
    }
  }

  return result;
};

// console.log([[1, 2], [3, 4], [5, 6]].myTranspose()); // [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]


// PREP WORK & ASSESSMENT 0 & ASSESSMENT 1

Array.prototype.bubbleSort = function (callback) {

  callback = callback || ((el1, el2) => (el1 > el2) ? true : false);

  let sorted = false;

  while (sorted === false ) {
    sorted = true;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], this[i+1])) {
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;

        sorted = false;
      }
    }
  }

  return this;
};

// console.log([5, 2, 22, 3, 64, 1, 4].bubbleSort());
// console.log([5, 2, 22, 3, 64, 1, 4].bubbleSort(function (el1, el2) {
//   return (-(el1) > -(el2)) ? true : false;
// }));

Array.prototype.twoSum = function () {

  let twoSums = []

  for (var i = 0; i < this.length; i++) {
    for (var j = (i+1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSums.push([i, j]);
      }
    }
  }

  return twoSums;

};

// console.log([2, 0, -1, -3, 4, -2, 1].twoSum());

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.

Array.prototype.dups = function () {

  let dups = {};

  this.forEach((el, idx) => {
    if (!dups[el]) {
      dups[el] = [];
    }

    dups[el].push(idx);
  });

  let dupsFiltered = {}

  for (let key in dups) {
    if (dups[key].length > 1) {
      dupsFiltered[key] = dups[key];
    }
  }

  return dupsFiltered;

};

// console.log([1, 3, 4, 3, 0, 3, 0].dups()); //=> { 3 => [1, 3, 5], 0 => [4, 6] }

// class Fixnum
//   def stringify(base)
//     str = ''
//     left = self
//     until left == 0
//       digit = left % 2
//       str += digit.to_s
//       left = left / 2
//     end
//     str
//   end
// end

function stringify(num, base) {
  let left = num;
  let result = ''

  while (left > 0) {
    let digit = left % 2;

    result = digit + result;
    left = Math.floor(left / 2);
    console.log(left);

  }

  return parseInt(result);
}
// console.log(stringify(100, 2));


function substrings(str) {
  let substrings = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = (i); j < str.length; j++) {
      let ss = str.slice(i, j+1);
      if (!(substrings.includes(ss))) {
        substrings.push(ss);
      }
    }
  }
  return substrings;
}

// console.log(substrings('watermellon'));

// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process.

function digitalRoot(num) {

  let left = num;

  while (left > 9) {
    left = digitalRootStep(left)
  }

  return left;

}

function digitalRootStep(num) {

  let left = num;
  let digits = [];

  while (left > 0) {
    let digit = left % 10;
    digits.push(digit);
    left = Math.floor(left / 10);
  }

  return digits.reduce((prevNum, nextNum) => prevNum + nextNum );

}

// console.log(digitalRoot(10));


function digitalRootRec(num) {

  if (num < 9) {
    return num;
  }

  let added = digitalRootStep(num);

  return digitalRootRec(added);

}

// console.log(digitalRootRec(193));

// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).

function jumbleSort1(str, alphabet) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split("");

  let jumbleSort = [];

  alphabet.forEach(function(letter) {

    let count = 0;

    for (var i = 0; i < str.length; i++) {
      if (letter === str.slice(i, i+1)) {
        count += 1;
      }
    }

    for (var i = 0; i < count; i++) {
      jumbleSort.push(letter);
    }

  });

  return jumbleSort.join('');

}

function jumbleSort2(str, alphabet) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split("");

  arr = str.split('');

  return arr.sort(function(letter1, letter2) {
    return alphabet.indexOf(letter1) > alphabet.indexOf(letter2);
  }).join("");

}

// console.log(jumbleSort1("hello")); //=> "ehllo"
// console.log(jumbleSort1("hello", ['o', 'l', 'h', 'e'])); //=> 'ollhe'


function caesarCipher(str, shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let adjShift = shift % 26;
  let shifted = [];

  for (var i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    letterIdx = alphabet.indexOf(letter);
    shifted.push(alphabet[adjShift + letterIdx]);
  }

  return shifted.join("");
}

// console.log(caesarCipher('anything', 27));

// [[]]
// [[], [1]]
//
// [1, 2]

function factorial(num) {
  if (num === 1) return 1;
  if (num === 0 )return 0;

  return num * factorial(num-1);
}

// console.log(factorial(5));

// Retunr n Factorial number in an array ex. f(6) => [0, 1, 2, 6, 24, 120]

function factorialNumbers(n) {

  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let prev = factorialNumbers(n-1);
  let last = prev[prev.length - 1];

  let push = (last * (n-1))

  prev.push(push);

  return prev;
}

// console.log(factorialNumbers(8));


// Return the Nth fibonnaci number

function fibonacci(n) {

  if (n === 2) return 1;
  if (n === 1) return 1;

  return (fibonacci(n-1) + fibonacci(n-2))

}

// console.log(fibonacci(7));

// Return

function fibonacciSeq(n) {

  if (n === 2) return [1, 1];
  if (n === 1) return [1];

  let prev = fibonacciSeq(n-1)

  let last = prev[prev.length-1];
  let secondLast = prev[prev.length-2];

  prev.push((last + secondLast));

  return prev;

}

// console.log(fibonacciSeq(8));


Array.prototype.bsearch = function (target) {

  if ((this.length === 1) && (this[0] !== target)) return null;

  let probeIdx = Math.floor(this.length /  2);
  let probe = this[probeIdx];
  let l = this.slice(0, probeIdx);
  let r = this.slice(probeIdx);

  if (target < probe) {
    return l.bsearch(target);
  } else if (target === probe) {
    return probeIdx;
  } else {
    let search = r.bsearch(target);
    return (search ? (probeIdx + 1) : null);
  }
};

// console.log([2, 4, 6, 7, 19, 22].bsearch(1));

Array.prototype.mergeSort = function(comparator) {

  comparator = comparator || ((l, r) => {
    if (l < r) {
      return -1;
    } else if (l === r) {
      return 0;
    } else {
      return 1;
    }
  });

  if (this.length < 2) {
    return this;
  }

  let middle = Math.floor(this.length / 2);

  let l = this.slice(0, middle);
  let r = this.slice(middle, this.length);

  return merge(l.mergeSort(comparator), r.mergeSort(comparator), comparator);

};

function merge(l, r, comparator) {

  let result = [];

  while (l.length !== 0 && r.length !== 0) {
    if (comparator(l[0], r[0]) === -1) {
      result.push(l.shift());
    } else {
      result.push(r.shift());
    }
  }

  return result.concat(l).concat(r);

}

// console.log([4, 20, 56, 7, 1, 3].mergeSort());

function arraySubsets(arr) {
  if (arr.length === 0) {
    return [[0]]
  }

  let arrMinusFirst = arr.slice(1);
  let first = arr.slice(0, 1);

  let prevSubsets = arraySubsets(arrMinusFirst)

  prevSubsets.push(first);

  return prevSubsets;

}

// console.log(arraySubsets([1, 2]));


Array.prototype.quickSort = function () {


  if (this.length === 1) {
    return this;
  }


  let pivot = this[0];
  let l = [];
  let r = [];

  for (var i = 1; i < this.length; i++) {
    if (this[i] <= pivot) {
      l.push(this[i]);
    } else {
      r.push(this[i]);
    }
  }

  return (l.quickSort + pivot + r.quickSort);

};

// console.log([4, 10, 2, 8].quickSort());;


// NEW JAVASCRIPT MATERIAL


//MY BIND ---------------------------

Function.prototype.myBind = function(obj, ...bindArgs) {
  return (...callArgs) => {
    this.apply(obj, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    // console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// console.log(markov.says("meow", "Ned"));
// Markov says meow to Ned!
// true

// console.log(markov.says.myBind(breakfast, "meow", "Kush")());
// Breakfast says meow to Kush!
// true

// console.log(markov.says.myBind(breakfast)("meow", "a tree"));
// Breakfast says meow to a tree!
// true

// console.log(markov.says.myBind(breakfast, "meow")("Markov"));
// Breakfast says meow to Markov!
// true

//CURRYING ---------------------------

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

Function.prototype.curry = function (numArgs) {
  let arr = [];
  let that = this;
  return function _curriedSum(arg) {
    arr.push(arg);
    if (arr.length === numArgs) {
      return that(...arr);
    } else {
      return _curriedSum;
    }
  };

};

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30


//INHERITANCE ---------------------------

Function.prototype.inherits = function(parentClass) {

  function Surrogate() {}

  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;

};

function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);
