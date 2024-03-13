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

// GetFavorites
apiRouter.get('/favorites', (_req, res) => {
    //grab from database
    favorites = [
        { id: "save1", owner: "ThePumpkinKing", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
        { id: "save2", owner: "YilingPatriarch", type: "Character", prompt: "Motivation: Justice <br> Flaw: Whiny <br> Strength: Philosophical <br> Talent: Public Speaking <br> Color: Aqua" },
        { id: "save3", owner: "ThePumpkinKing", type: "Situation", prompt: "Setting: Movie Theatre <br> Conflict: Character vs. Self <br> Theme: Trust" },
        { id: "save4", owner: "", type: "", prompt: "" },
        { id: "save5", owner: "", type: "", prompt: "" },
        { id: "save6", owner: "", type: "", prompt: "" },
    ];
    res.send(favorites);
});

let favorites;
let received;

// SubmitFavorites
apiRouter.post('/favorite', (req, res) => {
    //replace favorites in database
    favorites = req.body;
    res.send(favorites);
});

// GetReceives
apiRouter.get('/receives', (_req, res) => {
    //grab from database
    received = [
        { id: "received1", owner: "ThePumpkinKing", type: "Fusion", prompt: "Blood Divine <br> Ancestor Step-mother <br> Nemesis Throne <br> Feathers Disperse <br> Carnage Dragon <br> Vicious Machine" },
        { id: "received2", owner: "Marion900", type: "Character", prompt: "There's an awesome character here." },
        { id: "received3", owner: "", type: "", prompt: "" },
        { id: "received4", owner: "", type: "", prompt: "" },
        { id: "received5", owner: "", type: "", prompt: "" },
        { id: "received6", owner: "", type: "", prompt: "" },
    ];
    res.send(received);
});

// SubmitReceived
apiRouter.post('/received', (req, res) => {
  //replace received in database
  received = req.body;
  res.send(received);
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});