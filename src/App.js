import { BrowserRouter , Routes , Route } from 'react-router-dom';

import './App.css';
import Home from './pages/HomePage/Home';
import Random from './pages/HomePage/randomDrinks';
import DrinksAll from './pages/DrinksAll';
import DrinksIng from './pages/DrinksIng';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/randomDrinks' element={<Random />}/>
      <Route path='/DrinksAll' element={<DrinksAll />} />
      <Route path='/DrinksIng' element={<DrinksIng />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
