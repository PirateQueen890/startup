let saves = [];
let currentSave;
let text;
let promptType;

function favorites() {
    const save1 = document.getElementById("save1");
    const save2 = document.getElementById("save2");
    const save3 = document.getElementById("save3");
    const save4 = document.getElementById("save4");
    const save5 = document.getElementById("save5");
    const save6 = document.getElementById("save6");

    saves = localStorage.getItem("favorites");
    saves = JSON.parse(saves);

    
    if (saves[0].prompt != "") {
        promptType = saves[0].type;
        save1.textContent = promptType;
        save1.disabled = false;
    }

    if (saves[1].prompt != "") {
        promptType = saves[1].type;
        save2.textContent = promptType;
        save2.disabled = false;
    }

    if (saves[2].prompt != "") {
        promptType = saves[2].type;
        save3.textContent = promptType;
        save3.disabled = false;
    }

    if (saves[3].prompt != "") {
        promptType = saves[3].type;
        save4.textContent = promptType;
        save4.disabled = false;
    }

    if (saves[4].prompt != "") {
        promptType = saves[4].type;
        save5.textContent = promptType;
        save5.disabled = false;
    }

    if (saves[5].prompt != "") {
        promptType = saves[5].type;
        save6.textContent = promptType;
        save6.disabled = false;
    }
    
}

function displaySave(buttonId) {
    //Grab info from database and change paragraph text

    currentSave = document.getElementById(buttonId);

    if (buttonId === "save1") {
        text = saves[0].prompt;
    } else if (buttonId === "save2") {
        text = saves[1].prompt;
    } else if (buttonId === "save3") {
        text = saves[2].prompt;
    } else if (buttonId === "save4") {
        text = saves[3].prompt;
    } else if (buttonId === "save5") {
        text = saves[4].prompt;
    } else if (buttonId === "save6") {
        text = saves[5].prompt;
    }

    document.querySelector("#displaySave").innerHTML = text;
}

function share() {
    const sharePrompt = [{type: "", prompt: ""}];
    sharePrompt[0].type = promptType;
    sharePrompt[0].prompt = text;

    localStorage.removeItem("currentPrompt");
    localStorage.setItem("currentPrompt", JSON.stringify(sharePrompt));
    window.location.href = "share.html";
}

function deletePrompt() {
    //Remove prompt from database

    const id = currentSave.id;

    if (id === "save1") {
        saves[0].type = "";
        saves[0].prompt = "";
    } else if (id === "save2") {
        saves[1].type = "";
        saves[1].prompt = "";
    } else if (id === "save3") {
        saves[2].type = "";
        saves[2].prompt = "";
    } else if (id === "save4") {
        saves[3].type = "";
        saves[3].prompt = "";
    } else if (id === "save5") {
        saves[4].type = "";
        saves[4].prompt = "";
    } else if (id === "save6") {
        saves[5].type = "";
        saves[5].prompt = "";
    }

    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", JSON.stringify(saves));

    currentSave.disabled = true;
    currentSave.textContent = "[Empty]";
}