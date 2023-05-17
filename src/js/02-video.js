import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

     const currentTime = throttle(function(data)  {
        const currentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', currentTime);
    },1000);
    
   


    player.on('timeupdate',currentTime);

    const savedTime = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(savedTime);

    