import { useEffect, useState } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  // DELETE
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this post?");
    if (!confirmDelete) return;

    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  // START EDIT
  const handleEdit = (post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  // SAVE EDIT
  const handleSave = (id) => {
    const updated = posts.map((p) =>
      p.id === id
        ? { ...p, title: editTitle, body: editBody }
        : p
    );

    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));

    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  };

  return (
    <div className="min-h-screen px-6 py-8 
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <p className="text-gray-400">Total Posts</p>
          <h2 className="text-2xl font-bold mt-2">
            {posts.length}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <p className="text-gray-400">Status</p>
          <h2 className="text-2xl font-bold mt-2 text-green-400">
            Active
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <p className="text-gray-400">Last Update</p>
          <h2 className="text-2xl font-bold mt-2">
            Today
          </h2>
        </div>

      </div>

      {/* POSTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.length === 0 && (
          <p className="text-gray-400">No posts yet</p>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/5 border border-white/10 p-5 rounded-xl"
          >
            {editingId === post.id ? (
              <>
                {/* EDIT INPUT */}
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
                />

                <textarea
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                  className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
                />

                <div className="flex gap-3">
                  <button
                    onClick={() => handleSave(post.id)}
                    className="bg-green-600 px-3 py-1 rounded"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2">
                  {post.title}
                </h3>

                {/* BODY */}
                <p className="text-gray-400 text-sm mb-4">
                  {post.body}
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-yellow-400 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;