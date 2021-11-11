import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Products from "./Pages/Products";
import Blogs from "./Pages/Blogs";

import Reviews from "./Pages/Admin/Review";
import AddProducts from "./Pages/Admin/AddProduct";
import MakeAdmin from "./Pages/Admin/MakeAdmin";
import Dashboard from "./Pages/Admin/Dashboard";
import ManageOrders from "./Pages/Admin/ManageOrders";
import ManageProducts from "./Pages/Admin/ManageProducts";
import MyOrders from "./Pages/Admin/MyOrders";

import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/products">
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
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addproducts">
            <AddProducts></AddProducts>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageproducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
