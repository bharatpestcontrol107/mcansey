import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-sm mt-8 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Privacy Policy
        </h1>
        <p className="mb-8 text-gray-600 text-base leading-relaxed text-center">
          We value your privacy and are committed to protecting your personal and business information.
        </p>
        <ol className="list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <span className="font-semibold">Information We Collect</span>
            <ul className="list-disc ml-8 mt-2 space-y-1 text-gray-600 text-base">
              <li>Name, email, phone number, and company name</li>
              <li>Project requirements, feedback, and communication data</li>
              <li>Technical data (IP address, browser type, cookies, etc.)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">How We Use Your Information</span>
            <ul className="list-disc ml-8 mt-2 space-y-1 text-gray-600 text-base">
              <li>To provide and improve our services</li>
              <li>To communicate project progress and updates</li>
              <li>For internal analysis and client service improvement</li>
              <li>For legal and contractual obligations</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Data Sharing</span>
            <div className="ml-4 mt-1">
              We never sell or rent your data. We may share your data with trusted third-party service providers involved in delivering your project.
            </div>
          </li>
          <li>
            <span className="font-semibold">Data Security</span>
            <div className="ml-4 mt-1">
              We implement industry-standard measures to secure your data against unauthorized access, alteration, or disclosure.
            </div>
          </li>
          <li>
            <span className="font-semibold">Your Rights</span>
            <div className="ml-4 mt-1">
              You can request access, update, or deletion of your personal data by contacting us at <a href="mailto:info@mcansey.com" className="text-blue-600 underline">info@mcansey.com</a>.
            </div>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}