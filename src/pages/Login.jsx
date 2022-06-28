import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
     const { login } = useAuth();
     const history = useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const [loading, setLoading] = useState(false);

     async function handleSubmit(e) {
          e.preventDefault();

          try {
               setError("");
               setLoading(true);
               await login(email, password);
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
                    <Form className="login" link="/signup" onSubmit={handleSubmit} show={loading}>
                         <TextInput type="text" placeholder="Enter name" text="alternate_email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                         <TextInput type="password" placeholder="Enter password" text="lock" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                         {error && <p className="error">{error}</p>}
                    </ Form>
               </div>
          </>
     );
}