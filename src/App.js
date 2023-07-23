import React from "react";
import Landingpage from "./components/Landingpage/Landingpage";
import './App.css'
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Fos from "./components/Projects/Fos";
import Trouver from "./components/Projects/Trouver";
import YourML from "./components/Projects/YourML";
import Hackathon from "./components/Hackathon/Hackathon";
import NFT from "./components/Hackathon/NFT";
import Ideathon from "./components/Hackathon/Ideathon";
import Interests from "./components/Interests";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div>
      <Landingpage />
      <Section1 />
      <Section2 />
      <Fos />
      <Trouver />
      <YourML />
      <Hackathon />
      <NFT />
      <Ideathon />
      <Contact />
    </div>
  );
};

export default App;
