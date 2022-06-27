import classes from '../../assets/styles/Answers.module.css';
import Checkbox from '../Checkbox/Checkbox';

export default function Answers() {
     return (
          <div className={classes.answers}>
               <Checkbox text="A New Hope 1" className={`${classes.answer} ${classes.wrong}`} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={`${classes.answer} ${classes.correct}`} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
          </div>
     );
}