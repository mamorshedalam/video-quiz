export default function Checkbox({ text, ...rest }) {
     return (
          <label {...rest} >
               <input type="checkbox" {...rest} />  <span>{text}</span>
          </label>
     );
}