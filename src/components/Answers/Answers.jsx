import { Fragment } from 'react';
import classes from '../../assets/styles/Answers.module.css';
import Checkbox from '../Checkbox/Checkbox';

export default function Answers({ options = [], handleChange, input }) {
     return (
          <div className={classes.answers}>
               {options.map((option, index) => (
                    <Fragment>
                         {input ? (
                              <Checkbox key={index} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} className={classes.answer} />
                         ) : (
                              <Checkbox key={index} text={option.title} defaultChecked={option.checked}
                                   className={`${classes.answer} ${option.correct ? classes.correct : option.checked ? classes.wrong : null}`} disabled />
                         )}
                    </Fragment>
               ))}
          </div>
     );
}