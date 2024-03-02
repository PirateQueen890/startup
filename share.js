let currentPrompt;
let received;
let promptType;
let text;

function loadPage() {
    currentPrompt = localStorage.getItem("currentPrompt");
    currentPrompt = JSON.parse(currentPrompt);

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
        received1.textContent = promptType;
        received1.disabled = false;
    }

    if (received[1].prompt != "") {
        promptType = received[1].type;
        received2.textContent = promptType;
        received2.disabled = false;
    }

    if (received[2].prompt != "") {
        promptType = received[2].type;
        received3.textContent = promptType;
        received3.disabled = false;
    }

    if (received[3].prompt != "") {
        promptType = received[3].type;
        received4.textContent = promptType;
        received4.disabled = false;
    }

    if (received[4].prompt != "") {
        promptType = received[4].type;
        received5.textContent = promptType;
        received5.disabled = false;
    }

    if (received[5].prompt != "") {
        promptType = received[5].type;
        received6.textContent = promptType;
        received6.disabled = false;
    }
}

function displayReceived(buttonId) {
    currentPrompt = document.getElementById(buttonId);

    if (buttonId === "received1") {
        text = received[0].prompt;
    } else if (buttonId === "received2") {
        text = received[1].prompt;
    } else if (buttonId === "received3") {
        text = received[2].prompt;
    } else if (buttonId === "received4") {
        text = received[3].prompt;
    } else if (buttonId === "received5") {
        text = received[4].prompt;
    } else if (buttonId === "received6") {
        text = received[5].prompt;
    }

    document.querySelector("#displayCurrentPrompt").innerHTML = text;
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
        webSocketRequest(request, resolve, reject);
      });
}

function returnRequest(request) {
    request.element.innerHTML = `<span>[${request.id}] 🥳 <b>Sent</b>!</span>`;
}

function webSocketRequest(request, resolve, reject) {
    //Websocket placeholder
    setTimeout(() => resolve(request), 3000);
}

function failedRequest(request) {
    request.element.innerHTML = `<span>[${request.id}] 😔 <b>Failed</b>!</span>`;
}

function receive() {
    //websocket placeholder
    const receiveElement = document.createElement("li");
    const receive = { element: receiveElement, id: "ThePumpkinKing", prompt: "This is an example prompt: Peace Machine" };
    
    receiveElement.innerHTML = `<span>[${receive.id}] 😄 <i>Received</i>!</span>`;
}

function favorite() {
    let saves = localStorage.getItem("favorites");
    saves = JSON.parse(saves);
    let found = false;

    for (i = 0; i < saves.length; ++i) {
        if (saves[i].prompt === "") {
            saves[i].type = currentPrompt[0].type;
            saves[i].prompt = currentPrompt[0].prompt;
            localStorage.removeItem("favorites");
            localStorage.setItem("favorites", JSON.stringify(saves));
            found = true;
            break;
        }
    }

    let message;

    if (found === true) {
        localStorage.removeItem("favorites");
        localStorage.setItem("favorites", JSON.stringify(saves));
        message = currentPrompt[0].prompt + "<br> Success!";
        document.querySelector("#displayPrompt").innerHTML=message;
    } else {
        message = currentPrompt[0].prompt + "<br> FAILED: No space. Delete a favorited prompt and try again.";
        document.querySelector("#displayPrompt").innerHTML=message;
    }
}