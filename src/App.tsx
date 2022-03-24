import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

function App() {
  return (
    <div className="min-h-full">
      <Navbar />
      <main>
        <div className="container flex justify-center py-6 mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":username/repositories" element={<Repositories />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
