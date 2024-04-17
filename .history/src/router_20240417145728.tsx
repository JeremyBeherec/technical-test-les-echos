import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Newsletter } from './components/pages/newsletter';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/newsletters" />} />
        <Route path="/newsletters" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}
