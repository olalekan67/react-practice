
import './App.css';
import Navbar from './component/navbar/navbar';
// import ClassComponent from './component/class.component';
// import Body from './component/main/body';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import About from './component/about/about';
import Contact from './component/contact/contact-us';
import Home from './component/home/home';
import Product from './component/product/product';

function App() {
  return (
    <div className="App">
       <Router >
         <Navbar />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/product' element={<Product />} />
            {/* <Route path='/navbar' element={} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
              {/* <Navbar /> */}
              {/* <Body /> */}
              {/* <ClassComponent /> */}
        </Routes> 
        
      </Router>
    </div>
  );
}

export default App;
