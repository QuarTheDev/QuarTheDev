var canvas = document.getElementById('static-canvas');
var ctx = canvas.getContext('2d');
var width, height;
var imageData, data;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    imageData = ctx.createImageData(width, height);
    data = imageData.data;
}

function genStatic() {
    var length = width * height * 4;
    var randomByte = Math.floor(Math.random() * 256);

    for (var i = 0; i < length; i += 4) {
        data[i] = Math.floor(Math.random() * 256); // red
        data[i + 1] = Math.floor(Math.random() * 256); // green
        data[i + 2] = Math.floor(Math.random() * 256); // blue
        data[i + 3] = 255; // alpha
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
