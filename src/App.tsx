import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import VoterLogin from './pages/VoterLogin';
import VoterRegistration from './pages/VoterRegistration';
import AdminLogin from './pages/AdminLogin';
import Voting from './pages/Voting';
import Results from './pages/Results';
import VoterDashboard from './pages/VoterDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ConductElections from './pages/ConductElections';
import AddAdmin from './pages/AddAdmin';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router basename={import.meta.env.MODE === 'production' ? '/sathishdusharla.github.io' : '/'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="voter-login" element={<VoterLogin />} />
          <Route path="voter-registration" element={<VoterRegistration />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="voting" element={<Voting />} />
          <Route path="results" element={<Results />} />
          <Route path="voter_dashboard" element={<VoterDashboard />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="admin/conduct-elections" element={<ConductElections />} />
          <Route path="admin/add-admin" element={<AddAdmin />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;