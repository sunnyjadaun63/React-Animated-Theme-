
import './assets/css/App.css';
import Services from './layout/Services';
import AboutUs from './layout/AboutUs';
import DashBoard from './layout/DashBoard';
import {Route,Routes} from 'react-router-dom'
import ContactUs from './layout/ContactUs';

import Portfolio from './layout/Portfolio';
import Blog from './layout/Blog';
import Gallery from './layout/Gallery';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/gallery' element={<Gallery/>} ></Route>
      </Routes>
    
    </>
  );
}

export default App;
