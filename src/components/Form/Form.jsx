import { Link } from 'react-router-dom';
import classes from '../../assets/styles/Form.module.css';
import Button from '../Button/Button';

export default function Form({ className, link, onSubmit, show, children }) {
     return (
          <form className={`${className} ${classes.form}`} action="#" onSubmit={onSubmit} >
               {children}
               <Button disabled={show} className={classes.button}><span>Submit now</span></Button>

               <div className={classes.info}>
                    {className === "signup" ? "Already" : "Don't"} have an account? <Link to={link}>{className === "signup" ? "Login" : "Signup"}</Link> instead.
               </div>
          </form>
     );
}