import React from "react";
import ReactDOM from "react-dom/client";

//Default import
import Header from "./components/Header"

//Named import
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

//single line comment
/*
        header
            logo
            nav items
            cart
        body 
            search bar
            restaurant list
                restaurant card
                    image
                    name
                    rating
                    cusines

        footer
            links
            copyright
        */
