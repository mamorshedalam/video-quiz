import classes from '../../assets/styles/Question.module.css';
import Answers from '../Answers/Answers';
import Qtitle from '../Qtitle/Qtitle';

export default function Question() {
     return (
          <div className={classes.question}>
               <Qtitle className={classes.qtitle} />
               <Answers />
          </div>
     );
}