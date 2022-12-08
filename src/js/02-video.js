import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOTIME = 'videoplayer-current-time';

if (localStorage.getItem(VIDEOTIME)) {
  player.setCurrentTime(localStorage.getItem(VIDEOTIME));
}

const onPlay = function (data) {
  localStorage.setItem(VIDEOTIME, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
