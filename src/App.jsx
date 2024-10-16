import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Account from "./Pages/Account.jsx";
import Products from "./Pages/Products.jsx";
import Blogs from "./Pages/Blogs.jsx";
import SingleProducts from "./Pages/SingleProduct.jsx";

import AddProducts from "./Pages/Admin/AddProduct.jsx";
import MakeAdmin from "./Pages/Admin/MakeAdmin.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import ManageOrders from "./Pages/Admin/ManageOrders.jsx";
import ManageProducts from "./Pages/Admin/ManageProducts.jsx";
import MyOrders from "./Pages/Admin/MyOrders.jsx";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import NotFound from "./Pages/NotFound.jsx";

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
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
