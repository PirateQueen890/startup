import React from 'react';
import './about.css';

export function About() {
  return (
    <main className='container-fluid bg-white text-center'>
      <img src="writing.jpg" className="img-thumbnail" alt="Pen Writing" width="300"/>
      <h2>About</h2>
      <p>Writer's block keeping you from finishing your novel? Check out this prompt generating app, designed to put together random ideas and words to get creative juices flowing. Choose one of three generation types to get thought provoking words, fusions of words, and descriptions of characters. Filter prompt generation by genre to get a prompt closer to what you're looking for, and log in to save your favorite prompts for later stories. Who knows which prompt will inspire a best-selling novel? </p>
      <p>Thank you for visiting OneClickInspiration's prompt generator!</p>
    </main>
  );
}