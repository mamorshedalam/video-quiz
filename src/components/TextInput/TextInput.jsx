import classes from '../../assets/styles/TextInput.module.css';

export default function TextInput({ text, ...rest }) {
     return (
          <div className={classes.textInput}>
               <input {...rest} />
               <span className="material-icons-outlined"> {text} </span>
          </div>
     );
}