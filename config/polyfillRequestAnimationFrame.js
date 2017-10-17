// React 16 relies on requestAnimationFrame
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};