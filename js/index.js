'use strict';

// setInterval

// function printNumbers (from, to, interval) {
//   let value = from;
//   const methotInterval = setInterval(function () {
//     if (value === to) {
//       clearInterval(methotInterval);
//     }
//     value++;
//   }, interval);
// }

// printNumbers(-3, 5, 1000);

// setTimeout

function printNumbers (from, to, interval) {
  let value = from;
  setTimeout(function recursiveInterval () {
    if (value < to) {
      setTimeout(recursiveInterval, 5000);
    }
    value++;
  }, interval);
}

printNumbers(-3, 5, 1000);
