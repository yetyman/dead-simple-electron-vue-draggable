//Quick call to open the current windows dev tools.
function showDevTools() {
    window.api.send('open-devtools', 'ping');
}

function showMainWindow() {
    window.api.send('show-main', 'ping');
}

function requestRunningPath() {
    window.api.send('request-path', 'ping');
}

