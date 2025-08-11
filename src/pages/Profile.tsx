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
      <div className="max-w-md mx-auto mt-16 p-8 border rounded-lg shadow-md text-center text-gray-700">
        <p>No user data available.</p>
      </div>
    );
  }

  const plan = subscriptionPlans.find((p) => p.id === user?.subscriptionPlanId);
  const stats = statsByUserId[user.id] || [];
  const media = profileMedia[user.id] || { video: "", gallery: [] };

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 space-y-8">
      {/* Profile Header */}
      <section className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt={`${user.name} avatar`}
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 shadow-md"
        />

        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-500 uppercase tracking-wide">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <button
              onClick={logout}
              className="ml-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md shadow-sm transition-colors"
            >
              Logout
            </button>
          </div>

          {user.bio && (
            <p className="mt-2 text-gray-700 text-lg leading-relaxed max-w-xl">{user.bio}</p>
          )}
        </div>
      </section>

      {/* Subscription Status */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Subscription Status</h2>
          {plan ? (
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full shadow-sm select-none">
              Active
            </span>
          ) : (
            <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full shadow-sm select-none">
              Not Subscribed
            </span>
          )}
        </header>

        {plan ? (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-xl font-medium text-gray-700 mb-4">{plan.price}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">You currently have no active subscription plan.</p>
        )}
      </section>

      {/* Stats */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200 flex flex-col justify-center"
            >
              <p className="text-3xl font-extrabold text-blue-600">{stat.value}</p>
              <p className="mt-1 text-gray-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Video */}
      {media.video && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Highlight Video</h2>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow">
            <iframe
              src={media.video}
              title="Highlight Video"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      )}

      {/* Gallery */}
      {media.gallery.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Media Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {media.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Media ${idx + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-sm border border-gray-200"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
