import success from '../../assets/images/success.png';
import classes from '../../assets/styles/Summary.module.css';

export default function Summary({ score, noq }) {
     return (
          <div className={classes.summary}>
               <div className={classes.point}>
                    <p className={classes.score}>
                         Your score is <br />
                         {score} out of {noq * 5}
                    </p>
               </div>

               <div className={classes.badge}>
                    <img src={success} alt="Success" />
               </div>
          </div>
     );
}