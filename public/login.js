function activateButton() {
    const button = document.getElementById("buttonLogin");
    button.disabled = false;
}


function login() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", JSON.stringify(currentUsername.value));

    //Load any received prompts from the database
    loadReceived();
    
    let currentPrompt = [{owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Click the Generate button to get a prompt!"}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    window.location.href = "generator.html";
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