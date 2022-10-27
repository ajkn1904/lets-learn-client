import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Signup from './components/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/courses",
          loader: () => fetch('https://lets-learn-server.vercel.app/category/04'),
          element: <Courses></Courses>
        },
        {
          path: '/courseDetail/:id',
          loader: async ({params}) =>{
            return fetch(`https://lets-learn-server.vercel.app/course/${params.id}`)
        },
          element: <CourseDetail></CourseDetail>
      },
        {
          path: "/checkout/:id",
          loader: async ({params}) =>{
            return fetch(`https://lets-learn-server.vercel.app/course/${params.id}`)
        },
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        }
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
