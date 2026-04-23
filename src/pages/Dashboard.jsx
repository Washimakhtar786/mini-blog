import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("/posts");
      setCount(res.data.length);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Posts: {count}</p>
    </div>
  );
}

export default Dashboard;