var quotes = [
    "YOU WILL\n\nSEE SUCH\n\nPRETTY\nTHINGS",
    "WHY DO\n\n\n\nYOU HATE?",
    "YOU\n\nARE\n\nILL",
    "WE JUST\n\nWANT TO\n\nFIX YOU",
    "WHAT HIDES\n\nIN YOUR\n\nMIND?",
    "WE HAVE\n\nALREADY\n\nSEEN IT",
    "YOU\n\nCAN LOSE\n\nEVERYTHING",
    "NOTHING\n\nIS\n\nPRICELESS",
    "YOU\n\nCANNOT HIDE\n\nFOREVER",
    "WE\n\nSTAND AT\n\nTHE DOOR",
    "YOU ARE\n\nLOST ON\n\nTHE PATH",
    "THERE\nIS\nTRUTH\nIN\nFICTION",
    "ALL\n\nGOOD\n\nTHINGS",
    "img1",
];

function generateRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    var quoteElement = document.getElementById("quote");
    if (randomQuote === "img1") {
        quoteElement.innerHTML = `
      <div class="image-container">
        <img src="./assets/human-head-alt.png?v=1" alt="THERE IS TRUTH IN FICTION" class="image">
        <img src="./assets/human-head-alt.png?v=1" alt="THERE IS TRUTH IN FICTION" class="blur">
      </div>`;
    } else {
        quoteElement.innerText = randomQuote;
        quoteElement.classList.remove("image");
    }
}

function parallaxText(event) {
    var quoteElement = document.getElementById("quote");
    var xAxis = (window.innerWidth / 2 - event.clientX) / 20;
    var yAxis = (window.innerHeight / 2 - event.clientY) / 20;
    quoteElement.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
}

document.addEventListener("DOMContentLoaded", function() {
  generateRandomQuote();
  generateStatic();
});

document.addEventListener("mousemove", parallaxText);

var tvStaticElement = document.createElement("canvas");
tvStaticElement.id = "tv-static";
document.body.appendChild(tvStaticElement);

var canvas = document.getElementById("tv-static");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function generateStatic() {
    var width = canvas.width;
    var height = canvas.height;

    var imageData = ctx.createImageData(width, height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        var noise = Math.floor(Math.random() * 256);
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 25;
    }

    ctx.putImageData(imageData, 0, 0);
}

window.addEventListener("resize", function() {
    resizeCanvas();
    generateStatic();
});

resizeCanvas();

const quoteElement = document.getElementById('quote');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function regenPage() {
  generateRandomQuote();
  generateStatic();
}

document.addEventListener("touchend", regenPage);
document.addEventListener("click", regenPage);
document.addEventListener("keydown", regenPage);
document.addEventListener("gamepadbuttondown", regenPage);
