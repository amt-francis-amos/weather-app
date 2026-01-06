import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
     <div>
       <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
     </div>
    </>
  );
};

export default App;
