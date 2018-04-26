;(function (name, definition) {
  var hasDefine = typeof define === 'function',
    hasExports = typeof module !== 'undefined' && module.exports;
  if (hasDefine) {
    define(definition);
  } else if (hasExports) {
    module.exports = definition();
  } else {
    this[name] = definition();
  }
})('vvpvvp', function (range, size) {
  var size = size || 2;
  return Math.random().toFixed(size);
});