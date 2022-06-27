import classes from '../../assets/styles/Header.module.css';
import Account from '../../components/Header/Account';
import Logo from '../../components/Header/Logo';

export default function Header() {
     return (
          <header className={classes.nav}>
               <Logo />
               <Account />
          </header>
     );
}