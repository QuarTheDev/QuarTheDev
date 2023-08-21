// Special thanks to RobotWizard for the 'Bouncing DVD Logo', which was used in part to construct this maintenance page. //

let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
let dvd = document.getElementById("dvd");
dvd.style.color = pallete[0];
let prevColorChoiceIndex = 0;
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;
const logoText = dvd.querySelector(".logo-text");
const logoSubtext = dvd.querySelector(".logo-subtext");

function getNewRandomColor() {
  const colorChoiceIndex = Math.floor(Math.random() * pallete.length);
  return pallete[colorChoiceIndex];
}

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
    const newColor = getNewRandomColor();
    logoText.style.color = newColor;
    logoSubtext.style.color = newColor;
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;
    const newColor = getNewRandomColor();
    logoText.style.color = newColor;
    logoSubtext.style.color = newColor;
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);