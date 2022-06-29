export default function Checkbox({ text, name, ...rest }) {
     return (
          <label {...rest} >
               <input type="checkbox" name={name} />  <span>{text}</span>
          </label>
     );
}