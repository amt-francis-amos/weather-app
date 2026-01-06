import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
     <div className="flex flex-col min-h-screen">
       <main className="grow">
         <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
       </main>
     </div>
    </>
  );
};

export default App;
