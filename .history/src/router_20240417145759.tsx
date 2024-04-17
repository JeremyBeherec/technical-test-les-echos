import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Newsletter } from './components/pages/newsletter';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** since there is no "home page" in this test, redirect the root path to the newsletters */}
        <Route path="/" element={<Navigate to="/newsletters" />} />
        <Route path="/newsletters" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}
