import { Link } from 'react-router-dom';
import classes from '../../assets/styles/Form.module.css';
import Button from '../Button/Button';

export default function Form({ className, link, children }) {
     return (
          <form className={`${className} ${classes.form}`} action="#">
               {children}
               <Button className={classes.button}><span>Submit now</span></Button>

               <div class="info">
                    {className === "signup" ? "Already" : "Don't"} have an account? <Link to={link}>{className === "signup" ? "Login" : "Signup"}</Link> instead.
               </div>
          </form>
     );
}