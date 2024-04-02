let currentPrompt;
let received;
let currentReceived;
let promptType;
let username;
let listSize = 0;

async function loadPage() {
    currentPrompt = localStorage.getItem("currentPrompt");
    currentPrompt = JSON.parse(currentPrompt);

    username = localStorage.getItem("username");
    username = JSON.parse(username);

    setColors(0, currentPrompt[0].colors);
    document.querySelector("#displayCurrentPrompt").innerHTML = currentPrompt[0].prompt;

    await loadReceivedButtons();

    webSocketSetup();
}

async function loadReceivedButtons() {
    const received1 = document.getElementById("received1");
    const received2 = document.getElementById("received2");
    const received3 = document.getElementById("received3");
    const received4 = document.getElementById("received4");
    const received5 = document.getElementById("received5");
    const received6 = document.getElementById("received6");

    received = await loadReceived();
    
    if (received[0].prompt != "") {
        promptType = received[0].type;
        received1.textContent = received[0].owner + ", " + promptType;
        received1.disabled = false;
    }

    if (received[1].prompt != "") {
        promptType = received[1].type;
        received2.textContent = received[1].owner + ", " + promptType;
        received2.disabled = false;
    }

    if (received[2].prompt != "") {
        promptType = received[2].type;
        received3.textContent = received[2].owner + ", " + promptType;
        received3.disabled = false;
    }

    if (received[3].prompt != "") {
        promptType = received[3].type;
        received4.textContent = received[3].owner + ", " + promptType;
        received4.disabled = false;
    }

    if (received[4].prompt != "") {
        promptType = received[4].type;
        received5.textContent = received[4].owner + ", " + promptType;
        received5.disabled = false;
    }

    if (received[5].prompt != "") {
        promptType = received[5].type;
        received6.textContent = received[5].owner + ", " + promptType;
        received6.disabled = false;
    }
}

function displayReceived(buttonId) {
    currentReceived = document.getElementById(buttonId);
    let index;

    if (buttonId === "received1") {
        index = 0;
    } else if (buttonId === "received2") {
        index = 1;
    } else if (buttonId === "received3") {
        index = 2;
    } else if (buttonId === "received4") {
        index = 3;
    } else if (buttonId === "received5") {
        index = 4;
    } else if (buttonId === "received6") {
        index = 5;
    }

    document.querySelector("#displayCurrentPrompt").innerHTML = received[index].prompt;

    currentPrompt = [{owner: "", type: "", colors: "", prompt: ""}];
    currentPrompt[0].owner = received[index].owner;
    currentPrompt[0].type = received[index].type;
    currentPrompt[0].colors = received[index].colors;
    currentPrompt[0].prompt = received[index].prompt;

    setColors(0, currentPrompt[0].colors);
}

function setColors(num, colors) {
    if (num < colors.length) {
        let field = "color" + (num + 1);
        document.getElementById(field).style.color = colors[num];
        document.getElementById(field).style.backgroundColor = colors[num];
        setColors(++num, colors);
    }
}

let socket;

async function webSocketSetup() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        displayMsg("😄", username, "Connected!");
    };
    socket.onclose = (event) => {
        displayMsg("😔", username, "Disconnected.");
    };
    socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        receive(msg);
    };
}

function displayMsg(emo, from, msg) {
    const requestElement = document.createElement("li");
    ++listSize;

    requestElement.innerHTML = `<span>[${from}] ${emo} <i>${msg}</i></span>`;;

    const requests = document.getElementById("requests");

    if (listSize > 4) {
        requests.removeChild(requests.firstElementChild);
    }
    requests.appendChild(requestElement);
}

function  broadcastEvent(from, type, value) {
    const event = {
        from: from,
        type: type,
        value: value,
    };
    socket.send(JSON.stringify(event));
}

function share() {
    if (currentPrompt[0].type == "") {
        displayMsg("🤔", username, "Please select a prompt.");
    } else {
        broadcastEvent(username, "out", currentPrompt);
        displayMsg("🥳", username, "Shared!");
    }
}

async function receive(msg) {
    let avaliableSpace = await findSpace(msg.value);

    if (avaliableSpace) {
        displayMsg("🤩", msg.from, "New prompt!");
        await loadReceivedButtons();
    } else {
        displayMsg("😵", msg.from, "No space!");
    }
    
}

async function findSpace(receivePrompt) {
    let found = false;

    for (i = 0; i < received.length; ++i) {
        if (received[i].prompt === "") {
            received[i].owner = receivePrompt[0].owner;
            received[i].type = receivePrompt[0].type;
            received[i].colors = receivePrompt[0].colors;
            received[i].prompt = receivePrompt[0].prompt;
            await saveReceived(received);
            found = true;
            break;
        }
    }

    let message;

    if (!found) {
        message = currentPrompt[0].prompt + "<br> You're out of space! Check your received prompts to make some room.";
        document.querySelector("#displayCurrentPrompt").innerHTML = message;
    }

    return found;
}

async function favorite() {
    let saves = await loadFavorites();
    let found = false;
    let message;

    for (i = 0; i < saves.length; ++i) {
        if (saves[i].prompt === "") {
            saves[i].owner = currentPrompt[0].owner;
            saves[i].type = currentPrompt[0].type;
            saves[i].colors = currentPrompt[0].colors;
            saves[i].prompt = currentPrompt[0].prompt;
            await saveFavorites(saves);
            found = true;
            break;
        }
    }

    if (found) {
        message = currentPrompt[0].prompt + "<br> <i>Success!</i>";
        document.querySelector("#displayCurrentPrompt").innerHTML=message;
    } else {
        message = currentPrompt[0].prompt + "<br> <i>FAILED: No space. Delete a favorited prompt and try again.</i>";
        document.querySelector("#displayCurrentPrompt").innerHTML=message;
    }
}

async function deleteReceived() {
    //Remove received prompt from database

    const id = currentReceived.id;

    if (id === "received1") {
        received[0].owner = "";
        received[0].type = "";
        received[0].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
        received[0].prompt = "";
    } else if (id === "received2") {
        received[1].owner = "";
        received[1].type = "";
        received[1].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
        received[1].prompt = "";
    } else if (id === "received3") {
        received[2].owner = "";
        received[2].type = "";
        received[2].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
        received[2].prompt = "";
    } else if (id === "received4") {
        received[3].owner = "";
        received[3].type = "";
        received[3].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
        received[3].prompt = "";
    } else if (id === "received5") {
        received[4].owner = "";
        received[4].type = "";
        received[4].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
        received[4].prompt = "";
    } else if (id === "received6") {
        received[5].owner = "";
        received[5].type = "";
        received[5].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
        received[5].prompt = "";
    }

    await saveReceived(received);

    currentReceived.disabled = true;
    currentReceived.textContent = "[Empty]";

    //websocket placeholder
    receive();
}

//Save in localStorage and database
async function saveReceived(received) {
    try {
        const response = await fetch('/api/received', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username: username,
                received: received,
            }),
          });
    } catch {
        console.log("Error: Failed to save received in database.");
    }
}

async function loadReceived() {
    let received = [];

    try {
        const response = await fetch("/api/receives");
        received = await response.json();
        received = received.received;
    } catch {
        console.log("Error: Failed to fetch receives.");
    }
  
    return received;
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