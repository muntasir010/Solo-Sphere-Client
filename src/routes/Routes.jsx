import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../pages/AddJobs";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJob from "../pages/MyPostedJob";
import MyBids from "../pages/MyBids";
import BidRequest from "../pages/BidRequest";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJobs /></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute><MyPostedJob /></PrivateRoute>
            },
            {
                path: '/my-bids',
                element: <PrivateRoute><MyBids /></PrivateRoute>
            },
            {
                path: '/bid-request',
                element: <PrivateRoute><BidRequest /></PrivateRoute>
            },
            {
                path: '/jobs',
                element: <AllJobs/>
            }
        ]
    }
])