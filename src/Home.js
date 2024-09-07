import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Dummy user data for illustration
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
    groupGoals: [
      { id: 1, title: 'Vacation to Hawaii', progress: 60 },
      { id: 2, title: 'New Laptop Fund', progress: 25 }
    ],
    recentActivities: [
      { id: 1, text: 'Contributed $50 to Vacation to Hawaii' },
      { id: 2, text: 'Joined New Laptop Fund group' }
    ]
  };

  return (
    <div className="home min-h-screen bg-gray-100 text-center p-8">
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-semibold">Welcome to PoolTogether, {user.name}!</h2>
        <p className="mt-4 text-xl">Collaborate with friends and family to achieve your financial goals together.</p>
        <Link to="/app">
          <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100">
            Go to Dashboard
          </button>
        </Link>
      </section>

      {/* User Profile Section */}
      <section className="profile mt-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Your Profile</h2>
        <div className="profile-info mt-4 flex items-center justify-center">
          <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full shadow-lg" />
          <div className="ml-6 text-left">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <Link to="/edit-profile">
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Group Goals Section */}
      <section className="group-goals mt-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Your Group Goals</h2>
        <ul className="mt-4">
          {user.groupGoals.map(goal => (
            <li key={goal.id} className="mb-4">
              <h3 className="text-xl font-semibold">{goal.title}</h3>
              <div className="mt-2 bg-gray-200 h-4 rounded-full">
                <div
                  className="bg-blue-600 h-full rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-gray-600">{goal.progress}% completed</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Activities Section */}
      <section className="recent-activities mt-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Recent Activities</h2>
        <ul className="mt-4">
          {user.recentActivities.map(activity => (
            <li key={activity.id} className="mb-4">
              <p className="text-gray-600">{activity.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12 p-4 bg-blue-600 text-white">
        <p>&copy; 2024 PoolTogether. All rights reserved.</p>
        <p>
          Contact us at <a href="mailto:support@pooltogether.com" className="underline">support@pooltogether.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
