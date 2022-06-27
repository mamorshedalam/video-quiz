import { Link } from 'react-router-dom';
import classes from '../assets/styles/Videos.module.css';
import Video from '../components/Video/Video';

export default function Home() {
     return (
          <div className={classes.videos}>
               <Link to="/quiz"><Video /></Link>
          </div>
     );
}