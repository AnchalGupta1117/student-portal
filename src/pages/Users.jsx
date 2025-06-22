import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Failed to fetch users.</p>;

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {users.map((user) => (
        <div key={user.id} className="p-4 border shadow rounded hover:shadow-lg transition bg-white dark:bg-gray-700">
          <h2 className="font-bold">{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
}
