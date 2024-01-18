# startup
Startup application for CS 260 class

## Elevator Pitch
Writer's block keeping you from finishing your novel? Check out this prompt generating app, designed to put together random ideas and words to get creative juices flowing. Choose one of three generation types to get thought provoking words, fusions of words, and descriptions of characters. Filter prompt generation by genre to get a prompt closer to what you're looking for, and log in to save your favorite prompts for later stories. Who knows which prompt will inspire a best-selling novel?

## Design
![Mock](mockup.png)

![Saved](savedpage.png)

## Key Features
* Save up to six favorite prompts through logging in 
* Generate unique prompts
* Filter by one or more genres
* Generate unique word combinations
* Generate unique character ideas
* Generate random, inspiring words from more than one language

## Technology
The following technologies will be used in the app:
* **Authentication --** to save prompts, users must login
* **Database data --** usernames and saved prompts are stored in the database
* **Websocket data --** generation of prompts, sending prompt back
* **HTML --** architecture/UX for the application
* **CSS --** impliment design/UI of application
* **Service --** backend service with endpoints for login, prompt generation, saving prompts, and retrieving prompts
* **Javascript --** provides login, prompt display, choice display, and backend endpoint calls 