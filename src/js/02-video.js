const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = "videoplayer-current-time";

player.on('timeupdate', throttle(timeInterval, 1000));
function timeInterval (data) {
    // localStorage.clear()
    localStorage.setItem(currentTime, JSON.stringify(data.seconds));
    console.log(data.seconds)
};

const value = localStorage.getItem(currentTime);
console.log(value);
// player.setCurrentTime(value);
player.setCurrentTime(value).then(function (seconds) {
    console.log('seconds');
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


