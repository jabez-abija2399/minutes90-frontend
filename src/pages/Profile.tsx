import React from "react";
import { useAuth } from "../context/AuthContext";
import { profileMedia, subscriptionPlans } from "../data/dummy";

// Dummy stats mapped by user ID
const statsByUserId = {
  1: [
    { label: "Matches Played", value: 100 },
    { label: "Goals", value: 50 },
    { label: "Assists", value: 40 },
  ],
  2: [
    { label: "Trophies Won", value: 30 },
    { label: "Players Signed", value: 15 },
    { label: "Matches Hosted", value: 500 },
  ],
  3: [
    { label: "Players Represented", value: 20 },
    { label: "Deals Closed", value: 50 },
    { label: "Countries Worked In", value: 5 },
  ],
  4: [
    { label: "Players Scouted", value: 200 },
    { label: "Matches Watched", value: 1000 },
    { label: "Recommendations", value: 300 },
  ],
  5: [
    { label: "Users Verified", value: 150 },
    { label: "Reports Resolved", value: 70 },
    { label: "Platform Checks", value: 300 },
  ],
};

export const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <p>No user data available.</p>
      </div>
    );
  }

  const plan = subscriptionPlans.find(
    (p) => p.id === user?.subscriptionPlanId
  );

  const stats = statsByUserId[user.id] || [];
  const media = profileMedia[user.id] || { video: "", gallery: [] };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Picture */}
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
        />

        {/* User Info */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-gray-600">Role: {user.role}</p>
              <p className="text-gray-600">Email: {user.email}</p>
            </div>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
          {user.bio && <p className="mt-4 text-gray-700">{user.bio}</p>}
        </div>
      </div>

      {/* Subscription Status */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
          Subscription Status
          {plan ? (
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
              Active
            </span>
          ) : (
            <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
              Not Subscribed
            </span>
          )}
        </h3>

        {plan ? (
          <div>
            <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
            <p className="text-lg text-gray-700 mb-4">{plan.price}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-700">You currently have no active subscription plan.</p>
        )}
      </div>

      {/* Stats */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight Video */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Highlight Video</h3>
        <iframe
          src={media.video}
          title="Highlight Video"
          allowFullScreen
          className="w-full h-64 rounded"
        ></iframe>
      </div>

      {/* Gallery */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Media Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {media.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Media ${idx + 1}`}
              className="w-full h-40 object-cover rounded shadow-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
