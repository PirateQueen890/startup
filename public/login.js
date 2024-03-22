function loadPage() {
    let username = localStorage.getItem("username");
    if (username) {
        username = username.replace(/"/g, "");
        document.querySelector("#playerName").textContent = username;
        setDisplay("loginControls", "none");
        setDisplay("playControls", "block");
    } else {
        setDisplay("loginControls", "block");
        setDisplay("playControls", "none");
    }
}

function loginUser() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", JSON.stringify(currentUsername.value));
    
    let currentPrompt = [{owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Click the Generate button to get a prompt!"}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    generate();
}

function createUser() {

}

function generate() {
    window.location.href = "generator.html";
}

function logout() {

}

function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
        playControlEl.style.display = display;
    }
}
