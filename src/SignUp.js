import React from 'react';

function SignUp() {
  return (
    <div className="sign-up min-h-screen bg-gray-100 text-center p-8">
      <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-left mb-2">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
