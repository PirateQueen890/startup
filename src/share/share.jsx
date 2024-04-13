import React from 'react';
import './share.css';

export function Share() {
  let currentPrompt = JSON.parse(localStorage.getItem("currentPrompt"));
  let received;
  let currentReceived;
  let promptType;
  let username = JSON.parse(localStorage.getItem("stringUsername"));
  let listSize = 0;

  React.useEffect(() => {
    loadReceivedButtons();
    setColors(0, currentPrompt[0].colors);
    document.querySelector("#displayCurrentPrompt").innerHTML = currentPrompt[0].prompt;
    webSocketSetup();
  }, []);

  async function loadReceivedButtons() {
      const received1 = document.getElementById("received1");
      const received2 = document.getElementById("received2");
      const received3 = document.getElementById("received3");
      const received4 = document.getElementById("received4");
      const received5 = document.getElementById("received5");
      const received6 = document.getElementById("received6");

      const receivedButtons = [received1, received2, received3, received4, received5, received6];

      received = await loadReceived();

      for (let i = 0; i < receivedButtons.length; ++i) {
          if (received[i].prompt != "") {
            promptType = received[i].type;
            receivedButtons[i].textContent = received[i].owner + ", " + promptType;
            receivedButtons[i].disabled = false;
          } else {
            receivedButtons[i].disabled = true;
          }
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

      for (let i = 0; i < received.length; ++i) {
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

      for (let i = 0; i < saves.length; ++i) {
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

      for (let i = 0; i < received.length; ++i) {
          let receivedId = "received" + (i + 1);
          if (id === receivedId) {
              received[i].owner = "";
              received[i].type = "";
              received[i].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
              received[i].prompt = "";
          }
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

  return (
    <main className='container-fluid bg-white'>
      <div className="card" id="cardShare">
      <div className="card-header">
        Share Prompt
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4">
            <div className="card" id="cardShareInput">
              <div className="card-body">
                <h2 className="card-titleSh">Share</h2>
                <div className="d-grid gap-1" id="shareLog">
                    <p id="instructions">Select the blue <b>Share</b> button to forward this prompt to all other users on this page.</p>
                    <ol id="requests"></ol>
                    <button className="btn btn-primary" id="buttonShareFinal" onClick={() => share()} >Share</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" id="cardDisplayReceivedList">
              <div className="card-body">
                <h2 className="card-titleSh">Received</h2>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary" id="received1" type="button" onClick={() => displayReceived("received1")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="received2" type="button" onClick={() => displayReceived("received2")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="received3" type="button" onClick={() => displayReceived("received3")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="received4" type="button" onClick={() => displayReceived("received4")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="received5" type="button" onClick={() => displayReceived("received5")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="received6" type="button" onClick={() => displayReceived("received6")} >[Empty]</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" id="cardDisplayCurrentPrompt">
              <div className="card-body">
                <h2 className="card-titleSh">Current Prompt</h2>
                <p id="displayCurrentPrompt">Click a received prompt to see it!</p>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                              <th className="colorSlot" id="color1">color</th>
                              <th className="colorSlot" id="color2">color</th>
                              <th className="colorSlot" id="color3">color</th>
                              <th className="colorSlot" id="color4">color</th>
                              <th className="colorSlot" id="color5">color</th>
                            </tr>
                        </thead>
                    </table>
                  </div>
                </div>
                <div id="favButtonDiv">
                    <button type="button" className="btn btn-danger" id="buttonDelete" onClick={() => deleteReceived()} >Delete</button>
                    <button className="btn btn-primary" id="buttonFavShare" onClick={() => favorite()} >Favorite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}