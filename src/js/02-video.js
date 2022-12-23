import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});
const CURRENT_TIME_LS = 'videoplayer-current-time';

function currentPlayerTime(event) {
  localStorage.setItem(CURRENT_TIME_LS, event.seconds);
}
const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_LS));
player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(currentPlayerTime, 1000));
