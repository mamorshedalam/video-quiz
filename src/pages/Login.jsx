import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';
import { useAuth } from '../contexts/AuthContext';
import { initialState, reducer } from '../reducers/statusReducer';

export default function Login() {
     const [state, dispatch] = useReducer(reducer, initialState);
     const history = useNavigate();
     const { login } = useAuth();
     const [user, setUser] = useState({
          email: "",
          password: ""
     })

     async function handleSubmit(e) {
          e.preventDefault();

          try {
               dispatch({ type: "SUCCESS", loading: true });
               await login(user.email, user.password);
               history('/')
          } catch (err) {
               dispatch({ type: "FAIL", error: "Fail to Login, Try Again!" });
          }
     }

     function handleChange(e) {
          const newUser = { ...user };
          newUser[e.target.name] = e.target.value;

          setUser(newUser);
     }

     return (
          <>
               <h1>Create an Account</h1>
               <div className="column">
                    <Illustration />
                    <Form className="login" link="/signup" onSubmit={handleSubmit} show={state.loading} error={state.error}>
                         <TextInput type="text" name="email" placeholder="Enter name" text="alternate_email" onBlur={handleChange} />
                         <TextInput type="password" name="password" placeholder="Enter password" text="lock" onBlur={handleChange} />
                    </ Form>
               </div>
          </>
     );
}