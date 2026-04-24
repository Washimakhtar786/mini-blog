import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(
        `/posts?_page=${page}&_limit=6`
      );
      setPosts(res.data);
    }

    fetchPosts();
  }, [page]);

  return (
    <div className="min-h-screen px-6 py-8 
      bg-zinc-100 dark:bg-gray-900 transition">

      {/* HEADING */}
      <h2 className="text-2xl font-bold mb-8 
        text-gray-800 dark:text-white">
        Latest Posts
      </h2>

      {/* POSTS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            to={`/posts/${post.id}`}
            key={post.id}
            className="bg-white dark:bg-gray-800 
              p-4 rounded-xl shadow 
              hover:shadow-xl hover:-translate-y-1 
              transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={`https://picsum.photos/400/250?random=${post.id}`}
              alt="post"
              className="rounded-lg mb-3 w-full h-40 object-cover"
            />

            {/* TITLE */}
            <h3 className="font-semibold mb-2 
              text-gray-800 dark:text-white">
              {post.title}
            </h3>

            {/* BODY */}
            <p className="text-sm 
              text-gray-600 dark:text-gray-300">
              {post.body.slice(0, 100)}...
            </p>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-10">

        <button
          className="bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-white 
            px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>

        <span className="font-medium 
          text-gray-700 dark:text-gray-300">
          Page {page}
        </span>

        <button
          className="bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-white 
            px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default Home;