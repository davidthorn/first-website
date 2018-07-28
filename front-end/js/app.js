const apiURL = "http://localhost:4200/api.php";

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
    getWelcomeMessage(ele);
}

/// Execute a HTTP GET request to http://localhost:4200/api.php
/// If the response is success then the message from the api should then be shown in 
/// the window
/// If the response is not success then an error message should be shown
const getWelcomeMessage = (ele) => {

    $.get(apiURL , (data, status) => {
        switch(status) {
            case "success":
            const json = JSON.parse(data);
            ele.innerHTML = json.message;
            break;
            default:
            ele.innerHTML = "An error occurred";
            break;
        }
     })

}