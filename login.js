function login() {
    const currentUsername = document.querySelector("#username");
    localStorage.setItem("username", currentUsername.value);

    //If there is a username, load favorites from database
    if (currentUsername.value != "" | undefined) {
        let favorites = [
            { name: "save1", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
            { name: "save2", type: "Character", prompt: "Motivation: Justice <br> Flaw: Whiny <br> Strength: Philosophical <br> Talent: Public Speaking <br> Color: Aqua" },
            { name: "save3", type: "Situation", prompt: "Setting: Movie Theatre <br> Conflict: Character vs. Self <br> Theme: Trust" },
            { name: "save4", type: "", prompt: "" },
            { name: "save5", type: "", prompt: "" },
            { name: "save6", type: "", prompt: "" },
        ];
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
    let currentPrompt = [{type: "", prompt: ""}];
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));

    window.location.href = "generator.html";
}