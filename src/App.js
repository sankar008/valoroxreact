import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Snackbar from "@material-ui/core/Snackbar";
import "./App.css";
import Scroll from "./component/scroll";
import Header from "./container/header/header";
import HomePage from "./container/homepage/homepage";
import CTA from "./container/CTA/cta";
import Footer from "./container/footer/footer";
import ProductPage from "./container/productPage";
import Cart from "./container/cartPage";
import MultiProduct from "./container/multiProduct/mutliProduct";
import Profile from "./container/profile";
import SignUp from "./container/login/register";
import ForgotPassword from "./container/login/forgotPassword";
import ResetPassword from "./container/login/resetPassword";
import SignIn from "./container/login/login";
import ContactUs from "./container/contactUs/contactUs";
import Wishlist from "./component/wishlist/wishlist";
import AboutUs from "./container/about/aboutUs";
import AboutYou from "./container/about/aboutYou";
import * as API from "./api/api";

const isAuth = localStorage.getItem("isAuth") === "true";
function App() {
  const initialCategories = [""];
  const [categories, setCategories] = useState(initialCategories);
  useEffect(() => {
    CategoryAPI();
  }, []);

  const CategoryAPI = async () => {
    try {
      const response = await API.category();
      const cat = [];
      for (let index = 0; index < 6; index++) {
        const element = response.data[index];
        cat.push(element);
      }
      setCategories(response ? cat : "");
    } catch (error) {
      console.log(error);
    }
  };

  //TOASTER
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const showToaster = () => {
    setState({ open: true, vertical: "top", horizontal: "right" });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);
  };

  return (
    <CartProvider onItemAdd={showToaster}>
      <Router>
        <Scroll showBelow={250} />
        <Header categories={categories} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:slug" component={MultiProduct} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/about-you" component={AboutYou} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/forgot-password" component={ResetPassword} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route
            exact
            path="/login"
            render={() => {
              return isAuth ? (
                <Redirect to="/profile" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
        </Switch>
        <CTA />
        <Footer />
      </Router>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() =>
          setTimeout(() => {
            setState({ ...state, open: false });
          }, 200)
        }
        message="Product added to your cart!!"
        key={vertical + horizontal}
        className="bg-red-200"
      />
    </CartProvider>
  );
}

export default App;
