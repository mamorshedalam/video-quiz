import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Signup from '../pages/Signup';

const routes = [
     {
          path: "/",
          name: "Home page",
          element: Home
     },
     {
          path: "/login",
          name: "Login page",
          element: Login
     },
     {
          path: "/quiz",
          name: "Quiz page",
          element: Quiz
     },
     {
          path: "/result",
          name: "Result page",
          element: Result
     },
     {
          path: "/signup",
          name: "Signup page",
          element: Signup
     },
     {
          path: "*",
          name: "Not Found page",
          element: NotFound
     }
]

export default routes;