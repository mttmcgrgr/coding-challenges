// Here is a test to prepare for Assessment 5. This test is intended to be viewed by Presidio students ONLY. Thank you!

// MY FUNCTIONS

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
      callback(this[i]);
  }

};

// console.log([2, 3, 4, 5, 6].myEach(item => console.log(item)));

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
     result.push(callback(this[i]));
  }
  return result;
};

// console.log([2, 3, 4, 5, 6].myMap(base => Math.pow(base, 2)));

Array.prototype.myAny = function(callback) {
  let result = false;
  this.forEach(el => {
    if(callback(el)){
      result = true;
    }
  });
  return result;
};

// console.log([1, 3, 5, 7, 9].myAny(num => num % 3 === 0));

Array.prototype.myAll = function(callback) {
  let result = true;
  this.forEach(el => {
    if(callback(el) === false){
      result = false;
    }
  });
  return result;
};


// console.log([1, 3, 5, 7, 9].myAll(num => num % 3 !== 0));

Array.prototype.myFlatten = function() {
  let result = [];
  this.forEach(el => {
   (typeof(el) === "number") ? result.push(el) : result = result.concat(el.myFlatten());
  });
  return result;
};

// console.log([1, 2, [3, 4], [5, [6]]].myFlatten());

Array.prototype.myZip = function (...arrays) {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    let subArr = [];
    subArr.push(this[i]);
    for (var k = 0; k < arrays.length; k++) {
      subArr.push(arrays[k][i]);
    }
    result.push(subArr);
  }
  return result;
};

// let a = [ 4, 5, 6 ];
// let b = [ 7, 8, 9 ];
// console.log([1, 2, 3].myZip(a, b)); // => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// console.log(a.myZip([1,2], [8]));   // => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
// console.log([1, 2].myZip(a, b));    // => [[1, 4, 7], [2, 5, 8]]
//
// let c = [10, 11, 12];
// let d = [13, 14, 15];
// console.log([1, 2].myZip(a, b, c, d));    // => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]


Array.prototype.myRotate = function (pivot = 1) {

  let pivotConv = pivot % this.length;

  let left = this.slice(0,pivotConv);
  let right = this.slice(pivotConv);

  return right.concat(left);


};

// let a = [ "a", "b", "c", "d" ];
// console.log(a.myRotate());        //=> ["b", "c", "d", "a"]
// console.log(a.myRotate(2));    //=> ["c", "d", "a", "b"]
// console.log(a.myRotate(-3));  //=> ["b", "c", "d", "a"]
// console.log(a.myRotate(15));     //=> ["d", "a", "b", "c"]
//

Array.prototype.myJoin = function (separator = '') {



};

// let a = [ "a", "b", "c", "d" ];
// console.log(a.myJoin());        // => "abcd"
// console.log(a.myJoin("$"));   // => "a$b$c$d"

// The Javascript 'myInject'

Array.prototype.myReduce = function (sum, callback) {

};

// console.log([4, 5, 6, 2].myReduce(0, (accum, el) => accum + el ));
// console.log([4, 5, 6, 2].myReduce(1, (accum, el) => accum * el ));

Array.prototype.myReverse = function () {

};

// console.log(['h', 'e', 'l', 'l', 'o'].myReverse());

Array.prototype.myTranspose = function () {

  // const result = [];
  //
  // for
  //
  // for (let i = 0; i < this.length; i++) {
  //   for (var k = 0; k < this.length; k++) {
  //     result.push(this[i][k]);
  //   }
  // }
  // return result;
// };

// console.log([[1, 2], [3, 4], [5, 6]].myTranspose()); // [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]


// PREP WORK & ASSESSMENT 0 & ASSESSMENT 1

let cb = function(el1, el2){
  if(el1 < el2){
    return - 1;
  } else {
    return 1;
  }
};

Array.prototype.bubbleSort = function (callback = cb) {

  let sorted = true;

  while(sorted === false){
    sorted = true;

    for (let i = 0; i < this.length; i++) {
      if(callback(this[i], this[i + 1]) === true){
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

console.log([5, 2, 22, 3, 64, 1, 4].bubbleSort());
console.log([5, 2, 22, 3, 64, 1, 4].bubbleSort(function (el1, el2) {
  return ((el1) > (el2)) ? true : false;
}));

Array.prototype.twoSum = function () {

};

// console.log([2, 0, -1, -3, 4, -2, 1].twoSum());

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.

Array.prototype.dups = function () {

};

// console.log([1, 3, 4, 3, 0, 3, 0].dups()); //=> { 3 => [1, 3, 5], 0 => [4, 6] }

function stringify(num, base) {

}
// console.log(stringify(100, 2));


function substrings(str) {


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

}

function digitalRootStep(num) {

}

// console.log(digitalRoot(10));


function digitalRootRec(num) {

}

// console.log(digitalRootRec(193));

// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).

function jumbleSort(str, alphabet) {

}

// console.log(jumbleSort("hello")); //=> "ehllo"
// console.log(jumbleSort("hello", ['o', 'l', 'h', 'e'])); //=> 'ollhe'


function caesarCipher(str, shift) {

}

// console.log(caesarCipher('anything', 27));


function factorial(num) {


}

// console.log(factorial(5));

// Retunr n Factorial number in an array ex. f(6) => [0, 1, 2, 6, 24, 120]

function factorialNumbers(n) {

}

// console.log(factorialNumbers(8));


// Return the Nth fibonnaci number

function fibonacci(n) {
}

// console.log(fibonacci(7));

// Return

function fibonacciSeq(n) {



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
    return probeIdx
  } else {
    let search = r.bsearch(target);
    return (search ? (probeIdx + 1) : null);
  }
};


console.log([2, 4, 6, 7, 19, 22].bsearch(6));



Array.prototype.mergeSort = function(comparator = cb) {
  if(this.length < 2) return this;

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid);
  let right = this.slice(mid);

  return merge(left.mergeSort(comparator), right.mergeSort(comparator), comparator);

};

function merge(l, r, comparator) {
  let merged = [];

  while(l.length > 0 && r.length > 0){
    (comparator(l[0], r[0]) === -1) ? merged.push(l.shift()) : merged.push(r.shift());
  }

  return merged.concat(l, r);
}

// console.log([4, 20, 56, 7, 1, 3].mergeSort());

function arraySubsets(arr) {

}

// console.log(arraySubsets([1, 2]));


Array.prototype.quickSort = function () {
  if(this.length < 2) return this;

  let pivot = this[0], left = [], right = [];

  for (let i = 1; i < this.length; i++) {
    (this[i] < pivot) ? left.push(this[i]) : right.push(this[i]);
  }

  return left.quickSort().concat(pivot, right.quickSort());

};

// console.log([4, 10, 2, 8].quickSort());


// NEW JAVASCRIPT MATERIAL


//MY BIND ---------------------------

Function.prototype.myBind = function(obj, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(obj, bindArgs.concat(callArgs));
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

// sumThree(4, 20, 6); // == 30

Function.prototype.curry = function (numArgs) {
  let args = [];
  let func = this;

  function _curriedFn(arg){
    args.push(arg);
    if(args.length === numArgs){
      return func(...args);
    } else {
      return _curriedFn;
    }
  }
  return  _curriedFn;
};
// you'll write `Function#curry`!
// const f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30


//INHERITANCE ---------------------------

Function.prototype.inherits = function(parentClass) {
   const Surrogate = function(){};
   Surrogate.prototype = parentClass.prototype;
   this.prototype = new Surrogate();
   this.prototype.constructor = this;
};

// function MovingObject () {}
//
// function Ship () {}
// Ship.inherits(MovingObject);
//
// function Asteroid () {}
// Asteroid.inherits(MovingObject);
