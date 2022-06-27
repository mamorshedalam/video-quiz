import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-bg.png';
import classes from '../../assets/styles/Header.module.css';

export default function Logo() {
     return (
          <>
               <ul>
                    <li>
                         <Link to="/" className={classes.brand}>
                              < img src={logo} alt="Learn with Sumit Logo" />
                              <h3>Learn with Sumit</h3>
                         </Link>
                    </li>
               </ul>
          </>
     );
}