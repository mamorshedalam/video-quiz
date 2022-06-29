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
          type: "public",
          element: Login
     },
     {
          path: "/quiz/:id",
          name: "Quiz page",
          type: "private",
          element: Quiz
     },
     {
          path: "/result/:id",
          name: "Result page",
          type: "private",
          element: Result
     },
     {
          path: "/signup",
          name: "Signup page",
          type: "public",
          element: Signup
     },
     {
          path: "*",
          name: "Not Found page",
          element: NotFound
     }
]

export default routes;