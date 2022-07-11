import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import Admin from './Admin/Admin/Admin';
import AddEvent from './Admin/AddEvent/AddEvent';
import RegisterList from './Admin/RegisterList/RegisterList';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/events' element={<PrivateRoute><Events /></PrivateRoute>} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/adminLogin' element={<AdminLogin />} />
            <Route path='/addEvent' element={<AddEvent />} />
            <Route path='/registerList' element={<RegisterList />} />
            <Route path='/register' element={<PrivateRoute><Register /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
