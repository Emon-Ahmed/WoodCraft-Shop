import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Products from "./Pages/Products";
import Blogs from "./Pages/Blogs";
import SingleProducts from "./Pages/SingleProduct";

import Reviews from "./Pages/Admin/Review";
import AddProducts from "./Pages/Admin/AddProduct";
import MakeAdmin from "./Pages/Admin/MakeAdmin";
import Dashboard from "./Pages/Admin/Dashboard";
import ManageOrders from "./Pages/Admin/ManageOrders";
import ManageProducts from "./Pages/Admin/ManageProducts";
import MyOrders from "./Pages/Admin/MyOrders";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/account">
              <Account></Account>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/products/:id">
              <SingleProducts></SingleProducts>
            </PrivateRoute>
            <PrivateRoute path="/addproducts">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageproducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path="/reviews">
              <Reviews></Reviews>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
