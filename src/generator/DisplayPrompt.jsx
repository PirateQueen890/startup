import React from 'react';
import './generator.css';
import { AuthState } from './login/authState';

export function DisplayPrompt() {
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
      </main>
    );
  }