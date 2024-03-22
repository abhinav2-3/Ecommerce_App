import React from "react";
import {
  About,
  Blog,
  Cart,
  Contact,
  Login,
  Registration,
  Home,
  Shop,
  Profile,
  ProductDetails,
  PrivateComponent,
  HomeLayout,
} from "./Components";

import "./Styles/Home.scss";
import "./Styles/Features.scss";
import "./Styles/Products.scss";
import "./Styles/SignUp.scss";
import "./Styles/Footer.scss";
import "./Styles/Header.scss";
import "./Styles/Shop.scss";
import "./Styles/Blog.scss";
import "./Styles/About.scss";
import "./Styles/Contact.scss";
import "./Styles/Cart.scss";
import "./Styles/Nextbtn.scss";
import "./Styles/Registration.scss";
import "./Styles/ProductDetails.scss";
import "./Styles/Profile.scss";
import "./Styles/Loading.scss";

// import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as contactAction } from "./Components/Contact";
import { action as loginAction } from "./Components/Login";
import { action as profileAction } from "./Components/Profile";
import { loader as cartLoader } from "./Components/Cart";
import { loader as HomeLayoutLoader } from "./Components/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    action: HomeLayoutLoader,

    children: [
      {
        index: true,
        element: <PrivateComponent Component={Home} />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        action: contactAction,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "cart",
        loader: cartLoader,
        element: <PrivateComponent Component={Cart} />,
      },
      {
        path: "profile",
        action: profileAction,
        element: <PrivateComponent Component={Profile} />,
      },
      {
        path: "ProductDetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => {
  const scrollOptions = {
    behavior: "auto",
    block: "start",
  };
  return <RouterProvider scroll={scrollOptions} router={router} />;
};

export default App;
