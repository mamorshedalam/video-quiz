import classes from '../../assets/styles/Question.module.css';
import Answers from '../Answers/Answers';
import Qtitle from '../Qtitle/Qtitle';

export default function Question({ answers = [] }) {
     return answers.map((answer, index) => (
          <div className={classes.question} key={index}>
               <Qtitle className={classes.qtitle} title={answer.title} />
               <Answers input={false} options={answer.options} />
          </div>
     ));
}