document.getElementById('intercomBtn').addEventListener('click', function() {
    window.location.href = '/projects/walmart/p/intercom/';
});

document.getElementById('fireAlarmBtn').addEventListener('click', function() {
    window.location.href = '/projects/walmart/p/fire/';
});

document.getElementById('lightingBtn').addEventListener('click', function() {
    window.location.href = '/projects/walmart/p/lighting/';
});

document.getElementById('lockdownBtn').addEventListener('click', function() {
    warningDialog.style.display = 'block';
});

okButton.addEventListener('click', () => {
    warningDialog.style.display = 'none';
});
