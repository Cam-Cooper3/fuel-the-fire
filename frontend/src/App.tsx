// frontend/src/App.tsx
// Only allow access to account if user is logged in

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import SharedLayout from './components/SharedLayout';
import AccountPage from './components/AccountPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          
          {/* Protected Route for the Account Page */}
          <Route element={<ProtectedRoute />}>
            <Route path="account" element={<AccountPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;