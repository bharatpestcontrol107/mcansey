import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-sm mt-8 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Terms &amp; Conditions
        </h1>
        <p className="mb-8 text-gray-600 text-base leading-relaxed">
          Welcome to MCANSEY IT Services &amp; Consulting Pvt. Ltd. (“Company,” “we,” “our,” or “us”). By accessing or using our website and services, you agree to be bound by the following terms and conditions:
        </p>
        <ol className="list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <span className="font-semibold">Services</span>
            <div className="ml-4 mt-1">
              We provide IT outsourcing, software development, and IT staffing services as per the agreement made with each client. Project scope, timelines, and deliverables will be defined in official proposals or contracts.
            </div>
          </li>
          <li>
            <span className="font-semibold">User Responsibilities</span>
            <div className="ml-4 mt-1">
              You agree not to misuse our services or use them for any illegal or unauthorized purpose. You must provide accurate business requirements and cooperate throughout the project lifecycle.
            </div>
          </li>
          <li>
            <span className="font-semibold">Intellectual Property</span>
            <div className="ml-4 mt-1">
              All content, software, and solutions provided by MCANSEY remain our intellectual property unless explicitly transferred to the client in writing.
            </div>
          </li>
          <li>
            <span className="font-semibold">Payment Terms</span>
            <div className="ml-4 mt-1">
              All payments are to be made as per the schedule defined in the project agreement or invoice. Late payments may incur penalties or service suspension.
            </div>
          </li>
          <li>
            <span className="font-semibold">Termination</span>
            <div className="ml-4 mt-1">
              We reserve the right to suspend or terminate services if terms are violated, including non-payment or misuse of delivered products.
            </div>
          </li>
          <li>
            <span className="font-semibold">Liability</span>
            <div className="ml-4 mt-1">
              We are not liable for any indirect or consequential losses incurred due to use of our services. Our total liability is limited to the amount paid for the specific service.
            </div>
          </li>
          <li>
            <span className="font-semibold">Governing Law</span>
            <div className="ml-4 mt-1">
              These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of Mumbai courts.
            </div>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}