import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';

export default function Signup() {
     return (
          <>
               <h1>Create an Account</h1>
               <div className="column">
                    <Illustration />
                    <Form className="login" link="/signup">
                         <TextInput type="text" placeholder="Enter name" text="alternate_email" />
                         <TextInput type="password" placeholder="Enter password" text="lock" />
                    </ Form>
               </div>
          </>
     );
}