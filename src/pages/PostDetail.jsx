import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axiosInstance";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const res = await axios.get(`/posts/${id}`);
      setPost(res.data);
    }
    fetchPost();
  }, [id]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen px-6 py-10 
      bg-gray-50 dark:bg-gray-900">

      <div className="max-w-3xl mx-auto 
        bg-white dark:bg-gray-800 
        p-6 rounded-xl shadow">

        <img
          src={`https://picsum.photos/800/400?random=${post.id}`}
          className="rounded-lg mb-5"
        />

        <h2 className="text-2xl font-bold mb-3 
          dark:text-white">
          {post.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-300">
          {post.body}
        </p>

      </div>
    </div>
  );
}

export default PostDetail;