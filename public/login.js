function activateButton() {
    const button = document.getElementById("buttonLogin");
    button.disabled = false;
}


function login() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", JSON.stringify(currentUsername.value));

    //If there is a username, load favorites from database
    loadFavorites();

    //Load any received prompt from the database
    loadReceived();
    
    let currentPrompt = [{owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "Click the Generate button to get a prompt!"}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    window.location.href = "generator.html";
}

async function loadFavorites() {
    let favorites = [];

    try {
      const response = await fetch("/api/favorites");
      favorites = await response.json();
    } catch {
        favorites = [
            { id: "save1", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "save2", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "save3", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "save4", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "save5", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "save6", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
        ];
    }
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

async function loadReceived() {
    let received = [];

    try {
      const response = await fetch("/api/receives");
      received = await response.json();
    } catch {
        received = [
            { id: "received1", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "received2", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "received3", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "received4", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "received5", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
            { id: "received6", owner: "", type: "", colors: [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]], prompt: "" },
        ];
    }
  
    localStorage.setItem("received", JSON.stringify(received));
}