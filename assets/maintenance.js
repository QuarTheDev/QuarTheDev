function checkMaintenanceStatus() {
    fetch('/assets/maintenance.json')
        .then(response => response.json())
        .then(data => {
            if (data.maintenance === true) {
                if (window.location.pathname !== '/maintenance/') {
                    window.location.href = '/maintenance/';
                }
            }
        })
        .catch(error => {
            console.error('Error fetching maintenance status:', error);
        });
}

window.onload = checkMaintenanceStatus;