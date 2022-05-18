import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Addproduct from './component/Addproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './component/Search';
import Viewproduct from './component/Viewproduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addproduct/>}/>
          <Route path='/search'exact element={<Search/>}/>
          <Route path='/viewpro'exact element={<Viewproduct/>}/>
        </Routes>                                                                                   
      </BrowserRouter>
    </>
  )
}

export default App;
