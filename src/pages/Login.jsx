import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
export default function Login() {
     const { login } = useAuth();
     const history = useNavigate();
     const [state, dispatch] = useReducer(reducer, initialState);
     const [user, setUser] = useState({
          email: "",
          password: ""
     })

     async function handleSubmit(e) {
          e.preventDefault();

          try {
               dispatch({ type: "SUCCESS" });
               await login(user.email, user.password);
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
                    <Form className="login" link="/signup" onSubmit={handleSubmit} show={state.loading}>
                         <TextInput type="text" name="email" placeholder="Enter name" text="alternate_email" onBlur={handleChange} />
                         <TextInput type="password" name="password" placeholder="Enter password" text="lock" onBlur={handleChange} />
                         {state.error && <p className="error">{state.error}</p>}
                    </ Form>
               </div>
          </>
     );
}