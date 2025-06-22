import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen flex justify-center items-center h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <form
        className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded w-96"
        onSubmit={handleSignup}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
