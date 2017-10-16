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









Array.prototype.bubbleSort = function (callback) {

  callback = callback || ((el1, el2) => (el1 > el2) ? true : false);

  let sorted = false;

  while (sorted === false ) {
    sorted = true;

    for (var i = 0; i < this.length; i++) {
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
