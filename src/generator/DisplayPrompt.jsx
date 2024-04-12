import React from 'react';
import './generator.css';
//import { AuthState } from './login/authState';

export function DisplayPrompt() {
    function loadDisplay() {
        currentPrompt = localStorage.getItem("currentPrompt");
        currentPrompt = JSON.parse(currentPrompt);
    
        username = localStorage.getItem("username");
        username = JSON.parse(username);
    
        if (username == null) {
            console.log("Not logged in.")
            document.getElementById("buttonFavorite").disabled = true;
            document.getElementById("buttonShareGen").disabled = true;
            document.getElementById("navFav").remove();
        }
    
        setColors(0, currentPrompt[0].colors);
        document.querySelector("#displayPrompt").innerHTML = currentPrompt[0].prompt;
    }

    function setColors(num, colors) {
        if (num < colors.length) {
            let field = "color" + (num + 1);
            document.getElementById(field).style.color = colors[num];
            document.getElementById(field).style.backgroundColor = colors[num];
            setColors(++num, colors);
        }
    }
    
    function storeCurrentPrompt() {
        localStorage.removeItem("currentPrompt");
        localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));
    }
    
    function share() {
        storeCurrentPrompt();
        window.location.href = "share.html";
    }
    
    async function favorite() {
        let saves = await loadFavorites();
        let found = false;
    
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
    
        let message;
    
        if (found) {
            message = currentPrompt[0].prompt + "<br> <i>Success!</i>";
            document.querySelector("#displayPrompt").innerHTML=message;
        } else {
            message = currentPrompt[0].prompt + "<br> <i>FAILED: No space. Delete a favorited prompt and try again.</i>";
            document.querySelector("#displayPrompt").innerHTML=message;
        }
    }
    
    //Update in localStorage and database
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
            <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                <h2 className="card-title">Prompt</h2>
                <p id="displayPrompt">Click the Generate button to get a prompt!</p>
                <div className="row justify-content-center">
                    <div className="col-auto">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th id="color1">color</th>
                                <th id="color2">color</th>
                                <th id="color3">color</th>
                                <th id="color4">color</th>
                                <th id="color5">color</th>
                            </tr>
                        </thead>
                    </table>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn btn-primary" id="buttonFavorite" onClick={() => favorite()}>Favorite</button>
                    <button className="btn btn-primary" id="buttonShareGen" onClick={() => share()}>Share</button>
                </div>
                </div>
            </div>
            </div>
      </main>
    );
  }