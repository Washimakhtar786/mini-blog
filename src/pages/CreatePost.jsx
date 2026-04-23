import { useState } from "react";
import axios from "../api/axiosInstance";
import Button from "../components/Button";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/posts", { title, body });
    alert("Post Created ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
<input
  className="border p-2 w-full mb-3 
  bg-white text-black 
  dark:bg-gray-800 dark:text-white dark:border-gray-600"
  placeholder="Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<textarea
  className="border p-2 w-full mb-3 
  bg-white text-black 
  dark:bg-gray-800 dark:text-white dark:border-gray-600"
  placeholder="Body"
  value={body}
  onChange={(e) => setBody(e.target.value)}
/>

      <Button>Submit</Button>
    </form>
  );
}

export default CreatePost;