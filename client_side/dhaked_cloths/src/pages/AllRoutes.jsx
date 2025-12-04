import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Men from "./Men";
import Women from "./Women";
import SingUp from "./SingUp";
import Cart from "../components/Cart";
import Singlepage from "../components/Singlepage";
import PrivateRoute from "../components/PrivateRoute";
import PageNotFound from "../components/PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/men" element={<Men />}></Route>
      <Route path="/women" element={<Women />}></Route>
      <Route path="/singup" element={<SingUp />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/singlepage" element={<Singlepage />}></Route>
      <Route path="/404" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
