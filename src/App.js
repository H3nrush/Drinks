import { BrowserRouter , Routes , Route } from 'react-router-dom';

import './App.css';
import Home from './pages/HomePage/Home';
import Random from './pages/HomePage/randomDrinks';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/randomDrinks' element={<Random />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
