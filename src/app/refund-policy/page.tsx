import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-sm mt-8 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Refund Policy
        </h1>
        <p className="mb-8 text-gray-600 text-base leading-relaxed text-center">
          At MCANSEY IT Services &amp; Consulting Pvt. Ltd., we strive to maintain transparency and client satisfaction. However, due to the nature of customized IT services, we follow a strict refund policy as outlined below:
        </p>
        <ol className="list-decimal list-inside space-y-6 text-gray-700">
          <li>
            <span className="font-semibold">Consultation Fees</span>
            <div className="ml-4 mt-1">
              Fees for initial consultations, requirement gathering, and strategy planning are non-refundable.
            </div>
          </li>
          <li>
            <span className="font-semibold">Project-Based Services</span>
            <ul className="list-disc ml-8 mt-2 space-y-1 text-gray-600 text-base">
              <li>
                Refunds may be considered only if no work has been started and no deliverables have been shared.
              </li>
              <li>
                Once the project has commenced, partial refunds may be reviewed at the discretion of MCANSEY, based on work completed and resources utilized.
              </li>
              <li>
                If the project is placed on hold by the client for any reason and later resumed, the scope and deliverables may change due to updated technology, availability, or revised business needs. In such cases, the previously paid advance amount will not be refundable.
              </li>
              <li>
                If design versions have been shared with the client, and the client does not approve the design, no refund will be issued. Design involves allocation of skilled resources and time, and the advance payment compensates for that effort regardless of final approval.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Monthly/Retainer Services</span>
            <div className="ml-4 mt-1">
              For recurring services (e.g., monthly retainers or staffing contracts), the client may cancel services with a 30-day written notice. Any unused portion of prepaid services may be refunded upon review and at MCANSEY’s discretion.
            </div>
          </li>
          <li>
            <span className="font-semibold">Refund Requests</span>
            <div className="ml-4 mt-1">
              All refund requests must be submitted in writing to <a href="mailto:info@mcansey.com" className="text-blue-600 underline">info@mcansey.com</a> and must include:
              <ul className="list-disc ml-8 mt-2 space-y-1 text-gray-600 text-base">
                <li>Project name and scope</li>
                <li>Reason for refund request</li>
                <li>Documentation of payments made</li>
              </ul>
              Refunds, if approved, will be processed within 45 business days via the original mode of payment.
            </div>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}