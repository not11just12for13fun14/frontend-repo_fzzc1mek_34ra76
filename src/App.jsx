import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="vakmanschap" className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold">Vakmanschap dat je ziet en voelt</h2>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">
                Elk dak is maatwerk. We werken enkel met A-klasse materialen en nemen de tijd voor een perfecte afwerking.
                Je krijgt één vast aanspreekpunt en heldere afspraken, zonder verrassingen.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-600"></span>Vakkennis generatie op generatie</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-600"></span>Transparante offertes en planning</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-600"></span>Netjes werfbeheer en oplevering</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-600"></span>10 jaar garantie op werk en materialen</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 ring-1 ring-black/5">
              <p className="font-semibold text-gray-900">Snelle herstelling nodig?</p>
              <p className="mt-1 text-gray-700">Bel onze spoeddienst: <span className="font-semibold">0470 12 34 56</span></p>
              <p className="mt-2 text-sm text-gray-600">Beschikbaar 24/7 bij lekken en stormschade.</p>
            </div>
          </div>
        </section>
        <Services />
        <Projects />
        <Reviews />
        <Contact />
        <footer className="py-10 bg-gray-900 text-gray-200">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Dakwerkers Van den Berg — Alle rechten voorbehouden</p>
            <p className="text-sm">BE 0123.456.789 • RPR Gent • BTW verlegd</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
