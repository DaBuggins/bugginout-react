import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Login from "./routes/userRoutes/login";
import Register from "./routes/userRoutes/register";
import NewBug from "../src/routes/bugRoutes/newBug";
import Bugs from "../src/routes/bugRoutes/bugs";
import ShowBug from "../src/routes/bugRoutes/showBug";
import Users from "../src/routes/userRoutes/users";
import EditBug from "./routes/bugRoutes/editBug";
import ShowUser from "./routes/userRoutes/showUser";
import EditUser from "./routes/userRoutes/editUser";
import Navbar from "./navbar";
import Home from "./routes/home";
import Footer from "./footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/bugs" element={<Bugs />}>
          <Route path="new" element={<NewBug />} />
          <Route path="edit" element={<EditBug />} />
          <Route path=":id" element={<ShowBug />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path="new" element={<Register />} />
          <Route path="edit" element={<EditUser />} />
          <Route path=":id" element={<ShowUser />} />
        </Route>
      </Route>
    </>
  )
);

export default function App() {
  return (
    <div className="App">
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
}
