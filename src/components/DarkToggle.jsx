import { useState, useEffect } from "react";

function DarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkToggle;