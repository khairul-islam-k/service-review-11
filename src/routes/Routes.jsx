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
import Error from "../pages/error/Error";
import About from "../pages/About/About";
import DashBoard from "../pages/DashBoard/DashBoard";
import DashBoardHome from "../pages/DashBoard/DashBoardHome";
import Communication from "../pages/DashBoard/Communication";
import Tracking from "../pages/DashBoard/Tracking";
import MyProfile from "../pages/DashBoard/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://service-review-server-gules-seven.vercel.app/services?limit=8')
      },
      {
        path: 'services',
        Component: Services,
        loader: () => fetch('https://service-review-server-gules-seven.vercel.app/services')
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
        loader: ({params}) => fetch(`https://service-review-server-gules-seven.vercel.app/services/${params.id}`)
      },
      {
        path: 'myServices/:id',
        element: <PrivateRoute><ServiceUpdate></ServiceUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`https://service-review-server-gules-seven.vercel.app/services/${params.id}`)
      },
      {
        path: 'myReviews/:id',
        element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`https://service-review-server-gules-seven.vercel.app/reviews/reviewId/${params.id}`)
      },
      {
        path: 'aboutUs',
        Component: About
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
  },
  {
    path:'*',
    Component:Error
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        index: true,
        element: <DashBoardHome></DashBoardHome>
      },
      {
        path: 'tracking',
        element: <Tracking></Tracking>
      },
      {
        path: 'profile',
        element: <MyProfile></MyProfile>
      }
    ]
  },
  {
    path: 'communication',
    element: <Communication></Communication>
  }
]);