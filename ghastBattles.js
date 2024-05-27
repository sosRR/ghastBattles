// ghastBattles.js

// App Details
const appDetails = {
  name: "Ghast Battles",
  creator: "eleventy-seven",
  copyright: "E117S 2024"
};

// Initial Screen Elements
const initialScreen = "www/res/screen/eleventy-seven.jpg";
const secondaryScreen = "www/res/screen/initialize.jpg";
const titleScreen = "www/res/screen/titleScreen.jpg";

// DOM Elements
const appContainer = document.getElementById('app');

// Utility Functions
function showImage(screen, duration) {
  appContainer.style.backgroundImage = `url(${screen})`;
  if (duration) {
    setTimeout(showSecondaryScreen, duration);
  }
}

function showSecondaryScreen() {
  showImage(secondaryScreen);
  // Simulating app loading
  setTimeout(showTitleScreen, 3000); // Assuming app loads in 3 seconds
}

// Function to show the loading animation
function showLoadingAnimation() {
    document.getElementById('loadingAnimationContainer').style.display = 'block';
}

// Function to hide the loading animation
function hideLoadingAnimation() {
    document.getElementById('loadingAnimationContainer').style.display = 'none';
}

// Function to simulate battle and show loading animation before and after
function simulateBattle() {
    // Show loading animation before battle starts
    showLoadingAnimation();

    // Simulate battle
    setTimeout(() => {
        // Code to execute after battle (e.g., rewards)

        // Hide loading animation after battle
        hideLoadingAnimation();
    }, 3000); // Replace 3000 with actual battle duration in milliseconds
}

// Call the simulateBattle() function when starting a battle
simulateBattle();

function showTitleScreen() {
  appContainer.style.backgroundImage = `url(${titleScreen})`;
  const startMessage = document.createElement('div');
  startMessage.innerText = "Tap anywhere to start";
  startMessage.className = 'start-message';
  appContainer.appendChild(startMessage);
  appContainer.addEventListener('click', startGame);
}

function startGame() {
  appContainer.innerHTML = ''; // Clear all elements
  appContainer.removeEventListener('click', startGame);
  showMainMenu();
}

function showMainMenu() {
  appContainer.style.backgroundImage = '';
  appContainer.style.backgroundColor = 'black'; // Dark dismal theme
  const frame = document.createElement('div');
  frame.className = 'frame';

  const playerName = document.createElement('div');
  playerName.id = 'playerName';
  playerName.innerText = localStorage.getItem('playerName') || 'Hero';

  const statusBar = document.createElement('div');
  statusBar.id = 'statusBar';

  const playerLevel = document.createElement('span');
  playerLevel.id = 'playerLevel';
  playerLevel.innerText = 'Level 1';

  const playerHealth = document.createElement('span');
  playerHealth.id = 'playerHealth';
  playerHealth.innerText = 'HP 100';

  const playerGold = document.createElement('span');
  playerGold.id = 'playerGold';
  playerGold.innerText = 'G 0';

  statusBar.appendChild(playerLevel);
  statusBar.appendChild(playerHealth);
  statusBar.appendChild(playerGold);

  frame.appendChild(playerName);
  frame.appendChild(statusBar);

  const buttons = ['Summon', 'Rest', 'Learn', 'Stats'];
  buttons.forEach(btn => {
    const button = document.createElement('button');
    button.innerText = btn;
    button.className = 'menu-button';
    button.addEventListener('click', () => handleMenuAction(btn));
    frame.appendChild(button);
  });

  appContainer.appendChild(frame);
}

function handleMenuAction(action) {
  switch (action) {
    case 'Summon':
      summonMonster();
      break;
    case 'Rest':
      restPlayer();
      break;
    case 'Learn':
      learnSkills();
      break;
    case 'Stats':
      showStats();
      break;
    default:
      break;
  }
}

function summonMonster() {
  // Implementation for summoning a monster and starting a battle
  console.log("Summon Monster functionality to be implemented.");
}

function restPlayer() {
  // Implementation for resting the player and healing HP
  console.log("Rest Player functionality to be implemented.");
}

function learnSkills() {
  // Implementation for learning new skills using gold
  console.log("Learn Skills functionality to be implemented.");
}

function showStats() {
  // Implementation for displaying player stats
  console.log("Show Stats functionality to be implemented.");
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});

// Function to summon a monster
function summonMonster() {
  appContainer.innerHTML = ''; // Clear the main menu
  const summonScreen = document.createElement('div');
  summonScreen.className = 'summon-screen';

  const summonTitle = document.createElement('h2');
  summonTitle.innerText = 'Summon a Monster';
  summonScreen.appendChild(summonTitle);

  // Button to choose monster from gallery
  const chooseFromGallery = document.createElement('button');
  chooseFromGallery.innerText = 'Choose from Gallery';
  chooseFromGallery.addEventListener('click', () => chooseMonsterFromGallery());
  summonScreen.appendChild(chooseFromGallery);

  // Button to use camera to load monster
  const useCamera = document.createElement('button');
  useCamera.innerText = 'Use Camera';
  useCamera.addEventListener('click', () => useCameraForMonster());
  summonScreen.appendChild(useCamera);

  // Return to previous screen button
  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  summonScreen.appendChild(returnButton);

  appContainer.appendChild(summonScreen);
}

function chooseMonsterFromGallery() {
  // Implementation for choosing a monster from the gallery
  console.log("Choose Monster from Gallery functionality to be implemented.");
}

function useCameraForMonster() {
  // Implementation for using camera to load monster
  console.log("Use Camera for Monster functionality to be implemented.");
}

// Function to rest the player
function restPlayer() {
  appContainer.innerHTML = ''; // Clear the main menu
  const restScreen = document.createElement('div');
  restScreen.className = 'rest-screen';

  const restTitle = document.createElement('h2');
  restTitle.innerText = 'Resting';
  restScreen.appendChild(restTitle);

  const restMessage = document.createElement('p');
  restMessage.innerText = 'Healing to full health...';
  restScreen.appendChild(restMessage);

  // Simulate healing process
  setTimeout(() => {
    document.getElementById('playerHealth').innerText = 'HP 100';
    showMainMenu();
  }, 3000); // Assuming it takes 3 seconds to heal

  appContainer.appendChild(restScreen);
}

// Function to learn new skills
function learnSkills() {
  appContainer.innerHTML = ''; // Clear the main menu
  const learnScreen = document.createElement('div');
  learnScreen.className = 'learn-screen';

  const learnTitle = document.createElement('h2');
  learnTitle.innerText = 'Learn New Skills';
  learnScreen.appendChild(learnTitle);

  const learnMessage = document.createElement('p');
  learnMessage.innerText = 'Use your gold to learn new skills.';
  learnScreen.appendChild(learnMessage);

  // Example skills to learn
  const skills = ['FireBlast', 'LightningBolt', 'IceMissile', 'DarkBeam', 'LightRay', 'Poison', 'WaterBlast', 'AirCut', 'Earthquake'];
  skills.forEach(skill => {
    const skillButton = document.createElement('button');
    skillButton.innerText = skill;
    skillButton.addEventListener('click', () => learnSkill(skill));
    learnScreen.appendChild(skillButton);
  });

  // Return to previous screen button
  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  learnScreen.appendChild(returnButton);

  appContainer.appendChild(learnScreen);
}

function learnSkill(skill) {
  // Implementation for learning a specific skill
  console.log(`Learn ${skill} functionality to be implemented.`);
}

// Function to show player stats
function showStats() {
  appContainer.innerHTML = ''; // Clear the main menu
  const statsScreen = document.createElement('div');
  statsScreen.className = 'stats-screen';

  const statsTitle = document.createElement('h2');
  statsTitle.innerText = 'Player Stats';
  statsScreen.appendChild(statsTitle);

  const stats = {
    name: localStorage.getItem('playerName') || 'Hero',
    level: 1,
    hp: 100,
    experience: 0,
    strength: 10,
    wisdom: 10,
    agility: 10,
    dexterity: 10,
    charisma: 10,
    luck: 10,
    ghastSlayerLevel: 1,
    enemiesDefeated: []
  };

  for (const [key, value] of Object.entries(stats)) {
    const statItem = document.createElement('p');
    statItem.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
    statsScreen.appendChild(statItem);
  }

  // Return to previous screen button
  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  statsScreen.appendChild(returnButton);

  appContainer.appendChild(statsScreen);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});

// Battle System

function startBattle(monster) {
  appContainer.innerHTML = ''; // Clear previous screen
  const battleScreen = document.createElement('div');
  battleScreen.className = 'battle-screen';

  const battleTitle = document.createElement('h2');
  battleTitle.innerText = `Battle with ${monster.name}`;
  battleScreen.appendChild(battleTitle);

  const battleLog = document.createElement('div');
  battleLog.id = 'battleLog';
  battleScreen.appendChild(battleLog);

  const playerActions = document.createElement('div');
  playerActions.className = 'player-actions';

  const attackButton = document.createElement('button');
  attackButton.innerText = 'Attack';
  attackButton.addEventListener('click', () => performAction('Attack', monster));
  playerActions.appendChild(attackButton);

  const defendButton = document.createElement('button');
  defendButton.innerText = 'Defend';
  defendButton.addEventListener('click', () => performAction('Defend', monster));
  playerActions.appendChild(defendButton);

  const spellButton = document.createElement('button');
  spellButton.innerText = 'Use Spell';
  spellButton.addEventListener('click', () => showSpells(monster));
  playerActions.appendChild(spellButton);

  const itemButton = document.createElement('button');
  itemButton.innerText = 'Use Item';
  itemButton.addEventListener('click', () => showItems(monster));
  playerActions.appendChild(itemButton);

  const fleeButton = document.createElement('button');
  fleeButton.innerText = 'Flee';
  fleeButton.addEventListener('click', () => fleeBattle());
  playerActions.appendChild(fleeButton);

  battleScreen.appendChild(playerActions);
  appContainer.appendChild(battleScreen);
}

function performAction(action, monster) {
  const battleLog = document.getElementById('battleLog');
  let message = '';

  switch (action) {
    case 'Attack':
      message = `You attack ${monster.name}!`;
      break;
    case 'Defend':
      message = 'You defend against the attack!';
      break;
    default:
      message = `You perform ${action}!`;
      break;
  }

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  // Placeholder for updating HP, damage, etc.
}

function showSpells(monster) {
  appContainer.innerHTML = ''; // Clear previous screen
  const spellScreen = document.createElement('div');
  spellScreen.className = 'spell-screen';

  const spellTitle = document.createElement('h2');
  spellTitle.innerText = 'Choose a Spell';
  spellScreen.appendChild(spellTitle);

  const spells = ['FireBlast', 'LightningBolt', 'IceMissile', 'DarkBeam', 'LightRay', 'Poison', 'WaterBlast', 'AirCut', 'Earthquake'];
  spells.forEach(spell => {
    const spellButton = document.createElement('button');
    spellButton.innerText = spell;
    spellButton.addEventListener('click', () => castSpell(spell, monster));
    spellScreen.appendChild(spellButton);
  });

  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Battle';
  returnButton.addEventListener('click', () => startBattle(monster));
  spellScreen.appendChild(returnButton);

  appContainer.appendChild(spellScreen);
}

function castSpell(spell, monster) {
  const battleLog = document.getElementById('battleLog');
  const message = `You cast ${spell} on ${monster.name}!`;

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  // Placeholder for spell effect, damage, etc.
  startBattle(monster);
}

function showItems(monster) {
  appContainer.innerHTML = ''; // Clear previous screen
  const itemScreen = document.createElement('div');
  itemScreen.className = 'item-screen';

  const itemTitle = document.createElement('h2');
  itemTitle.innerText = 'Choose an Item';
  itemScreen.appendChild(itemTitle);

  const items = ['HP Potion', 'Antidote', 'Full Restore', 'Wings'];
  items.forEach(item => {
    const itemButton = document.createElement('button');
    itemButton.innerText = item;
    itemButton.addEventListener('click', () => useItem(item, monster));
    itemScreen.appendChild(itemButton);
  });

  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Battle';
  returnButton.addEventListener('click', () => startBattle(monster));
  itemScreen.appendChild(returnButton);

  appContainer.appendChild(itemScreen);
}

function useItem(item, monster) {
  const battleLog = document.getElementById('battleLog');
  let message = '';

  switch (item) {
    case 'HP Potion':
      message = 'You use an HP Potion!';
      break;
    case 'Antidote':
      message = 'You use an Antidote!';
      break;
    case 'Full Restore':
      message = 'You use a Full Restore!';
      break;
    case 'Wings':
      message = 'You use Wings to escape the battle!';
      break;
    default:
      message = `You use ${item}!`;
      break;
  }

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  // Placeholder for item effect, healing, escape, etc.
  if (item !== 'Wings') {
    startBattle(monster);
  } else {
    fleeBattle();
  }
}

function fleeBattle() {
  showMainMenu();
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});

// Utility Functions for Saving and Loading Game State
function saveGameState() {
  const gameState = {
    playerName: localStorage.getItem('playerName') || 'Hero',
    playerLevel: parseInt(document.getElementById('playerLevel').innerText.split(' ')[1]),
    playerHealth: parseInt(document.getElementById('playerHealth').innerText.split(' ')[1]),
    playerGold: parseInt(document.getElementById('playerGold').innerText.split(' ')[1]),
    stats: {
      experience: 0,
      strength: 10,
      wisdom: 10,
      agility: 10,
      dexterity: 10,
      charisma: 10,
      luck: 10,
      ghastSlayerLevel: 1,
      enemiesDefeated: []
    }
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  if (gameState) {
    document.getElementById('playerName').innerText = gameState.playerName;
    document.getElementById('playerLevel').innerText = `Level ${gameState.playerLevel}`;
    document.getElementById('playerHealth').innerText = `HP ${gameState.playerHealth}`;
    document.getElementById('playerGold').innerText = `G ${gameState.playerGold}`;
  }
}

function updatePlayerStats(stats) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  for (const [key, value] of Object.entries(stats)) {
    gameState.stats[key] = value;
  }
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function gainExperience(amount) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  gameState.stats.experience += amount;

  if (gameState.stats.experience >= gameState.playerLevel * 100) {
    levelUpPlayer();
  }

  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function levelUpPlayer() {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  gameState.playerLevel += 1;
  gameState.stats.experience = 0; // Reset experience for new level

  // Grant bonus stats points
  const bonusPoints = 5;
  gameState.stats.strength += bonusPoints;
  gameState.stats.wisdom += bonusPoints;
  gameState.stats.agility += bonusPoints;
  gameState.stats.dexterity += bonusPoints;
  gameState.stats.charisma += bonusPoints;
  gameState.stats.luck += bonusPoints;

  document.getElementById('playerLevel').innerText = `Level ${gameState.playerLevel}`;
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function healPlayer() {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  gameState.playerHealth = 100; // Assume full health is 100 for now
  document.getElementById('playerHealth').innerText = 'HP 100';
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Modify the restPlayer function to save the healed state
function restPlayer() {
  appContainer.innerHTML = ''; // Clear the main menu
  const restScreen = document.createElement('div');
  restScreen.className = 'rest-screen';

  const restTitle = document.createElement('h2');
  restTitle.innerText = 'Resting';
  restScreen.appendChild(restTitle);

  const restMessage = document.createElement('p');
  restMessage.innerText = 'Healing to full health...';
  restScreen.appendChild(restMessage);

  // Simulate healing process
  setTimeout(() => {
    healPlayer();
    showMainMenu();
  }, 3000); // Assuming it takes 3 seconds to heal

  appContainer.appendChild(restScreen);
}

// Enhance the summonMonster function to allow naming and displaying chosen monsters
function summonMonster() {
  appContainer.innerHTML = ''; // Clear the main menu
  const summonScreen = document.createElement('div');
  summonScreen.className = 'summon-screen';

  const summonTitle = document.createElement('h2');
  summonTitle.innerText = 'Summon a Monster';
  summonScreen.appendChild(summonTitle);

  const chooseFromGallery = document.createElement('button');
  chooseFromGallery.innerText = 'Choose from Gallery';
  chooseFromGallery.addEventListener('click', () => chooseMonsterFromGallery());
  summonScreen.appendChild(chooseFromGallery);

  const useCamera = document.createElement('button');
  useCamera.innerText = 'Use Camera';
  useCamera.addEventListener('click', () => useCameraForMonster());
  summonScreen.appendChild(useCamera);

  const monsterNameInput = document.createElement('input');
  monsterNameInput.type = 'text';
  monsterNameInput.placeholder = 'Enter monster name';
  summonScreen.appendChild(monsterNameInput);

  const summonButton = document.createElement('button');
  summonButton.innerText = 'Summon';
  summonButton.addEventListener('click', () => {
    const monsterName = monsterNameInput.value || 'Unnamed Monster';
    const monster = { name: monsterName };
    startBattle(monster);
  });
  summonScreen.appendChild(summonButton);

  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  summonScreen.appendChild(returnButton);

  appContainer.appendChild(summonScreen);
}

// Modify the learnSkills function to save the learned skills
function learnSkills() {
  appContainer.innerHTML = ''; // Clear the main menu
  const learnScreen = document.createElement('div');
  learnScreen.className = 'learn-screen';

  const learnTitle = document.createElement('h2');
  learnTitle.innerText = 'Learn New Skills';
  learnScreen.appendChild(learnTitle);

  const learnMessage = document.createElement('p');
  learnMessage.innerText = 'Use your gold to learn new skills.';
  learnScreen.appendChild(learnMessage);

  const skills = ['FireBlast', 'LightningBolt', 'IceMissile', 'DarkBeam', 'LightRay', 'Poison', 'WaterBlast', 'AirCut', 'Earthquake'];
  skills.forEach(skill => {
    const skillButton = document.createElement('button');
    skillButton.innerText = skill;
    skillButton.addEventListener('click', () => learnSkill(skill));
    learnScreen.appendChild(skillButton);
  });

  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  learnScreen.appendChild(returnButton);

  appContainer.appendChild(learnScreen);
}

function learnSkill(skill) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  if (gameState.playerGold >= 10) { // Assume each skill costs 10 gold
    gameState.playerGold -= 10;
    document.getElementById('playerGold').innerText = `G ${gameState.playerGold}`;
    const learnedSkills = gameState.learnedSkills || [];
    learnedSkills.push(skill);
    gameState.learnedSkills = learnedSkills;
    localStorage.setItem('gameState', JSON.stringify(gameState));
    alert(`You have learned ${skill}!`);
  } else {
    alert('Not enough gold to learn this skill.');
  }
}

// Modify the showStats function to display updated stats
function showStats() {
  appContainer.innerHTML = ''; // Clear the main menu
  const statsScreen = document.createElement('div');
  statsScreen.className = 'stats-screen';

  const statsTitle = document.createElement('h2');
  statsTitle.innerText = 'Player Stats';
  statsScreen.appendChild(statsTitle);

  const gameState = JSON.parse(localStorage.getItem('gameState'));
  if (gameState) {
    const stats = {
      name: gameState.playerName,
      level: gameState.playerLevel,
      hp: gameState.playerHealth,
      experience: gameState.stats.experience,
      strength: gameState.stats.strength,
      wisdom: gameState.stats.wisdom,
      agility: gameState.stats.agility,
      dexterity: gameState.stats.dexterity,
      charisma: gameState.stats.charisma,
      luck: gameState.stats.luck,
      ghastSlayerLevel: gameState.stats.ghastSlayerLevel,
      enemiesDefeated: gameState.stats.enemiesDefeated
    };

    for (const [key, value] of Object.entries(stats)) {
      const statItem = document.createElement('p');
      statItem.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
      statsScreen.appendChild(statItem);
    }
  }

  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  statsScreen.appendChild(returnButton);

  appContainer.appendChild(statsScreen);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  loadGameState();
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});

// Update the performAction function to handle attack logic and enemy responses
function performAction(action, monster) {
  const battleLog = document.getElementById('battleLog');
  let message = '';

  switch (action) {
    case 'Attack':
      const playerDamage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
      message = `You attack ${monster.name} for ${playerDamage} damage!`;
      monster.hp -= playerDamage;
      if (monster.hp <= 0) {
        message += ` ${monster.name} has been defeated!`;
        gainExperience(monster.experience);
        gainGold(monster.gold);
        updateDefeatedEnemies(monster);
        showMainMenu();
        return;
      }
      break;
    case 'Defend':
      message = 'You defend against the attack!';
      break;
    default:
      message = `You perform ${action}!`;
      break;
  }

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  // Enemy's turn to act
  enemyAction(monster);
}

function enemyAction(monster) {
  const battleLog = document.getElementById('battleLog');
  const enemyDamage = Math.floor(Math.random() * 5) + 1; // Random damage between 1 and 5
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  gameState.playerHealth -= enemyDamage;

  const message = `${monster.name} attacks you for ${enemyDamage} damage!`;
  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  if (gameState.playerHealth <= 0) {
    alert('You have been defeated! Returning to main menu...');
    gameState.playerHealth = 100; // Reset player health for now
    localStorage.setItem('gameState', JSON.stringify(gameState));
    showMainMenu();
  } else {
    document.getElementById('playerHealth').innerText = `HP ${gameState.playerHealth}`;
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }
}

function gainGold(amount) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  gameState.playerGold += amount;
  document.getElementById('playerGold').innerText = `G ${gameState.playerGold}`;
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function updateDefeatedEnemies(monster) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  const defeatedEnemies = gameState.stats.enemiesDefeated || [];
  defeatedEnemies.push(monster.name);
  gameState.stats.enemiesDefeated = defeatedEnemies;
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Function to choose a monster from the gallery
function chooseMonsterFromGallery() {
  // Implementation to choose a monster image from a gallery
  // For now, let's assume a static image and monster name
  const monster = {
    name: 'Gallery Monster',
    hp: 50,
    experience: 20,
    gold: 10
  };
  startBattle(monster);
}

// Function to use the camera for a monster image
function useCameraForMonster() {
  // Implementation to use the camera to capture a monster image
  // For now, let's assume a static image and monster name
  const monster = {
    name: 'Camera Monster',
    hp: 50,
    experience: 20,
    gold: 10
  };
  startBattle(monster);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  loadGameState();
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});

// Update the performAction function to include Defend, Spells, and Items logic
function performAction(action, monster) {
  const battleLog = document.getElementById('battleLog');
  let message = '';

  switch (action) {
    case 'Attack':
      const playerDamage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
      message = `You attack ${monster.name} for ${playerDamage} damage!`;
      monster.hp -= playerDamage;
      if (monster.hp <= 0) {
        message += ` ${monster.name} has been defeated!`;
        gainExperience(monster.experience);
        gainGold(monster.gold);
        updateDefeatedEnemies(monster);
        showMainMenu();
        return;
      }
      break;
    case 'Defend':
      message = 'You defend against the attack!';
      break;
    default:
      message = `You perform ${action}!`;
      break;
  }

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  // Enemy's turn to act
  enemyAction(monster);
}

function enemyAction(monster) {
  const battleLog = document.getElementById('battleLog');
  const enemyDamage = Math.floor(Math.random() * 5) + 1; // Random damage between 1 and 5
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  gameState.playerHealth -= enemyDamage;

  const message = `${monster.name} attacks you for ${enemyDamage} damage!`;
  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  if (gameState.playerHealth <= 0) {
    alert('You have been defeated! Returning to main menu...');
    gameState.playerHealth = 100; // Reset player health for now
    localStorage.setItem('gameState', JSON.stringify(gameState));
    showMainMenu();
  } else {
    document.getElementById('playerHealth').innerText = `HP ${gameState.playerHealth}`;
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }
}

function castSpell(spell, monster) {
  const battleLog = document.getElementById('battleLog');
  let spellDamage = 0;
  switch (spell) {
    case 'FireBlast':
      spellDamage = Math.floor(Math.random() * 15) + 5; // Random damage between 5 and 20
      break;
    case 'LightningBolt':
      spellDamage = Math.floor(Math.random() * 20) + 10; // Random damage between 10 and 30
      break;
    // Add other spells with appropriate damage values
  }
  const message = `You cast ${spell} on ${monster.name} for ${spellDamage} damage!`;
  monster.hp -= spellDamage;

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  if (monster.hp <= 0) {
    message += ` ${monster.name} has been defeated!`;
    gainExperience(monster.experience);
    gainGold(monster.gold);
    updateDefeatedEnemies(monster);
    showMainMenu();
  } else {
    enemyAction(monster);
  }
}

function useItem(item, monster) {
  const battleLog = document.getElementById('battleLog');
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  let message = '';

  switch (item) {
    case 'HP Potion':
      gameState.playerHealth = Math.min(gameState.playerHealth + 20, 100); // Heal 20 HP
      message = 'You use an HP Potion and restore 20 HP!';
      break;
    case 'Antidote':
      // Implement status effect removal logic
      message = 'You use an Antidote!';
      break;
    case 'Full Restore':
      gameState.playerHealth = 100; // Restore to full health
      message = 'You use a Full Restore and regain full health!';
      break;
    case 'Wings':
      message = 'You use Wings to escape the battle!';
      break;
  }

  const logEntry = document.createElement('p');
  logEntry.innerText = message;
  battleLog.appendChild(logEntry);

  document.getElementById('playerHealth').innerText = `HP ${gameState.playerHealth}`;
  localStorage.setItem('gameState', JSON.stringify(gameState));

  if (item === 'Wings') {
    showMainMenu();
  } else {
    enemyAction(monster);
  }
}

// Refine restPlayer function
function restPlayer() {
  appContainer.innerHTML = ''; // Clear the main menu
  const restScreen = document.createElement('div');
  restScreen.className = 'rest-screen';

  const restTitle = document.createElement('h2');
  restTitle.innerText = 'Resting';
  restScreen.appendChild(restTitle);

  const restMessage = document.createElement('p');
  restMessage.innerText = 'Healing to full health...';
  restScreen.appendChild(restMessage);

  // Simulate healing process
  setTimeout(() => {
    healPlayer();
    showMainMenu();
  }, 3000); // Assuming it takes 3 seconds to heal

  appContainer.appendChild(restScreen);
}

// Finalize the UI for the main menu and additional functionalities
function showMainMenu() {
  appContainer.innerHTML = ''; // Clear previous screen
  const mainMenu = document.createElement('div');
  mainMenu.className = 'main-menu';

  const playerName = document.createElement('div');
  playerName.id = 'playerName';
  playerName.innerText = localStorage.getItem('playerName') || 'Hero';
  mainMenu.appendChild(playerName);

  const statusBar = document.createElement('div');
  statusBar.className = 'status-bar';

  const playerLevel = document.createElement('span');
  playerLevel.id = 'playerLevel';
  playerLevel.innerText = `Level ${JSON.parse(localStorage.getItem('gameState')).playerLevel}`;
  statusBar.appendChild(playerLevel);

  const playerHealth = document.createElement('span');
  playerHealth.id = 'playerHealth';
  playerHealth.innerText = `HP ${JSON.parse(localStorage.getItem('gameState')).playerHealth}`;
  statusBar.appendChild(playerHealth);

  const playerGold = document.createElement('span');
  playerGold.id = 'playerGold';
  playerGold.innerText = `G ${JSON.parse(localStorage.getItem('gameState')).playerGold}`;
  statusBar.appendChild(playerGold);

  mainMenu.appendChild(statusBar);

  const summonButton = document.createElement('button');
  summonButton.innerText = 'Summon';
  summonButton.addEventListener('click', summonMonster);
  mainMenu.appendChild(summonButton);

  const restButton = document.createElement('button');
  restButton.innerText = 'Rest';
  restButton.addEventListener('click', restPlayer);
  mainMenu.appendChild(restButton);

  const learnButton = document.createElement('button');
  learnButton.innerText = 'Learn';
  learnButton.addEventListener('click', learnSkills);
  mainMenu.appendChild(learnButton);

  const statsButton = document.createElement('button');
  statsButton.innerText = 'Stats';
  statsButton.addEventListener('click', showStats);
  mainMenu.appendChild(statsButton);

  appContainer.appendChild(mainMenu);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  loadGameState();
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});

// Function to show player stats and allow stat allocation
function showStats() {
  appContainer.innerHTML = ''; // Clear the main menu
  const statsScreen = document.createElement('div');
  statsScreen.className = 'stats-screen';

  const statsTitle = document.createElement('h2');
  statsTitle.innerText = 'Player Stats';
  statsScreen.appendChild(statsTitle);

  const gameState = JSON.parse(localStorage.getItem('gameState'));
  if (gameState) {
    const stats = {
      playerName: gameState.playerName,
      playerLevel: gameState.playerLevel,
      playerHealth: gameState.playerHealth,
      playerGold: gameState.playerGold,
      experience: gameState.stats.experience,
      strength: gameState.stats.strength,
      wisdom: gameState.stats.wisdom,
      agility: gameState.stats.agility,
      dexterity: gameState.stats.dexterity,
      charisma: gameState.stats.charisma,
      luck: gameState.stats.luck,
      ghastSlayerLevel: gameState.stats.ghastSlayerLevel,
      enemiesDefeated: gameState.stats.enemiesDefeated
    };

    for (const [key, value] of Object.entries(stats)) {
      if (key === 'playerName' || key === 'playerLevel' || key === 'playerHealth' || key === 'playerGold') {
        const statItem = document.createElement('p');
        statItem.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        statsScreen.appendChild(statItem);
      } else {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';

        const statName = document.createElement('span');
        statName.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)}: `;
        statItem.appendChild(statName);

        const statValue = document.createElement('span');
        statValue.innerText = value;
        statItem.appendChild(statValue);

        const increaseButton = document.createElement('button');
        increaseButton.innerText = '+';
        increaseButton.addEventListener('click', () => increaseStat(key));
        statItem.appendChild(increaseButton);

        const decreaseButton = document.createElement('button');
        decreaseButton.innerText = '-';
        decreaseButton.addEventListener('click', () => decreaseStat(key));
        statItem.appendChild(decreaseButton);

        statsScreen.appendChild(statItem);
      }
    }
  }

  const returnButton = document.createElement('button');
  returnButton.innerText = 'Return to Previous Screen';
  returnButton.addEventListener('click', () => showMainMenu());
  statsScreen.appendChild(returnButton);

  const exitButton = document.createElement('button');
  exitButton.innerText = 'Exit Game';
  exitButton.addEventListener('click', () => exitGame());
  statsScreen.appendChild(exitButton);

  appContainer.appendChild(statsScreen);
}

// Function to increase a player stat
function increaseStat(stat) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  if (gameState.playerGold >= 10) { // Assume each stat point costs 10 gold
    gameState.playerGold -= 10;
    document.getElementById('playerGold').innerText = `G ${gameState.playerGold}`;
    gameState.stats[stat]++;
    localStorage.setItem('gameState', JSON.stringify(gameState));
    showStats();
  } else {
    alert('Not enough gold to increase this stat.');
  }
}

// Function to decrease a player stat
function decreaseStat(stat) {
  const gameState = JSON.parse(localStorage.getItem('gameState'));
  if (gameState.stats[stat] > 10) { // Minimum stat value assumed to be 10
    gameState.playerGold += 10;
    document.getElementById('playerGold').innerText = `G ${gameState.playerGold}`;
    gameState.stats[stat]--;
    localStorage.setItem('gameState', JSON.stringify(gameState));
    showStats();
  } else {
    alert('Stat cannot be decreased further.');
  }
}

// Function to exit the game
function exitGame() {
  localStorage.clear(); // Clear saved game state
  window.close(); // Close the window/tab
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  loadGameState();
  showImage(initialScreen, 5000); // Show initial screen for 5 seconds
});
