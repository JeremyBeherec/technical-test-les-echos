import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Newsletters } from './components/pages/Newsletters';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** since there is no "home page" in this test, redirect the root path to the newsletters */}
        <Route path="/" element={<Navigate to="/newsletters" />} />
        <Route path="/newsletters" element={<Newsletters />} />
      </Routes>
    </BrowserRouter>
  );
}
