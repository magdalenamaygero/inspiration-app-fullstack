import { Routes, Route } from 'react-router-dom';
import SavedQuotes from './pages/SavedQuotes';
import DisplayQuotes from './pages/DisplayQuotes';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<DisplayQuotes />} />
      <Route path="/savedQuotes" element={<SavedQuotes />} />
    </Routes>
  );
}

export default App;
