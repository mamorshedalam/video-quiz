import signup from '../../assets/images/signup.svg';
import classes from '../../assets/styles/Illustration.module.css';

export default function Illustration() {
     return (
          <div className={classes.illustration} >
               <img src={signup} alt="Signup" />
          </div >
     );
}