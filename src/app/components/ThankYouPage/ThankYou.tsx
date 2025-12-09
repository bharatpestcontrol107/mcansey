'use client';
import React, { useEffect } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
const ThankYou = ({ userName = "" }) => {

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16643037203/ktGaCIzEtfwZEJOwgoA-',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-8 animate-bounce">
          <FaCheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Thank You{userName ? `, ${userName}` : ""} for Contact Us!
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What Happens Next?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We appreciate your input and our team will review your submission carefully. You can expect to hear back from us within 24-48 hours.
          </p>
          <div className="space-y-4 text-left">
            {[
              "Our team will review your submission",
              "You'll receive a confirmation email shortly",
              "We'll process your request with priority"
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.location.href = "/"}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            aria-label="Return to homepage"
          >
            Back to Homepage
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
