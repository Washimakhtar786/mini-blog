import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await axios.get(`/posts?_page=${page}&_limit=5`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      {loading ? <Loader /> : (
        <>
          {posts.map((post) => (
            <div key={post.id} className="border p-3 mb-2 rounded">
              <Link to={`/posts/${post.id}`} className="text-blue-600">
                {post.title}
              </Link>
            </div>
          ))}
        </>
      )}

      <div className="mt-4 flex gap-2">
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>

        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;