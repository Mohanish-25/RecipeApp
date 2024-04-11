import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home';
import { SavedRecipe } from './pages/saved-recipe';
import { Auth } from './pages/auth';
import { CreateRecipe } from './pages/create-recipe';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Auth" element = {<Auth />} />
          <Route path = "/CreateRecipe" element = {<CreateRecipe />} />
          <Route path = "/SavedRecipe" element = {<SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
