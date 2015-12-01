var Promise = require('bluebird');

Promise.config({
  warnings: false,
  longStackTraces: false,
  cancellation: true
});

var LONG_ARRAY = [];
while (LONG_ARRAY.length < 100) {
  LONG_ARRAY.push(LONG_ARRAY.length);
}

function longPromiseChain(callback) {
  Promise.reduce(LONG_ARRAY, function(total, count) {
    return;
  }, 0)
  .asCallback(callback);
}

var count = 0;
console.time('benchmark');

(function iter() {
  if (count++ >= 10) {
    console.timeEnd('benchmark');
    return;
  }

  longPromiseChain(iter);
})();
