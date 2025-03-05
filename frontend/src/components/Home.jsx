<<<<<<< HEAD
import React from "react";

const Home = () => {
  return <div>Home</div>;
=======
import { useAuthStore } from "../store/authStore.js";

const Home = () => {
  const { user, isCheckingAuth, logout } = useAuthStore();

  if (isCheckingAuth) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">
          User not found. Please login again.
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          Welcome {user.name}
        </h5>
        <p className="text-slate-600 leading-normal font-light">{user.email}</p>

        <button
          className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
>>>>>>> d98c783 (pushing final code)
};

export default Home;
