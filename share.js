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
    //Websocket
    resolve(request);
}

function failedRequest(request) {
    request.element.innerHTML = `<span>[${request.id}] 😔 <b>Failed</b>!</span>`;
}