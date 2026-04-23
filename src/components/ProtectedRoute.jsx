function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <p>Access denied. Please log in.</p>;
}

export default ProtectedRoute;