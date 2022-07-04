import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/events' element={<Events />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
