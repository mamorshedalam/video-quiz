import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/main.css';
import { AuthProvider } from './contexts/AuthContext';
import Main from './layouts/Main/Main';
import routes from './routes/Router';

export default function App() {

     return (
          <Router>
               <AuthProvider>
                    <Main>
                         <Routes>{routes.map((route, index) => (
                              <Route exact
                                   key={index}
                                   path={route.path}
                                   name={route.name}
                                   element={<route.element />} />
                         ))}</Routes>
                    </Main>
               </AuthProvider>
          </Router>
     )
}