import React from "react";

function App() {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md">

          {/* Top Login Link */}
          <div className="text-right mb-6 text-sm">
            Already have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Log in
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Explore our funds today
          </h1>
          <p className="text-gray-500 mb-8">
            Create your free account and view our funds in just a few steps.
          </p>

          {/* First + Last Name */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country Dropdown */}
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
          </select>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Checkbox */}
          <div className="flex items-start gap-2 mb-6 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I have read and agree to the{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Privacy Policy
              </span>.
            </p>
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
            Sign Up
          </button>

          {/* Referral */}
          <p className="text-sm text-gray-500 mt-6 cursor-pointer hover:underline">
            Have a referral code?
          </p>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center p-10">
        <div className="max-w-lg">

          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Portfolio"
            className="rounded-2xl shadow-xl mb-8"
          />

          <h2 className="text-2xl font-semibold mb-4">
            Consistently Performing Portfolios
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Professional fund management</li>
            <li>✔ Long-term investment strategy</li>
            <li>✔ Trusted by thousands of investors</li>
          </ul>

        </div>
      </div>

    </div>
  );
}

export default App;
