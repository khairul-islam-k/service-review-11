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
        Component: AddService
      },
      {
        path: 'myServices',
        Component: MyServices
      },
      {
        path: 'myReviews',
        Component: MyReviews
      },
      {
        path:'service/:id',
        Component: ServiceDetails,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
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