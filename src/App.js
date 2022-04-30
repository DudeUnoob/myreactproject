

import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testin from './pages/Testin';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />}>
          <Route index element={<Navbar />} />
          
          <Route path="*" element={<NoPage />} />
        </Route>
      <Route path='/blogs' element={<Blogs />}> </Route>
      <Route path='/testin' element={<Testin />}></Route>
      
    </Routes>
  </BrowserRouter>
  )
 
}

export default App;
