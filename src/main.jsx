import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout'
import About from './pages/About'
import Product from './pages/Product'
import HomePage from './pages/HomePage/HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
