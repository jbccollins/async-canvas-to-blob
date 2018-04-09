# async-canvas-to-blob

A small wrapper around canvas.toBlob to make async usage cleaner

**Usage**

Let's say you want to save a canvas as a png file. Using the built in canvas syntax you would do something like

```javascript
import FileSaver from 'file-saver';
...
const canvas = document.getElementById('my-canvas');
canvas.toBlob(blob => {
  FileSaver.saveAs(blob, 'my-canvas.png');
});
```

Doing this can feel out of place when you use async/await syntax everywhere else to handle promises.
Having a callback to handle promise resolution like that is not ideal. Instead we can do something like

```javascript
import canvasToBlob from 'async-canvas-to-blob';
import FileSaver from 'file-saver';
...
const canvas = document.getElementById('my-canvas');
const blob = await canvasToBlob(canvas);
FileSaver.saveAs(blob, 'my-canvas.png');
```