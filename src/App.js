import 'bootstrap/dist/css/bootstrap.min.css';
import PageFooter from './components/Footer';
import PageNavbar from "./components/Navbar";
import RegisterForm from './components/RegisterForm';
import { Routes , Route } from 'react-router-dom';
import HomePage from "./pages/home";
import Login from './components/Login';
import './app.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./redux";
import Donate from './pages/donate';
import PrivateRoutes from './utils';

const store = configureStore({
  reducer : {
    user : userReducer
  }
});

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <PageNavbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route element={<PrivateRoutes/>}>
          <Route path='/donate' element={<Donate/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>      
      </Provider>
      <PageFooter/>
    </div>
  );
}

export default App;
