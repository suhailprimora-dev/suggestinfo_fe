const fs = require('fs');
const path = require('path');

const srcHero = 'C:\\Users\\suhai\\.gemini\\antigravity-ide\\brain\\e239dabc-c2ba-4d84-9b73-2955d559f08c\\dashboard_hero_1780813955750.png';
const srcTeam = 'C:\\Users\\suhai\\.gemini\antigravity-ide\\brain\\e239dabc-c2ba-4d84-9b73-2955d559f08c\\team_collaboration_1780813975151.png';

const destHero = path.join(__dirname, 'src', 'assets', 'dashboard_hero.png');
const destTeam = path.join(__dirname, 'src', 'assets', 'team_collaboration.png');

try {
  console.log(`Copying hero from ${srcHero} to ${destHero}...`);
  fs.copyFileSync(srcHero, destHero);
  console.log('Hero image copied successfully.');

  console.log(`Copying team from ${srcTeam} to ${destTeam}...`);
  fs.copyFileSync(srcTeam, destTeam);
  console.log('Team image copied successfully.');
} catch (err) {
  console.error('Error copying files:', err.message);
  process.exit(1);
}
