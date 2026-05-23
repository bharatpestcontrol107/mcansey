import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormSection from "../components/Home/FormSection";
import Office from "../components/Home/Office";
import Homedd from "../components/Header";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Globe2,
  LineChart,
  Megaphone,
  MousePointerClick,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
    note: "Steady growth systems, not one-off wins.",
    icon: Rocket,
  },
  {
    value: "15M+",
    label: "Leads Generated",
    note: "Across search, social, and paid media.",
    icon: MousePointerClick,
  },
  {
    value: "1.8K+",
    label: "Clients",
    note: "Brands served with measurable outcomes.",
    icon: Users,
  },
  {
    value: "10K+",
    label: "Campaigns Launched",
    note: "Built, tuned, and scaled with care.",
    icon: TrendingUp,
  },
];

const growthChannels = [
  {
    title: "SEO that compounds",
    description: "Search visibility built on intent-led content, technical cleanup, and long-term authority.",
    icon: Search,
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Paid media with precision",
    description: "Campaigns shaped around conversion data, audience signals, and clear ROI targets.",
    icon: Target,
    accent: "from-fuchsia-500 to-rose-400",
  },
  {
    title: "Social that feels human",
    description: "Content systems that look polished, sound friendly, and keep your brand in the conversation.",
    icon: Megaphone,
    accent: "from-amber-500 to-orange-400",
  },
  {
    title: "Analytics without noise",
    description: "Readable reporting that connects spend, traffic, leads, and revenue in one view.",
    icon: BarChart3,
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Creative that stops the scroll",
    description: "Bold visuals, sharp headlines, and landing page polish that make campaigns feel premium.",
    icon: Wand2,
    accent: "from-violet-500 to-indigo-400",
  },
  {
    title: "Brand trust at every touchpoint",
    description: "Consistent messaging and design that make your business feel established and memorable.",
    icon: ShieldCheck,
    accent: "from-blue-500 to-slate-400",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    icon: Globe2,
    description: "We learn your audience, offer, and market before touching the creative.",
    tint: "bg-sky-50 text-sky-600",
  },
  {
    step: "02",
    title: "Design",
    icon: Sparkles,
    description: "We shape the message, visuals, and channel mix into a clear growth plan.",
    tint: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    step: "03",
    title: "Launch",
    icon: CheckCircle2,
    description: "Campaigns go live with measurement, tracking, and a clean conversion path.",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    step: "04",
    title: "Scale",
    icon: LineChart,
    description: "We refine the winners and keep momentum going with practical optimization.",
    tint: "bg-amber-50 text-amber-600",
  },
];

const trustLogos = [
  { src: "/DigitalMarketing/meta.jpg", alt: "Meta" },
  { src: "/DigitalMarketing/google-partner.jpg", alt: "Google Partner" },
  { src: "/DigitalMarketing/google-ads.jpg", alt: "Google Ads" },
];

const serviceCards = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve rankings with technical SEO, keyword strategy, and content that earns traffic.",
    tone: "bg-sky-50 text-sky-600",
    image: "/images/Banner.webp",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build a lively social presence with content people want to stop, read, and share.",
    tone: "bg-fuchsia-50 text-fuchsia-600",
    image: "/images/center-cta-banner.webp",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Services",
    description: "Run focused paid campaigns across Google and Meta with a strong conversion lens.",
    tone: "bg-amber-50 text-amber-600",
    image: "/images/Build-an-ERP-System-2.webp",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Turn data into decisions with dashboards and reporting your team can actually use.",
    tone: "bg-emerald-50 text-emerald-600",
    image: "/images/ERP-Accounting-Software-Development-All-You-Need-To-Know.webp",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "Sharpen your visuals and messaging so every touchpoint feels premium and aligned.",
    tone: "bg-violet-50 text-violet-600",
    image: "/images/ERP-software-banner.webp",
  },
  {
    icon: Users,
    title: "Lead Nurture Systems",
    description: "Keep momentum after the click with email, retargeting, and conversion-friendly flows.",
    tone: "bg-blue-50 text-blue-600",
    image: "/images/Banner.webp",
  },
];

const reasons = [
  {
    title: "Industry Experts",
    description: "Certified professionals with years of hands-on campaign experience.",
    icon: BadgeCheck,
  },
  {
    title: "Data-Driven Strategy",
    description: "We use the numbers to steer creative decisions and budget allocation.",
    icon: LineChart,
  },
  {
    title: "Transparent Reporting",
    description: "You get straightforward updates that show what is working and what needs attention.",
    icon: CheckCircle2,
  },
  {
    title: "Dedicated Support",
    description: "A responsive team that keeps the work moving and the communication clear.",
    icon: Users,
  },
];

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



      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_26%),linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,0.92))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              <Sparkles className="h-4 w-4" />
              Digital Marketing That Feels Alive
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cheerful, creative growth for brands that want more than generic marketing.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              We blend sharp strategy, colorful creative, and measurable performance to help your brand look stronger, feel more modern, and convert better across every channel.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                Start a Conversation
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Brand-first creative",
                "Conversion-focused funnels",
                "Clear reporting and support",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/80 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/60">Campaign snapshot</p>
                  <p className="text-2xl font-semibold text-white">Momentum in motion</p>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Live Performance
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-400 p-5 text-slate-950 shadow-lg">
                  <Target className="h-7 w-7" />
                  <p className="mt-8 text-sm font-medium">Focused reach</p>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="mt-1 text-sm text-slate-900/70">of launches tied to conversion goals</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-fuchsia-500 to-rose-400 p-5 text-slate-950 shadow-lg">
                  <TrendingUp className="h-7 w-7" />
                  <p className="mt-8 text-sm font-medium">Growth lift</p>
                  <p className="text-3xl font-bold">+38%</p>
                  <p className="mt-1 text-sm text-slate-900/70">stronger lead volume after optimization</p>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-200">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">A playful brand feel with premium discipline</p>
                    <p className="text-xs text-white/45">A mix of illustration, motion, and practical marketing logic.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70 sm:text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">SEO</div>
                <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">Paid Ads</div>
                <div className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4">Social</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers in gradient framed box */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Performance snapshot</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A cleaner view of the numbers that matter.
            </h2>
            <p className="mt-3 text-slate-600">
              This block is designed to feel more premium than a standard metrics grid while still being easy to scan on mobile.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-1">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-400" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                      <div className="mt-3 text-4xl font-bold tracking-tight text-slate-950">{stat.value}</div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg transition-colors group-hover:bg-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{stat.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview carousel (simple scroll) */}
      <section id="services" className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Creative services</p>
            <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A cheerful toolkit for modern digital growth.
            </h3>
            <p className="mx-auto max-w-2xl text-slate-600">
              Each service card mixes icons, color, and concise messaging so the page feels more alive and less like a spreadsheet.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="group rounded-[1.75rem] border border-white bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  {card.image ? (
                    <div className="relative w-full h-44">
                      <Image src={card.image} alt={card.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className={`w-full h-44 flex items-center justify-center ${card.tone}`}>
                      <Icon className="h-12 w-12 text-white/90" />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-slate-950">{card.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Badges band */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Trust markers</p>
            <h3 className="mt-2 text-2xl font-bold">Certified partners and ad specialists.</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
            {trustLogos.map((logo) => (
              <div key={logo.alt} className="flex h-20 w-40 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 backdrop-blur-sm">
                <Image src={logo.src} alt={logo.alt} width={140} height={56} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(59,130,246,0.05),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">How we work</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A simple process with a more playful presentation.
            </h3>
            <p className="mt-3 text-slate-600">
              These four steps keep the work organized while still giving the section a more energetic, visual feel.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${item.tint}`}>
                    <Icon className="h-4 w-4" />
                    Step {item.step}
                  </div>
                  <h4 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Core services</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-950 mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-lg text-slate-600">
              From strategy to execution, we cover all aspects of digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                bg: "bg-blue-50 text-blue-600",
                title: "PPC Advertising",
                text: "Google Ads, Meta Ads, and LinkedIn campaigns with expert optimization for maximum conversions.",
                list: ["Google Ads Management", "Facebook & Instagram Ads", "Performance Optimization"],
              },
              {
                icon: Search,
                bg: "bg-violet-50 text-violet-600",
                title: "SEO & Content Strategy",
                text: "Organic growth through strategic SEO, content marketing, and technical optimization.",
                list: ["Keyword Research & Analysis", "Content Creation", "Link Building"],
              },
              {
                icon: Megaphone,
                bg: "bg-pink-50 text-pink-600",
                title: "Social Media Marketing",
                text: "Build brand authority and engage audiences with strategic social media campaigns.",
                list: ["Content Calendar & Planning", "Community Management", "Influencer Partnerships"],
              },
              {
                icon: BarChart3,
                bg: "bg-amber-50 text-amber-600",
                title: "Analytics & Reporting",
                text: "Data-driven insights and comprehensive reporting to track performance and ROI.",
                list: ["GA4 Implementation", "Custom Dashboards", "Performance Reports"],
              },
              {
                icon: Users,
                bg: "bg-emerald-50 text-emerald-600",
                title: "Email Marketing",
                text: "Personalized email campaigns that nurture leads and drive customer retention.",
                list: ["Campaign Design", "Automation Setup", "List Segmentation"],
              },
              {
                icon: Wand2,
                bg: "bg-orange-50 text-orange-600",
                title: "Brand & Creative",
                text: "Compelling visual content and brand strategy that resonates with your target audience.",
                list: ["Brand Identity Design", "Video Production", "Creative Campaign"],
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white p-8 rounded-[1.75rem] border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 ${service.bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">
                    {service.text}
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {service.list.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why MCANSEY</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-950 mb-6">
                Why Partner With MCANSEY?
              </h2>
              <div className="space-y-4">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div key={reason.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950 mb-1">{reason.title}</h3>
                        <p className="text-slate-600">{reason.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-100 via-white to-fuchsia-100 p-8 shadow-xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-300/30 blur-3xl" />
                <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-sky-300/30 blur-3xl" />
                <div className="relative grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-lg">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-500">Fast turnaround</p>
                    <p className="mt-1 text-2xl font-bold text-slate-950">Launch-ready</p>
                    <p className="mt-2 text-sm text-slate-600">Campaigns move from strategy to execution with clear direction.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-white/60">Reliable support</p>
                    <p className="mt-1 text-2xl font-bold text-white">Always on</p>
                    <p className="mt-2 text-sm text-white/70">You get responsive guidance and transparent communication.</p>
                  </div>
                  <div className="sm:col-span-2 rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-500">Years of experience</p>
                        <p className="text-4xl font-bold tracking-tight text-slate-950">15+</p>
                      </div>
                      <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Trusted by 1,000+ businesses</div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-slate-600 sm:text-sm">
                      <div className="rounded-2xl bg-sky-50 px-3 py-4">Audience</div>
                      <div className="rounded-2xl bg-fuchsia-50 px-3 py-4">Creative</div>
                      <div className="rounded-2xl bg-amber-50 px-3 py-4">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Questions</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="space-y-6">
            <details className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-slate-950 hover:bg-blue-50 flex justify-between items-center">
                <span>What digital marketing services do you offer?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                We offer comprehensive digital marketing services including PPC advertising, SEO optimization, social media marketing, email campaigns, analytics & reporting, and creative brand solutions tailored to your business goals.
              </div>
            </details>

            <details className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-slate-950 hover:bg-blue-50 flex justify-between items-center">
                <span>How long does it take to see results from digital marketing?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                Results vary depending on your goals and strategy. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to show significant improvements. We provide regular reports and optimize continuously for best performance.
              </div>
            </details>

            <details className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-slate-950 hover:bg-blue-50 flex justify-between items-center">
                <span>What makes MCANSEY different from other agencies?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                We combine industry expertise, data-driven strategy, and transparent reporting. Our team is certified in Google Ads, Meta, and analytics platforms. We focus on ROI and provide dedicated account management for every client.
              </div>
            </details>

            <details className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-slate-950 hover:bg-blue-50 flex justify-between items-center">
                <span>How do you measure campaign success?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                We track metrics like conversion rates, ROI, click-through rates, engagement, and lead quality. We provide custom dashboards and monthly reports with actionable insights to optimize performance.
              </div>
            </details>

            <details className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-slate-950 hover:bg-blue-50 flex justify-between items-center">
                <span>Can you help my small business with digital marketing?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                Absolutely! We work with businesses of all sizes. Our strategies are customized to fit your budget and goals, whether you're a startup or an established business looking to scale.
              </div>
            </details>

            <details className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-slate-950 hover:bg-blue-50 flex justify-between items-center">
                <span>What's your process for getting started?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                We start with a consultation to understand your business, goals, and challenges. Then we conduct market research, develop a tailored strategy, and implement campaigns with continuous monitoring and optimization.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a customized digital marketing strategy tailored to your business goals.
          </p>
          <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold transition-colors inline-block shadow-lg shadow-black/10">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      {/* Form Section */}
      <FormSection />

      <Footer />
    </>
  );
}
