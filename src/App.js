import logo from './logo.svg';
import './App.css';
import Mainpage from './component/Mainpage';
import Mealinfo from './component/Mealinfo';
import Food from "./components/Food";
import Recipe from './components/Recipe';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Food />} />
        <Route path='/:mealid' element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
