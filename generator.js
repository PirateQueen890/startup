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
    const radios = document.getElementsByName("inlineRadioOptions");
    let generationType;

    for (i = 0; i < radios.length; ++i) {
        if (radios[i].checked) {
            generationType = radios[i].value;
            localStorage.setItem("generationType", generationType.value);
            break;
        }
    }

    const boxes = document.getElementsByName("inlineCheckOptions");
    const generationTopic = [];
    let j = 0;

    for (i = 0; i < boxes.length; ++i) {
        if (boxes[i].checked) {
            generationTopic[j] = boxes[i].value;
            ++j;
        }
    }

    localStorage.setItem("generationTopic", generationTopic.value);

    if (generationType === "optionFusion") {
        generateFusion(generationTopic);
    } else if (generationType === "optionCharacter") {
        generateCharacter(generationTopic);
    } else if (generationType === "optionSituation") {
        generateScenario(generationTopic);
    } else {
        const error = "Please select a generation type on the left."
        document.getElementById("displayPrompt").textContent=error;
    }
}

function generateFusion(topics) {
    
}

function generateCharacter(topics) {

}

function generateScenario(topics) {
    //const settings = loadBank("./words/settings.txt");
   // const conflicts = loadBank("./words/conflict");

    const randomSetting = settings[getRandomInt(0, settings.length - 1)];
    const randomConflict = conflicts[getRandomInt(0, conflicts.length - 1)];

    const prompt = "Setting: " + randomSetting + "<br> Conflict: " + randomConflict;

    document.querySelector("#displayPrompt").innerHTML=prompt;
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
