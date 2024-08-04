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
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div>
      <Landingpage />
      <Section1 />
      <Section2 />

      <Ideathon />
      <div className="text-slate-500 text-center mb-5">P.S. This site is still under construction...</div>
    </div>
  );
};

export default App;
