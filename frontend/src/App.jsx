import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Protected Wrapper
import ProtectedRoute from './components/auth/ProtectedRoute';

// Tourist Pages
import TouristDashboard from './pages/tourist/TouristDashboard';
import TouristMapPage from './pages/TouristMapPage'; 
import EmergencyPage from './pages/tourist/EmergencyPage';
import AIChatPage from './pages/tourist/AIChatPage';
import TouristProfilePage from './pages/tourist/TouristProfilePage';

// Authority Pages
import AuthorityDashboard from './pages/authority/AuthorityDashboard';

// Dummy Demo Page for public SOS
const DummySOS = () => <div className="p-10 text-xl font-bold">SOS Landing Demo</div>;

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes (Handled by MainLayout: Navbar + Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/sos-demo" element={<DummySOS />} />
          </Route>

          {/* Protected Routes (Handled by DashboardLayout: Sidebar/Topbar) */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              
              {/* --- TOURIST ROUTES --- */}
              <Route path="/dashboard" element={<TouristDashboard />} />
              <Route path="/dashboard/map" element={<TouristMapPage />} />
              <Route path="/dashboard/emergency" element={<EmergencyPage />} />
              <Route path="/dashboard/ai-chat" element={<AIChatPage />} />
              <Route path="/dashboard/profile" element={<TouristProfilePage />} />
              
              {/* --- AUTHORITY ROUTES --- */}
              <Route path="/authority/dashboard" element={<AuthorityDashboard />} />

            </Route>
          </Route>
          
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;