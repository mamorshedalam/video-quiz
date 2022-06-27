import classes from '../../assets/styles/Button.module.css';

export default function Button({ className, children, ...rest }) {
     return (
          <button className={`${classes.button} ${className}`} {...rest}>
               {children}
          </button>
     );
}