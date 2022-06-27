export default function Checkbox({ text, ...rest }) {
     return (
          <label {...rest} >
               <input type="checkbox" />  <span>{text}</span>
          </label>
     );
}