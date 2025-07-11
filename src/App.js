import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/" />;
}

function Dashboard() {
  return <h2>Welcome to the Dashboard (Protected)</h2>;
}

function App() {
  return (
    <Router>
      <h1>GPT Auth Demo</h1>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
