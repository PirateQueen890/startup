const settings = ["Abandoned Mine", "Airplane", "Airport Check-in", "Alley", "Amusement Park", "Attic", "Bakery", "Bank", "Basement", "Bathroom"
, "Barn"
, "Beach"
, "Bedrooms"]

const conflicts = ["Character vs. Character(s)",
    "Character vs. Society",
    "Character vs. Nature",
    "Character vs. Technology",
    "Character vs. Supernatural",
    "Character vs. Fate",
    "Character vs. Self"]





function generate() {
    const generationType = document.querySelector("#setType");
    localStorage.setItem("generationType", generationType.value);

    const generationTopic = document.querySelector("#setTopic");
    localStorage.setItem("generationTopic", generationTopic.value);

    generateScenario();
}

function generateFusion() {
    
}

function generateCharacter() {

}

function generateScenario() {
    //const settings = loadBank("./words/settings.txt");
   // const conflicts = loadBank("./words/conflict");

    const randomSetting = settings[getRandomInt(0, settings.length - 1)];
    const randomConflict = conflicts[getRandomInt(0, conflicts.length - 1)];

    const prompt = "Setting: " + randomSetting + "/n" + "Conflict: " + randomConflict;

    document.getElementById("displayPrompt").textContent=prompt;
}

//function loadBank(file) {
    //const newFile = new File()
    //const reader = new FileReader();
   // reader.readAsText
    // bank = fs.readFileSync(file).toString('utf-8');

   // return bank;
//}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}