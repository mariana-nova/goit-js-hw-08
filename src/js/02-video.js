import Vimeo from '@vimeo/player';
import _ from 'lodash';

 const breeder = new Vimeo(document.querySelector('#vimeo-player'));


 const localstore =  () =>{ 
 try { 
 breeder.getCurrentTime().then(seconds => {
 localStorage.setItem('videoplayer-current-time', seconds);
 });
 } catch (error) { 
 console.error('Error al obtener el tiempo actual de reproduccion', error);
 }
};
 breeder.on('timeupdate', _.throttle(localstore, 1000)); 
 const currentTime = localStorage.getItem('videoplayer-current-time');
 currentTime ? breeder.setCurrentTime(currentTime) : null;
