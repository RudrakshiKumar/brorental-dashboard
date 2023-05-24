import React from "react";
import Navbar from "../layouts/Navbar.js";
import LeftSidebar from "../components/LeftSidebar.js";
import RightSidebar from "../components/RightSidebar.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <LeftSidebar/>
      <RightSidebar/>
 
     
      </div>
     
    </div>
  );
};

export default Home;
