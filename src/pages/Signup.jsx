import Checkbox from '../components/Checkbox/Checkbox';
import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';

export default function Signup() {
     return (
          <>
               <h1>Create an Account</h1>
               <div className="column">
                    <Illustration />
                    <Form className="signup" link="/login">
                         <TextInput type="text" placeholder="Enter name" text="person" />
                         <TextInput type="text" placeholder="Enter email" text="alternate_email" />
                         <TextInput type="password" placeholder="Enter password" text="lock" />
                         <TextInput type="password" placeholder="Confirm password" text="lock_clock" />
                         <Checkbox text="I agree to the Terms & Conditions" />
                    </ Form>
               </div>
          </>
     );
}