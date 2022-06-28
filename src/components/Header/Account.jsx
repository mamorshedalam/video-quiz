import { Link } from 'react-router-dom';
import classes from '../../assets/styles/Header.module.css';
import { useAuth } from '../../contexts/AuthContext';

export default function Account() {
     const { currentUser, logout } = useAuth();
     return (
          <div className={classes.account}>
               {currentUser ? (
                    <>
                         <span className="material-icons-outlined" title="Account">account_circle</span>
                         <span title="Name">{currentUser.displayName}</span>
                         <span className="material-icons-outlined" title="Logout" onClick={logout}> logout </span>
                    </>
               ) : (
                    <>
                         <Link to="/login">Login</Link>
                         <Link to="/signup">Signup</Link>
                    </>
               )}

          </div>
     );
}