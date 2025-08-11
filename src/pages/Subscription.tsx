import React, { useState } from "react";
import { subscriptionPlans, Plan } from "../data/dummy";
import { useAuth } from "../context/AuthContext";

const Subscription = () => {
  const { user, subscribe } = useAuth();
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");

  const handleSubscribe = () => {
    if (selectedPlanId) {
      subscribe(selectedPlanId);
      alert("Subscription successful! You are now subscribed.");
      setSelectedPlanId(""); // reset selection after subscribing
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
        Subscription Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {subscriptionPlans.map((plan: Plan) => {
          const isSubscribed = user?.subscriptionPlanId === plan.id;
          const isSelected = selectedPlanId === plan.id;

          return (
            <div
              key={plan.id}
              className={`
                border rounded-2xl p-6 shadow-lg
                flex flex-col justify-between
                transition-transform transform hover:scale-105
                ${
                  isSubscribed
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 bg-white"
                }
              `}
            >
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{plan.name}</h2>
                <p className="text-3xl font-extrabold mb-4 text-gray-900">{plan.price}</p>
                <ul className="mb-6 list-disc list-inside space-y-1 text-gray-700">
                  {plan.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>

              {isSubscribed ? (
                <div className="text-center text-green-700 font-semibold text-lg">
                  ✓ Subscribed
                </div>
              ) : (
                <button
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`
                    w-full py-3 rounded-xl text-white font-semibold
                    ${
                      isSelected
                        ? "bg-blue-700 cursor-default"
                        : "bg-blue-600 hover:bg-blue-700"
                    }
                    transition-colors
                  `}
                  disabled={isSelected}
                >
                  {isSelected ? "Selected" : "Select Plan"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {selectedPlanId && user?.subscriptionPlanId !== selectedPlanId && (
        <section className="mt-12 max-w-lg mx-auto bg-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Payment Info (Dummy)
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-24 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Pay & Subscribe
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Subscription;
