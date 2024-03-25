let saves = [];
let currentSave;
let colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
let text;
let promptType;
let username;

async function favorites() {
    username = localStorage.getItem("username");
    username = JSON.parse(username);

    const save1 = document.getElementById("save1");
    const save2 = document.getElementById("save2");
    const save3 = document.getElementById("save3");
    const save4 = document.getElementById("save4");
    const save5 = document.getElementById("save5");
    const save6 = document.getElementById("save6");

    saves = await loadFavorites();
    
    if (saves[0].prompt != "") {
        promptType = saves[0].type;
        save1.textContent = saves[0].owner + ", " + promptType;
        save1.disabled = false;
    }

    if (saves[1].prompt != "") {
        promptType = saves[1].type;
        save2.textContent = saves[1].owner + ", " + promptType;
        save2.disabled = false;
    }

    if (saves[2].prompt != "") {
        promptType = saves[2].type;
        save3.textContent = saves[2].owner + ", " + promptType;
        save3.disabled = false;
    }

    if (saves[3].prompt != "") {
        promptType = saves[3].type;
        save4.textContent = saves[3].owner + ", " + promptType;
        save4.disabled = false;
    }

    if (saves[4].prompt != "") {
        promptType = saves[4].type;
        save5.textContent = saves[4].owner + ", " + promptType;
        save5.disabled = false;
    }

    if (saves[5].prompt != "") {
        promptType = saves[5].type;
        save6.textContent = saves[5].owner + ", " + promptType;
        save6.disabled = false;
    }
    
}

function displaySave(buttonId) {
    //Grab info from database and change paragraph text

    currentSave = document.getElementById(buttonId);

    if (buttonId === "save1") {
        text = saves[0].prompt;
        colors = saves[0].colors;
    } else if (buttonId === "save2") {
        text = saves[1].prompt;
        colors = saves[1].colors;
    } else if (buttonId === "save3") {
        text = saves[2].prompt;
        colors = saves[2].colors;
    } else if (buttonId === "save4") {
        text = saves[3].prompt;
        colors = saves[3].colors;
    } else if (buttonId === "save5") {
        text = saves[4].prompt;
        colors = saves[4].colors;
    } else if (buttonId === "save6") {
        text = saves[5].prompt;
        colors = saves[5].colors;
    }

    setColors(0);
    document.querySelector("#displaySave").innerHTML = text;
}

function setColors(num) {
    if (num < colors.length) {
        let field = "color" + (num + 1);
        document.getElementById(field).style.color = colors[num];
        document.getElementById(field).style.backgroundColor = colors[num];
        setColors(++num, colors);
    }
}

function share() {
    const sharePrompt = [{type: "", prompt: ""}];
    sharePrompt[0].type = promptType;
    sharePrompt[0].colors = colors;
    sharePrompt[0].prompt = text;

    localStorage.removeItem("currentPrompt");
    localStorage.setItem("currentPrompt", JSON.stringify(sharePrompt));
    window.location.href = "share.html";
}

async function deletePrompt() {
    //Remove prompt from database

    const id = currentSave.id;

    if (id === "save1") {
        saves[0].owner = "";
        saves[0].type = "";
        saves[0].prompt = "";
    } else if (id === "save2") {
        saves[1].owner = "";
        saves[1].type = "";
        saves[1].prompt = "";
    } else if (id === "save3") {
        saves[2].owner = "";
        saves[2].type = "";
        saves[2].prompt = "";
    } else if (id === "save4") {
        saves[3].owner = "";
        saves[3].type = "";
        saves[3].prompt = "";
    } else if (id === "save5") {
        saves[4].owner = "";
        saves[4].type = "";
        saves[4].prompt = "";
    } else if (id === "save6") {
        saves[5].owner = "";
        saves[5].type = "";
        saves[5].prompt = "";
    }

    await saveFavorites(saves);

    currentSave.disabled = true;
    currentSave.textContent = "[Empty]";
}

//Save in localStorage and database
async function saveFavorites(saves) {
    try {
      const response = await fetch('/api/favorite', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            username: username,
            favorites: saves,
        }),
      });
    } catch {
        console.log("Error: Failed to save favorites in database.");
    }
}

async function loadFavorites() {
    let favorites = [];

    try {
      const response = await fetch('/api/favorites')
      favorites = await response.json();
      favorites = favorites.favorites;
    } catch {
        console.log("Error: Failed to fetch favorites.");
    }
  
    return favorites;
}