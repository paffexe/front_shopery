import React from "react";
import Hero from "./Hero";
import Cars from "./Cars";

const Home = () => {
  return (
    <div className="container h-[200vh]">
       <Hero />
      <Cars/> 
    </div>
  );
};

export default Home;
