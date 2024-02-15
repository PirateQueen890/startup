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
* **Websocket data --** share prompts with other users
* **HTML --** architecture/UX for the application
* **CSS --** impliment design/UI of application
* **Service --** backend service with endpoints for login, prompt generation, saving prompts, and retrieving prompts
* **Javascript --** provides login, prompt display, choice display, and backend endpoint calls 

## HTML Deliverable
For this deliverable, I built out the structure of my website using HTML. This was completed on 2/5/2024.
* **HTML pages --** There are four HTML pages that represent login, generation, saved prompts, and information about the site.
* **Links --** The login page links to the generation page. Each page has a navigation bar allowing users to move easily between pages.
* **Text --** A description of the application is on the about page, and generated prompts are displayed through text.
* **Images --** An image is included on the about page for some color.
* **DB/Login --** Login draws from the database through an input box and button. Options on the generation page will change what information is drawn from the database. On the saved prompts page, buttons allow the user to get specific prompts from the database.
* **WebSocket --** Through the share button on the generation and saved prompts pages, the user can share prompts. Shared prompts will appear in the user's saved prompts unless full. 
* **3rd Party Service Call --** Added generate button. When clicked, it will grab appropriate words through an API call to an online dictionary (perhaps Synonyms) to create a prompt.

## CSS Deliverable
For this deliverable, I formatted my website using CSS. This was completed on 2/14/2024.
* **Prerequisite: Simon CSS deployed to your production environment --** Completed. Use simon subdomain to access.
* **Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page --** Completed. In the footer on each page.
* **Prerequisite: At least 10 git commits spread consistently throughout the assignment period --** Completed. Feb 9 - 4 commits, Feb 10 - 3 commits, Feb 12 - 4 commits, Feb 13 - 4 commits, Feb 14 - 5 commits.
* **Properly styled CSS header, footer, and main content body --** Completed. All headers, footers, and main bodies were formatted with CSS.
* **Properly styled CSS navigation elements --** Completed. All pages include a bootstrap navigation bar in the header.
* **Responsive to window resizing --** Completed. All pages were formatted with flex boxes, so they respond to window resizing.
* **Properly styled CSS application elements --** Completed. Pages use buttons and cards to style application elements.
* **Properly styled CSS application text content --** Completed. All text is formatted using fonts, spacing, and size.
* **Properly styled CSS application images --** Completed. The image on the About page was formatted using a bootstrap class.