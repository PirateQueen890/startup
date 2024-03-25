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
"Engaged", "Engagement", "Wedding", "Marriage", "Fling", "Flirtation", "Flirt", "Intrigue", "Flower", "Couple", "Affection", "Intimacy", 
"Desire", "Attraction", "Connection", "Chemistry", "Romance", "Fondness", "Tenderness", "Sentiment", "Embrace", "Companionship", 
"Infatuation", "Crush", "Wooing", "Adoration", "Soulmate", "Cuddle", "Kissing", "Hug", "Whisper", "Butterfly", "Candlelight", "Roses", 
"Chocolates", "Gaze", "Enchantment", "Spark", "Magic", "Flattery", "Serenade", "Dream", "Courtly", "Elation", "Longing", "Yearning", 
"Blush", "Smitten", "Passionate", "Romantic", "Cupid", "Heartbeat", "Woo", "Proposal", "Marry", "Holding hands", "Heartfelt", 
"Lovestruck", "Whispers", "Starry-eyed", "Moonlight", "Admiration", "Pining", "Secret", "Admirer", "Amorous", "Lovers", "Warmth", 
"Heartwarming", "Fantasy", "Tender", "Sweet", "Cozy", "Pheromones", "Pillow", "Sentimental", "Candlelit", "Falling", "Getaway", 
"Endearment", "Story", "Emotion", "Mutual", "Sweethearts", "Touch", "Allure", "Endearing", "Harmonious", "Heartthrob", "Chivalry", 
"Infatuated", "Rendezvous", "Inamorato", "Fond", "Memories", "Star-crossed", "Magnetic", "Admirable", "Enamor", "Amour", "Luring", 
"Melting", "Flirtatious", "Honeymoon", "Whisked", "Lush", "Coquetry", "Charming", "Entrancing", "Dreamy", "Bliss", "Affair", "Utterance", 
"Enraptured", "Charmed", "Softness", "Giddy", "Euphoria", "Swoon", "Captivation", "Suitor"]

const topicFamily = ["Parents", "Children", "Siblings", "Grandparents", "Cousins", "Aunts", "Uncles", "Nieces", "Nephews", "In-laws", 
"Spouse", "Marriage", "Tree", "Lineage", "Ancestors", "Descendants", "Generation", "Foster", "Adoption", "Stepfamily", "Extended", 
"Relatives", "Kin", "Brothers", "Brother", "Sister", "Sisters", "Father", "Mother", "Son", "Daughter", "Grandchildren", 
"Great-grandparents", "Great-grandchildren", "Love", "Bond", "Relationship", "Unity", "Connection", "Home", "Traditions", "Heritage", 
"Responsibility", "Upbringing", "Respect", "Understanding", "Communication", "Harmony", "Generations", "Legacy", "Bloodline", "Name", 
"Crest", "Clan", "Tribe", "Dynasty", "Progeny", "History", "Memories", "Sharing", "Caring", "Togetherness", "Hug", "Kiss", "Affection", 
"Nurturing", "Protection", "Support", "Safe haven", "Dependence", "Independence", "Interdependence", "Parenting", "Guidance", 
"Discipline", "Education", "Growth", "Milestones", "Achievements", "Challenges", "Sacrifice", "Blessings", "Celebrations", "Values", 
"Resilience", "Gratitude", "Empathy", "Acceptance", "Cooperation", "Loyalty", "Trust", "Commitment", "Teamwork", "Patience", 
"Compassion", "Sincerity", "Devotion", "Encouragement", "Flexibility", "Adaptability", "Ties", "Bonds", "Blood-ties", "Intimacy", 
"Affinity", "Warmth", "Security", "Shelter", "Nourishment", "Laughter", "Joy", "Happiness", "Comfort", "Supportive", "Encouraging", 
"Connected", "Unconditional", "Kinship", "Fellowship", "Roots", "Family rituals", "Customs", "Routines", "Stories", "Folklore", 
"Anecdotes", "Nostalgia", "Reunion", "Circle", "Team", "Conflict resolution", "Collaboration", "Negotiation", "Compromise", "Life", 
"Uncle", "Aunt", "Grandfather", "Grandmother", "Cousin", "Step-brother", "Step-sister", "Step-mother", "Step-father", "Half-brother", 
"Half-sister", "Dinner", "Trip", "Sibling", "Parent", "Death", "Birth", "Child", "Wife", "Husband", "Partner", "Niece", "Nephew", 
"Adopt", "Raise", "Hate", "Strained", "Strain", "House", "Relative", "Pregnant", "Picnic", "Ancestor", "Folk", "Holidays", "Elder", 
"Younger", "Little", "Big", "Baby", "Infant", "Kid"]

const topicSupernatural = ["Demon", "Psychic", "Magic", "Metaphysical", "Miraculous", "Mystic", "Occult", "Devil", "Deity", "Fairy", 
"Heavenly", "Superhuman", "Banshee", "Exorcism", "Supernatural", "Extrasensory", "Ghoul", "Goblin", "Marvelous", "Otherworldly", 
"Paranormal", "Supernormal", "Apparition", "Ghost", "Graveyard", "Haunted", "Angel", "Alien", "Machine", "Zombie", "Shaman", "Medicine", 
"Herbs", "Divine", "Mystery", "Mysterious", "Boogeyman", "Eerie", "Superstitious", "Superstition", "Religion", "Religious", "Werewolf", 
"Vampire", "Monster", "Legend", "Folklore", "Death", "Haunting", "Specter", "Phantom", "Poltergeist", "Wraith", "Unearthly", "Ectoplasm",
"Beings", "Spectral", "Seance", "Clairvoyant", "Medium", "Enigma", "Spooky", "Cursed", "Hex", "Curse", "Hexed", "Possession", 
"Witchcraft", "Wizardry", "Sorcery", "Enchantment", "Mystical", "Arcane", "Powers", "Spell", "Ritual", "Necromancy", "Alchemy", 
"Sorcerer", "Witch", "Warlock", "Shape-shifter", "Changeling", "Coven", "Black", "White", "Forbidden", "Taboo", "Occultism", 
"Mysticism", "Activity", "Phenomena", "Telekinesis", "Telepathy", "Astral", "Projection", "Anomaly", "Uncanny", "Occurrence", "House", 
"Spiritual", "Intervention", "Guardian", "Celestial", "Fate", "Destiny", "Prophecy", "Oracle", "Guidance", "Afterlife", "Reincarnation", 
"Karma", "Mythical", "Mythology", "Enchanted", "Mystifying", "Chills", "Realm", "Dimension", "Portals", "Time", "Warp", 
"Extraterrestrial", "Abduction", "UFO", "Conspiracy", "Cryptid", "Bigfoot", "Yeti", "Chupacabra", "Mothman", "Triangle", "Limb", 
"Deja vu", "Sixth", "Sense", "Premonition", "Forest", "Possessed", "Malediction", "Magical", "Creature", "Pagan", "Druid", "Enigmatic", 
"Mysterioso", "Bewitched", "Seer", "Spontaneous", "Combustion", "Unexplained", "Shadow", "People", "Parallel", "Universe", "Portents", 
"Phenomenon", "Ectoplasma", "Omen", "Artifact", "Phantasmagorical", "Abnormal", "Dark", "Energy", "Voodoo", "Invocation", "Purgatory", 
"Crystal ball", "Runes", "Symbols", "Cat", "Full", "Moon", "Half"]

const modes = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"]

let currentPrompt;
let newPrompt = "";
let username;
let colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];

function loadDisplay() {
    currentPrompt = localStorage.getItem("currentPrompt");
    currentPrompt = JSON.parse(currentPrompt);

    username = localStorage.getItem("username");
    username = JSON.parse(username);

    setColors(0, currentPrompt[0].colors);
    document.querySelector("#displayPrompt").innerHTML = currentPrompt[0].prompt;

    //try {
       // const username = localStorage.getItem("username");
       // username = JSON.parse(username);
   // } catch {
       // console.log("Error: Not logged in.")
       // document.getElementById("buttonFavorite").disabled = true;
       // document.getElementById("buttonShareGen").disabled = true;
 //   }

}

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
    let generationTopic = [];
    let j = 0;

    for (i = 0; i < boxes.length; ++i) {
        if (boxes[i].checked) {
            generationTopic[j] = boxes[i].value;
            ++j;
        }
    }

    if (generationTopic.length === 0) {
        generationTopic = ["optionFantasy", "optionRomance", "optionFamily", "optionWar", "optionSupernatural"];
    }

    localStorage.setItem("generationTopic", generationTopic.value);

    if (generationType === "optionFusion") {
        generationType = "Fusion";
        generateFusion(generationTopic);
    } else if (generationType === "optionCharacter") {
        generationType = "Character";
        generateCharacter(generationTopic);
    } else if (generationType === "optionSituation") {
        generationType = "Situation";
        generateScenario(generationTopic);
    } else {
        const error = "Please select a generation type on the left."
        document.getElementById("displayPrompt").textContent=error;
    }

    currentPrompt[0].owner = username;
    currentPrompt[0].prompt = newPrompt;
    currentPrompt[0].type = generationType;
    currentPrompt[0].colors = colors;
    newPrompt = "";
    storeCurrentPrompt();
}

function generateFusion(topics) {
    let bank = [];
    colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
    
    for (i = 0; i < topics.length; ++i) {
        if (topics[i] === "optionFantasy") {
            addRandomWords(bank, topicFantasy, 15);
        } else if (topics[i] === "optionRomance") {
            addRandomWords(bank, topicRomance, 15);
        } else if (topics[i] === "optionWar") {
            addRandomWords(bank, topicWar, 15);
        } else if (topics[i] === "optionFamily") {
            addRandomWords(bank, topicFamily, 15);
        } else if (topics[i] === "optionSupernatural") {
            addRandomWords(bank, topicSupernatural, 15);
        }
    }

    let fusions = [];

    for (i = 0; i < 6; ++i) {
        const firstNum = getRandomInt(0, bank.length - 1);
        let fusion = bank[firstNum];
        bank.splice(firstNum, 1);

        const secondNum = getRandomInt(0, bank.length - 1);
        fusion = fusion + " " + bank[secondNum];
        bank.splice(secondNum, 1);

        fusions.push(fusion);
    }

    newPrompt = fusions[0];

    for (i = 1; i < fusions.length; ++i) {
        newPrompt = newPrompt + "<br>" + fusions[i];
    }

    setColors(0, colors);
    document.querySelector("#displayPrompt").innerHTML=newPrompt;
}

function generateCharacter(topics) {
    const randomMotivation = motivations[getRandomInt(0, motivations.length - 1)];
    const randomFlaw = flaws[getRandomInt(0, flaws.length - 1)];
    const randomStrength = strengths[getRandomInt(0, strengths.length - 1)];
    const randomTalent = talents[getRandomInt(0, talents.length - 1)];

    getRandomColor();

    newPrompt = "<b>Motivation: </b>" + randomMotivation + "<br> <b>Flaw: </b>" + randomFlaw + "<br> <b>Strength: </b>" 
    + randomStrength + "<br> <b>Talent: </b>" + randomTalent;

    document.querySelector("#displayPrompt").innerHTML=newPrompt;
}

function generateScenario(topics) {
    colors = ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];
    const randomSetting = settings[getRandomInt(0, settings.length - 1)];
    const randomConflict = conflicts[getRandomInt(0, conflicts.length - 1)];
    const randomTheme = themes[getRandomInt(0, themes.length - 1)];

    newPrompt = "<b>Setting: </b>" + randomSetting + "<br> <b>Conflict: </b>" + randomConflict + "<br> <b>Theme: </b>" + randomTheme;

    setColors(0, colors);
    document.querySelector("#displayPrompt").innerHTML=newPrompt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addRandomWords(bank, topic, number) {
    for (j = 0; j < number; ++j) {
        bank.push(topic[getRandomInt(0, topic.length - 1)]);
    }

    return bank;
}

async function getRandomColor() {
    try {
        const response = await fetch("https://random-flat-colors.vercel.app/api/random?count=2");
        let seedColor = await response.json();
        seedColor = seedColor.colors[0];
        getRandomPalette(seedColor.slice(1));
    } catch {
        console.log("Error: Failed to fetch random color.");
    }
}

async function getRandomPalette(seedColor) {
    const mode = modes[getRandomInt(0, modes.length - 1)];
    const url = "https://www.thecolorapi.com/scheme?hex=" + seedColor + "&mode=" + mode;

    try {
        const response = await fetch(url);
        const result = await response.json();
        populateColors(result.colors);
        currentPrompt[0].colors = colors;
        storeCurrentPrompt();
    } catch {
        console.log("Error: Failed to fetch random palette.");
        colors = ["rgb(50,50,41)","rgb(78,132,138)","rgb(180,183,157)","rgb(229,239,229)","rgb(196,134,136)"]; 
    }

    setColors(0, colors);
}

function populateColors(result) {
    for (c = 0; c < result.length; ++c) {
        colors[c] = result[c].rgb.value;
    }
}

function setColors(num, colors) {
    if (num < colors.length) {
        let field = "color" + (num + 1);
        document.getElementById(field).style.color = colors[num];
        document.getElementById(field).style.backgroundColor = colors[num];
        setColors(++num, colors);
    }
}

function storeCurrentPrompt() {
    localStorage.removeItem("currentPrompt");
    localStorage.setItem("currentPrompt", JSON.stringify(currentPrompt));
}

function share() {
    storeCurrentPrompt();
    window.location.href = "share.html";
}

async function favorite() {
    let saves = await loadFavorites();
    let found = false;

    for (i = 0; i < saves.length; ++i) {
        if (saves[i].prompt === "") {
            saves[i].owner = currentPrompt[0].owner;
            saves[i].type = currentPrompt[0].type;
            saves[i].colors = currentPrompt[0].colors;
            saves[i].prompt = currentPrompt[0].prompt;
            await saveFavorites(saves);
            found = true;
            break;
        }
    }

    let message;

    if (found) {
        message = currentPrompt[0].prompt + "<br> <i>Success!</i>";
        document.querySelector("#displayPrompt").innerHTML=message;
    } else {
        message = currentPrompt[0].prompt + "<br> <i>FAILED: No space. Delete a favorited prompt and try again.</i>";
        document.querySelector("#displayPrompt").innerHTML=message;
    }
}

//Update in localStorage and database
async function saveFavorites(saves) {
    try {
      const response = await fetch('/api/favorite', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            username: username,
            favorites: saves,
        }),
      });
    } catch {
        console.log("Error: Failed to save favorites in database.");
    }
}

async function loadFavorites() {
    let favorites = [];

    try {
      const response = await fetch('/api/favorites')
      favorites = await response.json();
      favorites = favorites.favorites;
    } catch {
        console.log("Error: Failed to fetch favorites.");
    }
  
    return favorites;
}
