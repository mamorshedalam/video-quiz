import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../components/Checkbox/Checkbox';
import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';
import { useAuth } from '../contexts/AuthContext';
import { initialState, reducer } from '../reducers/statusReducer';

export default function Signup() {
     const [state, dispatch] = useReducer(reducer, initialState);
     const { signup } = useAuth();
     const history = useNavigate();
     const [user, setUser] = useState({
          email: "",
          password: "",
          confirmPassword: "",
          username: "",
          agree: ""
     })

     async function handleSubmit(e) {
          e.preventDefault();
          if (user.password !== user.confirmPassword) {
               return dispatch({ type: "FAIL", error: "Password was not matched!" });
          }

          try {
               dispatch({ type: "SUCCESS", loading: true });
               await signup(user.email, user.password, user.username);
               history('/')
          } catch (err) {
               dispatch({ type: "FAIL", error: "Fail to create Account, Try Again!" });
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
                    <Form className="signup" link="/login" onSubmit={handleSubmit} show={state.loading} error={state.error}>
                         <TextInput type="text" name="username" placeholder="Enter name" text="person" onBlur={handleChange} />
                         <TextInput type="text" name="email" placeholder="Enter email" text="alternate_email" onBlur={handleChange} />
                         <TextInput type="password" name="password" placeholder="Enter password" text="lock" onBlur={handleChange} />
                         <TextInput type="password" name="confirmPassword" placeholder="Confirm password" text="lock_clock" onBlur={handleChange} />
                         <Checkbox text="I agree to the Terms & Conditions" name="agree" onBlur={handleChange} />
                    </ Form>
               </div>
          </>
     );
}