import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 
      bg-white/80 backdrop-blur-md 
      shadow-sm px-10 py-4 flex justify-between items-center">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-blue-600">
        MiniBlog
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">

        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/create" className="hover:text-blue-600">Create</Link>

        {token && (
          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        )}

        {token ? (
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;