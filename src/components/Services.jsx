export default function Services() {
  const services = [
    {
      title: 'Hellende daken',
      desc: 'Pannen, leien en natuurleien. Volledige nieuwbouw of renovatie met aandacht voor detail.',
      img: 'https://images.unsplash.com/photo-1578301978162-7bdc1de2d06b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Platte daken',
      desc: 'EPDM en roofing met naadloze afwerking. Perfecte waterdichting en lange levensduur.',
      img: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Dakgoten & zinkwerk',
      desc: 'Maatwerk in zink en koper. Herstellingen of volledige vervanging met topmaterialen.',
      img: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <section id="diensten" className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Onze diensten</h2>
        <p className="mt-2 text-gray-700">Ambachtelijke afwerking, transparante communicatie.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow ring-1 ring-black/5">
              <div className="aspect-video overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
