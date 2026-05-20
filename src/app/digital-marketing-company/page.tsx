import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormSection from "../components/Home/FormSection";
import Office from "../components/Home/Office";
import AllHome from "../components/common/AllHome";
import Homedd from "../components/Header";

export const metadata: Metadata = {

    title: "MCANSEY: Best Digital Marketing Agency & Services Company",
    description: "Mcansey is the best digital marketing company & agency offering professional digital marketing services with proven results. Contact us today.",
    keywords: "digital marketing services, digital marketing service company, digital marketing company, digital marketing agency, top digital marketing company, best digital marketing company, best digital marketing services, best digital marketing agency, marketing agency near me, digital marketing near me, digital marketing strategy, marketing agency for small business, digital marketing consultant, performance marketing agencies",
    alternates: {
      canonical: 'https://mcansey.com/digital-marketing-company',
      languages: {
        'en-IN': 'https://mcansey.com/digital-marketing-company',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://mcansey.com/digital-marketing-company',
      siteName: 'mcansey',
      images: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg',
    },
    icons: [
      { rel: "icon", url: "https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg" },
      { rel: "apple-touch-icon", url: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg' }
    ],
    other: {
      'geo.country': 'India',
      'geo.state': 'Maharashtra',
      'geo.placename': 'Mcansey',
      'geo.position': '19.286494085066657, 72.88160862883541',
      'geo.region': 'Mumbai',
      'google-site-verification': '3oCiYOOuCAKrcnIig2rwlsdhlcHG0-inkEO_qMd1PPo',
    },
};

export default function DigitalMarketingCompany() {
  return (
    <>
      <Navbar />
      <AllHome
        title={"Amplify Your Brand’s Reach with Proven Digital Strategies."}
        subtitle={"Unlock the Full Potential of Your Brand with Our Digital Marketing Services"}
        videoSrc={'/DigitalMarketing/mcansey-digital-marketing-2.mp4'}
      />

      <Homedd />

      {/* Key numbers in gradient framed box */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">MCANSEY</h2>
              <p className="text-gray-600">The ROI-Driven Digital Marketing Agency in Mumbai</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 via-purple-200/20 to-pink-200/10 p-1 rounded-3xl">
              <div className="bg-white rounded-3xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-white/80 to-white/60">
                  <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">15+</div>
                  <div className="mt-2 text-sm text-gray-600">Years of Experience</div>
                </div>
                <div className="p-6 rounded-xl text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-white/80 to-white/60">
                  <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">15M+</div>
                  <div className="mt-2 text-sm text-gray-600">Leads Generated</div>
                </div>
                <div className="p-6 rounded-xl text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-white/80 to-white/60">
                  <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">1.8K+</div>
                  <div className="mt-2 text-sm text-gray-600">Clients</div>
                </div>
                <div className="p-6 rounded-xl text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-white/80 to-white/60">
                  <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">10K+</div>
                  <div className="mt-2 text-sm text-gray-600">Successful Campaigns</div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Services preview carousel (simple scroll) */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">We Offer Best Digital Marketing Services for Higher ROI</h3>
          <div className="flex gap-6 overflow-x-auto pb-4">
            <div className="min-w-[300px] bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="font-semibold mb-2">SEO Optimization</h4>
              <p className="text-sm text-gray-600">Improve your visibility and rankings with technical and content SEO.</p>
            </div>
            <div className="min-w-[300px] bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="font-semibold mb-2">Social Media Marketing</h4>
              <p className="text-sm text-gray-600">Engage audiences and grow brand affinity across platforms.</p>
            </div>
            <div className="min-w-[300px] bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="font-semibold mb-2">Pay-Per-Click Services</h4>
              <p className="text-sm text-gray-600">High-converting paid campaigns across Google & Meta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges band */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Our Badges of Honour</h3>
            <p className="text-sm text-white/90">Certified partners and ad specialists</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src="/DigitalMarketing/meta.jpg" alt="Meta" className="h-20" />
            <img src="/DigitalMarketing/google-partner.jpg" alt="Google Partner" className="h-20" />
            <img src="/DigitalMarketing/google-ads.jpg" alt="Google Ads" className="h-20" />
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Step by Step Process For Our Digital Marketing Consulting Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-600 mb-4">01</div>
              <h4 className="font-semibold">Research Thoroughly</h4>
              <p className="text-sm text-gray-600">Deep research to familiarize ourselves with your niche.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center font-bold text-pink-600 mb-4">02</div>
              <h4 className="font-semibold">Plan Meticulously</h4>
              <p className="text-sm text-gray-600">We brainstorm and build a strong, targeted content strategy.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center font-bold text-green-600 mb-4">03</div>
              <h4 className="font-semibold">Implement Efficiently</h4>
              <p className="text-sm text-gray-600">We execute the plan with precision across channels.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center font-bold text-yellow-600 mb-4">04</div>
              <h4 className="font-semibold">Evaluate Continuously</h4>
              <p className="text-sm text-gray-600">Track results and optimize based on performance data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From strategy to execution, we cover all aspects of digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">
                Google Ads, Meta Ads, and LinkedIn campaigns with expert optimization for maximum conversions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Google Ads Management</li>
                <li>✓ Facebook & Instagram Ads</li>
                <li>✓ Performance Optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO & Content Strategy</h3>
              <p className="text-gray-600 mb-4">
                Organic growth through strategic SEO, content marketing, and technical optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Keyword Research & Analysis</li>
                <li>✓ Content Creation</li>
                <li>✓ Link Building</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-pink-600">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build brand authority and engage audiences with strategic social media campaigns.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Content Calendar & Planning</li>
                <li>✓ Community Management</li>
                <li>✓ Influencer Partnerships</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Data-driven insights and comprehensive reporting to track performance and ROI.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ GA4 Implementation</li>
                <li>✓ Custom Dashboards</li>
                <li>✓ Performance Reports</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-600">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Personalized email campaigns that nurture leads and drive customer retention.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Campaign Design</li>
                <li>✓ Automation Setup</li>
                <li>✓ List Segmentation</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-red-600">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand & Creative</h3>
              <p className="text-gray-600 mb-4">
                Compelling visual content and brand strategy that resonates with your target audience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Brand Identity Design</li>
                <li>✓ Video Production</li>
                <li>✓ Creative Campaign</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Partner With MCANSEY?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Industry Experts
                    </h3>
                    <p className="text-gray-600">
                      Team of certified professionals with years of experience in digital marketing
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Data-Driven Strategy
                    </h3>
                    <p className="text-gray-600">
                      Every campaign backed by analytics and insights for measurable results
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-pink-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Transparent Reporting
                    </h3>
                    <p className="text-gray-600">
                      Regular updates and comprehensive reports on campaign performance
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Dedicated Support
                    </h3>
                    <p className="text-gray-600">
                      Dedicated account managers ensuring your success every step of the way
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    15+
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">Years of Experience</p>
                  <p className="text-gray-700">Trusted by 1000+ businesses worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="space-y-6">
            <details className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50 flex justify-between items-center">
                <span>What digital marketing services do you offer?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                We offer comprehensive digital marketing services including PPC advertising, SEO optimization, social media marketing, email campaigns, analytics & reporting, and creative brand solutions tailored to your business goals.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50 flex justify-between items-center">
                <span>How long does it take to see results from digital marketing?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                Results vary depending on your goals and strategy. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to show significant improvements. We provide regular reports and optimize continuously for best performance.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50 flex justify-between items-center">
                <span>What makes MCANSEY different from other agencies?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                We combine industry expertise, data-driven strategy, and transparent reporting. Our team is certified in Google Ads, Meta, and analytics platforms. We focus on ROI and provide dedicated account management for every client.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50 flex justify-between items-center">
                <span>How do you measure campaign success?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                We track metrics like conversion rates, ROI, click-through rates, engagement, and lead quality. We provide custom dashboards and monthly reports with actionable insights to optimize performance.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50 flex justify-between items-center">
                <span>Can you help my small business with digital marketing?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                Absolutely! We work with businesses of all sizes. Our strategies are customized to fit your budget and goals, whether you're a startup or an established business looking to scale.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50 flex justify-between items-center">
                <span>What's your process for getting started?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                We start with a consultation to understand your business, goals, and challenges. Then we conduct market research, develop a tailored strategy, and implement campaigns with continuous monitoring and optimization.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a customized digital marketing strategy tailored to your business goals.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-bold transition-colors inline-block">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      {/* Form Section */}
      <FormSection />

      {/* Office Section */}
      <Office />

      <Footer />
    </>
  );
}
