import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setWatchingTime = ({ seconds }) => {
   localStorage.setItem('videoplayer-current-time', seconds);
};
player.on('timeupdate', throttle(setWatchingTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

console.log(localStorage.getItem('videoplayer-current-time'));