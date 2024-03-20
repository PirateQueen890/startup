//import express from 'express'

const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

let favorites = [
  { id: "save1", owner: "ThePumpkinKing", type: "Fusion", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
  { id: "save2", owner: "YilingPatriarch", type: "Character", colors: ["rgb(35,32,32)","rgb(50,56,48)","rgb(172,137,128)","rgb(241,230,203)","rgb(74,230,226)"], prompt: "Motivation: Justice <br> Flaw: Whiny <br> Strength: Philosophical <br> Talent: Public Speaking" },
  { id: "save3", owner: "ThePumpkinKing", type: "Situation", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Setting: Movie Theatre <br> Conflict: Character vs. Self <br> Theme: Trust" },
  { id: "save4", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
  { id: "save5", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
  { id: "save6", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
];

let received = [
  { id: "received1", owner: "ThePumpkinKing", type: "Fusion", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
  { id: "received2", owner: "Marion900", type: "Character", colors: ["rgb(48,189,205)","rgb(51,172,177)","rgb(211,195,54)","rgb(217,181,40)","rgb(135,185,30)"], prompt: "There's an awesome character here." },
  { id: "received3", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
  { id: "received4", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
  { id: "received5", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
  { id: "received6", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
];

// GetFavorites
apiRouter.get('/favorites', (_req, res) => {
    //grab from database
    console.log("In /favorites api");
    res.send(favorites);
});

// SubmitFavorites
apiRouter.put('/favorite', (req, res) => {
    //update favorites in database
    console.log("In /favorite api");
    favorites = req.body;
    res.send(true);
});

// GetReceives
apiRouter.get('/receives', (_req, res) => {
    //grab from database
    console.log("In /receives api");
    res.send(received);
});

// SubmitReceived
apiRouter.put('/received', (req, res) => {
  //update received in database
  console.log("In /received api");
  received = req.body;
  res.send(true);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});