import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
// import About from '../pages/About';
// import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
