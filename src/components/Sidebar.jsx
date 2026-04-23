import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-lg mb-4">Menu</h2>

      <div className="flex flex-col gap-3">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Sidebar;