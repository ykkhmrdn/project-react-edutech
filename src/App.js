import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Pastikan path ini sesuai dengan lokasi file Home.jsx yang baru

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tambahkan Route lainnya di sini */}
      </Routes>
    </Router>
  );
}

export default App;