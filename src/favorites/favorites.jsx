import React from 'react';
import { useNavigate } from 'react-router-dom';
import './favorites.css';

export function Favorites() {
  let saves = [];
  let currentSave;
  let colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
  let text;
  let promptType;
  let username = JSON.parse(localStorage.getItem("stringUsername"));

  React.useEffect(() => {
    loadButtons();
    setColors(0);
  }, []);

  async function loadButtons() {
      const save1 = document.getElementById("save1");
      const save2 = document.getElementById("save2");
      const save3 = document.getElementById("save3");
      const save4 = document.getElementById("save4");
      const save5 = document.getElementById("save5");
      const save6 = document.getElementById("save6");

      const saveButtons = [save1, save2, save3, save4, save5, save6];

      saves = await loadFavorites();

      for (let i = 0; i < saveButtons.length; ++i) {
          if (saves[i].prompt != "") {
            promptType = saves[i].type;
            saveButtons[i].textContent = saves[i].owner + ", " + promptType;
          } else {
            saveButtons[i].disabled = true;
          }
      }
  }

  const navigate = useNavigate();

  function displaySave(buttonId) {
      //Grab info from database and change paragraph text

      currentSave = document.getElementById(buttonId);

      for (let i = 0; i < saves.length; ++i) {
          let saveId = "save" + (i + 1);
          if (buttonId === saveId) {
            text = saves[i].prompt;
            colors = saves[i].colors;
            break;
          }
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
      navigate('/share');
  }

  async function deletePrompt() {
      //Remove prompt from database

      const id = currentSave.id;

      for (let i = 0; i < saves.length; ++i) {
          let saveId = "save" + (i + 1);
          if (id === saveId) {
            saves[i].owner = "";
            saves[i].type = "";
            saves[i].colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
            saves[i].prompt = "";
          }
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

  return (
    <main className='container-fluid bg-white'>
      <div className="card" id="cardFavorites">
      <div className="card-header">
        Favorite Prompts
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="card" id="cardSaved">
              <div className="card-body">
                <h2 className="card-titleFav">Save files</h2>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary" id="save1" type="button" onClick={() => displaySave("save1")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="save2" type="button" onClick={() => displaySave("save2")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="save3" type="button" onClick={() => displaySave("save3")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="save4" type="button" onClick={() => displaySave("save4")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="save5" type="button" onClick={() => displaySave("save5")} >[Empty]</button>
                  <button className="btn btn-outline-primary" id="save6" type="button" onClick={() => displaySave("save6")} >[Empty]</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" id="cardDisplayPrompt">
              <div className="card-body">
                <h2 className="card-titleFav">Prompt</h2>
                <p id="displaySave" className="displaySaveP">Click a save file to see a favorited prompt!</p>
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
                <div className="col-md-12 text-center">
                  <button type="button" className="btn btn-danger" id="buttonDelete" onClick={() => deletePrompt()}>Delete</button>
                  <button className="btn btn-primary" id="buttonShareFav" onClick={() => share()}>Share</button>
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