exports.canvasToBlob = function(canvas) {
  return new Promise(function(resolve) {
    canvas.toBlob(function(blob) {
      return resolve(blob);
    });
  });
};