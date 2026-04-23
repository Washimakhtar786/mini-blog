import { useState } from "react";
import axios from "../api/axiosInstance";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState("");

  // ✅ THIS WAS MISSING
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setMsg("All fields required ❗");
      return;
    }

    try {
      await axios.post("/posts", { title, body });

      setMsg("Post created successfully ✅");
      setTitle("");
      setBody("");
    } catch (err) {
      console.error(err);
      setMsg("Error creating post ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Create Post</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>

      <p>{msg}</p>
    </form>
  );
}

export default CreatePost;