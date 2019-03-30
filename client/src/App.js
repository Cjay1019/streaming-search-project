import React from "react";
import OmdbContainer from "./components/OmdbContainer";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import "./mdb.css";
import "./App.css";

function App() {
  return (
    <div className="backgroundColor elegant-color ">
      <Navbar />
      <OmdbContainer />
      <Footer />
    </div>
  );
}
export default App;
