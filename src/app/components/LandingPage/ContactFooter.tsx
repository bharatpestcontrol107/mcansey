import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { Hanken_Grotesk } from 'next/font/google'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'

const pop = Hanken_Grotesk({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
const pops = Hanken_Grotesk({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function ContactFooter() {
  return (
    <main className="relative  w-full bg-white">
       
      <section className="relative z-10 mx-auto max-w-7xl px-4  pt-16 sm:px-6 lg:px-8 ">
      
        <div className="relative overflow-hidden rounded-xl bg-white shadow-xl border">
          <div className="grid lg:grid-cols-10">
            {/* Left Column */}
            <div className="bg-[#0B314E] px-6 py-10 sm:px-10 lg:col-span-3">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                <h2 className={`text-2xl font-bold tracking-normal text-white sm:text-3xl `} style={{ fontFamily: "Clash Grotesk", fontWeight: "600" }}>
                    Get in Touch with Us
                  </h2>
                  <p className={`text-sm text-gray-300 tracking-wider`} style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
                    We&apos;d Love to Hear About Your Next Project
                  </p>
                </div>

                <div className={`mt-8 space-y-6`} style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 flex-shrink-0 text-gray-300" />
                    <span className="text-sm text-gray-300"> <a href="tel:+919323170652">+91 9323170652</a></span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 flex-shrink-0 text-gray-300" />
                    <span className="text-sm text-gray-300">info@mcansey.in</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 flex-shrink-0 text-gray-300" />
                    <span className="text-sm tracking-wider text-gray-300">
                    5th floor, Technopolis Knowledge Park, Mahakali Caves Rd, Chakala, <br />
                     Hanuman Nagar, Andheri East, Mumbai, Maharashtra 400093
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 flex-shrink-0 text-gray-300" />
                    <span className="text-sm tracking-wider text-gray-300">
                    Ground Floor, Club Patio, Block E, 
                    
                      <br />
                      South City I,  Sector 41, Gurugram, Haryana 122022
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                <Link
                    href="https://www.linkedin.com/company/mcansey-it-services/"
                    className="rounded-full bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                    <Link
                    href="https://www.facebook.com/mcanseycompany/"
                    className="rounded-full bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                    >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookF className="h-5 w-5" />
                    </Link>
                  <Link
                    href="https://www.instagram.com/mcansey_company/"
                    className="rounded-full bg-gray-300 p-2 text-white hover:bg-gray-400"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                 
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

