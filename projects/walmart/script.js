document.getElementById('intercomBtn').addEventListener('click', function() {
    warningDialog.style.display = 'block';
    overlay.style.display = 'block';
    
    const newWarningText = "<code><b>🔴 RECORDING</b></code><br><br>When announcement  complete, push the OK  button.";
    document.querySelector('#warningDialog p').innerHTML = newWarningText;
});

document.getElementById('fireAlarmBtn').addEventListener('click', function() {
    warningDialog.style.display = 'block';
    overlay.style.display = 'block';
    
    const newWarningText = "Authorization needed. Please tap your keycard .";
    document.querySelector('#warningDialog p').innerHTML = newWarningText;
});

document.getElementById('lightingBtn').addEventListener('click', function() {
    warningDialog.style.display = 'block';
    overlay.style.display = 'block';
    
    const newWarningText = "You must be <code>Store Manager</code> or higher to access !!";
    document.querySelector('#warningDialog p').innerHTML = newWarningText;
});

document.getElementById('lockdownBtn').addEventListener('click', function() {
    warningDialog.style.display = 'block';
    overlay.style.display = 'block';
    
    const newWarningText = "You must be <code>Store Manager</code> or higher to access !!";
    document.querySelector('#warningDialog p').innerHTML = newWarningText;
});

okButton.addEventListener('click', () => {
    warningDialog.style.display = 'none';
    overlay.style.display = 'none'; 
});

document.getElementById('walmartLogo').ondragstart = function() {
    return false;
};

document.addEventListener("click", function() {
    const documentElement = document.documentElement;

    if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen();
    } else if (documentElement.mozRequestFullScreen) {
        documentElement.mozRequestFullScreen();
    } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen();
    } else if (documentElement.msRequestFullscreen) {
        documentElement.msRequestFullscreen();
    }
});