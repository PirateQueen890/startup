function activateButton() {
    const button = document.getElementById("buttonLogin");
    button.disabled = false;
}


function login() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", currentUsername.value);

    //If there is a username, load favorites from database
    let favorites = [
        { name: "save1", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
        { name: "save2", type: "Character", prompt: "Motivation: Justice <br> Flaw: Whiny <br> Strength: Philosophical <br> Talent: Public Speaking <br> Color: Aqua" },
        { name: "save3", type: "Situation", prompt: "Setting: Movie Theatre <br> Conflict: Character vs. Self <br> Theme: Trust" },
        { name: "save4", type: "", prompt: "" },
        { name: "save5", type: "", prompt: "" },
        { name: "save6", type: "", prompt: "" },
    ];
    localStorage.setItem("favorites", JSON.stringify(favorites));

    //Load any received prompt from the database
    let received = [
        { name: "received1", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
        { name: "received2", type: "", prompt: "" },
        { name: "received3", type: "", prompt: "" },
        { name: "received4", type: "", prompt: "" },
        { name: "received5", type: "", prompt: "" },
        { name: "received6", type: "", prompt: "" },
    ];
    localStorage.setItem("received", JSON.stringify(received));
    
    let currentPrompt = [{type: "", prompt: "Click the Generate button to get a prompt!"}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    window.location.href = "generator.html";
}