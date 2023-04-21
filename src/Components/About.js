import { useState } from "react";
import {Link, Outlet } from "react-router-dom";

const About = () => {
  const [link,setLink]=useState(false);
  return (
    <div>
      <h2>About Us Page</h2>
      <p>
        This is a Food Odering Application
      </p>
      {link ?<></> :<Link to="profile" onClick={()=> setLink(true)}><h2>Know more</h2></Link>}
      
      <Outlet/>
    </div>
  );
};

export default About;
