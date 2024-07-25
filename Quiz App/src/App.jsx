import './App.css';
import { Routes, Route } from 'react-router-dom';
import Qs from './pages/Qs';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import "@fontsource/karla"; // Defaults to weight 400
import "@fontsource/karla/400.css"; // Specify weight
import "@fontsource/karla/400-italic.css"; // Specify weight and style
// import Layout from './pages/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path='/' element={<Home />}></Route>
          <Route path="Qs" element={<Qs />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}
