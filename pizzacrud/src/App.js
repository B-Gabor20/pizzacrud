import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import  {PizzaList} from "./PizzaList.js";
import { PizzaSingleElement } from "./PizzaSingleElement.js";
import  {PizzaCreate} from "./PizzaCreate.js";
import { PizzaMod } from "./PizzaMod.js";
import { PizzaDelete } from "./PizzaDelete.js";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                <span className="nav-link">Pizza</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-pizza`} className="nav-link">
                <span className="nav-link">Új Pizza</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<PizzaList/>}/>
        <Route path="/pizza/:pizzaId" element={<PizzaSingleElement/>}/>
        <Route path="/uj-pizza" element={<PizzaCreate/>}/>
        <Route path="/mod-pizza/:pizzaId" element={ <PizzaMod /> } />
        <Route path="/delete-pizza/:pizzaId" element={ <PizzaDelete /> } />
      </Routes>
    </Router>
  );
}

export default App;
