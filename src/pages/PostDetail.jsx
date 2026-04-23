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

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;