import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Globe, Star, BookOpen, HelpCircle, Images, Sparkles, ChevronRight, ArrowRight, Smile, ShoppingCart, Wand2, Settings2 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Examples', href: '#examples' },
  { label: 'Ideas', href: '#ideas' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Help', href: '#help' },
  { label: 'Blog', href: '#blog' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-brand-accent grid place-items-center text-white font-bold">MC</div>
          <span className="font-poppins font-semibold text-slate-900">Magical Book</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((n) => (
            <a key={n.label} href={n.href} className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal rounded-md px-1 py-1">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal rounded-md px-3 py-2"><Globe size={18}/>EN</button>
          <a href="#create" className="bg-brand-teal hover:bg-brand-tealDark text-white px-4 py-2 rounded-md shadow-md hover:shadow-raise transition shadow focus:outline-none focus:ring-2 focus:ring-brand-teal">Create a children’s book</a>
        </div>
        <button className="md:hidden p-2 rounded-md border border-slate-200" aria-label="Menu" onClick={()=>setOpen(!open)}><Menu/></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 px-4 pb-4">
          <nav className="flex flex-col gap-3 py-3">
            {NAV_LINKS.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-700 hover:text-slate-900">{n.label}</a>
            ))}
            <a href="#create" className="bg-brand-teal text-white px-4 py-2 rounded-md text-center">Create a children’s book</a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-12 md:py-20">
        <div>
          <h1 className="font-poppins text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Make a magical, personalized children’s book
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Turn names, photos, and favorite themes into a one‑of‑a‑kind story. Friendly, imaginative, and ready in minutes.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#create" className="bg-brand-teal hover:bg-brand-tealDark text-white px-5 py-3 rounded-md shadow-md hover:shadow-raise transition focus:outline-none focus:ring-2 focus:ring-brand-teal inline-flex items-center gap-2">
              <Sparkles size={18}/> Create your book
            </a>
            <a href="#examples" className="text-brand-teal hover:underline inline-flex items-center gap-1">See examples <ArrowRight size={16}/></a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1"><Star className="text-amber-400" size={16}/>4.9/5 reviews</div>
            <div>Free shipping worldwide</div>
          </div>
        </div>
        <div className="h-[360px] md:h-[540px] rounded-xl relative">
          <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { icon: Wand2, title: 'Choose a story', desc: 'Pick a theme, add names and photos.' },
    { icon: Images, title: 'Style the art', desc: 'Select illustration style and fonts.' },
    { icon: ShoppingCart, title: 'Preview & print', desc: 'Edit pages, then checkout securely.' }
  ]
  return (
    <section id="features" className="bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-md shadow hover:shadow-raise transition">
              <s.icon className="text-brand-accent"/>
              <h3 className="mt-3 font-semibold text-slate-900">{i+1}. {s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AgeCategories() {
  const ages = [
    { label: '0–3', desc: 'Board book stories with simple rhymes' },
    { label: '4–6', desc: 'Playful adventures for early readers' },
    { label: '7–9', desc: 'Imaginative tales with deeper plots' },
  ]
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl font-bold text-slate-900">Stories by age</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {ages.map((a) => (
            <div key={a.label} className="rounded-md border border-slate-200 p-6 hover:shadow-raise transition">
              <div className="text-2xl font-bold text-brand-accent">{a.label}</div>
              <p className="mt-2 text-slate-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Examples() {
  const covers = new Array(8).fill(0).map((_,i)=>`https://picsum.photos/seed/book${i}/400/560`)
  return (
    <section id="examples" className="bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl font-bold text-slate-900">Examples</h2>
        <div className="overflow-hidden mt-6">
          <div className="flex gap-4 animate-carousel" aria-live="off">
            {[...covers, ...covers].map((src, i) => (
              <img key={i} src={src} alt={`Example book cover ${i+1}`} className="w-40 h-56 object-cover rounded-md shadow" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ThemesCloud() {
  const chips = ['Dinosaurs','Space','Mermaids','Robots','Jungle','Pirates','Farm','Ocean','Magic','Fairy Tales','Sports','Birthday']
  return (
    <section id="ideas">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl font-bold text-slate-900">Themes & ideas</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {chips.map((c)=> (
            <span key={c} className="px-3 py-2 rounded-full bg-brand-accent/20 text-slate-800 hover:shadow-raise transition select-none">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const items = [
    { name: 'Ava', text: 'The smile on my son’s face was priceless. The art feels truly magical.' },
    { name: 'Leo', text: 'Personalization was so easy and the story is delightful.' },
    { name: 'Mia', text: 'Fast delivery and gorgeous print quality.' },
  ]
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl font-bold text-slate-900">Loved by families</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map((r)=> (
            <blockquote key={r.name} className="rounded-md border p-6 bg-white">
              <Star className="text-amber-400"/>
              <p className="mt-3 text-slate-700">“{r.text}”</p>
              <footer className="mt-2 text-slate-500">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesList() {
  const features = [
    { icon: BookOpen, title: 'Premium hardcover', desc: 'Sturdy pages, vivid colors, built to last bedtime.' },
    { icon: Settings2, title: 'Edit every page', desc: 'Rewrite lines, reorder scenes, perfect your tale.' },
    { icon: Smile, title: 'Kid-safe & private', desc: 'Photos are processed securely and auto-deleted.' },
  ]
  return (
    <section id="features" className="bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl font-bold text-slate-900">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {features.map((f)=> (
            <div key={f.title} className="bg-white p-6 rounded-md shadow">
              <f.icon className="text-brand-accent"/>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'How long does it take?', a: 'Most books are generated in under 5 minutes with a live progress bar.' },
    { q: 'Can I upload photos?', a: 'Yes, up to 10MB per image with smart face-crop preview.' },
    { q: 'Do you ship worldwide?', a: 'Yes — and shipping is free during our global promo.' },
  ]
  const [open, setOpen] = useState(-1)
  return (
    <section id="help">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-poppins text-3xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-6 divide-y border rounded-md bg-white">
          {faqs.map((f, i)=> (
            <div key={i}>
              <button className="w-full text-left px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal flex items-center justify-between" onClick={()=> setOpen(open===i? -1 : i)} aria-expanded={open===i}>
                <span className="font-semibold text-slate-900">{f.q}</span>
                <ChevronRight className={`transition-transform ${open===i? 'rotate-90': ''}`}/>
              </button>
              <div className={`px-4 overflow-hidden transition-[max-height] duration-300 ${open===i? 'max-h-40 py-2' : 'max-h-0'}`}>
                <p className="text-slate-600">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GiftPitch() {
  return (
    <section className="bg-gradient-to-r from-brand-accent/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-900">The perfect gift</h3>
          <p className="text-slate-700 mt-2">Celebrate birthdays and milestones with a keepsake they’ll read again and again.</p>
        </div>
        <a href="#create" className="bg-brand-teal hover:bg-brand-tealDark text-white px-5 py-3 rounded-md shadow-md hover:shadow-raise transition focus:outline-none focus:ring-2 focus:ring-brand-teal">Create a children’s book</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Magical Book</p>
        <nav className="flex items-center gap-4">
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#help" className="hover:underline">Help</a>
        </nav>
      </div>
    </footer>
  )
}

export default function App(){
  useEffect(()=>{
    document.documentElement.style.setProperty('--tw-ring-color', '#0ea5a4')
  },[])
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header/>
      <main>
        <Hero/>
        <HowItWorks/>
        <AgeCategories/>
        <Examples/>
        <ThemesCloud/>
        <Reviews/>
        <FeaturesList/>
        <FAQ/>
        <GiftPitch/>
      </main>
      <Footer/>
    </div>
  )
}
