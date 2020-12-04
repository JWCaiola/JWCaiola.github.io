/*
  Variable Declarations
*/
const testOpenTag = `<div class="test">`;
const testCloseTag = `</div>`;
const searchDesc = /(Shops|Caster|Merchant|Landmark)/
const strip = /<[^>]*>/g;
const bardReg = /Bard/i;
const clericReg = /Cleric/i;
const druidReg = /Druid/i;
const paladinReg = /Paladin/i;
const rangerReg = /Ranger/i;
const sorcererReg = /Sorcerer/i;
const warlockReg = /Warlcok/i;
const wizardReg = /Wizard/i;
const foodReg = /Food/;
const econReg = /Economic/;
const divReg = /<\/div>/;
const landmarksReg = /(College|Library|Temple|Temple \(Store\))/;
const linebreak = () => {
  return document.createElement('br');
};
let addHTML;
let subclass;
let districtObjects = [];
let allBonesHTML = [];
let schoolList = [];
let schoolLevelList = [];
let outputList = [];
let newSpellList = [];
let inventory = [];
let newTownBones = [];
let divArrResearch = [];
let divArrCaster = [];
let divArrAllPOIs = [];
let foundClasses = [];
let newTown = [];
let town=[];
let countShopsArr = [];
let spellTempArr = [];
let tagBones;
let itemForPush;
let tag;
let arrEle;
let quality;
/*
  Datasets
*/

/*
  Bones data
*/
const headerArray = [
  'Direction', 'Quality', 'Description'
];
const arrQuality = [
  "Best", "Good", "Good", "Average", "Average", "Average", "Poor", "Poor", "Awful"
];
const direction = [
  "N", "S", "C", "W", "E","NW","NE","SE","SW"
];
const casterArray = [
  'Druid', 'Wizard', 'Wizard', 'Wizard', 'Bard', 'Paladin', 'Sorcerer', 'Ranger', 'Warlock'
];
const econArray = [
  "Crossroads", "Crops", "Livestock", "Docks/Harbor", "Ferry/Major Bridge", "Fishery", "Holy Site", "Source of Magical Power", "Mill", "Mine", "Trade Hub", "Defense (Barracks)","Defense (Defending a Strategic Location or Road) ", "Defense (Training)", "Shipyards", "Ironworks"
];
const foodArray = [
  "Plentiful wild game/fish", "Generous Citizen with Food", "Public Vegetable Garden", "Communal Potluck Meals", "Open Pit Barbecue", "Smokehouse", "Marketplace", "Tavern"
];
const lodgesArray = [
  "Relatively safe clearing near town", "Generous Citizen with Vacancy", "Open-Air Campground", "Spare Building (Barn, Empty Home)", "Communal Lodge (Full)", "Inn (Vacancy)", "Inn (Full)", "Communal Lodge (Vacancy)"
];
const landmarksArray = [
  "Wizard's Tower (Active, Abandoned)", "College", "Combat Training School", "Church", "Shrine", "Temple", "Fighting Pit", "Tended Gardens", "Guild Hall (Craft)", "Guild Hall (Trade) ", "Guild Hall (Fighter)", "Guild Hall (Thieves)", "Library", "Knowledge Repository", "Lighthouse", "Watchtower", "Racetrack (Horses)", "Ruins (Castle)", "Ruins (Cathedral)", "Ruins (Shipyards)", "Sealed Cave Entrance", "Skirmish Aftermath (Neighboring Town)", "Skirmish Aftermath (Invading Horde)", "Skirmish Aftermath (Rampaging Beast)", "Spiritual Lodge", "Standing Corporal Punishment Fixture (Stocks)", "Standing Corporal Punishment Fixture (Horde)", "Standing Corporal Punishment Fixture (Rampaging Beast)", "Theater/Amphitheater", "A River Runs Through It", "Build into a Hill or Mountain-Side", "Built into a Canyon or Ravine",
];
const qualityNames = [
  'Awful', 'Poor', 'Average', 'Good', 'Best'
];
const shopsArray = [
  "General Store", "Alchemist", "Herbalist", "Healer", "Blacksmith (Armorer)", "Blacksmith (Weapons)", "Blacksmith (Tools)", "Carpenter (Boats)", "Carpenter (Buildings)", "Carpenter (Wagons)", "Clothing (Common)", "Clothing (Fine)", "Enchanter", "Glassblower", "Leatherworks (Armor)", "Leatherworks (Saddlery)", "Stables", "Exotic Goods (Textile)", "Jeweler", "Fletcher", "Adventuring Store", "Temple (Store)"
];
const tavernArr = [
  "Pub", "Brewery", "Dive Bar", "Private Bar", "Winery"
];
const schoolNameArr = [
  'Abjuration', 'Divination', 'Conjuration', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'
];
const poiArray = [
  {"arr":casterArray,
  "name":"Caster"},
  {"arr":econArray,
  "name":"Economic Touchstone"},
  {"arr":landmarksArray,
  "name":"Landmarks"},
  {"arr":lodgesArray,
  "name":"Lodging"},
  {"arr":shopsArray,
  "name":"Merchant"},
  {"arr":shopsArray,
  "name":"Merchant"},
  {"arr":shopsArray,
  "name":"Merchant"}
];
const defaultPOIArray = [
    {"arr":tavernArr,
    "name":"Tavern"},
    {"arr":foodArray,
    "name":"Food"},
    {"arr":lodgesArray,
    "name":"Lodging"},
];
const allPOIArray = [
  {"arr":casterArray,
  "name":"Caster"},
  {"arr":econArray,
  "name":"Economic Touchstone"},
  {"arr":foodArray,
  "name":"Food"},
  {"arr":landmarksArray,
  "name":"Landmarks"},
  {"arr":lodgesArray,
  "name":"Lodging"},
  {"arr":shopsArray,
  "name":"Merchant"},
  {"arr":tavernArr,
  "name":"Tavern"},
];
/*
  Flesh data
*/
const cultureArray = [
  "Food: high standards, reverence for good cooks", "Music: constant music; most play an instrument", "Painting: colorful art on buildings/objects/people", "Writing: author(s), calligraphy, widespread poetry", "Fashion: dressing for conformity/self-expression", "Body Art: tattoos, piercings, hair, makeup/paint", "Drama: storytelling, poetic speech, talented liars", "Architecture: monuments, unique buildings", "Holidays: frequent celebrations and events", "Dance: movement is important in celebrations, traditions, courtship, transactions, respect", "Tribalism: society separated into distinct groups", "Duelling: most disputes settled in formal combat", "Symbology: prominent marks of belief or faction", "Addiction: alcohol, food, other substance abuse", "Gluttony: overindulging in food, drink, or pleasure", "Greed: dishonest trade, gambling, selfishness", "Pride: confident, easily offended", "Despair: widespread pessimism", "Wrath: easily provoked, eager to fight", "Sloth: laziness, slow paced lifestyle"

];
const beliefsArray = [
  "Angry with ", "Rebelling against ", "Guilted by ", "Revolution toward ", "Punishing followers of ", "Apathetic toward ", "Awaiting ", "Devout to ", "Fearful of ", "Crusading for "
];
const beliefsBArray = [
  "Atheism/Agnosticism", "magic", "power", "wealth", "elder worship", "a good God", "an evil God", "a neutral God", "a lawful God", "a chaotic God"
];
const crimeArray = [
  "Violent: even murder might not be uncommon", "White Collar: con artists & cheating merchants", "Corrupt Governance: predatory laws, unfair trials", "Harshly Punished: violent sentences, banishment", "Corrupt Law Enforcement: bribery, false charges", "Organized: the Party is not the only gang in Town", "Suppressed: capable law enforcement, just rulers", "Shunned: nobody associates with known criminals"
];
const defenseArray = [
  "Militia: trained citizens combat threats/crime","Standing Army: professional, organized soldiers","Champion: a single notable defender or group","No Military Defenses"
];
const govArray = [
  "Arcanocracy: the ruler or ruling class is magical", "Anarchy: there are no laws. If someone does something you dislike, respond as you wish", "Conqueror's Rule: whoever beat the last leader", "Council: a group makes decisions together", "Democracy: everyone votes directly on each issue", "Dictatorship: ruling by force", "Fealty: the town owes allegiance to elsewhere", "Mandarinate: requires tests or trials to rule", "Monarchy: single ruler with bloodline succession", "Oligarchy: a group of individuals divide power", "Republic: elected ruler", "Theocracy: God(s) makes the law. There may or may not be clergy to interpret god's wishes"
];
const impact = [
  "Highest", "High", "Moderately high", "Moderately low", "Low", "Lowest"
];
const tradeArray = [
  "Barter Economy: no money, only trading", "Desperate: struggling trade may mean low prices and low integrity among merchants", "Heavy Taxation: merchant prices raised in turn", "Organized: Governance, Guilds, or Religious Group", "New Trade Route: exotic travellers & customs", "Traditional: strict customs, prejudice against certain groups based on race or belief"
];
/*
  All Spells as objects
*/
const allSpellObjs = [
  {"name":"Acid Splash","level":0,"school":"Conjuration","classes":"Sorcerer, Wizard","id":1},{"name":"Blade Ward","level":0,"school":"Abjuration","classes":"Bard, Sorcerer, Warlock, Wizard","id":2},{"name":"Resistance","level":0,"school":"Abjuration","classes":"Cleric, Druid","id":3},{"name":"Druidcraft","level":0,"school":"Transmutation","classes":"Druid","id":4},{"name":"Friends","level":0,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":5},{"name":"Vicious Mockery","level":0,"school":"Enchantment","classes":"Bard","id":6},{"name":"Mending","level":0,"school":"Transmutation","classes":"Bard, Cleric, Druid, Sorcerer, Wizard","id":7},{"name":"Chill Touch","level":0,"school":"Necromancy","classes":"Sorcerer, Warlock, Wizard","id":8},{"name":"Message","level":0,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":9},{"name":"Guidance","level":0,"school":"Divination","classes":"Cleric, Druid","id":10},{"name":"Mage Hand","level":0,"school":"Conjuration","classes":"Bard, Sorcerer, Warlock, Wizard","id":11},{"name":"Poison Spray","level":0,"school":"Conjuration","classes":"Druid, Sorcerer, Warlock, Wizard","id":12},{"name":"Spare the Dying","level":0,"school":"Necromancy","classes":"Cleric","id":13},{"name":"True Strike","level":0,"school":"Divination","classes":"Bard, Sorcerer, Warlock, Wizard","id":14},{"name":"Dancing Lights","level":0,"school":"Evocation","classes":"Bard, Sorcerer, Wizard","id":15},{"name":"Prestidigitation","level":0,"school":"Transmutation","classes":"Bard, Sorcerer, Warlock, Wizard","id":16},{"name":"Shillelagh","level":0,"school":"Transmutation","classes":"Druid","id":17},{"name":"Eldritch Blast","level":0,"school":"Evocation","classes":"Warlock","id":18},{"name":"Fire Bolt","level":0,"school":"Evocation","classes":"Sorcerer, Wizard","id":19},{"name":"Light","level":0,"school":"Evocation","classes":"Bard, Cleric, Wizard","id":20},{"name":"Thaumaturgy","level":0,"school":"Transmutation","classes":"Cleric","id":21},{"name":"Minor Illusion","level":0,"school":"Illusion","classes":"Bard, Sorcerer, Warlock, Wizard","id":22},{"name":"Ray of Frost","level":0,"school":"Evocation","classes":"Sorcerer, Wizard","id":23},{"name":"Sacred Flame","level":0,"school":"Evocation","classes":"Cleric","id":24},{"name":"Produce Flame","level":0,"school":"Conjuration","classes":"Druid","id":25},{"name":"Shocking Grasp","level":0,"school":"Evocation","classes":"Sorcerer, Wizard","id":26},{"name":"Thorn Whip","level":0,"school":"Transmutation","classes":"Druid","id":27},{"name":"Alarm","level":1,"school":"Abjuration","classes":"Ranger, Wizard","id":28},{"name":"Armor of Agathys","level":1,"school":"Abjuration","classes":"Warlock","id":29},{"name":"Animal Friendship","level":1,"school":"Enchantment","classes":"Bard, Druid, Ranger","id":30},{"name":"Mage Armor","level":1,"school":"Abjuration","classes":"Sorcerer, Wizard","id":31},{"name":"Protection from Evil and Good","level":1,"school":"Abjuration","classes":"Cleric, Druid, Paladin, Warlock, Wizard","id":32},{"name":"Sanctuary","level":1,"school":"Abjuration","classes":"Cleric","id":33},{"name":"Shield","level":1,"school":"Abjuration","classes":"Sorcerer, Wizard","id":34},{"name":"Bane","level":1,"school":"Enchantment","classes":"Bard, Cleric","id":35},{"name":"Shield of Faith","level":1,"school":"Abjuration","classes":"Cleric, Paladin","id":36},{"name":"Comprehend Languages","level":1,"school":"Divination","classes":"Bard, Sorcerer, Warlock, Wizard","id":37},{"name":"False Life","level":1,"school":"Necromancy","classes":"Sorcerer, Wizard","id":38},{"name":"Bless","level":1,"school":"Enchantment","classes":"Cleric, Paladin","id":39},{"name":"Inflict Wounds","level":1,"school":"Necromancy","classes":"Cleric","id":40},{"name":"Ray of Sickness","level":1,"school":"Necromancy","classes":"Sorcerer, Wizard","id":41},{"name":"Charm Person","level":1,"school":"Enchantment","classes":"Bard, Druid, Sorcerer, Warlock, Wizard","id":42},{"name":"Command","level":1,"school":"Enchantment","classes":"Bard, Cleric, Paladin","id":43},{"name":"Burning Hands","level":1,"school":"Evocation","classes":"Sorcerer, Wizard","id":44},{"name":"Detect Evil and Good","level":1,"school":"Divination","classes":"Cleric, Paladin","id":45},{"name":"Arms of Hadar","level":1,"school":"Conjuration","classes":"Warlock","id":46},{"name":"Ensnaring Strike","level":1,"school":"Conjuration","classes":"Ranger","id":47},{"name":"Color Spray","level":1,"school":"Illusion","classes":"Bard, Sorcerer, Wizard","id":48},{"name":"Compelled Duel","level":1,"school":"Enchantment","classes":"Paladin","id":49},{"name":"Detect Magic","level":1,"school":"Divination","classes":"Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard","id":50},{"name":"Detect Poison and Disease","level":1,"school":"Divination","classes":"Cleric, Druid, Paladin, Ranger","id":51},{"name":"Dissonant Whispers","level":1,"school":"Enchantment","classes":"Bard","id":52},{"name":"Hunter's Mark","level":1,"school":"Divination","classes":"Ranger","id":53},{"name":"Heroism","level":1,"school":"Enchantment","classes":"Bard, Paladin","id":54},{"name":"Chromatic Orb","level":1,"school":"Evocation","classes":"Sorcerer, Wizard","id":55},{"name":"Hex","level":1,"school":"Enchantment","classes":"Warlock","id":56},{"name":"Entangle","level":1,"school":"Conjuration","classes":"Druid, Ranger","id":57},{"name":"Find Familiar","level":1,"school":"Conjuration","classes":"Wizard","id":58},{"name":"Fog Cloud","level":1,"school":"Conjuration","classes":"Druid, Ranger, Sorcerer, Wizard","id":59},{"name":"Grease","level":1,"school":"Conjuration","classes":"Sorcerer, Wizard","id":60},{"name":"Hail of Thorns","level":1,"school":"Conjuration","classes":"Ranger","id":61},{"name":"Tenser's Floating Disk","level":1,"school":"Conjuration","classes":"Wizard","id":62},{"name":"Unseen Servant","level":1,"school":"Conjuration","classes":"Bard, Warlock, Wizard","id":63},{"name":"Identify","level":1,"school":"Divination","classes":"Bard, Wizard","id":64},{"name":"Cure Wounds","level":1,"school":"Evocation","classes":"Bard, Cleric, Druid, Paladin, Ranger","id":65},{"name":"Divine Favor","level":1,"school":"Evocation","classes":"Paladin","id":66},{"name":"Create or Destroy Water","level":1,"school":"Transmutation","classes":"Cleric, Druid","id":67},{"name":"Expeditious Retreat","level":1,"school":"Transmutation","classes":"Sorcerer, Warlock, Wizard","id":68},{"name":"Feather Fall","level":1,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":69},{"name":"Disguise Self","level":1,"school":"Illusion","classes":"Bard, Sorcerer, Wizard","id":70},{"name":"Sleep","level":1,"school":"Enchantment","classes":"Bard, Sorcerer, Wizard","id":71},{"name":"Faerie Fire","level":1,"school":"Evocation","classes":"Bard, Druid","id":72},{"name":"Guiding Bolt","level":1,"school":"Evocation","classes":"Cleric","id":73},{"name":"Healing Word","level":1,"school":"Evocation","classes":"Bard, Cleric, Druid","id":74},{"name":"Hellish Rebuke","level":1,"school":"Evocation","classes":"Warlock","id":75},{"name":"Goodberry","level":1,"school":"Transmutation","classes":"Druid, Ranger","id":76},{"name":"Magic Missile","level":1,"school":"Evocation","classes":"Sorcerer, Wizard","id":77},{"name":"Searing Smite","level":1,"school":"Evocation","classes":"Paladin, Ranger","id":78},{"name":"Thunderous Smite","level":1,"school":"Evocation","classes":"Paladin","id":79},{"name":"Speak with Animals","level":1,"school":"Divination","classes":"Bard, Druid, Ranger","id":80},{"name":"Illusory Script","level":1,"school":"Illusion","classes":"Bard, Warlock, Wizard","id":81},{"name":"Jump","level":1,"school":"Transmutation","classes":"Druid, Ranger, Sorcerer, Wizard","id":82},{"name":"Tasha's Hideous Laughter","level":1,"school":"Enchantment","classes":"Bard, Wizard","id":83},{"name":"Thunderwave","level":1,"school":"Evocation","classes":"Bard, Druid, Sorcerer, Wizard","id":84},{"name":"Witch Bolt","level":1,"school":"Evocation","classes":"Sorcerer, Warlock, Wizard","id":85},{"name":"Silent Image","level":1,"school":"Illusion","classes":"Bard, Sorcerer, Wizard","id":86},{"name":"Longstrider","level":1,"school":"Transmutation","classes":"Bard, Druid, Ranger, Wizard","id":87},{"name":"Wrathful Smite","level":1,"school":"Evocation","classes":"Paladin","id":88},{"name":"Purify Food and Drink","level":1,"school":"Transmutation","classes":"Cleric, Druid, Paladin","id":89},{"name":"Aid","level":2,"school":"Abjuration","classes":"Bard, Cleric, Paladin, Ranger","id":90},{"name":"Arcane Lock","level":2,"school":"Abjuration","classes":"Wizard","id":91},{"name":"Lesser Restoration","level":2,"school":"Abjuration","classes":"Bard, Cleric, Druid, Paladin, Ranger","id":92},{"name":"Blindness/Deafness","level":2,"school":"Necromancy","classes":"Bard, Cleric, Sorcerer, Wizard","id":93},{"name":"Gentle Repose","level":2,"school":"Necromancy","classes":"Cleric, Paladin, Wizard","id":94},{"name":"Pass without Trace","level":2,"school":"Abjuration","classes":"Druid, Ranger","id":95},{"name":"Ray of Enfeeblement","level":2,"school":"Necromancy","classes":"Warlock, Wizard","id":96},{"name":"Cloud of Daggers","level":2,"school":"Conjuration","classes":"Bard, Sorcerer, Warlock, Wizard","id":97},{"name":"Protection from Poison","level":2,"school":"Abjuration","classes":"Cleric, Druid, Paladin, Ranger","id":98},{"name":"Find Steed","level":2,"school":"Conjuration","classes":"Paladin","id":99},{"name":"Warding Bond","level":2,"school":"Abjuration","classes":"Cleric, Paladin","id":100},{"name":"Flaming Sphere","level":2,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":101},{"name":"Augury","level":2,"school":"Divination","classes":"Cleric, Druid, Wizard","id":102},{"name":"Beast Sense","level":2,"school":"Divination","classes":"Druid, Ranger","id":103},{"name":"Detect Thoughts","level":2,"school":"Divination","classes":"Bard, Sorcerer, Wizard","id":104},{"name":"Misty Step","level":2,"school":"Conjuration","classes":"Druid, Sorcerer, Warlock, Wizard","id":105},{"name":"Find Traps","level":2,"school":"Divination","classes":"Cleric, Druid, Ranger","id":106},{"name":"Animal Messenger","level":2,"school":"Enchantment","classes":"Bard, Druid, Ranger","id":107},{"name":"Calm Emotions","level":2,"school":"Enchantment","classes":"Bard, Cleric","id":108},{"name":"Crown of Madness","level":2,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":109},{"name":"Web","level":2,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":110},{"name":"Branding Smite","level":2,"school":"Evocation","classes":"Paladin","id":111},{"name":"Alter Self","level":2,"school":"Transmutation","classes":"Sorcerer, Wizard","id":112},{"name":"Barkskin","level":2,"school":"Transmutation","classes":"Druid, Ranger","id":113},{"name":"Enthrall","level":2,"school":"Enchantment","classes":"Bard, Warlock","id":114},{"name":"Cordon of Arrows","level":2,"school":"Transmutation","classes":"Ranger","id":115},{"name":"Darkvision","level":2,"school":"Transmutation","classes":"Druid, Ranger, Sorcerer, Wizard","id":116},{"name":"Enhance Ability","level":2,"school":"Transmutation","classes":"Bard, Cleric, Druid, Ranger, Sorcerer, Wizard","id":117},{"name":"Continual Flame","level":2,"school":"Evocation","classes":"Cleric, Druid, Wizard","id":118},{"name":"Blur","level":2,"school":"Illusion","classes":"Druid, Sorcerer, Wizard","id":119},{"name":"Enlarge/Reduce","level":2,"school":"Transmutation","classes":"Wizard","id":120},{"name":"Hold Person","level":2,"school":"Enchantment","classes":"Bard, Cleric, Druid, Sorcerer, Warlock, Wizard","id":121},{"name":"Locate Animals or Plants","level":2,"school":"Divination","classes":"Bard, Druid, Ranger","id":122},{"name":"Locate Object","level":2,"school":"Divination","classes":"Bard, Cleric, Druid, Paladin, Ranger, Wizard","id":123},{"name":"Darkness","level":2,"school":"Evocation","classes":"Druid, Sorcerer, Warlock, Wizard","id":124},{"name":"Flame Blade","level":2,"school":"Evocation","classes":"Druid, Sorcerer","id":125},{"name":"Gust of Wind","level":2,"school":"Evocation","classes":"Druid, Ranger, Sorcerer, Wizard","id":126},{"name":"Melf's Acid Arrow","level":2,"school":"Evocation","classes":"Druid, Wizard","id":127},{"name":"Moonbeam","level":2,"school":"Evocation","classes":"Druid","id":128},{"name":"Prayer of Healing","level":2,"school":"Evocation","classes":"Cleric, Paladin","id":129},{"name":"Heat Metal","level":2,"school":"Transmutation","classes":"Bard, Druid","id":130},{"name":"Knock","level":2,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":131},{"name":"Scorching Ray","level":2,"school":"Evocation","classes":"Sorcerer, Wizard","id":132},{"name":"See Invisibility","level":2,"school":"Divination","classes":"Bard, Sorcerer, Wizard","id":133},{"name":"Suggestion","level":2,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":134},{"name":"Levitate","level":2,"school":"Transmutation","classes":"Sorcerer, Wizard","id":135},{"name":"Zone of Truth","level":2,"school":"Enchantment","classes":"Bard, Cleric, Paladin","id":136},{"name":"Magic Weapon","level":2,"school":"Transmutation","classes":"Paladin, Ranger, Sorcerer, Wizard","id":137},{"name":"Rope Trick","level":2,"school":"Transmutation","classes":"Wizard","id":138},{"name":"Spider Climb","level":2,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":139},{"name":"Invisibility","level":2,"school":"Illusion","classes":"Bard, Druid, Sorcerer, Warlock, Wizard","id":140},{"name":"Shatter","level":2,"school":"Evocation","classes":"Bard, Sorcerer, Warlock, Wizard","id":141},{"name":"Spiritual Weapon","level":2,"school":"Evocation","classes":"Cleric","id":142},{"name":"Magic Mouth","level":2,"school":"Illusion","classes":"Bard, Wizard","id":143},{"name":"Spike Growth","level":2,"school":"Transmutation","classes":"Druid, Ranger","id":144},{"name":"Mirror Image","level":2,"school":"Illusion","classes":"Bard, Druid, Sorcerer, Warlock, Wizard","id":145},{"name":"Nystul's Magic Aura","level":2,"school":"Illusion","classes":"Wizard","id":146},{"name":"Phantasmal Force","level":2,"school":"Illusion","classes":"Bard, Sorcerer, Wizard","id":147},{"name":"Silence","level":2,"school":"Illusion","classes":"Bard, Cleric, Druid, Ranger","id":148},{"name":"Animate Dead","level":3,"school":"Necromancy","classes":"Cleric, Wizard","id":149},{"name":"Bestow Curse","level":3,"school":"Necromancy","classes":"Bard, Cleric, Wizard","id":150},{"name":"Beacon of Hope","level":3,"school":"Abjuration","classes":"Cleric","id":151},{"name":"Counterspell","level":3,"school":"Abjuration","classes":"Sorcerer, Warlock, Wizard","id":152},{"name":"Call Lightning","level":3,"school":"Conjuration","classes":"Druid","id":153},{"name":"Conjure Animals","level":3,"school":"Conjuration","classes":"Druid, Ranger","id":154},{"name":"Conjure Barrage","level":3,"school":"Conjuration","classes":"Ranger","id":155},{"name":"Feign Death","level":3,"school":"Necromancy","classes":"Bard, Cleric, Druid, Wizard","id":156},{"name":"Speak with Dead","level":3,"school":"Necromancy","classes":"Bard, Cleric, Wizard","id":157},{"name":"Vampiric Touch","level":3,"school":"Necromancy","classes":"Sorcerer, Warlock, Wizard","id":158},{"name":"Create Food and Water","level":3,"school":"Conjuration","classes":"Cleric, Druid, Paladin","id":159},{"name":"Hunger of Hadar","level":3,"school":"Conjuration","classes":"Warlock","id":160},{"name":"Revivify","level":3,"school":"Conjuration","classes":"Cleric, Druid, Paladin, Ranger","id":161},{"name":"Sleet Storm","level":3,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":162},{"name":"Dispel Magic","level":3,"school":"Abjuration","classes":"Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard","id":163},{"name":"Glyph of Warding","level":3,"school":"Abjuration","classes":"Bard, Cleric, Wizard","id":164},{"name":"Spirit Guardian","level":3,"school":"Conjuration","classes":"Cleric","id":165},{"name":"Magic Circle","level":3,"school":"Abjuration","classes":"Cleric, Paladin, Warlock, Wizard","id":166},{"name":"Nondetection","level":3,"school":"Abjuration","classes":"Bard, Ranger, Wizard","id":167},{"name":"Stinking Cloud","level":3,"school":"Conjuration","classes":"Bard, Druid, Sorcerer, Wizard","id":168},{"name":"Protection from Energy","level":3,"school":"Abjuration","classes":"Cleric, Druid, Ranger, Sorcerer, Wizard","id":169},{"name":"Remove Curse","level":3,"school":"Abjuration","classes":"Cleric, Paladin, Warlock, Wizard","id":170},{"name":"Clairvoyance","level":3,"school":"Divination","classes":"Bard, Cleric, Sorcerer, Wizard","id":171},{"name":"Aura of Vitality","level":3,"school":"Evocation","classes":"Cleric, Druid, Paladin","id":172},{"name":"Blinding Smite","level":3,"school":"Evocation","classes":"Paladin","id":173},{"name":"Crusader's Mantle","level":3,"school":"Evocation","classes":"Paladin","id":174},{"name":"Blink","level":3,"school":"Transmutation","classes":"Sorcerer, Wizard","id":175},{"name":"Daylight","level":3,"school":"Evocation","classes":"Cleric, Druid, Paladin, Ranger, Sorcerer","id":176},{"name":"Tongues","level":3,"school":"Divination","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard","id":177},{"name":"Fireball","level":3,"school":"Evocation","classes":"Sorcerer, Wizard","id":178},{"name":"Elemental Weapon","level":3,"school":"Transmutation","classes":"Druid, Paladin, Ranger","id":179},{"name":"Fly","level":3,"school":"Transmutation","classes":"Sorcerer, Warlock, Wizard","id":180},{"name":"Leomund's Tiny Hut","level":3,"school":"Evocation","classes":"Bard, Wizard","id":181},{"name":"Gaseous Form","level":3,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":182},{"name":"Lightning Bolt","level":3,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":183},{"name":"Haste","level":3,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":184},{"name":"Mass Healing Word","level":3,"school":"Evocation","classes":"Bard, Cleric","id":185},{"name":"Lightning Arrow","level":3,"school":"Transmutation","classes":"Ranger, Sorcerer","id":186},{"name":"Sending","level":3,"school":"Evocation","classes":"Bard, Cleric, Wizard","id":187},{"name":"Meld into Stone","level":3,"school":"Transmutation","classes":"Cleric, Druid, Ranger","id":188},{"name":"Fear","level":3,"school":"Illusion","classes":"Bard, Sorcerer, Warlock, Wizard","id":189},{"name":"Wind Wall","level":3,"school":"Evocation","classes":"Druid, Ranger","id":190},{"name":"Plant Growth","level":3,"school":"Transmutation","classes":"Bard, Druid, Ranger","id":191},{"name":"Slow","level":3,"school":"Transmutation","classes":"Bard, Druid, Sorcerer, Wizard","id":192},{"name":"Speak with Plants","level":3,"school":"Transmutation","classes":"Bard, Druid, Ranger","id":193},{"name":"Hypnotic Pattern","level":3,"school":"Illusion","classes":"Bard, Sorcerer, Warlock, Wizard","id":194},{"name":"Major Image","level":3,"school":"Illusion","classes":"Bard, Sorcerer, Warlock, Wizard","id":195},{"name":"Phantom Steed","level":3,"school":"Illusion","classes":"Wizard","id":196},{"name":"Water Breathing","level":3,"school":"Transmutation","classes":"Druid, Ranger, Sorcerer, Wizard","id":197},{"name":"Water Walk","level":3,"school":"Transmutation","classes":"Cleric, Druid, Ranger, Sorcerer","id":198},{"name":"Blight","level":4,"school":"Necromancy","classes":"Druid, Sorcerer, Warlock, Wizard","id":199},{"name":"Conjure Minor Elementals","level":4,"school":"Conjuration","classes":"Druid, Wizard","id":200},{"name":"Conjure Woodland Beings","level":4,"school":"Conjuration","classes":"Druid, Ranger","id":201},{"name":"Dimension Door","level":4,"school":"Conjuration","classes":"Bard, Sorcerer, Warlock, Wizard","id":202},{"name":"Evard's Black Tentacles","level":4,"school":"Conjuration","classes":"Wizard","id":203},{"name":"Compulsion","level":4,"school":"Enchantment","classes":"Bard","id":204},{"name":"Confusion","level":4,"school":"Enchantment","classes":"Bard, Druid, Sorcerer, Wizard","id":205},{"name":"Dominate Beast","level":4,"school":"Enchantment","classes":"Druid, Ranger, Sorcerer","id":206},{"name":"Aura of Life","level":4,"school":"Abjuration","classes":"Cleric, Paladin","id":207},{"name":"Grasping Vine","level":4,"school":"Conjuration","classes":"Druid, Ranger","id":208},{"name":"Arcane Eye","level":4,"school":"Divination","classes":"Wizard","id":209},{"name":"Aura of Purity","level":4,"school":"Abjuration","classes":"Cleric, Paladin","id":210},{"name":"Guardian of Faith","level":4,"school":"Conjuration","classes":"Cleric","id":211},{"name":"Leomund's Secret Chest","level":4,"school":"Conjuration","classes":"Wizard","id":212},{"name":"Divination","level":4,"school":"Divination","classes":"Cleric, Druid, Wizard","id":213},{"name":"Mordenkainen's Faithful Hound","level":4,"school":"Conjuration","classes":"Wizard","id":214},{"name":"Banishment","level":4,"school":"Abjuration","classes":"Cleric, Paladin, Sorcerer, Warlock, Wizard","id":215},{"name":"Locate Creature","level":4,"school":"Divination","classes":"Bard, Cleric, Druid, Paladin, Ranger, Wizard","id":216},{"name":"Death Ward","level":4,"school":"Abjuration","classes":"Cleric, Paladin","id":217},{"name":"Freedom of Movement","level":4,"school":"Abjuration","classes":"Bard, Cleric, Druid, Ranger","id":218},{"name":"Fire Shield","level":4,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":219},{"name":"Ice Storm","level":4,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":220},{"name":"Mordenkainen's Private Sanctum","level":4,"school":"Abjuration","classes":"Wizard","id":221},{"name":"Greater Invisibility","level":4,"school":"Illusion","classes":"Bard, Druid, Sorcerer, Wizard","id":222},{"name":"Otiluke's Resilient Sphere","level":4,"school":"Evocation","classes":"Wizard","id":223},{"name":"Stoneskin","level":4,"school":"Abjuration","classes":"Druid, Ranger, Sorcerer, Wizard","id":224},{"name":"Staggering Smite","level":4,"school":"Evocation","classes":"Paladin","id":225},{"name":"Hallucinatory Terrain","level":4,"school":"Illusion","classes":"Bard, Druid, Warlock, Wizard","id":226},{"name":"Wall of Fire","level":4,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":227},{"name":"Phantasmal Killer","level":4,"school":"Illusion","classes":"Bard, Wizard","id":228},{"name":"Control Water","level":4,"school":"Transmutation","classes":"Cleric, Druid, Wizard","id":229},{"name":"Fabricate","level":4,"school":"Transmutation","classes":"Wizard","id":230},{"name":"Giant Insect","level":4,"school":"Transmutation","classes":"Druid","id":231},{"name":"Polymorph","level":4,"school":"Transmutation","classes":"Bard, Druid, Sorcerer, Wizard","id":232},{"name":"Stone Shape","level":4,"school":"Transmutation","classes":"Cleric, Druid, Wizard","id":233},{"name":"Contagion","level":5,"school":"Necromancy","classes":"Cleric, Druid","id":234},{"name":"Raise Dead","level":5,"school":"Necromancy","classes":"Bard, Cleric, Paladin","id":235},{"name":"Dominate Person","level":5,"school":"Enchantment","classes":"Bard, Sorcerer, Wizard","id":236},{"name":"Commune","level":5,"school":"Divination","classes":"Cleric","id":237},{"name":"Commune with Nature","level":5,"school":"Divination","classes":"Druid, Ranger","id":238},{"name":"Cloudkill","level":5,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":239},{"name":"Conjure Elemental","level":5,"school":"Conjuration","classes":"Druid, Wizard","id":240},{"name":"Conjure Volley","level":5,"school":"Conjuration","classes":"Ranger","id":241},{"name":"Geas","level":5,"school":"Enchantment","classes":"Bard, Cleric, Druid, Paladin, Wizard","id":242},{"name":"Insect Plague","level":5,"school":"Conjuration","classes":"Cleric, Druid, Sorcerer","id":243},{"name":"Mass Cure Wounds","level":5,"school":"Conjuration","classes":"Bard, Cleric, Druid","id":244},{"name":"Hold Monster","level":5,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":245},{"name":"Teleportation Circle","level":5,"school":"Conjuration","classes":"Bard, Sorcerer, Warlock, Wizard","id":246},{"name":"Tree Stride","level":5,"school":"Conjuration","classes":"Druid, Ranger","id":247},{"name":"Antilife Shell","level":5,"school":"Abjuration","classes":"Druid","id":248},{"name":"Bigby's Hand","level":5,"school":"Evocation","classes":"Sorcerer, Wizard","id":249},{"name":"Modify Memory","level":5,"school":"Enchantment","classes":"Bard, Wizard","id":250},{"name":"Banishing Smite","level":5,"school":"Abjuration","classes":"Paladin","id":251},{"name":"Creation","level":5,"school":"Illusion","classes":"Sorcerer, Wizard","id":252},{"name":"Dream","level":5,"school":"Illusion","classes":"Bard, Druid, Warlock, Wizard","id":253},{"name":"Circle of Power","level":5,"school":"Abjuration","classes":"Paladin","id":254},{"name":"Cone of Cold","level":5,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":255},{"name":"Destructive Wave","level":5,"school":"Evocation","classes":"Paladin","id":256},{"name":"Flame Strike","level":5,"school":"Evocation","classes":"Cleric","id":257},{"name":"Dispel Evil and Good","level":5,"school":"Abjuration","classes":"Cleric, Paladin","id":258},{"name":"Mislead","level":5,"school":"Illusion","classes":"Bard, Warlock, Wizard","id":259},{"name":"Seeming","level":5,"school":"Illusion","classes":"Bard, Sorcerer, Wizard","id":260},{"name":"Greater Restoration","level":5,"school":"Abjuration","classes":"Bard, Cleric, Druid, Ranger","id":261},{"name":"Planar Binding","level":5,"school":"Abjuration","classes":"Bard, Cleric, Druid, Warlock, Wizard","id":262},{"name":"Contact Other Plane","level":5,"school":"Divination","classes":"Warlock, Wizard","id":263},{"name":"Hallow","level":5,"school":"Evocation","classes":"Cleric","id":264},{"name":"Animate Objects","level":5,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":265},{"name":"Awaken","level":5,"school":"Transmutation","classes":"Bard, Druid","id":266},{"name":"Passwall","level":5,"school":"Transmutation","classes":"Druid, Wizard","id":267},{"name":"Wall of Force","level":5,"school":"Evocation","classes":"Wizard","id":268},{"name":"Wall of Stone","level":5,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":269},{"name":"Legend Lore","level":5,"school":"Divination","classes":"Bard, Cleric, Wizard","id":270},{"name":"Rary's Telepathic Bond","level":5,"school":"Divination","classes":"Bard, Wizard","id":271},{"name":"Reincarnate","level":5,"school":"Transmutation","classes":"Druid","id":272},{"name":"Swift Quiver","level":5,"school":"Transmutation","classes":"Ranger","id":273},{"name":"Telekinesis","level":5,"school":"Transmutation","classes":"Sorcerer, Wizard","id":274},{"name":"Scrying","level":5,"school":"Divination","classes":"Bard, Cleric, Druid, Warlock, Wizard","id":275},{"name":"Circle of Death","level":6,"school":"Necromancy","classes":"Sorcerer, Warlock, Wizard","id":276},{"name":"Create Undead","level":6,"school":"Necromancy","classes":"Cleric, Warlock, Wizard","id":277},{"name":"Arcane Gate","level":6,"school":"Conjuration","classes":"Sorcerer, Warlock, Wizard","id":278},{"name":"Conjure Fey","level":6,"school":"Conjuration","classes":"Druid, Warlock","id":279},{"name":"Drawmij's Instant Summons","level":6,"school":"Conjuration","classes":"Wizard","id":280},{"name":"Mass Suggestion","level":6,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":281},{"name":"Otto's Irresistable Dance","level":6,"school":"Enchantment","classes":"Bard, Wizard","id":282},{"name":"Heroes' Feast","level":6,"school":"Conjuration","classes":"Cleric, Druid","id":283},{"name":"Forbiddance","level":6,"school":"Abjuration","classes":"Cleric","id":284},{"name":"Eyebite","level":6,"school":"Necromancy","classes":"Bard, Sorcerer, Warlock, Wizard","id":285},{"name":"Harm","level":6,"school":"Necromancy","classes":"Cleric","id":286},{"name":"Magic Jar","level":6,"school":"Necromancy","classes":"Wizard","id":287},{"name":"Globe of Invulnerability","level":6,"school":"Abjuration","classes":"Sorcerer, Wizard","id":288},{"name":"Guards and Wards","level":6,"school":"Abjuration","classes":"Bard, Wizard","id":289},{"name":"Planar Ally","level":6,"school":"Conjuration","classes":"Cleric","id":290},{"name":"Blade Barrier","level":6,"school":"Evocation","classes":"Cleric","id":291},{"name":"Programmed Illusion","level":6,"school":"Illusion","classes":"Bard, Wizard","id":292},{"name":"Chain Lightning","level":6,"school":"Evocation","classes":"Sorcerer, Wizard","id":293},{"name":"Contingency","level":6,"school":"Evocation","classes":"Wizard","id":294},{"name":"Heal","level":6,"school":"Evocation","classes":"Cleric, Druid","id":295},{"name":"Transport via Plants","level":6,"school":"Conjuration","classes":"Druid","id":296},{"name":"Disintegrate","level":6,"school":"Transmutation","classes":"Sorcerer, Wizard","id":297},{"name":"Flesh to Stone","level":6,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":298},{"name":"Move Earth","level":6,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":299},{"name":"Wind Walk","level":6,"school":"Transmutation","classes":"Druid","id":300},{"name":"Wall of Thorns","level":6,"school":"Conjuration","classes":"Druid","id":301},{"name":"Otiluke's Freezing Sphere","level":6,"school":"Evocation","classes":"Sorcerer, Wizard","id":302},{"name":"Sunbeam","level":6,"school":"Evocation","classes":"Cleric, Druid, Sorcerer, Wizard","id":303},{"name":"Word of Recall","level":6,"school":"Conjuration","classes":"Cleric","id":304},{"name":"Wall of Ice","level":6,"school":"Evocation","classes":"Wizard","id":305},{"name":"Find the Path","level":6,"school":"Divination","classes":"Bard, Cleric, Druid","id":306},{"name":"True Seeing","level":6,"school":"Divination","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard","id":307},{"name":"Finger of Death","level":7,"school":"Necromancy","classes":"Sorcerer, Warlock, Wizard","id":308},{"name":"Symbol","level":7,"school":"Abjuration","classes":"Bard, Cleric, Druid, Wizard","id":309},{"name":"Mirage Arcane","level":7,"school":"Illusion","classes":"Bard, Druid, Wizard","id":310},{"name":"Project Image","level":7,"school":"Illusion","classes":"Bard, Wizard","id":311},{"name":"Simulacrum","level":7,"school":"Illusion","classes":"Wizard","id":312},{"name":"Resurrection","level":7,"school":"Necromancy","classes":"Bard, Cleric","id":313},{"name":"Etherealness","level":7,"school":"Transmutation","classes":"Bard, Cleric, Sorcerer, Warlock, Wizard","id":314},{"name":"Conjure Celestial","level":7,"school":"Conjuration","classes":"Cleric","id":315},{"name":"Delayed Blast Fireball","level":7,"school":"Evocation","classes":"Sorcerer, Wizard","id":316},{"name":"Regenerate","level":7,"school":"Transmutation","classes":"Bard, Cleric, Druid","id":317},{"name":"Reverse Gravity","level":7,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":318},{"name":"Divine Word","level":7,"school":"Evocation","classes":"Cleric","id":319},{"name":"Mordenkainen's Magnificent Mansion","level":7,"school":"Conjuration","classes":"Bard, Wizard","id":320},{"name":"Plane Shift","level":7,"school":"Conjuration","classes":"Cleric, Druid, Sorcerer, Warlock, Wizard","id":321},{"name":"Teleport","level":7,"school":"Conjuration","classes":"Bard, Sorcerer, Wizard","id":322},{"name":"Sequester","level":7,"school":"Transmutation","classes":"Wizard","id":323},{"name":"Fire Storm","level":7,"school":"Evocation","classes":"Cleric, Druid","id":324},{"name":"Forcecage","level":7,"school":"Evocation","classes":"Bard, Warlock, Wizard","id":325},{"name":"Mordenkainen's Sword","level":7,"school":"Evocation","classes":"Bard, Wizard","id":326},{"name":"Prismatic Spray","level":7,"school":"Evocation","classes":"Bard, Sorcerer, Wizard","id":327},{"name":"Antimagic Field","level":8,"school":"Abjuration","classes":"Cleric, Wizard","id":328},{"name":"Holy Aura","level":8,"school":"Abjuration","classes":"Cleric","id":329},{"name":"Antipathy/Sympathy","level":8,"school":"Enchantment","classes":"Druid, Wizard","id":330},{"name":"Clone","level":8,"school":"Necromancy","classes":"Wizard","id":331},{"name":"Mind Blank","level":8,"school":"Abjuration","classes":"Bard, Wizard","id":332},{"name":"Dominate Monster","level":8,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":333},{"name":"Feeblemind","level":8,"school":"Enchantment","classes":"Bard, Druid, Warlock, Wizard","id":334},{"name":"Animal Shapes","level":8,"school":"Transmutation","classes":"Druid","id":335},{"name":"Control Weather","level":8,"school":"Transmutation","classes":"Cleric, Druid, Wizard","id":336},{"name":"Demiplane","level":8,"school":"Conjuration","classes":"Sorcerer, Warlock, Wizard","id":337},{"name":"Incendiary Cloud","level":8,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":338},{"name":"Glibness","level":8,"school":"Transmutation","classes":"Bard, Warlock","id":339},{"name":"Maze","level":8,"school":"Conjuration","classes":"Wizard","id":340},{"name":"Tsunami","level":8,"school":"Conjuration","classes":"Druid","id":341},{"name":"Power Word Stun","level":8,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":342},{"name":"Earthquake","level":8,"school":"Evocation","classes":"Cleric, Druid, Sorcerer","id":343},{"name":"Sunburst","level":8,"school":"Evocation","classes":"Cleric, Druid, Sorcerer, Wizard","id":344},{"name":"Telepathy","level":8,"school":"Evocation","classes":"Wizard","id":345},{"name":"Imprisonment","level":9,"school":"Abjuration","classes":"Warlock, Wizard","id":346},{"name":"Astral Projection","level":9,"school":"Necromancy","classes":"Cleric, Warlock, Wizard","id":347},{"name":"Foresight","level":9,"school":"Divination","classes":"Bard, Druid, Warlock, Wizard","id":348},{"name":"True Resurrection","level":9,"school":"Necromancy","classes":"Cleric, Druid","id":349},{"name":"Gate","level":9,"school":"Conjuration","classes":"Cleric, Sorcerer, Warlock, Wizard","id":350},{"name":"Prismatic Wall","level":9,"school":"Abjuration","classes":"Bard, Wizard","id":351},{"name":"Shapechange","level":9,"school":"Transmutation","classes":"Druid, Wizard","id":352},{"name":"Time Stop","level":9,"school":"Transmutation","classes":"Sorcerer, Wizard","id":353},{"name":"Mass Heal","level":9,"school":"Conjuration","classes":"Cleric","id":354},{"name":"Weird","level":9,"school":"Illusion","classes":"Warlock, Wizard","id":355},{"name":"True Polymorph","level":9,"school":"Transmutation","classes":"Bard, Warlock, Wizard","id":356},{"name":"Storm of Vengeance","level":9,"school":"Conjuration","classes":"Druid","id":357},{"name":"Meteor Swarm","level":9,"school":"Evocation","classes":"Sorcerer, Wizard","id":358},{"name":"Wish","level":9,"school":"Conjuration","classes":"Sorcerer, Wizard","id":359},{"name":"Power Word Heal","level":9,"school":"Evocation","classes":"Bard, Cleric","id":360},{"name":"Power Word Kill","level":9,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":361},{"name":"Control Flames","level":0,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":362},{"name":"Create Bonfire","level":0,"school":"Conjuration","classes":"Druid, Sorcerer, Warlock, Wizard","id":363},{"name":"Frostbite","level":0,"school":"Evocation","classes":"Druid, Sorcerer, Warlock, Wizard","id":364},{"name":"Gust","level":0,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":365},{"name":"Infestation","level":0,"school":"Conjuration","classes":"Druid, Sorcerer, Warlock, Wizard","id":366},{"name":"Magic Stone","level":0,"school":"Transmutation","classes":"Druid, Warlock","id":367},{"name":"Mold Earth","level":0,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":368},{"name":"Primal Savagery","level":0,"school":"Transmutation","classes":"Druid","id":369},{"name":"Shape Water","level":0,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":370},{"name":"Thunderclap","level":0,"school":"Evocation","classes":"Bard, Druid, Sorcerer, Warlock, Wizard","id":371},{"name":"Absorb Elements","level":1,"school":"Abjuration","classes":"Druid, Ranger, Sorcerer, Wizard","id":372},{"name":"Beast Bond","level":1,"school":"Divination","classes":"Druid, Ranger","id":373},{"name":"Earth Tremor","level":1,"school":"Evocation","classes":"Bard, Druid, Sorcerer, Wizard","id":374},{"name":"Ice Knife","level":1,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":375},{"name":"Snare","level":1,"school":"Abjuration","classes":"Druid, Ranger, Wizard","id":376},{"name":"Dust Devil","level":2,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":377},{"name":"Earthbind","level":2,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":378},{"name":"Healing Spirit","level":2,"school":"Conjuration","classes":"Druid, Ranger","id":379},{"name":"Skywrite","level":2,"school":"Transmutation, Ritual","classes":"Bard, Druid, Wizard","id":380},{"name":"Warding Wind","level":2,"school":"Evocation","classes":"Bard, Druid, Sorcerer, Wizard","id":381},{"name":"Erupting Earth","level":3,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":382},{"name":"Flame Arrows","level":3,"school":"Transmutation","classes":"Druid, Ranger, Sorcerer, Wizard","id":383},{"name":"Tidal Wave","level":3,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":384},{"name":"Wall of Water","level":3,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":385},{"name":"Charm Monster","level":4,"school":"Enchantment","classes":"Bard, Druid, Sorcerer, Warlock, Wizard","id":386},{"name":"Elemental Bane","level":4,"school":"Transmutation","classes":"Druid, Warlock, Wizard","id":387},{"name":"Guardian of Nature","level":4,"school":"Transmutation","classes":"Druid, Ranger","id":388},{"name":"Watery Sphere","level":4,"school":"Conjuration","classes":"Druid, Sorcerer, Wizard","id":389},{"name":"Control Winds","level":5,"school":"Transmutation","classes":"Druid, Sorcerer, Wizard","id":390},{"name":"Maelstrom","level":5,"school":"Evocation","classes":"Druid","id":391},{"name":"Transmute Rock","level":5,"school":"Transmutation","classes":"Druid, Wizard","id":392},{"name":"Wrath of Nature","level":5,"school":"Evocation","classes":"Druid, Ranger","id":393},{"name":"Bones of the Earth","level":6,"school":"Transmutation","classes":"Druid","id":394},{"name":"Druid Grove","level":6,"school":"Abjuration","classes":"Druid","id":395},{"name":"Investiture of Flame","level":6,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":396},{"name":"Investiture of Ice","level":6,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":397},{"name":"Investiture of Stone","level":6,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":398},{"name":"Investiture of Wind","level":6,"school":"Transmutation","classes":"Druid, Sorcerer, Warlock, Wizard","id":399},{"name":"Primordial Ward","level":6,"school":"Abjuration","classes":"Druid","id":400},{"name":"Whirlwind","level":7,"school":"Evocation","classes":"Druid, Sorcerer, Wizard","id":401},{"name":"Catapult","level":1,"school":"Transmutation","classes":"Sorcerer, Wizard","id":402},{"name":"Chaos Bolt","level":1,"school":"Evocation","classes":"Sorcerer","id":403},{"name":"Aganazzar's Scorcher","level":2,"school":"Evocation","classes":"Sorcerer, Wizard","id":404},{"name":"Dragon's Breath","level":2,"school":"Transmutation","classes":"Sorcerer, Wizard","id":405},{"name":"Maximilian's Earthen Grasp","level":2,"school":"Transmutation","classes":"Sorcerer, Wizard","id":406},{"name":"Mind Spike","level":2,"school":"Divination","classes":"Sorcerer, Warlock, Wizard","id":407},{"name":"Pyrotechnics","level":2,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":408},{"name":"Shadow Blade","level":2,"school":"Illusion","classes":"Sorcerer, Warlock, Wizard","id":409},{"name":"Snilloc's Snowball Swarm","level":2,"school":"Evocation","classes":"Sorcerer, Wizard","id":410},{"name":"Catnap","level":3,"school":"Enchantment","classes":"Bard, Sorcerer, Wizard","id":411},{"name":"Enemies Abound","level":3,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":412},{"name":"Melf's Minute Meteors","level":3,"school":"Evocation","classes":"Sorcerer, Wizard","id":413},{"name":"Thunder Step","level":3,"school":"Conjuration","classes":"Sorcerer, Warlock, Wizard","id":414},{"name":"Sickening Radiance","level":4,"school":"Evocation","classes":"Sorcerer, Warlock, Wizard","id":415},{"name":"Storm Sphere","level":4,"school":"Evocation","classes":"Sorcerer, Wizard","id":416},{"name":"Vitriolic Sphere","level":4,"school":"Evocation","classes":"Sorcerer, Wizard","id":417},{"name":"Enervation","level":5,"school":"Necromancy","classes":"Sorcerer, Warlock, Wizard","id":418},{"name":"Far Step","level":5,"school":"Conjuration","classes":"Sorcerer, Warlock, Wizard","id":419},{"name":"Immolation","level":5,"school":"Evocation","classes":"Sorcerer, Wizard","id":420},{"name":"Skill Empowerment","level":5,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":421},{"name":"Synaptic Static","level":5,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":422},{"name":"Wall Of Light","level":5,"school":"Evocation","classes":"Sorcerer, Warlock, Wizard","id":423},{"name":"Mental Prison","level":6,"school":"Illusion","classes":"Sorcerer, Warlock, Wizard","id":424},{"name":"Scatter","level":6,"school":"Conjuration","classes":"Sorcerer, Warlock, Wizard","id":425},{"name":"Crown Of Stars","level":7,"school":"Evocation","classes":"Sorcerer, Warlock, Wizard","id":426},{"name":"Power Word Pain","level":7,"school":"Enchantment","classes":"Sorcerer, Warlock, Wizard","id":427},{"name":"Abi-dalzim's Horrid Wilting","level":8,"school":"Necromancy","classes":"Sorcerer, Wizard","id":428},{"name":"Mass Polymorph","level":9,"school":"Transmutation","classes":"Bard, Sorcerer, Wizard","id":429},{"name":"Psychic Scream","level":9,"school":"Enchantment","classes":"Bard, Sorcerer, Warlock, Wizard","id":430},{"name":"Toll The Dead","level":0,"school":"Necromancy","classes":"Cleric, Warlock, Wizard","id":431},{"name":"Cause Fear","level":1,"school":"Necromancy","classes":"Warlock, Wizard","id":432},{"name":"Life Transference","level":3,"school":"Necromancy","classes":"Cleric, Wizard","id":433},{"name":"Summon Lesser Demons","level":3,"school":"Conjuration","classes":"Warlock, Wizard","id":434},{"name":"Tiny Servant","level":3,"school":"Transmutation","classes":"Wizard","id":435},{"name":"Wall Of Sand","level":3,"school":"Evocation","classes":"Wizard","id":436},{"name":"Summon Greater Demon","level":4,"school":"Conjuration","classes":"Warlock, Wizard","id":437},{"name":"Danse Macabre","level":5,"school":"Necromancy","classes":"Warlock, Wizard","id":438},{"name":"Dawn","level":5,"school":"Evocation","classes":"Cleric, Wizard","id":439},{"name":"Infernal Calling","level":5,"school":"Conjuration","classes":"Warlock, Wizard","id":440},{"name":"Negative Energy Flood","level":5,"school":"Necromancy","classes":"Warlock, Wizard","id":441},{"name":"Steel Wind Strike","level":5,"school":"Conjuration","classes":"Ranger, Wizard","id":442},{"name":"Create Homunculus","level":6,"school":"Transmutation","classes":"Wizard","id":443},{"name":"Soul Cage","level":6,"school":"Necromancy","classes":"Warlock, Wizard","id":444},{"name":"Tenser's Transformation","level":6,"school":"Transmutation","classes":"Wizard","id":445},{"name":"Illusory Dragon","level":8,"school":"Illusion","classes":"Wizard","id":446},{"name":"Maddening Darkness","level":8,"school":"Evocation","classes":"Warlock, Wizard","id":447},{"name":"Mighty Fortress","level":8,"school":"Conjuration","classes":"Wizard","id":448},{"name":"Invulnerability","level":9,"school":"Abjuration","classes":"Wizard","id":449},{"name":"Shadow of Moil","level":4,"school":"Necromancy","classes":"Warlock","id":450},{"name":"Word of Radiance","level":0,"school":"Evocation","classes":"Cleric","id":451},{"name":"Ceremony","level":1,"school":"Abjuration","classes":"Cleric","id":452},{"name":"Holy Weapon","level":5,"school":"Evocation","classes":"Cleric","id":453},{"name":"Temple of the Gods","level":7,"school":"Conjuration","classes":"Cleric","id":454},{"name":"Zephyr Strike","level":1,"school":"Transmutation","classes":"Ranger","id":455},{"name":"Find Greater Steed","level":4,"school":"Conjuration","classes":"Paladin","id":456}
];
/*
  spellcaster and spells arrays
*/
const paladinOne = [
  0
];
const paladinTwo = [
  0,2
];
const paladinThree = [
  0,3
];
const paladinFour = [
  0,3
];
const paladinFive = [
  0,4,2
];
const paladinSix = [
  0,4,2
];
const paladinSeven = [
  0,4,3
];
const paladinEight = [
  0,4,3
];
const paladinNine = [
  0,4,3,2
];
const paladinTen = [
  0,4,3,2
];
const paladinEleven = [
  0,4,3,3
];
const paladinTwelve = [
  0,4,3,3
];
const paladinThirteen = [
  0,4,3,3,1
];
const paladinFourteen = [
  0,4,3,3,1
];
const paladinFifteen = [
  0,4,3,3,2
];
const paladinSixteen = [
  0,4,3,3,2
];
const paladinSeventeen = [
  0,4,3,3,3,1
];
const paladinEighteen = [
  0,4,3,3,3,1
];
const paladinNineteen = [
  0,4,3,3,3,2
];
const paladinTwenty = [
  0,4,3,3,3,2
];
const rangerOne = [
  0
];
const rangerTwo = [
  0,2
];
const rangerThree = [
  0,3
];
const rangerFour = [
  0,3
];
const rangerFive = [
  0,4,2
];
const rangerSix = [
  0,4,2
];
const rangerSeven = [
  0,4,3
];
const rangerEight = [
  0,4,3
];
const rangerNine = [
  0,4,3,2
];
const rangerTen = [
  0,4,3,2
];
const rangerEleven = [
  0,4,3,3
];
const rangerTwelve = [
  0,4,3,3
];
const rangerThirteen = [
  0,4,3,3,1
];
const rangerFourteen = [
  0,4,3,3,1
];
const rangerFifteen = [
  0,4,3,3,2
];
const rangerSixteen = [
  0,4,3,3,2
];
const rangerSeventeen = [
  0,4,3,3,3,1
];
const rangerEighteen = [
  0,4,3,3,3,1
];
const rangerNineteen = [
  0,4,3,3,3,2
];
const rangerTwenty = [
  0,4,3,3,3,2
];
const scrollsAwful = [
  3,2
];
const scrollsPoor = [
  04,4,2
];
const scrollsAverage = [
  5,4,2,2,2
];
const scrollsGood = [
  5,5,4,3,3,3,3
];
const scrollsBest = [
  5,5,5,5,4,4,4,2,2,1
];
const spellCasterOne = [
  3,2
];
const spellCasterTwo = [
  3,3
];
const spellCasterThree = [
  3,
  4,
  2
];
const spellCasterFour = [
  4,
  4,
  3
];
const spellCasterFive = [
  4,
  4,
  3,
  2];
const spellCasterSix = [
  4,
  4,
  3,
  3
];
const spellCasterSeven = [
  4,
  4,
  3,
  3,
  1
];
const spellCasterEight = [
  4,4,3,3,2
];
const spellCasterNine = [
  4,4,3,3,3,1
];
const spellCasterTen = [
  5,4,3,3,3,2
];
const spellCasterEleven = [
  5,4,3,3,2,1
];
const spellCasterTwelve = [
  5,4,3,3,2,1
];
const spellCasterThirteen = [
  5,4,3,3,2,1,1
];
const spellCasterFourteen = [
  5,4,3,3,2,1,1
];
const spellCasterFifteen = [
  5,4,3,3,3,2,1,1,1
];
const spellCasterSixteen = [
  5,4,3,3,3,2,1,1,1
];
const spellCasterSeventeen = [
  5,4,3,3,3,2,1,1,1,1
];
const spellCasterEighteen = [
  5,4,3,3,3,3,1,1,1,1
];
const spellCasterNineteen = [
  5,4,3,3,3,3,2,1,1,1
];
const spellCasterTwenty = [
  5,4,3,3,3,3,2,2,1,1
];

/*
  tables data
*/
const gemstones5000 = [
  "Black sapphire (5000gp)","Diamond (1000gp)","Jacinth (5000gp)","Ruby (5000gp)","Diamond (500gp)"
];
const gemstones1000 = [
  "Black opal (1000gp)","Blue sapphire (1000gp)","Emerald (1000gp)","Fire opal (1000gp)","Opal (1000gp)","Star ruby (1000gp)","Star sapphire (1000gp)","Yellow sapphire (1000gp)", "Diamond (500gp)", "Diamond (250gp)"
];
const gemstones500 = [
  "Alexandrite (500gp)","Aquamarine (500gp)","Black pearl (500gp)","Blue spinel (500gp)","Peridot (500gp)","Topaz (500gp)", "Diamond (100gp)", "Diamond (250gp)"
];
const gemstones100 = [
  "Amber (100gp)","Amethyst (100gp)","Chrysoberyl (100gp)","Coral (100gp)","Garnet (100gp)","Jade (100gp)","Jet (100gp)","Pearl (100gp)","Spinel (100gp)","Tourmaline (100gp)"
];
const gemstones50 = [
  "Bloodstone (50gp)","Carnelian (50gp)","Chalcedony (50gp)","Chrysoprase (50gp)","Citrine (50gp)","Jasper (50gp)","Moonstone (50gp)","Onyx (50gp)","Quartz (50gp)","Sardonyx (50gp)","Star rose quartz (50gp)","Zircon (50gp)"
];
const gemstones10 = [
  "Azurite (10gp)","Banded agate (10gp)","Blue quartz (10gp)","Eye agate (10gp)","Hematite (10gp)","Lapis lazuli (10gp)","Malachite (10gp)","Moss agate (10gp)","Obsidian (10gp)","Rhodochrosite (10gp)","Tiger eye (10gp)","Turquoise (10gp)"
];
const magicA = [
  "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Potion of Healing (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Cantrip Spell Scroll (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (1st level) (A)", "Spell Scroll (2nd level) (A)", "Spell Scroll (2nd level) (A)", "Spell Scroll (2nd level) (A)", "Spell Scroll (2nd level) (A)", "Potion of Greater Healing (A)", "Potion of Greater Healing (A)", "Potion of Greater Healing (A)", "Potion of Greater Healing (A)", "Bag of Holding (A)", "Driftglobe (A)"
];
const magicB = [
  "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Greater Healing (B)", "Potion of Fire Breath (B)", "Potion of Fire Breath (B)", "Potion of Fire Breath (B)", "Potion of Fire Breath (B)", "Potion of Fire Breath (B)", "Potion of Fire Breath (B)", "Potion of Fire Breath (B)", "Potion of Resistance (B)", "Potion of Resistance (B)", "Potion of Resistance (B)", "Potion of Resistance (B)", "Potion of Resistance (B)", "Potion of Resistance (B)", "Potion of Resistance (B)", "Ammunition, +1 (B)", "Ammunition, +2 (B)", "Ammunition, +3 (B)", "Ammunition, +4 (B)", "Ammunition, +5 (B)", "Potion of Animal Friendship (B)", "Potion of Animal Friendship (B)", "Potion of Animal Friendship (B)", "Potion of Animal Friendship (B)", "Potion of Animal Friendship (B)", "Potion of Hill Giant Strength (B)", "Potion of Hill Giant Strength (B)", "Potion of Hill Giant Strength (B)", "Potion of Hill Giant Strength (B)", "Potion of Hill Giant Strength (B)", "Potion of Growth (B)", "Potion of Growth (B)", "Potion of Growth (B)", "Potion of Growth (B)", "Potion of Growth (B)", "Potion of Water Breathing (B)", "Potion of Water Breathing (B)", "Potion of Water Breathing (B)", "Potion of Water Breathing (B)", "Potion of Water Breathing (B)", "Spell scroll (2nd level) (B)", "Spell scroll (2nd level) (B)", "Spell scroll (2nd level) (B)", "Spell scroll (2nd level) (B)", "Spell scroll (2nd level) (B)", "Spell scroll (3rd level) (B)", "Spell scroll (3rd level) (B)", "Spell scroll (3rd level) (B)", "Spell scroll (3rd level) (B)", "Spell scroll (3rd level) (B)", "Bag of Holding (B)", "Bag of Holding (B)", "Bag of Holding (B)", "Keoghtom's Ointment (B)", "Keoghtom's Ointment (B)", "Keoghtom's Ointment (B)", "Oil of Slipperiness (B)", "Oil of Slipperiness (B)", "Oil of Slipperiness (B)", "Dust of Disappearance (B)", "Dust of Disappearance (B)", "Dust of Dryness (B)", "Dust of Dryness (B)", "Dust of Sneezing and Choking (B)", "Dust of Sneezing and Choking (B)", "Elemental Gem (B)", "Elemental Gem (B)", "Philter of Love (B)", "Philter of Love (B)", "Alchemy jug (B)", "Cap of Water Breathing (B)", "Cloak of the manta ray (B)", "Drift globe (B)", "Goggles of night (B)", "Helm of comprehending languages (B)", "Immovable rod (B)", "Lantern of revealing (B)", "Mariner's armor (B)", "Mithral armor (B)", "Potion of Poison (B)", "Ring of swimming (B)", "Robe of useful items (B)", "Rope of climbing (B)", "Saddle of the cavalier (B)", "Wand of magic detection (B)", "Wand of secrets (B)"
];
const magicC = [
  "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Potion of Superior Healing (C)", "Spell Scroll (4th level) (C)", "Spell Scroll (4th level) (C)", "Spell Scroll (4th level) (C)", "Spell Scroll (4th level) (C)", "Spell Scroll (4th level) (C)", "Spell Scroll (4th level) (C)", "Spell Scroll (4th level) (C)", "Ammunition +2 (C)", "Ammunition +2 (C)", "Ammunition +2 (C)", "Ammunition +2 (C)", "Ammunition +2 (C)", "Potion of Clairvoyance (C)", "Potion of Clairvoyance (C)", "Potion of Clairvoyance (C)", "Potion of Clairvoyance (C)", "Potion of Clairvoyance (C)", "Potion of Dimunition (C)", "Potion of Dimunition (C)", "Potion of Dimunition (C)", "Potion of Dimunition (C)", "Potion of Dimunition (C)", "Potion of Gaseous Form (C)", "Potion of Gaseous Form (C)", "Potion of Gaseous Form (C)", "Potion of Gaseous Form (C)", "Potion of Gaseous Form (C)", "Potion of Frost Giant Strength (C)", "Potion of Frost Giant Strength (C)", "Potion of Frost Giant Strength (C)", "Potion of Frost Giant Strength (C)", "Potion of Frost Giant Strength (C)", "Potion of Stone Giant Strength (C)", "Potion of Stone Giant Strength (C)", "Potion of Stone Giant Strength (C)", "Potion of Stone Giant Strength (C)", "Potion of Stone Giant Strength (C)", "Potion of Heroism (C)", "Potion of Heroism (C)", "Potion of Heroism (C)", "Potion of Heroism (C)", "Potion of Heroism (C)", "Potion of Invulnerability (C)", "Potion of Invulnerability (C)", "Potion of Invulnerability (C)", "Potion of Invulnerability (C)", "Potion of Invulnerability (C)", "Potion of Mind Reading (C)", "Potion of Mind Reading (C)", "Potion of Mind Reading (C)", "Potion of Mind Reading (C)", "Potion of Mind Reading (C)", "Spell scroll (5th levtl) (C)", "Spell scroll (5th levtl) (C)", "Spell scroll (5th levtl) (C)", "Spell scroll (5th levtl) (C)", "Spell scroll (5th levtl) (C)", "Elixir of health (C)", "Elixir of health (C)", "Elixir of health (C)", "Oil of Etherealness (C)", "Oil of Etherealness (C)", "Oil of Etherealness (C)", "Potion of Fire giant strength (C)", "Potion of Fire giant strength (C)", "Potion of Fire giant strength (C)", "Quaal's feather token (C)", "Quaal's feather token (C)", "Quaal's feather token (C)", "Scroll of protection (C)", "Scroll of protection (C)", "Scroll of protection (C)", "Bag of Beans (C)", "Bag of Beans (C)", "Bead of force (C)", "Bead of force (C)", "Chime of opening (C)", "Decanter of endless water (C)", "Eyes of minute seeing (C)", "Folding boat (C)", "Heward's handy haversack (C)", "Horseshoes of Speed (C)", "Necklace of fireballs (C)", "Periapt of health (C)", "Sending stones (C)"
];
const magicD = [
  "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Supreme Healing (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Invisibility (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Potion of Speed (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (6th level) (D)", "Spell scroll (7th level) (D)", "Spell scroll (7th level) (D)", "Spell scroll (7th level) (D)", "Spell scroll (7th level) (D)", "Spell scroll (7th level) (D)", "Spell scroll (7th level) (D)", "Spell scroll (7th level) (D)", "Ammunition +3 (D)", "Ammunition +3 (D)", "Ammunition +3 (D)", "Ammunition +3 (D)", "Ammunition +3 (D)", "Oil of Sharpness (D)", "Oil of Sharpness (D)", "Oil of Sharpness (D)", "Oil of Sharpness (D)", "Oil of Sharpness (D)", "Potion of Flying (D)", "Potion of Flying (D)", "Potion of Flying (D)", "Potion of Flying (D)", "Potion of Flying (D)", "Potion of Cloud Giant Strength (D)", "Potion of Cloud Giant Strength (D)", "Potion of Cloud Giant Strength (D)", "Potion of Cloud Giant Strength (D)", "Potion of Cloud Giant Strength (D)", "Potion of Longevity (D)", "Potion of Longevity (D)", "Potion of Longevity (D)", "Potion of Longevity (D)", "Potion of Longevity (D)", "Potion of Vitality (D)", "Potion of Vitality (D)", "Potion of Vitality (D)", "Potion of Vitality (D)", "Potion of Vitality (D)", "Spell scroll (8th level) (D)", "Spell scroll (8th level) (D)", "Spell scroll (8th level) (D)", "Spell scroll (8th level) (D)", "Spell scroll (8th level) (D)", "Horseshoes of a zephyr (D)", "Horseshoes of a zephyr (D)", "Horseshoes of a zephyr (D)", "Nolzur's marvelous pigments (D)", "Nolzur's marvelous pigments (D)", "Nolzur's marvelous pigments (D)", "Bag of devouring (D)", "Portable hole (D)"
];
const magicE = [
  "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Spell scroll (8th level) (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Storm Giant Strength (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Potion of Supreme Healing (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Spell scroll (9th level) (E)", "Universal solvent (E)", "Universal solvent (E)", "Universal solvent (E)", "Universal solvent (E)", "Universal solvent (E)", "Universal solvent (E)", "Universal solvent (E)", "Universal solvent (E)", "Arrow of slaying (E)", "Arrow of slaying (E)", "Arrow of slaying (E)", "Arrow of slaying (E)", "Arrow of slaying (E)", "Sovereign glue (E)", "Sovereign glue (E)"
];
const magicF = [
  "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Weapon +1 (F)", "Shield +1 (F)", "Shield +1 (F)", "Shield +1 (F)", "Sentinel Shield (F)", "Sentinel Shield (F)", "Sentinel Shield (F)", "Amulet of proof against detection and location (F)", "Amulet of proof against detection and location (F)", "Boots of elven kind (F)", "Boots of elven kind (F)", "Boots of striding and springing (F)", "Boots of striding and springing (F)", "Bracers of archery (F)", "Bracers of archery (F)", "Brooch of shielding (F)", "Brooch of shielding (F)", "Broom of flying (F)", "Broom of flying (F)", "Cloak of elven kind (F)", "Cloak of elven kind (F)", "Cloak of Prtection (F)", "Cloak of Protection (F)", "Gauntlets of ogre power (F)", "Gauntlets of ogre power (F)", "Hat of disguise (F)", "Hat of disguise (F)", "Javelin of lightning (F)", "Javelin of lightning (F)", "Pearl of power (F)", "Pearl of power (F)", "Rod of the pact keeper, + 1 (F)", "Rod of the pact keeper, + 1 (F)", "Slippers of spider climbing (F)", "Slippers of spider climbing (F)", "Staff of the adder (F)", "Staff of the adder (F)", "Staff of the python (F)", "Staff of the python (F)", "Sword of vengeance (F)", "Sword of vengeance (F)", "Trident of fish command (F)", "Trident of fish command (F)", "Wand of magic missiles (F)", "Wand of magic missiles (F)", "Wand ofthewal' mage, +1 (F)", "Wand ofthewal' mage, +1 (F)", "Wand of web (F)", "Wand of web (F)", "Weapon of Warning (F)", "Weapon of Warning (F)", "Adamantine armor (chain mail) (F)", "Adamantine armor (chain shirt) (F)", "Adamantlne armor (scale mail) (F)", "Bag of tricks (gray) (F)", "Bag of tricks (rust) (F)", "Bag of tricks (tan) (F)", "Boots of the winterlands (F)", "Circlet of blasting (F)", "Deck of Illusions (F)", "Eversmoking bottle (F)", "Eyes or charming (F)", "Eyes of the eagle (F)", "f igurine of wondrou5 power (silver raven) (F)", "Gem of brightness (F)", "Gloves of missile snaring (F)", "Clovc-s of swimming and climbing (F)", "Gloves of thievery (F)", "Headband of Intellect (F)", "Helm oftelep.athy (F)", "Instrument of the bards (Doss lute) (F)", "Instrument of the bards (Fochlucan bandore) (F)", "Instrument of 1he bards (Mac-fuimidh ci ttern) (F)", "Medallion or thoughts (F)", "Ned:lace of adaptation (F)", "Periapt of wound closure (F)", "Pipes of haunting (F)", "Pipes of the sewers (F)", "Ring of jumping (F)", "Ring of mind shielding (F)", "Ring of warmth (F)", "Ring of water walking (F)", "Quiver of Ehlonna (F)", "Stone of good luck (F)", "Wind fan (F)", "Winged boots (F)"
];
const magicG = [
  "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Weapon +1 (G)", "Figurine of wondrous power (roll d8) (G)", "Figurine of wondrous power (roll d8) (G)", "Figurine of wondrous power (roll d8) (G)", "Adamantine armor (breastplate)  (G)", "Adamantme armor (splint) (G)", "Amulet of health  (G)", "Armor of vulnerability  (G)", "Arrow-catching shield  (G)", "Belt of dwarvenkind  (G)", "Seit of hill giant strength  (G)", "Berserker Axe  (G)", "Boots of levitahon  (G)", "Boots of Speed  (G)", "Bowl of commanding water elementals  (G)", "Bracers of defense  (G)", "Brazier of commanding fire elementals (G)", "Cape of the mountebank  (G)", "Censer of controlling air elementals  (G)", "Armor, +1 chain mail  (G)", "Armor of resistance (chain mail)  (G)", "Armor, +1 chain shirt  (G)", "Armor of resistance (chain shirt) (G)", "Cloak of displacement  (G)", "Cloak of the bat (G)", "Cube of force  (G)", "Oaern's instant fortress  (G)", "Dagger of venom (G)", "Dimensional shackles  (G)", "Dragon slayer (G)", "Elven chain  (G)", "Flame tongue  (G)", "Gem of seeing (G)", "Giant slayer (G)", "Glamoured studded leather  (G)", "Helm of tefeportation  (G)", "Horn of blasting  (G)", "Horn of Valhalla (silver or brass)  (G)", "Instrument of the bards (Canaith mandolin) (G)", "lnstrument of the bards (Cli lyre)  (G)", "loun stone (awareness)  (G)", "loun stone (protection) (G)", "loun stone (reserve) (G)", "loun stone (sustenance) (G)", "Iron bands of Bilarro (G)", "Armor, +1 leather (G)", "Armor of resistance (leather) (G)", "Mace of disruption (G)", "Mace of smiting (G)", "Mace of terror (G)", "Mantle of spell resistance (G)", "Necklace of prayer beads (G)", "Periapt of proof against poison (G)", "Ring of animal influence (G)", "Ring of evasion (G)", "Ring of feather falhng (G)", "Ring of free action (G)", "Ring of protection (G)", "Ring of resistance (G)", "Ring of spell storing (G)", "Ring of the ram (G)", "Ring of X-ray vision (G)", "Robe of eyes (G)", "Rod of rulership (G)", "Rod of the pact keeper, +2 (G)", "Rope of entanglement (G)", "Armor, +1 scale mail (G)", "Armor of resistance (scale mail) (G)", "Shield, +2 (G)", "Shield of missile attraction (G)", "Su1ff of charming (G)", "Staff of healing (G)", "Staff of swarming insects (G)", "Staff of the woodlands (G)", "Staff of withering (G)", "Stone of controlling earth elementals (G)", "Sun blade (G)", "Sword of life stealing (G)", "Sword of wounding (G)", "Tentacle rod (G)", "Vicious weapon (G)", "Wand of binding (G)", "Wand of enemy detection (G)", "Wand of fear (G)", "Wand of fireballs (G)", "Wand of lightning bolts (G)", "Wand of paralysis (G)", "Wand of the war mage, +2 (G)", "Wand or wonder (G)", "Wings of flying (G)"
];
const magicH = [
  "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Weapon +3 (H)", "Amuilet of the planes (H)", "Amuilet of the planes (H)", "Carpet of flying (H)", "Carpet of flying (H)", "Crystal ball (very rare) (H)", "Crystal ball (very rare) (H)", "Ring of regeneration (H)", "Ring of regeneration (H)", "Ring of shooting stars (H)", "Ring of shooting stars (H)", "Ring of telekinesis (H)", "Ring of telekinesis (H)", "Robe of scintilating colors (H)", "Robe of scintilating colors (H)", "Robe of stars (H)", "Robe of stars (H)", "Rod of absorption (H)", "Rod of absorption (H)", "Rod of alertness (H)", "Rod of alertness (H)", "Rod of security (H)", "Rod of security (H)", "Rod of the pact keeper, +3 (H)", "Rod of the pact keeper, +3 (H)", "Scimitar of Speed (H)", "Scimitar of Speed (H)", "Shield, +3 (H)", "Shield, +3 (H)", "Staff of fire (H)", "Staff of fire (H)", "Staff of frost (H)", "Staff of frost (H)", "Staff of power (H)", "Staff of power (H)", "Staff of striking (H)", "Staff of striking (H)", "Staff of thunder and lightning (H)", "Staff of thunder and lightning (H)", "Sword of sharpness (H)", "Sword of sharpness (H)", "Ward of polymorph (H)", "Ward of polymorph (H)", "Wand of the war mage, +3 (H)", "Wand of the war mage, +3 (H)", "Adamantine armor (half plate) (H)", "Adamantine armor (plate) (H)", "Animated shield (H)", "Belt of fire giant strength (H)", "Belt of frost/stone giant strength (H)", "Armor, +1 breastplate (H)", "Armor of resistence (breastplate) (H)", "Candle of invocation (H)", "Armor, +2 chain mail (H)", "Armor, +2 chain shirt (H)", "Cloak of arachnida (H)", "Oancing sword  (H)", "Demon armor  (H)", "Dragon scale mail (H)", "Dwarven plate  (H)", "Dwarven thrower  (H)", "Efreeti bottle  (H)", "Figurine of wondrous power (obsidian steel) (H)", "Frost brand (H)", "Helm of brilliance (H)", "Hom of Valhalla (Bronze) (H)", "Instrument of the bards (Anstruth harp) (H)", "loun stone (absorption) (H)", "loun stone (agility)  (H)", "loun stone (fortitude)  (H)", "loon stone (insight)  (H)", "loun stone (intellect) (H)", "loun stone (leadership)  (H)", "loun stone (strength)  (H)", "Armor, +2 leather  (H)", "Manual of bodily health  (H)", "Manual of gainful exercise  (H)", "Manual of golems  (H)", "Manual of quickness of action  (H)", "Minor of life trapping  (H)", "Nine lives stealer  (H)", "Oathbow  (H)", "Armor. +2 scale mail  (H)", "Spellguard shield (H)", "Armor, +1 splint  (H)", "Armor of resistance (splint)  (H)", "Armor, +1 studded leather (H)", "Armor of resistance (studded leather) (H)", "Tome of clear thought (H)", "Tome of leadership and influence (H)", "Tome of understanding (H)"
];
const magicI = [
  "Defender (I)", "Defender (I)", "Defender (I)", "Defender (I)", "Defender (I)", "Hammer of thunderbolts (I)", "Hammer of thunderbolts (I)", "Hammer of thunderbolts (I)", "Hammer of thunderbolts (I)", "Hammer of thunderbolts (I)", "Luck Blade (I)", "Luck Blade (I)", "Luck Blade (I)", "Luck Blade (I)", "Luck Blade (I)", "Sword of answering (I)", "Sword of answering (I)", "Sword of answering (I)", "Sword of answering (I)", "Sword of answering (I)", "Holy avenger (I)", "Holy avenger (I)", "Holy avenger (I)", "Ring of djinni summoning (I)", "Ring of djinni summoning (I)", "Ring of djinni summoning (I)", "Ring of Invisibility (I)", "Ring of Invisibility (I)", "Ring of Invisibility (I)", "Ring of spell turning (I)", "Ring of spell turning (I)", "Ring of spell turning (I)", "Rod of lordly might (I)", "Rod of lordly might (I)", "Rod of lordly might (I)", "Staff of the magi (I)", "Staff of the magi (I)", "Staff of the magi (I)", "Vorpal sword (I)", "Vorpal sword (I)", "Vorpal sword (I)", "Belt of cloud giant strength (I)", "Belt of cloud giant strength (I)", "Armor, +2 breast plate (I)", "Armor, +2 breast plate (I)", "Armor, +3 chain mail (I)", "Armor, +3 chain mail (I)", "Armor, +3 chain shirt (I)", "Armor, +3 chain shirt (I)", "Cloak of Invisibility (I)", "Cloak of Invisibility (I)", "Crystal ball (legendary) (I)", "Crystal ball (legendary) (I)", "Armor, +1 half plate (I)", "Armor, +1 half plate (I)", "Iron flask (I)", "Iron flask (I)", "Armor, +3 leather (I)", "Armor, +3 leather (I)", "Armor, +1 plate (I)", "Armor, +1 plate (I)", "Robe of the archmagi (I)", "Robe of the archmagi (I)", "Rod of resurrection (I)", "Rod of resurrection (I)", "Armor, +1 scale mail (I)", "Armor, +1 scale mail (I)", "Scarab of protection (I)", "Scarab of protection (I)", "Armor, +2 splint (I)", "Armor, +2 splint (I)", "Armor, +2 studded leather (I)", "Armor, +2 studded leather (I)", "Well of many worlds (I)", "Well of many worlds (I)", "Magic Armor (Roll d12) (I)", "Apparatus of Kwalish (I)", "Armor of invulnerability  (I)", "Belt of Storm Giant Strength  (I)", "Cubic gate  (I)", "Deck of many things  (I)", "Efreeti chain  (I)", "Armor of resistance (half plate)  (I)", "Horn of Valhalla (Iron)  (I)", "Instrument of the bards (Ollamh harp) (I)", "loun stone (greater absorption) (I)", "loun stone (mastery)  (I)", "loun stone {regeneration)  (I)", "Plate armor of etherealness  (I)", "Plate armor of resistance  (I)", "Ring of air elemental command  (I)", "Ring of earth elemental command (I)", "Ring of fire elemental command (I)", "Ring of three wishes (I)", "Ring of water elemental command (I)", "Sphere of annihilation (I)", "Talisman of pure good  (I)", "Talisman of the sphere  (I)", "Tallsman of ultimate evil  (I)", "Tome of che stilled tongue (I)"
];
/*
  Magic item creation arrays
*/
const creator = [
  "Aberration. The item was created by aberrations in ancient times, possibly for the use of favored humanoid thralls. When seen from the corner of the eye, the item seems to be moving.", "Human. The item was created during the heyday of a fallen human kingdom, or it is tied to a human of legend. It might hold writing in a forgotten tongue or symbols whose significance is lost to the ages.", "Celestial. The weapon is half the normal weight and inscribed with feathered wings, suns, and other symbols of good. Fiends find the item's presence repulsive.", "Dragon. This item is made from scales and talons shed by a dragon. Perhaps it incorporates precious metals and gems from the dragon 's hoard. It grows slightly warm when within 120 feet of a dragon.", "Drow. The item is half the normal weight. It is black and inscribed with spiders and we bs in honor of Lolth . It might function poorly, or disintegrate, if exposed to sunlight for 1 minute or more.", "Dwarf. The item is durable and has Dwarven runes worked into its design. It might be associated with a clan that would like to see it returned to their ancestral halls.", "Elemental Air. The item is half the normal weight and feels hollow. If it's made of fabric, it is diaphanous.", "Elemental Earth. This item might be crafted from stone. Any cloth or leather elements are studded with finely polished rock.", "Elemental Fire. This item is warm to the touch, and any metal parts are crafted from black iron. Sigils of flames cover its surface. Shades of red and orange are the prominent colors.", "Elemental Water. Lustrous fish scales replace leather or cloth on this item, and metal portions are instead crafted from seashells and worked coral as hard as any metal.", "Elf. The item is half the normal we ight. It is adorned with symbols of nature: leaves, vines, stars, and the like.", "Fey. The item is exquisitely crafted from the finest materials and glows with a pale radiance in moonlight, shedding dim light in a 5-foot radius Any metal in the item is silver or mithral , rather than iron or steel.", "Fiend. The item is made of black iron or horn inscribed with runes, and any cloth or leather components are crafted from the hide of fiends. It is warm to the touch and features leering faces or vile runes engraved on its surface. Celestials find the item's presence repulsive.", "Giant. The item is larger than normal and was crafted by giants for use by their smaller allies.", "Gnome. The item is crafted to appear ordinary and it might look worn. It could also incorporate gears and mechanical components, even if these aren't essential to the item's function.", "Undead. The item incorporates imagery of death such as bones and skulls, and it might be crafted from parts of corpses. It feels cold to the touch"
];
const lore = [
  "Arcane. This item was created for an ancient order of spellcasters and bears the order's symbol.", "Bane. This item was created by the foes of a particular culture or kind of creature. If the culture or creatures are still around, they might recognize the item and single out the bearer as an enemy.", "Heroic. A great hero once wielded this item. Anyone who's familiar with the item's history expects great deeds from the new owner.", "Ornament. The item was created to honor a special occasion. Inset gemstones, gold or platinum inlays, and gold or silver filigree adorn its surface.", "Prophecy. The item features in a prophecy: its bearer is destined to play a key role in future events. Someone else who wants to play that role might try to steal the item, or someone who wants to prevent the prophecy from being fulfilled might try to kill the item's bearer.", "Religious. This item was used in religious ceremonies dedicated to a particular deity. It has holy symbols worked into it. The god's followers might try to persuade its owner to donate it to a temple, steal the item for themselves, or celebrate its use by a cleric or paladin of the same deity.", "Sinister. This item is linked to a deed of great evil such as a massacre or an assassination. It might have a name or be closely associated with a villain who used it. Anyone familiar with the item's history is likely to treat it and its owner with suspicior.", "Symbol of Power. This item was once used as part of royal regalia or as a badge of high office. Its former owner or that person's descendants might desire it, or someone might mistakenly assume its new owner is the item's legitimate inheritor."
];
const minor = [
  "Beacon. The bearer can use a bonus action to cause the item to shed bright light in a 10-foot radius and dim light for an additional10 feet, or to extinguish the light.", "Compass. The wielder can use an action to learn which way is north.", "Conscientious. When the bearer of this item contemplates or undertakes a malevolent act, the item enhances pangs of conscience.", "Delver. While underground , the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.", "Gleaming. This item never gets dirty.", "Guardian. The item whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.", "Harmonious. Attuning to this item takes only 1 minute.", "Hidden Message. A message is hidden somewhere on the item. It might be visible only at a certain time of the year, under the light of one phase of the moon, or in a specific location.", "Key. The item is used to unlock a container, chamber, vault, or other entryway.", "Language. The bearer can speak and understand a language of the OM's choice while the item is on the bearer's person.", "Sentinel. Choose a kind of creature that is an enemy of the item's creator. This item glows faintly when such creatures are within 120 feet of it","Song Craft. Whenever this item is struck or is used to strike a foe , its bearer hears a fragment of an ancient song." ,"Strange Material. The item was created from a material that is bizarre given its purpose. Its durability is unaffected.", "Temperate. The bearer suffers no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.", "Unbreakable. The item can't be broken. Special means must be used to destroy it.", "War Leader. The bearer can use an action to cause his or her voice to carry clearly for up to 300 feet until the end of the bearer's next turn.", "Waterborne. This item floats on water and other liquids. Its bearer has advantage on Strength (Athletics) checks to swim.", "Wicked. When the bearer is presented with an opportunity to act in a selfish or malevolent way, the item heightens the bearer's urge to do so.", "Illusion. The item is imbued with illusion magic, allowing its bearer to alter the item's appearance in minor ways. Such alterations don't change how the item is worn , carried, or wielded, and they have no effect on its other magical properties. For example, the wearer could make a red robe appear blue, or make a gold ring look like it's made of ivory. The item reverts to its true appearance when no one is carrying or wearing it.","Roll twice, rerolling any additional 20s."
];
const quirk = [
  "Blissful. While in possession of the item, the bearer feels fortunate and optimistic about what the future holds. Butterflies and other harmless creatures might frolic in the item's presence.", "Confident. The item helps its bearer feel selfassured.", "Covetous. The item's bearer becomes obsessed with material wealth.", "Frail. The item crumbles, frays, chips, or cracks slightly when wielded, worn, or activated. This quirk has no effect on its properties, but if the item has seen much use, it looks decrepit.", "Hungry. This item's magical properties function only if fresh blood from a humanoid has been applied to it within the past 24 hours. It needs only a drop to activate.", "Loud. The item makes a loud noise-such as a clang, a shout, or a resonating gong-when used.", "Metamorphic. The item periodically and randomly alters its appearance in slight ways. The bearer has no control over these minor alterations, which have no effect on the item's use.", "Muttering. The item grumbles and mutters. A creature who listens carefully to the item might learn something useful.", "Painful. The bearer experiences a harmless flash of pain when using the item.", "Possessive. The item demands attunement when first wielded or worn, and it doesn't allow its bearer to attune to other items. Other items already attuned to the bearer remain so until their attunement ends.", "Repulsive. The bearer feels a sense of distaste when in contact with the item, and continues to sense discomfort while bearing it.", "Slothful. The bearer of this item feels slothful and lethargic. While attuned to the item, the bearer requires 10 hours to finish a long rest."
];
/*
  Final array of data for types of shops
*/
const armorGood = [
  "Mariner's armor (B)", "Mithral armor (B)", "Adamantine armor (chain mail) (F)", "Adamantine armor (chain shirt) (F)", "Adamantlne armor (scale mail) (F)"
];
const armorBetter = [
  "Mariner's armor (B)", "Mithral armor (B)", "Adamantine armor (chain mail) (F)", "Adamantine armor (chain shirt) (F)", "Adamantlne armor (scale mail) (F)", "Adamantine armor (breastplate)  (G)", "Adamantme armor (splint) (G)", "Armor of vulnerability  (G)", "Armor, +1 chain mail  (G)", "Armor of resistance (chain mail)  (G)", "Armor, +1 chain shirt  (G)", "Armor of resistance (chain shirt) (G)", "Armor, +1 leather (G)", "Armor of resistance (leather) (G)", "Armor, +1 scale mail (G)", "Armor of resistance (scale mail) (G)"
];
const armorBest = [
  "Mariner's armor (B)", "Mithral armor (B)", "Adamantine armor (chain mail) (F)", "Adamantine armor (chain shirt) (F)", "Adamantlne armor (scale mail) (F)", "Adamantine armor (breastplate)  (G)", "Adamantme armor (splint) (G)", "Armor of vulnerability  (G)", "Armor, +1 chain mail  (G)", "Armor of resistance (chain mail)  (G)", "Armor, +1 chain shirt  (G)", "Armor of resistance (chain shirt) (G)", "Armor, +1 leather (G)", "Armor of resistance (leather) (G)", "Armor, +1 scale mail (G)", "Armor of resistance (scale mail) (G)", "Adamantine armor (half plate) (H)", "Adamantine armor (plate) (H)", "Armor, +1 breastplate (H)", "Armor of resistence (breastplate) (H)", "Armor, +2 chain mail (H)", "Armor, +2 chain shirt (H)", "Demon armor  (H)", "Armor, +2 leather  (H)", "Armor. +2 scale mail  (H)", "Armor, +1 splint  (H)", "Armor of resistance (splint)  (H)", "Armor, +1 studded leather (H)", "Armor of resistance (studded leather) (H)", "Armor, +2 breast plate (I)", "Armor, +2 breast plate (I)", "Armor, +3 chain mail (I)", "Armor, +3 chain mail (I)", "Armor, +3 chain shirt (I)", "Armor, +3 chain shirt (I)", "Armor, +1 half plate (I)", "Armor, +1 half plate (I)", "Armor, +3 leather (I)", "Armor, +3 leather (I)", "Armor, +1 plate (I)", "Armor, +1 plate (I)", "Armor, +1 scale mail (I)", "Armor, +1 scale mail (I)", "Armor, +2 splint (I)", "Armor, +2 splint (I)", "Armor, +2 studded leather (I)", "Armor, +2 studded leather (I)", "Magic Armor (Roll d12) (I)", "Armor of invulnerability  (I)", "Armor of resistance (half plate)  (I)", "Plate armor of etherealness  (I)", "Plate armor of resistance  (I)"
];
const fletcherBasic = [
  "Dart +1","Shortbow +1","Sling +1","Blowgun +1","Net +1"
];
const fletcherBetter = [
  "Crossbow, light +1","Dart +2","Shortbow +2","Sling +2","Blowgun +1","Crossbow, hand +1","Crossbow, heavy +1","Longbow +1","Net +2"
];
const fletcherBest = [
  "Crossbow, light +2","Dart +3","Shortbow +3","Sling +3","Blowgun +2","Crossbow, hand +2","Crossbow, heavy +2","Longbow +2","Net +3"
];
const healerBasic = [
  "Spare the Dying", "Keoghtom's Ointment","Cure Wounds", "Keoghtom's Ointment", "Keoghtom's Ointment","Aid","Prayer of Healing", "Lesser Restoration","Keoghtom's Ointment"
];
const healerBetter = [
  "Aura of Vitality","Mass Healing Word","Remove Curse",
  "Toad Stool Sprouts","Mass Cure Wounds", "Greater Restoration","Heal"
];
const healerBest = [
  "Resurrection", "Regenerate", "Periapt of Wound Closure", "Ring of Regeneration", "Loun Stone (Regeneration)","Mass Heal","True Resurrection", "Aura of Life","Power Word Heal"
];
const herbalBasic = [
  "Potion of Animal Friendship (200-450gp)","Toadstool Sprouts","Potion of Water Breathing (200-450gp)","(P) Carrion Crawler Mucus (Contact / 200gp)","(P) Drow Poison (Injury / 200gp)","(P) Essence of Ether (Inhaled / 300gp)","(P) Malice (Inhaled / 25-gp)","(P) Oil of Taggit (Contact / 400gp)","(P) Pale Tincture (Ingested / 250gp)","(P) Serpent Venom (Injury / 200gp)","(P) Truth Serum (Ingested / 150gp)"
];
const herbalBetter = [
  "Potion of Animal Friendship (200-450gp)",  "Potion of Poison (200-450gp)", "Potion of Water Breathing (200-450gp)", "(P) Assassin's Blood (Ingested / 150gp)","(P) Burnt Othur Fumes (Inhaled / 500gp)","(P) Carrion Crawler Mucus (Contact / 200gp)","(P) Drow Poison (Injury / 200gp)","(P) Essence of Ether (Inhaled / 300gp)","(P) Malice (Inhaled / 25-gp)","(P) Oil of Taggit (Contact / 400gp)","(P) Pale Tincture (Ingested / 250gp)","(P) Serpent Venom (Injury / 200gp)","(P) Torpor (Ingested / 600gp)","(P) Truth Serum (Ingested / 150gp)"
];
const herbalBest = [
  "Potion of Supreme Healing (1800-3200gp)",  "Potion of Animal Friendship (200-450gp)",  "Potion of Poison (200-450gp)", "Potion of Water Breathing (200-450gp)", "(P) Assassin's Blood (Ingested / 150gp)","(P) Burnt Othur Fumes (Inhaled / 500gp)","(P) Carrion Crawler Mucus (Contact / 200gp)","(P) Drow Poison (Injury / 200gp)","(P) Essence of Ether (Inhaled / 300gp)","(P) Malice (Inhaled / 25-gp)","(P) Midnight Tears (Ingested / 1,500gp)","(P) Oil of Taggit (Contact / 400gp)","(P) Pale Tincture (Ingested / 250gp)","(P) Purple Worm Poison (Injury / 2,000gp)","(P) Serpent Venom (Injury / 200gp)","(P) Torpor (Ingested / 600gp)","(P) Truth Serum (Ingested / 150gp)","(P) Wyvern Poison (Injury / 1,200gp)", "Bag of Beans"
];
const poison = [
  "(P) Assassin's Blood (Ingested / 150gp)","(P) Burnt Othur Fumes (Inhaled / 500gp)","(P) Carrion Crawler Mucus (Contact / 200gp)","(P) Drow Poison (Injury / 200gp)","(P) Essence of Ether (Inhaled / 300gp)","(P) Malice (Inhaled / 25-gp)","(P) Midnight Tears (Ingested / 1,500gp)","(P) Oil of Taggit (Contact / 400gp)","(P) Pale Tincture (Ingested / 250gp)","(P) Purple Worm Poison (Injury / 2,000gp)","(P) Serpent Venom (Injury / 200gp)","(P) Torpor (Ingested / 600gp)","(P) Truth Serum (Ingested / 150gp)","(P) Wyvern Poison (Injury / 1,200gp)"
];
const potionCommon = [
  "Potion of Climbing (50gp)", "Potion of Healing (50gp)"
];
const potionLegendary = [
  "Potion of Storm Giant Strength (4050gp)"
];
const potionRare = [
  "Oil of Etherealness (800-1250gp)", "Potion of Clairvoyance (800-1250gp)", "Potion of Diminution (800-1250gp)", "Potion of Gaseous Form (800-1250gp)", "Potion of Stone Giant Strength (800-1250gp)", "Potion of Fire Giant Strength (800-1250gp)", "Potion of Superior Healing (800-1250gp)", "Potion of Heroism (800-1250gp)"
];
const potionUncommon = [
  "Oil of Slipperiness (200-450gp)", "Philter of Love (200-450gp)", "Potion of Animal Friendship (200-450gp)", "Potion of Hill Giant Strength (200-450gp)", "Potion of Greater Healing (200-450gp)", "Potion of Mind Reading (200-450gp)", "Potion of Poison (200-450gp)", "Potion of Resistance (200-450gp)", "Potion of Water Breathing (200-450gp)"
];
const potionVeryRare = [
  "Oil of Sharpness (1800-3200gp)", "Potion of Flying (1800-3200gp)", "Potion of Cloud Giant Strength (1800-3200gp)", "Potion of Supreme Healing (1800-3200gp)", "Potion of Invisibility (1800-3200gp)", "Potion of Speed (1800-3200gp)"
];
const priests = [];
const weaponsBasic = [
"Club +1","Dagger +1","Greatclub +1","Handaxe +1","Javelin +1","Lig⁠ht ham⁠mer +1","Mace +1","Sickle +1","Spear +1","Battleaxe +1","Flail +1","Glaive +1","Greataxe +1","Halberd +1","Lance +1","Maul +1","Morningstar +1","Pike +1","Trident +1","War pick +1","Warhammer +1","Whip +1"
];
const weaponsBetter = [
  "Club +2","Dagger +2","Greatclub +2","Handaxe +2","Javelin +2","Lig⁠ht ham⁠mer +2","Mace +2","Quarterstaff +1","Sickle +2","Spear +2","Battleaxe +2","Flail +2","Glaive +2","Greataxe +2","Halberd +2","Lance +2","Longsword +1","Maul +2","Morningstar +2","Pike +2","Rapier +1","Scimitar +1","Shortsword +1","Trident +2","War pick +2","Warhammer +2","Whip +2","Silver Components","Silver Components","Silver Components", "Weapon of Warning (Roll)", "Weapon of Warning (Roll)", "Weapon of Warning (Roll)"
];
const weaponsBest = [
  "Greatsword +1", "Greatsword +2","Club +3","Dagger +3","Greatclub +3","Handaxe +3","Javelin +3","Lig⁠ht ham⁠mer +3","Mace +3","Quarterstaff +2","Sickle +3","Spear +3","Battleaxe +3","Flail +3","Glaive +3","Greataxe +3","Halberd +3","Lance +3","Longsword +2","Maul +3","Morningstar +3","Pike +3","Rapier +2","Scimitar +2","Shortsword +2","Trident +3","War pick +3","Warhammer +3","Whip +3","Silver Components","Silver Components","Silver Components","Silver Components","Silver Components","Silver Components","Silver Components", "Weapon of Warning (Roll)", "Weapon of Warning (Roll)", "Weapon of Warning (Roll)", "Weapon of Warning (Roll)"
];

/*
  Arrays for selecting quantites of items based on quality of store
  Positions are [awful, poor, average, good, best] for shops, and
  caster levels 1-20 for casters
  Each element contains an array of numeric values
  e.g. arrArmor[Best] = [5,3,1]
  number of values in elements must be <= lenght of related array of Arguments
  e.g. arr Armor must have 3 elements or less to be used with
  armorArgs = [armorGood, armorBetter, armorBest]
  In this example, a town with an Armorer of best quality will have between
  0-5 items from armorGood, 0-3 items from armorBetter, and 0-1 items from
  armorBest
*/
const arrAlchemist = [
  [1,1,,,,2],[3,2,,,,3],[5,2,1,,4],[8,4,2,1,1,6],[20,10,8,5,4,8]
];
const arrArmor = [
  [1,,],
  [2,,],
  [2,1,],
  [3,1,1],
  [4,2,2]
];
const arrCasterLevel = [
  spellCasterOne, spellCasterTwo, spellCasterThree, spellCasterFour,spellCasterFive, spellCasterSix, spellCasterSeven,spellCasterEight, spellCasterNine, spellCasterTen,spellCasterEleven, spellCasterTwelve, spellCasterThirteen, spellCasterFourteen, spellCasterFifteen, spellCasterSixteen, spellCasterSeventeen, spellCasterEighteen, spellCasterNineteen, spellCasterTwenty
];
const arrCollege = [
  [100,100],
  [100,100,100,100],
  [100,100,100,100,100],
  [100,100,100,100,100,100,100,100],
  [100,100,100,100,100,100,100,100,100,100],
];
const arrEnchanter = [
  [3,1,],[3,3,2],[5,3,3,1,1],[8,4,3,2,2,2,2],[20,10,8,5,2,2,2,1,1]
];
const arrFletcher = [
  [2,,],
  [3,,],
  [4,1,],
  [4,2],
  [4,2,2],
];
const arrGeneral = [
  [1,,1,,1,1,],
  [1,1,1,1,1,1,],
  [2,1,2,1,2,1,1],
  [3,2,3,2,2,2,1],
  [5,4,5,4,2,2,4]
];
const arrHealer = [
  [2],
  [2,1],
  [2,2],
  [2,2,1],
  [4,3,2]
];
const arrHerbalist = [
  [2,1,],
  [3,2,],
  [5,3,2],
  [6,5,4],
  [8,8,6]
];
const arrJeweler = [
  [4,2,1,], [4,4,2,1], [6,4,4,2,1], [8,6,4,4,2,1],[20,10,8,5,4,3]
];
const arrPaladinLevel = [
  paladinOne, paladinTwo, paladinThree, paladinFour,paladinFive, paladinSix, paladinSeven,paladinEight, paladinNine, paladinTen,paladinEleven, paladinTwelve, paladinThirteen, paladinFourteen, paladinFifteen, paladinSixteen, paladinSeventeen, paladinEighteen, paladinNineteen, paladinTwenty
];
const arrRangerLevel = [
  rangerOne, rangerTwo, rangerThree, rangerFour,rangerFive, rangerSix, rangerSeven,rangerEight, rangerNine, rangerTen,rangerEleven, rangerTwelve, rangerThirteen, rangerFourteen, rangerFifteen, rangerSixteen, rangerSeventeen, rangerEighteen, rangerNineteen, rangerTwenty
];
const arrScrolls = [
  scrollsAwful, scrollsPoor, scrollsAverage, scrollsGood, scrollsBest
];
const arrTemple = [
  scrollsAwful, scrollsPoor, scrollsAverage, scrollsGood, scrollsBest
];
const arrWeapons = [
  [1,,],
  [2,,],
  [2,1,],
  [2,2,1],
  [3,3,2]
];
const arrWizardQuality = [
  spellCasterOne, spellCasterThree, spellCasterTen, spellCasterFifteen, spellCasterTwenty
];
/*
  Arrays for which datasets are used to pull from
  e.g. spellsLevelSix, healerBest, or MagicF
*/
const armorArgs = [
  armorGood, armorBetter, armorBest
];
const fletcherArgs = [
  fletcherBasic, fletcherBetter, fletcherBest
];
const generalArgs = [
  potionCommon, potionUncommon, magicA, magicB, gemstones10, gemstones50, magicC
];
const healerArgs = [
  healerBasic, healerBetter, healerBest
];
const herbalistArgs = [
  herbalBasic, herbalBetter, herbalBest
];
const jewelerArgs = [
  gemstones10, gemstones50, gemstones100, gemstones500, gemstones1000, gemstones5000
];
const magicArgs = [
  magicA, magicB, magicC, magicD, magicE, magicF, magicG, magicH, magicI
];
const potionArgs = [
  potionCommon, potionUncommon, potionRare, potionVeryRare, potionLegendary, poison
];
const weaponsArgs = [
  weaponsBasic, weaponsBetter, weaponsBest
];

/*
  Function Declarations
*/
/*
  Object constructors
*/
function TownElement(type, desc, direction, quality, id, dID, cID) {
  this.direction = direction;
  this.quality = quality;
  this.description = desc;
  this.type = type;
  this.ID = id;
  this.districtID = dID;
  this.categoryID = cID;
}
function TownTable(head, bod) {
  this.tableHeader = head;
  this.tableBody = bod
};
/*
  Sorting functions
*/
const Func = (a, b) => {
  return 0.5 - Math.random();
};
const SortByType = (a,b) => {
  return (a.type > b.type ? 1 : -1);
};
const SortByDesc = (a, b) => {
  return (a.description < b.description ? 1 : -1);
};
/*
  Randomizers or miscellaneous functions
*/
const CreateItemHistory = () => {
  let lo = Math.floor(Math.random() * lore.length);
  let cr = Math.floor(Math.random() * creator.length);
  itemHistory = `Lore: ${lore[lo]} \nCreator: ${creator[cr]}`;
  return itemHistory;
};
const RandDirection = () => {
  let dir = direction[Math.floor(Math.random() * direction.length)];
  return dir;
};
const RandNormDistr = (min, max, skew) => {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return Math.floor(num);
  };
const RandomNumByRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const RandQuality = () => {
  let i = arrQuality.sort(Func);
  let shopQuality = i[Math.floor(Math.random() * i.length)];
  return shopQuality;
};
/*
  Merchant inventory building
*/
const BuildShopInventory = (amt, array) => {
  // amt defines number of items to pull from array
  for (let d = 0; d < amt; d++) {
    let item = Math.floor(Math.random() * array.length);
    if (array[item]){
      inventory.push(array[item]);
      inventory.sort();
    }
  }
};
const CreateShopInv = (arrObj, argObj, shopName) => {
  let output = [];
  let qtysForEachArg = [];
  /*
  determines how many items to pull for each argument based on random amount
  between 1 and the quantity defined in the arr object that is passed
  */
  for (let r = 0, s = arrObj.length; r < s; r++) {
    qtyToPull = Math.floor(Math.random() * (arrObj[r] + 1));
    qtysForEachArg.push(qtyToPull);
  }
  /*
  Builds an inventory for each array in the arg object
  Arguments: (amount of items, array to pull items from, if scroll)
  */
  for (h = 0, g = argObj.length; h < g; h++) {
    BuildShopInventory(qtysForEachArg[h], argObj[h]);
  }
  // Sort items alphabetically and count instances of repeated items
  let itemCount = {};
  inventory.sort();
  inventory.forEach(function(x) { itemCount[x] = (itemCount[x] || 0) + 1; });
  for (u = 0, v = Object.entries(itemCount).length; u < v; u++) {
    let writeKey = Object.keys(itemCount)[u];
    let writeValue = Object.values(itemCount)[u];
    let writeItem = `${writeKey}: <b>${writeValue}</b>`;
    output.push(writeItem);
  }
  // Format array items to strings
  inventory = [];
  return output;
};
/*
  Create objects for districts, POIs, and towns
*/
const SubdistrictArgBuilder = (input) => {
  let args;
  if (!poiArrayCopy[input]) {
    do {
    input -= 1;
    }
    while (!poiArrayCopy[input] && input > 1);
  }
  let  r = Math.floor(Math.random() * poiArrayCopy[input].arr.length);
  type = poiArrayCopy[input].name;
  desc = poiArrayCopy[input].arr[r];
  descReg = desc.replace(/(\(|\)|' ')/g);
  countType.push(descReg);
  let re = new RegExp(descReg,'g');
  let count = countType.join(' ').match(re).length;
  args = [type, desc, count];
  re = new RegExp(/(Economic Touchstone|Landmarks)/);
  if (re.test(poiArrayCopy[input].name)) {
    poiArrayCopy.splice(input,1);
  }

  return args;
};
const SubdistrictDfltArgBuilder = (input) => {
  let args;
  let  r = Math.floor(Math.random() * defaultPOIArray[input].arr.length);
  type = defaultPOIArray[input].name;
  desc = defaultPOIArray[input].arr[r];
  descReg = desc.replace(/(\(|\)|' ')/g);
  countType.push(descReg);
  let re = new RegExp(descReg,'g');
  let count = countType.join(' ').match(re).length;
  args = [type, desc, count];
  return args;
};
const CreateSubdistrict = ([type, desc, cID]) => {
  let newObj = new TownElement(
    type, desc, RandDirection(), RandQuality(), id, dID, cID
  );
  id++;
  return newObj;
};
const BuildDistrict = () => {
  districtObjects = [];
  poiArrayCopy = poiArray.slice(0);
  let index = [];
  let len = poiArrayCopy.length;
  // Between 1 and 7 times, add a random town element
  for (let a = 0, b = Math.random() * 5; a < b; a++){
    index.push(RandomNumByRange(0, len));
  }
  for (let a = 0, b = defaultPOIArray.length; a < b; a++){
    let item = CreateSubdistrict(SubdistrictDfltArgBuilder(a));
    districtObjects.push(item);
  }
  let j = index.length;
  for (let i = 0; i < j; i++){
    let item = CreateSubdistrict(SubdistrictArgBuilder(index[i]));
    districtObjects.push(item);
  }
  dID++;
  return districtObjects;
};
const CombineDistricts = (arrObjs)  => {
  arrTownObjects = [];
  for(let x = 0, y = arrObjs.length; x < y; x++) {
    arrTownObjects.push(...arrObjs[x]);
  }
  return arrTownObjects;
};
/*
  HTML table building
*/
const WriteRow = (args) => {
  row = document.createElement('tr');
  for (x = 0, y = args.length; x < y; x++) {
    let cell = document.createElement('td');
    cell.innerText = (args[x]);
    row.appendChild(cell);
  }
  return row;
};
const WriteBody = (arr) => {
  body = document.createElement('tbody');
  for (let x = 0, y = arr.length; x < y; x++) {
    cells = [];
    a = arr[x].direction;
    b = arr[x].quality;
    c = `${arr[x].type} - ${arr[x].description}`;
    cID = arr[x].categoryID;
    if (cID > 1) {
      c += ` (${cID})`;
    }
    cells.push(a, b, c);
    body.appendChild(WriteRow(cells));
  }
  return body;
};
const Build_TableHTML = (arr, district) => {
  arrRowsHTML = [];
  cells = [];
  let table = document.createElement('table');
  let header = document.createElement('thead');
  table.classList.add('zui-table');
  for (let x = 0, y = headerArray.length; x < y; x++) {
    let headerCell = document.createElement('th');
    headerCell.innerText = (headerArray[x]);
    header.appendChild(headerCell);
  }
  table.appendChild(header);
  WriteBody(arr);
  table.appendChild(body);
  return Build_POIDivHTML(table, district);
};
const Build_POIDivHTML = (table, district) => {
  poiDiv = document.createElement('div');
  poiDiv.classList.add('header');
  poiDiv.innerText = `District ${district + 1}`;
  poiDiv.appendChild(table);
  return poiDiv;
};
/*
  Creates a div for any town POI that returns an inventory or list
*/
const BuildInventoryDivs = (arr) => {
  for (x = 0, y = arr.length; x < y; x++) {
    type = arr[x].type;
    desc = arr[x].description;
    quality = arr[x].quality;
    count = arr[x].categoryID;
    if (count > 1) {
      shopName = `${desc} (${count})`;
    } else {
      shopName = desc;
    }
    index = qualityNames.indexOf(quality);
    switch (true) {
      case /Caster/.test(type):
        BuildSpellListWithObjs(desc);
        let output = SwitchCast(desc);
        AddDivUsingArray('casters',output, shopName);
        break;
      case landmarksReg.test(desc):
        switch (desc) {
          case 'College':
            quality = arrScrolls[index];
            let b = Math.floor(Math.random() * schoolNameArr.length);
            let randSchool = schoolNameArr[b];
            BuildSpellListWithObjs(false,false,false,randSchool);
            RandomizeScrollList(newSpellList, quality);
            shopName = `${shopName} (${randSchool})`;
            AddDivUsingArray('research',outputList,shopName);
            break;
          default:
            quality = arrScrolls[index];
            BuildSpellListWithObjs();
            RandomizeScrollList(newSpellList, quality);
            AddDivUsingArray('research',outputList,shopName);
        }
        break;
      case /Merchant/.test(type):
        if (SwitchRes(desc)){
          AddDivUsingArray('merchants',SwitchRes(desc),shopName);
        }
        break;
      default:
    }
  }
};
/*
returns newSpellList - an array of 10 arrays (Cantrip - level 9
  each nested array contains the spell objects for each level

  For example, newSpellList[0] is an array of cantrip objects.

  Parameters:
  casterClass - optional, accepts class name such as 'Druid' or 'Bard' if
  blank, returns all spells. If using the following parametes and class is
  not needed, enter FALSE, NULL, UNDEFINED or a blank string as the
  paramater for casterCalls
  lvl - optional, overide starting spell level, if omitted all levels returned
  if max is also omitted, it returns ONLY the spells for level lvl
  max - optional, overide stopping point. for example, max = 5 will return all
  spells up to level 5. If lvl is also specificed you can return a list of
  spells between two levels. max MUST be >= than lvl.
  isSchool - optional, accepts true, false or school name, if true, list will be
  filtered by a random school; if school is specified, list will return
  spells from that school
  */
const BuildSpellListWithObjs = (casterClass, lvl, max, isSchool) => {
  newSpellList = [];
  if(!max){max = 9;}
  if(lvl && !max){max = lvl;} else {if(!lvl){lvl = 0;}}
  if(casterClass) {
    classReg = new RegExp (casterClass);
  } else {
    classReg=/\w/;
  }
  for (let j = lvl; j <= max; j++){
    levelList = allSpellObjs.filter(obj => {
      return obj.level == j && classReg.test(obj.classes);
    });
    newSpellList.push(levelList);
  }
  if (isSchool) {
    BuildSchoolList(isSchool);
    newSpellList = schoolList;
  }
  return newSpellList;
};
/*
returns schoolList

Parameters:
schoolName - accepts a literal string or TRUE; if TRUE, random school will
be selected. Literal sting must exactly match a school name in
schoolNameArr else a random school will be selected.
*/
const BuildSchoolList = (schoolName) => {
  schoolList = [];
  if (schoolNameArr.includes(schoolName)) {
    school = schoolName;
  } else {
    school = schoolNameArr[Math.floor(Math.random() * schoolNameArr.length)];
  }
  for (let x = 0, y = newSpellList.length; x < y; x++) {
    schoolLevelList = newSpellList[x].filter(obj => {
      return obj.school == school;
    });
    schoolList.push(schoolLevelList);
  }
  return schoolList;
};
/*
returns outputList
outputList will be a spellList array filtered to have a quantity of spell
objects per level that matches the amount of spell slots for a randomized
character level. Randomization uses a skewed normal distribution that favors
lower level casters. The third paramater in the called RandNormDistr
function accepts a numeric value greater than 0. a value above 1 skews
distribution to the left; a value lower than 1 skews right and favors
higher level characters. The default version uses 0.6 as a skew value.

Parameters:
inputList - required, requires an array of 10 arrays, such as newSpellList,
that contains spell objects in each array
qual - optional, requires a literal string from quality array
['Awful'...'Best']
halfCaster - optional, requires literal string of 'Paladin' or 'Ranger' to
handle their unique spell slots
casterLevel - optional, requires a numeric value between 1 and 20; overrides
the randomization of caster level selection.
qual
*/
const RandomizeCasterList = (inputList, qual, halfCaster, casterLevel) => {
  let qtys;
  outputList = [];
  if (!casterLevel) {
    switch (qual) {
      case 'Awful':
      casterLvl = RandNormDistr(1,8,1.2);
      break;
      case 'Poor':
      casterLvl = RandNormDistr(1,10,1);
      break;
      case 'Average':
      casterLvl = RandNormDistr(5,20,1.3);
      break;
      case 'Good':
      casterLvl = RandNormDistr(5,18,1.2);
      break;
      case 'Best':
      casterLvl = RandNormDistr(1,20,0.5);
      break;
      default:
    }
  }
  if (halfCaster) {
    if (halfCaster == 'Paladin') {
      qtys = arrPaladinLevel[casterLvl];
    } else {
      if (halfCaster == 'Ranger') {
        qtys = arrRangerLevel[casterLvl];
      }
    }
  } else {
    qtys = arrCasterLevel[casterLvl];
  }
  for (let k = 0; k <= 9; k++){
    if(k > 0) {
      outputList.push(`<br><b>Level ${k}</b>`);
    } else {
      outputList.push(`<b>Cantrips</b>`);
    }
    copySpellList = inputList[k].slice(0);
    for (let l = 0, m = copySpellList.length; l < qtys[k] && l <= m; l++) {
      // if (subclass){}; // Needs content
      let rndm = Math.floor(Math.random() * copySpellList.length);
      spell = copySpellList.splice(rndm,1)[0];
      if(spell){outputList.push(`${spell.name}`);}
    }
  }
  return outputList;
};
const RandomizeScrollList = (inputList, qtys) => {
  outputList = [];
  if (!qtys) {qtys = scrollsAverage;}
  for (let k = 0; k < inputList.length; k++){
    if(k > 0) {
      outputList.push(`<br><b>Level ${k} Scrolls:</b>`);
    } else {
      outputList.push(`<b>Cantrip Scrolls:</b>`);
    }
    copySpellList = inputList[k].slice(0);
    for (let l = 0, m = copySpellList.length; l < qtys[k] && l <= m; l++) {
      // if (subclass){}; // Needs content
      let rndm = Math.floor(Math.random() * copySpellList.length);
      spell = copySpellList.splice(rndm,1)[0];
      if (spell) {
        let classText = spell.classes.split(`, `);
        for (let a = 0, b = classText.length; a < b; a++) {
          if (classText[a].split('')[0]=='W') {
            classText[a] = classText[a].substring(0,3);
          } else {
            classText[a] = classText[a].substring(0,1);
          }
        }
        classText = classText.join(' / ');
        classText = `<b style="font-size:8px">${classText}</b>`;
        outputList.push(`${spell.name} <i>(${spell.school})</i> ${classText}`);
      }
    }
  }
  return outputList;
};
/*
  Build town based on size,
*/
const BuildTown = (category) => {
  arrPOIDivs = [];
  countType = [];
  arrTownDistricts = [];
  switch (category) {
    case 'village':
    min = 1;
    max = 5;
    break;
    case 'town':
    min = 5;
    max = 8;
    break;
    case 'city':
    min = 8;
    max = 12;
    break;
    default:
    min = 1;
    max = 8;
  }
  min -= 1;
  max -= 1;
  let b = Math.random() * (max - min + 1) + min;
  for (let a = 0; a < b; a++){
    BuildDistrict();
    arrTownDistricts.push(districtObjects);
  }
  let container = document.querySelector('#districtsContainer');
  for (r = 0, s = arrTownDistricts.length; r < s; r++){
    container.appendChild(Build_TableHTML(arrTownDistricts[r], r));
  }
  CombineDistricts(arrTownDistricts);
  BuildInventoryDivs(arrTownObjects);
  return arrTownObjects;
};
const SwitchCast = (desc) => {
  let half;
  switch (desc) {
    case 'Wizard':
      if (Math.floor(Math.random() * 4) < 3) {
        BuildSpellListWithObjs(desc,false,false,true);
        shopName = `${desc} (${count}) (${school})`;
      }
      half = false;
    case 'Ranger':
      half = 'Ranger';
      break;
    case 'Paladin':
      half = 'Paladin';
      break;
    default:
      half = false;
  }
  return RandomizeCasterList(newSpellList, quality, half);
}
const SwitchRes = (desc) => {
  // let output = [];
  switch (desc) {
    case 'Enchanter':
      quality = arrEnchanter[index];
      return CreateShopInv(quality, magicArgs, shopName);
    case 'Alchemist':
      quality = arrAlchemist[index];
      return CreateShopInv(quality, potionArgs, shopName);
    case 'Healer':
      quality = arrHealer[index];
      return CreateShopInv(quality, healerArgs, shopName);
    case 'Herbalist':
      quality = arrHerbalist[index];
      return CreateShopInv(quality, herbalistArgs, shopName);
    case 'General Store':
      quality = arrGeneral[index];
      return CreateShopInv(quality, generalArgs, shopName);
    case 'Blacksmith (Armorer)':
      quality = arrArmor[index];
      return CreateShopInv(quality, armorArgs, shopName);
    case 'Blacksmith (Weapons)':
      quality = arrWeapons[index];
      return CreateShopInv(quality, weaponsArgs, shopName);
    case 'Jeweler':
      quality = arrJeweler[index];
      return CreateShopInv(quality, jewelerArgs, shopName);
    case 'Fletcher':
      quality = arrFletcher[index];
      return CreateShopInv(quality, fletcherArgs, shopName);
    default:
  }
};
/*
  HTML writing
*/
const AddDivUsingArray = (id, output, title) => {
  let container = document.querySelector('#' + id + 'Container');
  let divHeader = document.createElement('div');
  divHeader.classList.add('header');
  divHeader.setAttribute('id',id);
  divHeader.innerText = `${title}`;
  let divBody = document.createElement('div');
  if (output.nodeType == 1) {
    divBody.appendChild(output);
  } else {
    divBody.classList.add('box');
    if (output.length){
      divBody.innerHTML = output.join('<br>');
    } else {
      divBody.innerText = 'None';
    }
  }
  container.appendChild(divHeader);
  divHeader.appendChild(divBody);
};
const AddSectionHTML = (input, name) => {
  let section = document.querySelector('#' + input + 'Main');
  while(section.firstChild){
    section.removeChild(section.firstChild);
  }
  let sectionBody = document.createElement('div');
  sectionBody.classList.add('container');
  sectionBody.setAttribute('id', input + 'Container');
  let sectionHeader = document.createElement('div');
  sectionHeader.classList.add('sectionHeader');
  sectionHeader.innerText = name;
  section.appendChild(sectionHeader);
  section.appendChild(linebreak());
  section.appendChild(linebreak());
  section.appendChild(sectionBody);
};
const BuildAllObjList = (arr) => {
  // use poi array
  for (let t = 0, u = poiArray.length; t < u; t++) {
    let type = allPOIArray[t].name;
    filteredArr = arr.filter(obj => {
      return obj.type == type;
    });
    if(filteredArr.length) {
      filteredArr.sort(SortByDesc);
      filteredArr.sort(SortByType);
      let table = document.createElement('table');
      table.classList.add('zui-table');
      let tHeader = document.createElement('thead');
      let tBody = document.createElement('tbody');
      let headerInputs = ['Quality','Description','District'];
      for (let x = 0; x < 3; x++) {
        let cell = document.createElement('th');
        cell.innerText = headerInputs[x];
        tHeader.appendChild(cell);
      }
      for (let a = 0, b = filteredArr.length; a < b; a++){
        let rowInputs = [
          filteredArr[a].quality,
          filteredArr[a].description,
          filteredArr[a].districtID
        ];
        tBody.appendChild(WriteRow(rowInputs));
      }
      table.appendChild(tHeader);
      table.appendChild(tBody);
      AddDivUsingArray('list', table, type);
    }
  }
};
const LabelBlankContainer = (childID, parentID) => {
  if(!document.querySelector(`#${childID}`).innerText) {
    let blankCon = document.createElement('div');
    blankCon.classList.add('container');
    blankCon.innerText = `None`;
    document.querySelector(`#${parentID}`).appendChild(blankCon);
  }
};
const SortDivs = (id) => {
  let toSort = document.querySelector('#' + id + 'Container').children;
  toSort = Array.prototype.slice.call(toSort, 0);
  toSort.sort( (a,b) => {
    return (a.innerText > b.innerText ? 1 : -1);
  });
  let parent = document.querySelector('#' + id + 'Container');
  parent.innerHTML = '';
  for (i = 0, j = toSort.length; i < j; i++) {
    parent.appendChild(toSort[i]);
  }
};
/*
  Execution function
*/
const Execute = () => {
  divArrInv = [];
  divArrResearch = [];
  divArrCaster = [];
  id = 1;
  dID = 1;
  AddSectionHTML('districts', 'Districts');
  AddSectionHTML('merchants', 'Merchants');
  AddSectionHTML('casters', 'Casters');
  AddSectionHTML('research', 'Research');
  AddSectionHTML('list', 'Index');
  let inp = document.querySelectorAll('input');
  let size;
  for (let i = 0, j = inp.length; i < j; i++) {
    if (document.querySelectorAll('input')[i].checked) {
      size = inp[i].value;
    }
  }
  BuildTown(size);
  BuildAllObjList(arrTownObjects);
  SortDivs('merchants');
  SortDivs('casters');
  SortDivs('research');
  LabelBlankContainer('merchantsContainer','merchantsMain');
  LabelBlankContainer('researchContainer','researchMain');
  LabelBlankContainer('castersContainer','castersMain');
};
/*
  Listener for button click
*/
const GenerateButton = document.querySelector('#Generator');
if (GenerateButton){GenerateButton.addEventListener('click', Execute);}
