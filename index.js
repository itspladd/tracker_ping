const player = require('play-sound')(opts = {});

const remindMe = () => {
  player.play('win.wav');
  console.log(`Reminder ping at ${Date.now().toLocaleTimeString()}`)
};

console.log('Running reminder');
setInterval(remindMe, 60*30*1000);