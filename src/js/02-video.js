import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');
const CURRENT_TIME_LS = 'videoplayer-current-time';

function currentPlayerTime(event) {
  localStorage.setItem(CURRENT_TIME_LS, event.seconds);
}

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_LS));

player.setCurrentTime(Number(currentTime));
player.on('timeupdate', throttle(currentPlayerTime, 1000));
