import { Link } from "react-router-dom";
import DarkToggle from "./DarkToggle";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <DarkToggle />
    </nav>
  );
}

export default Navbar;