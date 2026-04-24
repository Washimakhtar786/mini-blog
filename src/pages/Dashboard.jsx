import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import Card from "../components/Card";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("/posts?_limit=5");
      setPosts(res.data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;