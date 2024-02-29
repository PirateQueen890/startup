let saves = [];
let currentSave;

function favorites() {
    const save1 = document.getElementById("save1");
    const save2 = document.getElementById("save2");
    const save3 = document.getElementById("save3");
    const save4 = document.getElementById("save4");
    const save5 = document.getElementById("save5");
    const save6 = document.getElementById("save6");

    saves = [save1, save2, save3, save4, save5, save6];

    //Grab info from database and change saves
    
    //Placeholders
    save1.textContent = "[Fusion]";
    save1.disabled = false;

    save2.textContent = "[Character]";
    save2.disabled = false;

    save3.textContent = "[Situation]";
    save3.disabled = false;

    localStorage.setItem("favorites", saves);
}

function displaySave(buttonId) {
    //Grab info from database and change paragraph text

    currentSave = document.getElementById(buttonId);

    if (buttonId === "save1") {
        document.querySelector("#displaySave").innerHTML = saveInfo1;
    } else if (buttonId === "save2") {
        document.querySelector("#displaySave").innerHTML = saveInfo2;
    } else if (buttonId === "save3") {
        document.querySelector("#displaySave").innerHTML = saveInfo3;
    } else if (buttonId === "save4") {
        document.querySelector("#displaySave").innerHTML = saveInfo4;
    } else if (buttonId === "save5") {
        document.querySelector("#displaySave").innerHTML = saveInfo5;
    } else if (buttonId === "save6") {
        document.querySelector("#displaySave").innerHTML = saveInfo6;
    }
}

function share() {
    const currentPrompt = document.querySelector("#displaySave");
    localStorage.setItem("currentPrompt", currentPrompt.textContent);
    window.location.href = "share.html";
}

function deletePrompt() {
    //Remove prompt from database

    currentSave.disabled = true;
    currentSave.textContent = "[Empty]";
}