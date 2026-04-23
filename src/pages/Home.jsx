import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalPages = 10; // approx for JSONPlaceholder

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError("");

      try {
        const res = await axios.get(
          `/posts?_page=${page}&_limit=5`
        );
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load posts ❌");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [page]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      {/* Loading */}
      {loading && <Loader />}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Posts */}
      {!loading && !error && (
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <Card>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {post.body.slice(0, 80)}...
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination Numbers */}
      <div className="flex gap-2 mt-6 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded 
              ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700 dark:text-white"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="flex gap-4 mt-4">
        <button
          className="bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>

        <span className="font-medium dark:text-white">
          Page {page}
        </span>

        <button
          className="bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded"
          onClick={() => setPage((p) => p + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Home;