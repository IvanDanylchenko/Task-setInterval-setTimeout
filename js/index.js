'use strict';

// setInterval

function printNumbers (from, to, interval) {
  let value = from;
  const methotInterval = setInterval(function () {
    console.log('value', value);
    if (value === to) {
      clearInterval(methotInterval);
    }
    value++;
  }, interval);
}

printNumbers(-3, 5, 1000);

// setTimeout

// function printNumbers (from, to, interval) {
//   let value = from;
//   setTimeout(function recursiveInterval () {
//     console.log('value', value);
//     if (value < to) {
//       setTimeout(recursiveInterval);
//     }
//     value++;
//   }, interval);
// }

// printNumbers(-3, 5, 1000);
