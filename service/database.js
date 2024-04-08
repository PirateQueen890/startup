const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db("prompt-generator");
const userCollection = db.collection("user");
const favoritesCollection = db.collection("favorites");
const receivedCollection = db.collection("received");

let favorites = [
    { id: "save1", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "save2", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "save3", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "save4", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "save5", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "save6", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
  ];
  
let received = [
    { id: "received1", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "received2", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "received3", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "received4", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "received5", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
    { id: "received6", owner: "", type: "", colors: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"], prompt: "" },
];

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
    return userCollection.findOne({ username: username });
  }
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };

    await userCollection.insertOne(user);

    const newFavorites = {
        username: username, 
        favorites: favorites,
    };

    await favoritesCollection.insertOne(newFavorites);

    const newReceived = {
        username: username, 
        received: received,
    };

    await receivedCollection.insertOne(newReceived);

    return user;
}

async function updateFavorites(saves, username) {
    const filter = {username: username};
    const options = {upsert: false};
    const update = {$set: {
        favorites: saves}
    };

    await favoritesCollection.updateOne(filter, update, options);
}

async function updateReceived(received, username) {
    const filter = {username: username};
    const options = {upsert: false};
    const update = {$set:  {
        received: received}
    };

    await receivedCollection.updateOne(filter, update, options);
}

async function getFavorites(username) {
    const query = {username: username};

    const userFavorites = await favoritesCollection.findOne(query);

    return userFavorites;
}

async function getReceived(username) {
    const query = {username: username};

    const userReceived = await receivedCollection.findOne(query);

    return userReceived;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    updateFavorites,
    updateReceived,
    getFavorites,
    getReceived,
  };