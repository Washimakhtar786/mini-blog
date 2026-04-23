import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Layout wrapper (important for spacing + structure)
function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page container */}
      <div className="max-w-6xl mx-auto p-4">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Post detail */}
          <Route path="/posts/:id" element={<PostDetail />} />

          {/* Create */}
          <Route path="/create" element={<CreatePost />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;