module.exports = function(canvas) {
  return new Promise(function(resolve) {
    canvas.toBlob(resolve);
  });
};
