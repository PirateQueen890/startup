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
    let received = [
        { id: "received1", owner: "ThePumpkinKing", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
        { id: "received2", owner: "", type: "", prompt: "" },
        { id: "received3", owner: "", type: "", prompt: "" },
        { id: "received4", owner: "", type: "", prompt: "" },
        { id: "received5", owner: "", type: "", prompt: "" },
        { id: "received6", owner: "", type: "", prompt: "" },
    ];
    localStorage.setItem("received", JSON.stringify(received));
    
    let currentPrompt = [{owner: "", type: "", prompt: "Click the Generate button to get a prompt!"}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    window.location.href = "generator.html";
}

async function loadFavorites() {
    let favorites = [];

    try {
      const response = await fetch("/api/favorites");
      favorites = await response.json();
    } catch {
        let favorites = [
            { id: "save1", owner: "ThePumpkinKing", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
            { id: "save2", owner: "YilingPatriarch", type: "Character", prompt: "Motivation: Justice <br> Flaw: Whiny <br> Strength: Philosophical <br> Talent: Public Speaking <br> Color: Aqua" },
            { id: "save3", owner: "ThePumpkinKing", type: "Situation", prompt: "Setting: Movie Theatre <br> Conflict: Character vs. Self <br> Theme: Trust" },
            { id: "save4", owner: "", type: "", prompt: "" },
            { id: "save5", owner: "", type: "", prompt: "" },
            { id: "save6", owner: "", type: "", prompt: "" },
        ];
    }
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

