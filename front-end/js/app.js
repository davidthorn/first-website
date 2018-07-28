const onWindowLoadedEvent = () => {
    const ele = document.getElementById('welcome_text');
    ele.innerHTML = "Welcome to you";

    /// do some other work

    startApplication();
}

/// bind on window loaded event to window.onload
window.onload = onWindowLoadedEvent

/// starts the application
function startApplication() {
    const ele = document.getElementById('welcome_text');
    ele.innerHTML = "Application started";
}