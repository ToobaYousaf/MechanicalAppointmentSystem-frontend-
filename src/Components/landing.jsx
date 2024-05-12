import React from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import CardComponent from "./CardComponent";
import CardComponent1 from "./CardComponent1";
import Topbikes from "./Topbikes";
import Add from "./Add";
import Accessories from "./Accessories";
import Footer from "./Footer";
export default function Landing() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <CardComponent />
      <CardComponent1 />
      <Topbikes />
      <Add />
      <Accessories />
      <Footer />
    </div>
  );
}
