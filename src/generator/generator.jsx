import React from 'react';
import './generator.css';

export function Generator() {
  return (
    <main className='container-fluid bg-white'>
      <div className="card">
        <div className="card-header">
          Generate Prompt
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Options</h2>
                  <fieldset id="setType">
                    <legend>Type</legend>
                    <div class="form-check form-check-inline">
                      <input clasName="form-check-input" type="radio" name="inlineRadioOptions" id="optionFusion" value="optionFusion"/>
                      <label className="form-check-label" for="optionFusion">Fusion</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="optionCharacter" value="optionCharacter"/>
                      <label className="form-check-label" for="optionCharacter">Character</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="optionSituation" value="optionSituation"/>
                      <label className="form-check-label" for="optionSituation">Situation</label>
                    </div>
                  </fieldset>
          
                  <fieldset id="setTopic">
                      <legend>Topic</legend>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="inlineCheckOptions" id="optionFantasy" value="optionFantasy"/>
                        <label className="form-check-label" for="optionFantasy">Fantasy</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="inlineCheckOptions" id="optionRomance" value="optionRomance"/>
                        <label className="form-check-label" for="optionRomance">Romance</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="inlineCheckOptions" id="optionWar" value="optionWar"/>
                        <label className="form-check-label" for="optionWar">War</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="inlineCheckOptions" id="optionFamily" value="optionFamily"/>
                        <label className="form-check-label" for="optionFamily">Family</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="inlineCheckOptions" id="optionSupernatural" value="optionSupernatural"/>
                        <label className="form-check-label" for="optionSupernatural">Supernatural</label>
                      </div>
                    </fieldset>
                    
                    <div className="col-md-12 text-center">
                      <button type="button" className="btn btn-primary" id="buttonGenerate" onclick="generate()">Generate</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Prompt</h2>
                  <p id="displayPrompt">Click the Generate button to get a prompt!</p>
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <table className="table table-responsive">
                        <th id="color1">color</th>
                        <th id="color2">color</th>
                        <th id="color3">color</th>
                        <th id="color4">color</th>
                        <th id="color5">color</th>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="button" class="btn btn-primary" id="buttonFavorite" onclick="favorite()">Favorite</button>
                    <button className="btn btn-primary" id="buttonShareGen" onclick="share()">Share</button>
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