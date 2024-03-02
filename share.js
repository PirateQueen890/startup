let currentPrompt;

function loadPage() {
    currentPrompt = localStorage.getItem("currentPrompt");
    currentPrompt = JSON.parse(currentPrompt);

    document.querySelector("#displayCurrentPrompt").innerHTML = currentPrompt[0].prompt;
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