import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../api/axiosInstance";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [toast, setToast] = useState("");

  const location = useLocation();

  useEffect(() => {
    // ✅ show success message if coming from Create page
    if (location.state?.message) {
      setToast(location.state.message);

      setTimeout(() => setToast(""), 3000);
    }
  }, [location]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("/posts?_limit=5");
      setPosts(res.data);
      setCount(res.data.length);
    }

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-slate-100 dark:bg-slate-900">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 
          bg-green-600 text-white px-4 py-2 rounded shadow">
          {toast}
        </div>
      )}

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-6 
        text-gray-800 dark:text-white">
        Dashboard
      </h2>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white dark:bg-gray-800 
          p-6 rounded-xl shadow">
          <h3 className="text-gray-600 dark:text-gray-300 mb-2">
            Total Posts
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            {count}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 
          p-6 rounded-xl shadow">
          <h3 className="text-gray-600 dark:text-gray-300 mb-2">
            Status
          </h3>
          <p className="text-green-500 font-semibold">
            Active
          </p>
        </div>

      </div>

      {/* RECENT POSTS */}
      <div className="bg-white dark:bg-gray-800 
        p-6 rounded-xl shadow">

        <h3 className="text-lg font-bold mb-4 
          dark:text-white">
          Recent Posts
        </h3>

        <ul className="space-y-3">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-3 bg-gray-100 dark:bg-gray-700 
              rounded-lg text-gray-800 dark:text-white"
            >
              {post.title}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Dashboard;