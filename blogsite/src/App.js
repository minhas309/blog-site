import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBlog from './pages/temp';
import TraPage from './pages/travellingpage'
import ResponsiveAppBar from './components/topbar';
function App() {
  return (
        <BrowserRouter>
        <ResponsiveAppBar/>
          <Routes>
          <Route path="/" element={<CreateBlog />} /> 
          <Route path="/travelling" element={<TraPage />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
