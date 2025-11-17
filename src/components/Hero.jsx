export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),rgba(255,255,255,0))]"></div>
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Eerlijk dakwerk, met de hand gemaakt
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Wij zijn een familiebedrijf met 20+ jaar ervaring in daken. Van herstellingen tot volledige renovaties: we combineren klassiek vakmanschap met moderne technieken.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700 transition-colors">
              Vrijblijvende offerte
            </a>
            <a href="#projecten" className="inline-flex items-center justify-center rounded-md border border-amber-600 px-5 py-3 text-amber-700 font-semibold hover:bg-amber-50">
              Bekijk projecten
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800">20+ jaren</p>
              <p>ervaring</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">10 jaar</p>
              <p>garantie</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">24/7</p>
              <p>spoeddienst</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1600&auto=format&fit=crop" alt="Dakwerken in uitvoering" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow p-4 ring-1 ring-black/5">
            <p className="text-sm font-medium text-gray-800">Erkende dakwerker</p>
            <p className="text-xs text-gray-600">VCA-gecertificeerd • Verzekerd</p>
          </div>
        </div>
      </div>
    </section>
  )
}
