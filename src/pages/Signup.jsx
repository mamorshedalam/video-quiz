import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../components/Checkbox/Checkbox';
import Form from '../components/Form/Form';
import Illustration from '../components/Illustration/Illustration';
import TextInput from '../components/TextInput/TextInput';
import { useAuth } from '../contexts/AuthContext';

const initialState = {
     loading: false,
     error: ""
}

const reducer = (state, action) => {
     switch (action.type) {
          case "SUCCESS":
               return {
                    loading: true,
                    error: ""
               }
          case "FAIL":
               return {
                    loading: false,
                    error: "Fail to login"
               }
          default: return state;
     }
}
export default function Signup() {
     const { signup } = useAuth();
     const history = useNavigate();
     const [state, dispatch] = useReducer(reducer, initialState);
     const [user, setUser] = useState({
          email: "",
          password: "",
          confirmPassword: "",
          username: "",
          agree: ""
     })

     async function handleSubmit(e) {
          e.preventDefault();
          if (!user.password === user.confirmPassword) {
               return dispatch({ type: "FAIL" })
          }

          try {
               dispatch({ type: "SUCCESS" });
               await signup(user.email, user.password, user.username);
               history('/')
          } catch (err) {
               dispatch({ type: "FAIL" });
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
                    <Form className="signup" link="/login" onSubmit={handleSubmit} show={state.loading}>
                         <TextInput type="text" name="username" placeholder="Enter name" text="person" onBlur={handleChange} />
                         <TextInput type="text" name="email" placeholder="Enter email" text="alternate_email" onBlur={handleChange} />
                         <TextInput type="password" name="password" placeholder="Enter password" text="lock" onBlur={handleChange} />
                         <TextInput type="password" name="confirmPassword" placeholder="Confirm password" text="lock_clock" onBlur={handleChange} />
                         <Checkbox text="I agree to the Terms & Conditions" name="agree" onBlur={handleChange} />
                         {state.error && <p className="error">{state.error}</p>}
                    </ Form>
               </div>
          </>
     );
}