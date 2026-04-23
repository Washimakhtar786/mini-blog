function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <p>Access Denied ❌</p>;
}

export default ProtectedRoute;