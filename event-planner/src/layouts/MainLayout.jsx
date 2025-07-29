import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div>
    <header className="bg-gray-800 text-white p-4">My App</header>
    <main className="p-4">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
