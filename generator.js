const settings = ["Abandoned Mine", "Airplane", "Airport", "Alley", "Ambulance", "Amusement Park", "Ancient Ruins", "Antiques Shop", 
"Archery Range", "Arctic Tundra", "Art Gallery", "Art Studio", "Attic", "Backyard", "Badlands", "Bakery", "Ballroom", "Bank", "Bar", 
"Barn", "Basement", "Bazaar", "Beach", "Beach Party", "Big City Street", "Birthday Party", "Black-tie Event", "Block Party", 
"Boarding School", "Boardroom", "Bomb Shelter", "Bookstore", "Bowling Alley", "Break Room", "Brewery", "Bridge", "Campsite", "Canyon", 
"Car Accident", "Car Wash", "Carnival Funhouse", "Casino", "Casual Dining Restaurant", "Cave", "Cheap Motel", "Chicken Coop", 
"Child's Bedroom", "Church", "Circus", "City Bus", "Coffeehouse", "Community Center", "Condemned Apartment Building", 
"Construction Site", "Convenience Store", "Country Road", "County Fair", "Courtroom", "Creek", "Cruise Ship", "Custodial Supply Room", 
"Deli", "Desert", "Diner", "Dorm Room", "Dungeon (Speculative)", "Elementary School Classroom", "Elevator", "Emergency Room", 
"Empty Lot", "Executive's Office", "Factory", "Farm", "Farmer's Market", "Fast Food Restaurant", "Fire Station", "Fishing Boat", 
"Fitness Center", "Flower Garden", "Flower Shop", "Forest", "Funeral Home", "Gallows", "Garage", "Garage Sale", "Gas Station", 
"Ghost Town (Old West)", "Golf Course", "Graveyard", "Green Room", "Greenhouse", "Grocery Store", "Grotto", "Group Foster Home", 
"Gymnasium", "Hair Salon", "Halloween Party", "Hardware Store", "Haunted House", "Herbalist's Shop", "High School Cafeteria", 
"High School Hallway", "Hiking Trail", "Home Office", "Homeless Shelter", "Hospital", "Hospital Room", "Hot Springs", "Hotel Room", 
"House Fire", "House Party", "Hunting Cabin", "Ice Cream Parlor", "Indoor Shooting Range", "Jewelry Store", "Judge's Chambers", 
"Juvenile Detention Center", "Kitchen", "Lake", "Landfill", "Laundromat", "Library", "Lighthouse", "Limousine", "Liquor Store", 
"Living Room", "Man Cave", "Mansion", "Marina", "Marsh", "Mausoleum", "Meadow", "Mechanic's Shop", "Medieval Castle", 
"Medieval Castle Armory", "Medieval Tavern", "Medieval Village", "Military Base", "Military Helicopter", "Moors", "Morgue", 
"Motor Home", "Mountains", "Movie Set", "Movie Theater", "Museum", "Newsroom", "Nightclub", "Nursery", "Nursing Home", "Ocean", 
"Office Cubicle", "Old Pick-up Truck", "Orchard", "Outdoor Pool", "Outdoor Skating Rink", "Outhouse", "Parade", "Park", 
"Parking Garage", "Parking Lot", "Pasture", "Patio Deck", "Pawn Shop", "Penthouse Suite", "Performing Arts Theater", "Pet Store", 
"Pharmacy", "Photography Studio", "Pirate Ship", "Playground", "Police Car", "Police Station", "Pond", "Pool Hall", "Preschool", 
"Principal's Office", "Prison Cell", "Prom", "Psychiatric Ward", "Psychic's Shop", "Pub", "Public Restroom", "Quarry", "Race Track", 
"Rainforest", "Ranch", "Razed City Street", "Rec Center", "Recording Studio", "Refugee Camp", "Residential Bathroom", "River", 
"Rock Concert", "Rodeo", "Root Cellar", "Run-down Apartment", "Salvage Yard", "School Bus", "School Locker Room", "Science Lab", 
"Secret Passageway", "Sewers", "Shopping Mall", "Skate Park", "Ski Resort", "Slaughterhouse", "Small Town Street", "Spa", 
"Sporting Event Stands", "Submarine", "Subway Train", "Subway Tunnel", "Summer Camp", "Swamp", "Tank", "Tattoo Parlor", "Taxi", 
"Taxidermist", "Teacher's Lounge", "Teenager's Bedroom", "Teenager's Bedroom Closet", "Therapist's Office", "Thrift Store", 
"Tool Shed", "Trade Show","Trailer Park", "Train Station", "Tree House", "Trendy Mall Clothing Store", "Tropical Island", 
"Tropical Resort", "Truck Stop", "Underground Storm Shelter", "Underpass", "University Lecture Hall", "University Quad", 
"Upscale Hotel Lobby", "Urban Rooftop", "Used Car Dealership", "Vegas Stage Show", "Vegetable Patch", "Vet Clinic", "Video Arcade", 
"Waiting Room", "Wake", "Water Park", "Waterfall", "Wedding Reception", "Wine Cellar", "Winery", "Workshop", "Yacht", "Zoo", 
"Airport Check-in", "Bathroom", "Bedrooms", "Bonfire", "Cafeteria", "Catacombs", "City Park", "Classroom", "Closet", "Coffee House", 
"Cryogenic Sleep Chamber", "Daycare", "Farms", "Frozen Tundra", "Gallows", "Garden", "Haunted House", "Hospital", "Laboratory", 
"Locker Room", "Middle School Dance", "Movie Theatre","Night Club", "Public Pool", "Rainforest/jungle", "Restaurant", "School Office", 
"Sleep-away Camp", "Stands at a Sporting Event", "Storm Sewer", "Subway Station", "Taxi Cab", "Teacher Lounge", "Toolshed", "Trailer", 
"Treehouse", "Tropical Island City", "Urban Street", "Water Slide Park", "Wedding Ceremony", "Woods at Night", "Dragon Lair", "Dungeon",
"Egyptian Pyramids", "Herbalist Shop", "Medieval Castle Armory", "Medieval Marketplace", "Ocean/sea Bed", "Jungle", "Glowworm Cave",
"Palace", "Castle", "City Slums", "Pirate Ship", "Mindscape", "Spaceport", "Spaceship"]

const conflicts = ["Character vs. Character(s)", "Character vs. Society", "Character vs. Nature", "Character vs. Technology",
"Character vs. Supernatural", "Character vs. Fate", "Character vs. Self"]

const motivations = ["Love", "Infatuation", "Revenge", "Justice", "Greed", "Fear", "Survival", "Curiousity", "Power", "Avoiding Responsibility",
"Forgiving another", "Acknowledgement", "Repaying a debt", "Rescuing a loved one", "Friendship", "Self-Improvement", "Overcoming a fear", 
"Competiveness", "Self-Discovery", "Carrying on a legacy", "Righting a wrong", "Restoring their reputation", "Control", "Acceptance", 
"Fitting in", "Proving they are right"]

const flaws = ["Abrasive", "Addictive", "Antisocial", "Apathetic", "Callous", "Catty", "Childish", "Cocky", "Compulsive", 
"Confrontational", "Controlling", "Cowardly", "Cruel", "Cynical", "Defensive", "Devious", "Dishonest", "Disloyal", "Disorganized", 
"Disrespectful", "Evasive", "Evil", "Extravagant", "Fanatical", "Flaky", "Foolish", "Forgetful", "Frivolous", "Fussy", "Gossipy", 
"Greedy", "Grumpy", "Gullible", "Haughty", "Hostile", "Humorless", "Hypocritical", "Ignorant", "Impatient", "Impulsive", "Inattentive", 
"Indecisive", "Inflexible", "Inhibited", "Insecure", "Irrational", "Irresponsible", "Jealous", "Judgmental", "Know-it-all", "Lazy", 
"Macho", "Manipulative", "Martyr", "Materialistic", "Melodramatic", "Mischievous", "Morbid", "Nagging", "Needy", "Nervous", "Nosy", 
"Obsessive", "Oversensitive", "Paranoid", "Perfectionist", "Pessimistic", "Possessive", "Prejudiced", "Pretentious", "Pushy", 
"Rebellious", "Reckless", "Resentful", "Rowdy", "Scatterbrained", "Self-destructive", "Self-indulgent", "Selfish", "Sleazy", "Spoiled", 
"Stingy", "Stubborn", "Subservient", "Superstitious", "Suspicious", "Tactless", "Temperamental", "Timid", "Uncommunicative", 
"Uncooperative", "Uncouth", "Unethical", "Ungrateful", "Unintelligent", "Vain", "Verbose", "Vindictive", "Violent", "Volatile", 
"Weak-willed", "Whiny", "Withdrawn", "Workaholic", "Worrywart"]

const strengths = ["Adaptable", "Adventurous", "Affectionate", "Alert", "Ambitious", "Analytical", "Appreciative", "Bold", "Calm", 
"Cautious", "Centered", "Charming", "Confident", "Cooperative", "Courageous", "Courteous", "Creative", "Curious", "Decisive", 
"Diplomatic", "Disciplined", "Discreet", "Easygoing", "Efficient", "Empathetic", "Enthusiastic", "Extroverted", "Faithful", 
"Flamboyant", "Flirtatious", "Focused", "Friendly", "Funny", "Generous", "Gentle", "Happy", "Honest", "Honorable", "Hospitable", 
"Humble", "Idealistic", "Imaginative", "Independent", "Industrious", "Innocent", "Inspirational", "Intelligent", "Introverted", 
"Just", "Kind", "Loyal", "Mature", "Merciful", "Meticulous", "Nature-focused", "Nurturing", "Obedient", "Objective", "Observant", 
"Optimistic", "Organized", "Passionate", "Patient", "Patriotic", "Pensive", "Perceptive", "Persistent", "Persuasive", "Philosophical", 
"Playful", "Private", "Proactive", "Professional", "Proper", "Protective", "Quirky", "Resourceful", "Responsible", "Sensible", 
"Sensual", "Sentimental", "Simple", "Socially Aware", "Sophisticated", "Spiritual", "Spontaneous", "Spunky", "Studious", "Supportive", 
"Talented", "Thrifty", "Tolerant", "Traditional", "Trusting", "Uninhibited", "Unselfish", "Whimsical", "Wholesome", "Wise", "Witty"]

const talents = ["A Knack for Languages", "A Knack for Making Money", "A Way With Animals", "Archery", "Astral Projection", 
"Astrological Divination", "Baking", "Basic First Aid", "Blending in", "Carpentry", "Charm", "Computer Hacking", "Creativity", 
"Detail-oriented", "Dexterity", "Empathy", "Enhanced Hearing", "Enhanced Sense of Smell", "Enhanced Taste Buds", "Equanimity", 
"Clairvoyance", "Exceptional Memory", "Farming", "Fishing", "Foraging", "Gaining the Trust of Others", "Gaming", "Gardening", 
"Good Listening Skills", "Good With Numbers", "Haggling", "Herbalism", "High Pain Tolerance", "Hospitality", "Hot-wiring a Car", 
"Intuition", "Knife Throwing", "Knowledge of Explosives", "Leadership", "Lip-reading", "Lying", "Making Friends", "Making People Laugh", 
"Mechanically Inclined", "Mentalism", "Mimicking", "Multitasking", "Musicality", "Networking", "Organization", "Out-of-the-box Thinking",
"Parkour", "Peacekeeping", "Performing", "Photographic Memory", "Predicting the Weather", "Promotion", "Public Speaking", 
"Reading People", "Regeneration", "Repurposing", "Research", "Sales", "Sculpting", "Self-defense", "Sewing", "Sharpshooting", 
"Sleight of Hand", "Stamina", "Strategic Thinking", "Strong Breath Control", "Super Strength", "Survival Skills", "Swift-footedness", 
"Talking With the Dead", "Teaching", "Throwing One's Voice", "Vision", "Whittling", "Wilderness Navigation", "Wrestling", "Writing"]

const themes = ["A Fall From Grace", "A Quest for Knowledge", "Addiction", "Alienation", "Beauty", "Beginnings", "Betrayal", "Borders", 
"Coming of Age", "Conservation", "Control", "Corruption", "Courage", "Crossroads", "Danger", "Death", "Deception", "Depression", 
"Disorder", "Doomsday", "Endings", "Enslavement", "Evil", "Failure", "Family", "Fate", "Freedom", "Friendship", "Greed", "Health", 
"Honor", "Hope", "Identity", "Illness", "Immortality", "Inflexibility", "Injustice", "Innocence", "Instability", "Isolation", 
"Journeys", "Justice", "Knowledge", "Loss", "Love", "Materialism", "Mystery", "Nature", "Obstacles", "Order", "Passage of Time", 
"Peace", "Perseverance", "Poverty", "Power", "Pride", "Progress", "Purity", "Purpose", "Rebellion", "Rebirth", "Recognition", 
"Redemption", "Refuge", "Religion", "Revenge", "Rite of Passage", "Sacrifice", "Stagnation", "Success", "Suffering", 
"Superstitions: Bad Luck", "Superstitions: Good Luck", "Survival", "Teamwork", "Technology", "Tradition", "Transformation", "Trust", 
"Truth", "Unity", "Vanity", "Vice", "Violence", "Virtue", "Vulnerability", "War", "Wealth"]

const colors = ["Black", "Grey", "Red", "Blue", "Orange", "White", "Brown", "Pink", "Yellow", "Green", "Purple", "Maroon", "Turquoise", 
"Cyan", "Navy", "Blue", "Gold", "Teal", "Lime", "Cyan", "Aqua", "Violet", "Chocolate", "Azure", "Sİlver", "Bronze", "Hazel"]

const topicFantasy = ["Adventure", "Alchemy", "Amulet", "Ancient", "Angel", "Armies", "Armor", "Arrow", "Awaken", "Axe", "Barbarian", 
"Battle", "Beast", "Bewitch", "Bishop", "Blessed", "Blood", "Bones", "Brave", "Breathtaking", "Captivate", "Castle", "Cauldron", "Cave", 
"Centaur", "Chamber", "Chariot", "Charm", "Claws", "Cliff", "Combat", "Conjure", "Conspirator", "Conspiracy", "Creatures", "Creepy", 
"Crossbow", "Crown", "Curse", "Cyclops", "Darkness", "Dark-some", "Daydream", "Dazzling", "Deformity", "Demon", "Destiny", "Devil", 
"Disappeared", "Disgusting", "Dragon", "Dragon-fire", "Dragon egg", "Dreadful", "Dream", "Dreamy", "Druid", "Dungeon", "Dwarf", "Eerie", 
"Elf", "Elves", "Enchanted", "Enchanting", "Enchantments", "Enchantress", "Emerald", "Escape", "Evil", "Eyeball", "Faerie", "Fairy", 
"Fairyland", "Fancy", "Fang", "Fantastical", "Feast", "Feathers", "Figment", "Fog", "Folklore", "Forest", "Fortune", "Fortune-teller", 
"Frightening", "Frozen", "Gems", "Ghoulie", "Giants", "Glittering", "Gloomy", "Glorious", "Glory", "Gnome", "Goblins", "Golden", 
"Guardian", "Hallucinate", "Heart", "Hermit", "Heroic", "Hidden", "Hideous", "Hills", "Horns", "Horrible", "Horror-struck", "Hounds", 
"Honor", "Hunt", "Hunter", "Illusion", "Illusive", "Imagine", "Imaginary", "Imagination", "Imperium", "Island", "Jaws", "Jewels", 
"Journey", "King", "Kingdom", "Knights", "Lair", "Lake", "Landscape", "Lantern", "Law", "Legend", "Leprechaun", "Lightening", "Lock", 
"Logic", "Lords", "Lore", "Lair", "Lake", "Landscape", "Lantern", "Law", "Legend", "Leprechaun", "Lightening", "Lock", "Logic", "Lords", 
"Lore", "Necromancer", "Necromancy", "Nemesis", "Nightmare", "Occult", "Odd", "Ogre", "Oracle", "Orphan", "Passageway", "Peculiar", 
"Poison", "Portal", "Powerful", "Prince", "Princess", "Prophecy", "Puzzle", "Queen", "Quest", "Quiver", "Rainbow", "Realm", "Rebel", 
"Riddles", "Ring", "Saint", "Sapphire", "Scar", "Secrets", "Seer", "Shadow", "Shining", "Silver", "Silvery", "Sin", "Skull", "Slay", 
"Slimes", "Smoke", "Sneak", "Soothsayer", "Sorcerer", "Sorceress", "Sorcery", "Sparks", "Sparkle", "Spear", "Spell", "Sprite", "Stars", 
"Stone", "Storm", "Strange", "Summoned", "Surreal", "Sunshine", "Sword", "Tail", "Tale", "Tangled", "Tentacles", "Throne", "Tower", 
"Transform", "Trapdoor", "Trapped", "Treasure", "Troll", "Twilight", "Twinkle", "Ugly", "Unicorn", "Unholy", "Valley", "Vampire", 
"Vanish", "Vanished", "Valor", "Venomous", "Vicious", "Vision", "Wand", "Warlock", "Warrior", "Weird", "Werewolf", "Whiskers", 
"Whimsical", "Whisper", "Wicked", "Wild", "Wilderness", "Wings", "Winter", "Wisdom", "Wish", "Witch", "Witchcraft", "Wizard", 
"Wizardry", "Wolves", "Wonderful", "Wonderland", "Woods", "Wrath", "Wrestle"]

const topicWar = ["Abandon", "Acid", "Action", "Advance", "Aerial", "Afloat", "Aggressor", "Agitator", "Aim", "Aircraft", "Airfield", 
"Airplane", "Alert", "Alliance", "Allies", "Ambush", "Ammunition", "Anarchy", "Anguish", "Annihilate", "Armament", "Armory", "Arms", 
"Arsenal", "Artillery", "Assassin", "Assassinate", "Atrocity", "Attack", "Authority", "Barrage", "Barricade", "Battalion", "Batter", 
"Battle", "Battlefield", "Bayonet", "Betray", "Blast", "Blindside", "Blood", "Bloodletting", "Bomb", "Bombard", "Booby trap", "Breach", 
"Brigade", "Brutal", "Brutality", "Bullet", "Bulletproof", "Bunker", "Burn", "Bury", "Cadaver", "Camouflage", "Campaign", "Cannon", 
"Captive", "Capture", "Carcass", "Cargo", "Carnage", "Carrier", "Casualties", "Cataclysm", "Caution", "Cautious", "Chaos", "Charge", 
"Charred", "Checkpoint", "Chief", "Chopper", "Civilian", "Clash", "Coalition", "Collapse", "Combat", "Command", "Commander", 
"Commandos", "Compassion", "Compliance", "Concentration", "Concussion", "Conflict", "Confrontation", "Confusion", "Conquer", 
"Consequences", "Consolidate", "Conspiracy", "Conspire", "Contact", "Control", "Convoy", "Coordinate", "Corps", "Corpse", 
"Counterattack", "Counteroffensive", "Courageous", "Crisis", "Damage", "Danger", "Dangerous", "Dash", "Dead", "Deadly", "Death", 
"Debacle", "Debris", "Decline", "Defect", "Defend", "Defense", "Defensive", "Demolish", "Demoralization", "Deploy", "Desertion", 
"Despot", "Destroy", "Destruction", "Detect", "Detection", "Devastation", "Device", "Dictator", "Die", "Disarmament", "Disarray", 
"Disaster", "Disastrous", "Discipline", "Disease", "Dismantle", "Dispatch", "Disperse", "Dispute", "Disruption", "Dissonance", 
"Dominate", "Doomed", "Downfall", "Drama", "Dread", "Drone", "Duck", "Duty", "Elite", "Encounter", "Endurance", "Enemy", "Enforcement", 
"Engagement", "Enlist", "Escalation", "Escape", "Espionage", "Evacuate", "Evacuee", "Excess", "Execute", "Execution", "Exercise", 
"Expectations", "Explode", "Exploitation", "Explosion", "Explosive", "Extremism", "Faction", "Fanatic", "Fatal", "Fear", "Fearless", 
"Ferment", "Ferocious", "Feud", "Fierce", "Fiery", "Fight", "Fighter", "Flank", "Flee", "Flight", "Force", "Forceful", "Fortification", 
"Foxhole", "Fray", "Frenzy", "Fright", "Front lines", "Fuel", "Fugitive", "Genocide", "Grave", "Grievous", "Guns", "Harsh", "Hate", 
"Hatred", "Hide", "Hijack", "Ignite", "Impact", "Incinerate", "Infiltrate", "Infantry", "Informant", "Intimidation", "Investigation", 
"Kidnap", "Kill", "Lamentation", "Loyalty", "Liberation", "Legacy", "Launch", "Machine", "Macabre", "Officer", "Official", "Operation", 
"Order", "Overthrow", "Pacify", "Peace", "Prisoner", "Patrol", "Negotiation", "Mission", "Power", "Plunder", "Rebel", "Rebellion", 
"Soldier", "Slaughter", "Strike", "Strategy", "Sword", "Spy", "Survival", "Target", "Weapon", "Warrior", "War", "Wisdom", "Wounds", 
"Wreakage", "Yearn"]

const topicRomance = ["Heart", "Love", "Family", "Pink", "Red", "Hate", "Distance", "Difficult", "Vulnerable", "Relationship", "Lover", 
"Partner", "Child", "Baby", "Sweetheart", "Dear", "Dearest", "Adore", "Passion", "Devotion", "Attachment", "Care", "Appreciate", 
"Backstabbing", "Cherish", "Intimate", "Compassion", "Enchanting", "Exciting", "Date", "Dating", "Court", "Courtship", "Fiancée", 
"Engaged", "Engagement", "Wedding", "Marriage", "Fling", "Flirtation", "Flirt", "Intrigue", "Flower", "Couple"]

const topicFamily = ["Mother", "Father", "Brother", "Sister", "Uncle", "Aunt", "Grandfather", "Grandmother", "Cousin", "Step-brother", 
"Step-sister", "Step-mother", "Step-father", "Half-brother", "Half-sister", "Family", "Dinner", "Trip", "Sibling", "Parent", "Death", 
"Birth", "Marriage", "Children", "Child", "Son", "Daughter", "Wife", "Husband", "Partner", "Niece", "Nephew", "Adopt", "Adoption", 
"Raise", "Love", "Hate", "Strained", "Relationship", "House", "Home", "Relative", "Pregnant", "Picnic", "Ancestor", "Folk", "Kinship", 
"Clan", "Lineage", "Holidays", "Respect", "Elder", "Younger"]

const topicSupernatural = ["Demon", "Psychic", "Magic", "Metaphysical", "Angel", "Miraculous", "Mystic", "Occult", "Devil", 
"Preternatural", "Deity", "Fairy", "Heavenly", "Superhuman", "Banshee", "Exorcism", "Extrasensory", "Ghoul", "Goblin", "Marvelous", 
"Otherworldly", "Paranormal", "Supernormal", "Apparition", "Ghost", "Graveyard", "Haunted", "Angel", "Alien", "Machine", "Zombie", 
"Shaman", "Medicine", "Herbs", "Divine", "Mystery", "Mysterious", "Boogeyman", "Eerie", "Superstitious", "Superstition", "Religion", 
"Religious", "Werewolf", "Vampire", "Monster", "Legend", "Folklore", "Death", "Spirit"]

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
    const randomMotivation = motivations[getRandomInt(0, motivations.length - 1)];
    const randomFlaw = flaws[getRandomInt(0, flaws.length - 1)];
    const randomStrength = strengths[getRandomInt(0, strengths.length - 1)];
    const randomTalent = talents[getRandomInt(0, talents.length - 1)];
    const randomColor = colors[getRandomInt(0, colors.length - 1)];

    const prompt = "Motivation: " + randomMotivation + "<br> Flaw: " + randomFlaw + "<br> Strength: " + randomStrength + "<br> Talent: " 
    + randomTalent + "<br> Color: " + randomColor;

    document.querySelector("#displayPrompt").innerHTML=prompt;
}

function generateScenario(topics) {
    //const settings = loadBank("./words/settings.txt");
   // const conflicts = loadBank("./words/conflict");

    const randomSetting = settings[getRandomInt(0, settings.length - 1)];
    const randomConflict = conflicts[getRandomInt(0, conflicts.length - 1)];
    const randomTheme = themes[getRandomInt(0, themes.length - 1)];

    const prompt = "Setting: " + randomSetting + "<br> Conflict: " + randomConflict + "<br> Theme: " + randomTheme;

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
