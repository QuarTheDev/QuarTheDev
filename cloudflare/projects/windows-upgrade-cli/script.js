const titleElement = document.getElementById('title');

setInterval(() => {
    if (titleElement.textContent.includes("█")) {
        titleElement.textContent = "windows-upgrade-cli ";
    } else {
        titleElement.textContent = "windows-upgrade-cli█";
    }
}, 500);