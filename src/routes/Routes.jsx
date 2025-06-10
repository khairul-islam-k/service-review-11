import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";
import MyServices from "../pages/MyServices/MyServices";
import MyReviews from "../pages/MyReview/MyReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'services',
        Component: Services
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
      }
    ]
  },
]);