
// import './App.css';
import Register from "./components/register/register";
import Login from "./components/login/Login"
import Landing from "./components/landing/Landing";
import Recommend from "./components/recommend/Recommend";
import TravelBudgetCalculator from "./components/budget/Budget";
import Map_main from "./components/map/Map_main"


import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/recommend" element={<Recommend/>}/>
            <Route path="/budget" element={<TravelBudgetCalculator/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path ="/map" element={<Map_main/>}/>
          </Routes>
        </Router>
       
     
      
    </>
  );
}

export default App;
