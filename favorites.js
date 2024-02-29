const saveInfo1 = "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine";
const saveInfo2 = "Motivation: Justice <br> Flaw: Whiny <br> Strength: Philosophical <br> Talent: Public Speaking <br> Color: Aqua";
const saveInfo3 = "Setting: Movie Theatre <br> Conflict: Character vs. Self <br> Theme: Trust";
const saveInfo4 = "";
const saveInfo5 = "";
const saveInfo6 = "";




function favorites() {
    const save1 = document.getElementById("save1");
    const save2 = document.getElementById("save2");
    const save3 = document.getElementById("save3");
    const save4 = document.getElementById("save4");
    const save5 = document.getElementById("save5");
    const save6 = document.getElementById("save6");

    //Grab info from database and change saves
    
    //Placeholders
    save1.textContent = "[Fusion]";
    save1.disabled = false;

    save2.textContent = "[Character]";
    save2.disabled = false;

    save3.textContent = "[Situation]";
    save3.disabled = false;
}

function displaySave(buttonId) {
    //Grab info from database and change paragraph text

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