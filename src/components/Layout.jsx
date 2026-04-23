import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex dark:bg-gray-900 dark:text-white">
      
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;