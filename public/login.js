function activateButton() {
    const button = document.getElementById("buttonLogin");
    button.disabled = false;
}


function login() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", JSON.stringify(currentUsername.value));

    //If there is a username, load favorites from database
    loadFavorites();

    //Load any received prompts from the database
    loadReceived();
    
    let currentPrompt = [{owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Click the Generate button to get a prompt!"}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    window.location.href = "generator.html";
}

async function loadFavorites() {
    let favorites = [];

    try {
      const response = await fetch("/api/favorites");
      favorites = await response.json();
    } catch {
        console.log("Error: Failed to fetch favorites.");
    }
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

async function loadReceived() {
    let received = [];

    try {
      const response = await fetch("/api/receives");
      received = await response.json();
    } catch {
        console.log("Error: Failed to fetch receives.");
    }
  
    localStorage.setItem("received", JSON.stringify(received));
}