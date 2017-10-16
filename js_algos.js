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
