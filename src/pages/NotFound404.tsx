import React from "react";

export const NotFound404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <p className="text-2xl mt-4 text-gray-800">Page not found!</p>
      <p className="text-lg mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => (window.location.href = "/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};
