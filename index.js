const canvasToBlob = canvas => {
  return new Promise(resolve => {
    canvas.toBlob(blob => resolve(blob));
  });
};
