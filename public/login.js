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
        document.getElementById("navFav").remove();
    }
}

function loginUser() {
    loginOrCreate(`/api/auth/login`);
}

function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#userPassword')?.value;

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ username: username, password: password }),
    });
    
    if (response.ok) {
        localStorage.setItem("username", JSON.stringify(username));
        const currentPrompt = [{owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Click the Generate button to get a prompt!"}];
        localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));
        generate();
    } else {
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
  }

function generate() {
    window.location.href = "generator.html";
}

function logout() {
    localStorage.removeItem("username");
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
        playControlEl.style.display = display;
    }
}
