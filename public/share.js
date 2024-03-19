let currentPrompt;
let received;
let currentReceived;
let promptType;

function loadPage() {
    currentPrompt = localStorage.getItem("currentPrompt");
    currentPrompt = JSON.parse(currentPrompt);

    setColors(0, currentPrompt[0].colors);
    document.querySelector("#displayCurrentPrompt").innerHTML = currentPrompt[0].prompt;

    const received1 = document.getElementById("received1");
    const received2 = document.getElementById("received2");
    const received3 = document.getElementById("received3");
    const received4 = document.getElementById("received4");
    const received5 = document.getElementById("received5");
    const received6 = document.getElementById("received6");

    received = localStorage.getItem("received");
    received = JSON.parse(received);

    
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

    receive();
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

function share() {
    const shareUsername = document.querySelector("#friendUsername");
    localStorage.setItem("shareUsername", shareUsername.value);

    const request = createRequest();

    sendRequest(request)
    .then((request) => returnRequest(request))
    .catch((request) => {
        failedRequest(request);
    });
}

function createRequest(request) {
    const requestElement = document.createElement("li");
    request = { element: requestElement, id: localStorage.getItem("shareUsername") };

    requestElement.innerHTML = `<span>[${request.id}] 😄 <i>Sending</i> ...</span>`;
    const requests = document.getElementById("requests");
    requests.appendChild(requestElement);

    return request;
}

function sendRequest(request) {
    return new Promise((resolve, reject) => {
        webSocketRequest(request, resolve, reject, 3000);
      });
}

function returnRequest(request) {
    request.element.innerHTML = `<span>[${request.id}] 🥳 <b>Sent</b>!</span>`;
}

function webSocketRequest(request, resolve, reject, time) {
    //Websocket placeholder
    setTimeout(() => resolve(request), time);
}

function failedRequest(request) {
    request.element.innerHTML = `<span>[${request.id}] 😔 <b>Failed</b>!</span>`;
}

async function receive() {
    //websocket placeholder
    const delay = ms => new Promise(res => setTimeout(res, ms));

    await delay(30000);
    const space = findSpace();
    if (space) {
        loadPage();
    }
}

function findSpace() {
    //websocket placeholder
    const receivePrompt = [{ owner: "Marian1010", type: "Character", colors: ["rgb(178,148,24)","rgb(210,36,42)","rgb(136,11,36)","rgb(149,11,35)","rgb(88,15,30)"], prompt: "This is an example prompt: Peace Machine" }];
    let found = false;

    for (i = 0; i < received.length; ++i) {
        if (received[i].prompt === "") {
            received[i].owner = receivePrompt[0].owner;
            received[i].type = receivePrompt[0].type;
            received[i].colors = receivePrompt[0].colors;
            received[i].prompt = receivePrompt[0].prompt;
            localStorage.removeItem("received");
            localStorage.setItem("received", JSON.stringify(received));
            saveReceived(received);
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

function favorite() {
    let saves = localStorage.getItem("favorites");
    saves = JSON.parse(saves);
    let found = false;

    for (i = 0; i < saves.length; ++i) {
        if (saves[i].prompt === "") {
            saves[i].owner = currentPrompt[0].owner;
            saves[i].type = currentPrompt[0].type;
            saves[i].colors = currentPrompt[0].colors;
            saves[i].prompt = currentPrompt[0].prompt;
            saveFavorites(saves);
            found = true;
            break;
        }
    }

    let message;

    if (found) {
        message = currentPrompt[0].prompt + "<br> Success!";
        document.querySelector("#displayCurrentPrompt").innerHTML=message;
    } else {
        message = currentPrompt[0].prompt + "<br> FAILED: No space. Delete a favorited prompt and try again.";
        document.querySelector("#displayCurrentPrompt").innerHTML=message;
    }
}

//Save in localStorage and database
async function saveFavorites(saves) {
    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", JSON.stringify(saves));

    try {
      const response = await fetch('/api/favorite', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(saves),
      });
    } catch {
        console.log("Error: Failed to save favorites in database.");
    }
}

function deleteReceived() {
    //Remove received prompt from database

    const id = currentReceived.id;

    if (id === "received1") {
        received[0].owner = "";
        received[0].type = "";
        received[0].prompt = "";
    } else if (id === "received2") {
        received[1].owner = "";
        received[1].type = "";
        received[1].prompt = "";
    } else if (id === "received3") {
        received[2].owner = "";
        received[2].type = "";
        received[2].prompt = "";
    } else if (id === "received4") {
        received[3].owner = "";
        received[3].type = "";
        received[3].prompt = "";
    } else if (id === "received5") {
        received[4].owner = "";
        received[4].type = "";
        received[4].prompt = "";
    } else if (id === "received6") {
        received[5].owner = "";
        received[5].type = "";
        received[5].prompt = "";
    }

    saveReceived(received);

    currentReceived.disabled = true;
    currentReceived.textContent = "[Empty]";

    //websocket placeholder
    receive();
}

//Save in localStorage and database
async function saveReceived(received) {
    localStorage.removeItem("received");
    localStorage.setItem("received", JSON.stringify(received));

    try {
      const response = await fetch('/api/received', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(received),
      });
    } catch {
        console.log("Error: Failed to save received in database.");
    }
}