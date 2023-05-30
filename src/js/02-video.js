import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

 const iframe = document.querySelector('iframe');
 const breeder = new Vimeo(iframe); 

 const localstore = async () =>{ 
 try { 
 const time_Seconds = await breeder.getCurrentTime();  
 localStorage.setItem('current-time', time_Seconds);
 } catch (error) { 
 console.error('Error al obtener el tiempo actual de reproduccion', error);
 }
};
 breeder.on('play', throttle(localstore, 1000)); 
 const current_Time = localStorage.getItem('current-time');
 current_Time ? breeder.setCurrentTime(current_Time) : null;
