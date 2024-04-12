import React from 'react';
import { Options } from "./options";
import { DisplayPrompt } from "./DisplayPrompt";
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
            <Options />
            <DisplayPrompt />
          </div>
        </div>
      </div>
    </main>
  );
}