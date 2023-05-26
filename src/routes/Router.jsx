import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import AllToys from "../components/Pages/AllToys/AllToys";
import MyToys from "../components/Pages/MyToys/MyToys";
import AddToys from "../components/Pages/AddToys/AddToys";
import Blog from "../components/Pages/Blog/Blog";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import ToyDetails from "../components/shared/ToyDetails";
import Contact from "../components/Pages/Contact/Contact";

const router = createBrowserRouter([
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
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRouter>
            <MyToys></MyToys>
          </PrivateRouter>
        ),
      },
      {
        path: "addtoys",
        element: (
          <PrivateRouter>
            <AddToys></AddToys>
          </PrivateRouter>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRouter>
            <ToyDetails></ToyDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-nish4d.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
