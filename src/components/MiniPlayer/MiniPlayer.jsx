import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import classes from '../../assets/styles/MiniPlayer.module.css';

export default function MiniPlayer({ id, title }) {
     const buttonRef = useRef();
     const [status, setStatus] = useState(false);
     const videoUrl = `https://www.youtube.com/watch?v=${id}`;

     function toggleMiniPlayer() {
          if (!status) {
               setStatus(true);
               buttonRef.current.classList.remove(classes.floatingBtn);
          } else {
               setStatus(false);
               buttonRef.current.classList.add(classes.floatingBtn);
          }
     }

     return (
          <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} onClick={toggleMiniPlayer} ref={buttonRef}>
               <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
               <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer} > close </span >
               <ReactPlayer className={classes.player} url={videoUrl} width="300px" height="168px" playing={status} controls />
               <p>{title}</p>
          </div >
     );
}