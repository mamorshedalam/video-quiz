import classes from '../../assets/styles/Answers.module.css';
import Checkbox from '../Checkbox/Checkbox';

export default function Answers({ options = [], handleChange }) {
     return (
          <div className={classes.answers}>
               {options.map((option, index) => (
                    <Checkbox key={index} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} className={classes.answer} />
               ))}

               {/* <Checkbox text="A New Hope 1" className={`${classes.answer} ${classes.wrong}`} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={`${classes.answer} ${classes.correct}`} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} />
               <Checkbox text="A New Hope 1" className={classes.answer} /> */}
          </div>
     );
}