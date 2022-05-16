
import './App.css';
import AOS from 'aos';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Service from './Pages/Home/Service/Service';
import Checkout from './Pages/Checkout/Checkout';
import Ragistration from './Pages/Registration/Ragistration';
import Done from './Pages/Done/Done';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: "1000"
    });
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path='/services/:serviceID' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/done' element={<Done></Done>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/ragistration' element={<Ragistration></Ragistration>}></Route>
        <Route path='/rest-password' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
