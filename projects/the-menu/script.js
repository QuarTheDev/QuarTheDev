document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const overlay = document.querySelector(".overlay");
    const loadingBox = document.querySelector(".loading-box");
    const activeText = document.querySelector(".active-text");
    const bodyText = document.querySelector(".body-text");
  
    const loadingTexts = [
      "SETUP IS LOADING FROM MEMORY   ",
      "SETUP IS LOADING FROM MEMORY.  ",
      "SETUP IS LOADING FROM MEMORY.. ",
      "SETUP IS LOADING FROM MEMORY..."
    ];
  
    let loadingIndex = 0;
    let intervalId;
  
    function startLoadingTextLoop() {
      intervalId = setInterval(() => {
        bodyText.textContent = loadingTexts[loadingIndex];
        loadingIndex = (loadingIndex + 1) % loadingTexts.length;
      }, 250);
    }
  
    function stopLoadingTextLoop() {
      clearInterval(intervalId);
    }
  
    menuItems.forEach(item => {
      item.addEventListener("mouseover", () => {
        activeText.textContent = item.textContent;
      });
  
      item.addEventListener("mouseout", () => {
        activeText.textContent = "";
      });
  
      item.addEventListener("click", () => {
        if (item.textContent === "EXIT SETUP") {
          document.body.style.backgroundColor = "#000";
          document.querySelector(".outer-box").style.backgroundColor = "#000";
          menuItems.forEach(menuItem => {
            menuItem.style.backgroundColor = "#000";
            menuItem.style.color = "#AAA";
          });
          setTimeout(() => {
            document.body.innerHTML = "";
          }, 50);
        } else {
          overlay.style.display = "block";
          loadingBox.style.display = "block";
          startLoadingTextLoop();
        }
      });
    });
  
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      loadingBox.style.display = "none";
      stopLoadingTextLoop();
      bodyText.textContent = "                               ";
    });
  });
  