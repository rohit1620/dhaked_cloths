import { useState } from "react";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-13">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
