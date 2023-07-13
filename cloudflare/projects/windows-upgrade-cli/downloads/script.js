const titleElement = document.getElementById('title');

setInterval(() => {
    if (titleElement.textContent.includes("_")) {
        titleElement.textContent = "windows-upgrade-cli ";
    } else {
        titleElement.textContent = "windows-upgrade-cli_";
    }
}, 500);