import { BrowserRouter , Routes , Route } from 'react-router-dom';

import './App.css';
import Home from './pages/HomePage/Home';
import Random from './pages/HomePage/randomDrinks';
import DrinksAll from './pages/DrinksAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/randomDrinks' element={<Random />}/>
      <Route path='/DrinksAll' element={<DrinksAll />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
