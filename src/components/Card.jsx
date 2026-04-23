function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}

export default Card;