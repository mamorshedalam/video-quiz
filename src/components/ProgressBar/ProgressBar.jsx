import classes from '../../assets/styles/ProgressBar.module.css';
import Button from '../Button/Button';

export default function ProgressBar({ next, prev, submit, progress }) {

     return (
          <div className={classes.progressBar}>
               <Button className={classes.backButton} onClick={prev}>
                    <span className="material-icons-outlined"> arrow_back </span>
               </Button>
               <div className={classes.rangeArea}>
                    <div className={classes.tooltip}>{progress}% Cimplete!</div>
                    <div className={classes.rangeBody}>
                         <div className={classes.progress} style={{ width: `${progress}%` }}></div>
                    </div>
               </div>
               <Button className={classes.next} onClick={progress === 100 ? submit : next}>
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
               </Button>
          </div>
     );
}