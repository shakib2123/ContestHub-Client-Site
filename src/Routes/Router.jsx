import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import AddContest from "../Dashboard/Pages/AddContest";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Dashboard/Pages/ContestDetails/ContestDetails";
import MyContest from "../Dashboard/Pages/MyContest/MyContest";
import UpdateContest from "../Dashboard/UpdateContest/UpdateContest";
import ContestSubmission from "../Dashboard/Pages/ContestSubmission.jsx/ContestSubmission";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allContest",
        element: <AllContest></AllContest>,
      },
      {
        path: "contestDetails/:id",
        element: <ContestDetails></ContestDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/contests/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },

  // dashboard routes
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addContest",
        element: <AddContest></AddContest>,
      },
      {
        path: "myContest",
        element: <MyContest></MyContest>,
      },
      {
        path: "updateContest/:id",
        element: <UpdateContest />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/contests/${params.id}`),
      },
      {
        path: "contestSubmission",
        element: <ContestSubmission></ContestSubmission>,
      },
    ],
  },
]);

export default Router;
