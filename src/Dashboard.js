import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Dummy data for illustration
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/100',
    activeGoals: [
      { id: 1, title: 'Vacation to Hawaii', progress: 60 },
      { id: 2, title: 'New Laptop Fund', progress: 25 }
    ],
    recentContributions: [
      { id: 1, text: 'Contributed $50 to Vacation to Hawaii' },
      { id: 2, text: 'Joined New Laptop Fund group' }
    ],
    upcomingEvents: [
      { id: 1, date: '2024-09-15', event: 'Group Meeting' },
      { id: 2, date: '2024-10-01', event: 'Deadline for New Laptop Fund Contributions' }
    ]
  };

  return (
    <div className="dashboard min-h-screen bg-gray-100 p-8">
      <div className="header flex items-center justify-between mb-8">
        <div className="profile flex items-center">
          <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full shadow-lg" />
          <div className="ml-4">
            <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-gray-600">Here’s what’s happening with your goals and contributions.</p>
          </div>
        </div>
        <Link to="/edit-profile">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </Link>
      </div>

      <div className="main-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Active Goals */}
        <section className="active-goals bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Active Goals</h2>
          <ul>
            {user.activeGoals.map(goal => (
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

        {/* Recent Contributions */}
        <section className="recent-contributions bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Contributions</h2>
          <ul>
            {user.recentContributions.map(contribution => (
              <li key={contribution.id} className="mb-4">
                <p className="text-gray-600">{contribution.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Upcoming Events */}
        <section className="upcoming-events bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <ul>
            {user.upcomingEvents.map(event => (
              <li key={event.id} className="mb-4">
                <p className="text-gray-600">
                  {event.date}: {event.event}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="mt-12 p-4 bg-blue-600 text-white text-center">
        <p>&copy; 2024 PoolTogether. All rights reserved.</p>
        <p>
          Contact us at <a href="mailto:support@pooltogether.com" className="underline">support@pooltogether.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
