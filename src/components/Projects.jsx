export default function Projects() {
  const projects = [
    { title: 'Renovatie herenhuis • Gent', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop' },
    { title: 'EPDM plat dak • Brugge', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Zinkwerk op maat • Antwerpen', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1400&auto=format&fit=crop' },
  ]

  return (
    <section id="projecten" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Recente realisaties</h2>
        <p className="mt-2 text-gray-700">Een selectie van ons werk. Netjes, duurzaam en volgens afspraak.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.title} className="rounded-xl overflow-hidden shadow ring-1 ring-black/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <figcaption className="p-4 text-gray-800 font-medium">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
