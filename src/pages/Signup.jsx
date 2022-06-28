import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../components/Checkbox/Checkbox';
import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
     const history = useNavigate();
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [agree, setAgree] = useState("");
     const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);

     const { signup } = useAuth();

     async function handleSubmit(e) {
          e.preventDefault();
          if (password !== confirmPassword) {
               return setError("Password don't match!");
          };

          try {
               setError("");
               setLoading(true);
               await signup(email, password, username);
               history('/')
          } catch (err) {
               console.log(err);
               setLoading(false);
               setError("Failed to create an Account!")
          }

     }

     return (
          <>
               <h1>Create an Account</h1>
               <div className="column">
                    <Illustration />
                    <Form className="signup" link="/login" onSubmit={handleSubmit} show={loading}>
                         <TextInput type="text" placeholder="Enter name" text="person" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                         <TextInput type="text" placeholder="Enter email" text="alternate_email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                         <TextInput type="password" placeholder="Enter password" text="lock" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                         <TextInput type="password" placeholder="Confirm password" text="lock_clock" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                         <Checkbox text="I agree to the Terms & Conditions" value={agree} onChange={(e) => { setAgree(e.target.value) }} />
                         {error && <p className="error">{error}</p>}
                    </ Form>
               </div>
          </>
     );
}