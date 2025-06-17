import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";
import MyServices from "../pages/MyServices/MyServices";
import MyReviews from "../pages/MyReview/MyReviews";
import AuthLayOut from "../LayOut/AuthLayOut";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ServiceDetails from "../pages/shared/ServiceDetails";
import PrivateRoute from "../pages/auth/PrivateRoute";
import ServiceUpdate from "../pages/MyServices/ServiceUpdate";
import ReviewUpdate from "../pages/MyReview/ReviewUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/services?limit=6')
      },
      {
        path: 'services',
        Component: Services,
        loader: () => fetch('http://localhost:3000/services')
      },
      {
        path:'addService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: 'myServices',
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: 'myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path:'service/:id',
        Component: ServiceDetails,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: 'myServices/:id',
        element: <PrivateRoute><ServiceUpdate></ServiceUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: 'myReviews/:id',
        element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/reviews/reviewId/${params.id}`)
      }
    ]
  },
  {
    path: 'auth',
    Component: AuthLayOut,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);