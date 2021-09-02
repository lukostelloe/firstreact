import React from "react";
import "./homepage.css";
import img1 from "../../images/dogman.jpg";

const HomePage = () => {
  return (
    <div className="main">
      Luke Costelloe's website
      <img src={img1} />
    </div>
  );
};

export default HomePage;
