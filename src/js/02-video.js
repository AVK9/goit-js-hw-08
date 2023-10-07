import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = "videoplayer-current-time";

player.on('timeupdate', throttle(timeInterval, 1000));
function timeInterval (data) {
    localStorage.setItem(currentTime, data.seconds);
};
// localStorage.clear();
const value = localStorage.getItem(currentTime);
// player.setCurrentTime(value);
player.setCurrentTime(value).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


