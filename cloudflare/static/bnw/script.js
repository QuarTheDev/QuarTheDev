var canvas = document.getElementById('static-canvas');
var ctx = canvas.getContext('2d');
var width, height;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function genStatic() {
    var imageData = ctx.createImageData(width, height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = Math.floor(Math.random() * 256);
        data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
}

function animStatic() {
    requestAnimationFrame(animStatic);
    genStatic();
}

resizeCanvas();
animStatic();

window.addEventListener('resize', resizeCanvas);
