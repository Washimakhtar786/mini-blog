import { useState } from "react";
import axios from "../api/axiosInstance";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!title.trim() || !body.trim()) {
      setError("All fields are required ❗");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await axios.post("/posts", { title, body });

      setTitle("");
      setBody("");

      // ✅ Toast success
      // ✅ Alert + Toast both
    alert("Post created successfully ✅");

    setToast("Post created successfully ✅");
    setTimeout(() => setToast(""), 3000);

    } catch (err) {
      setError("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-black px-4">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 
          bg-green-600 text-white px-4 py-2 rounded shadow">
          {toast}
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg 
        bg-gray-900 border border-gray-800 
        p-8 rounded-2xl shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Create New Post
        </h2>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 mb-4 text-center">{error}</p>
        )}

        {/* TITLE */}
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg 
            bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* BODY */}
        <textarea
          rows="5"
          placeholder="Write your content..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg 
            bg-gray-800 text-white border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white 
            py-3 rounded-lg font-medium 
            hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Publish Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;