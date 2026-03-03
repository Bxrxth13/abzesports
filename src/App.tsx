import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompetitiveEsports from './pages/CompetitiveEsports';
import Marketing from './pages/Marketing';
import TalentEducation from './pages/TalentEducation';
import EventBroadcast from './pages/EventBroadcast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competitive" element={<CompetitiveEsports />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/education" element={<TalentEducation />} />
        <Route path="/events" element={<EventBroadcast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
