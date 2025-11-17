export default function Reviews() {
  const reviews = [
    { name: 'Sofie V.', text: 'Heel correct en proper gewerkt. Duidelijke communicatie en een mooi resultaat. Aanrader!' },
    { name: 'Tom D.', text: 'Snelle interventie na stormschade. Eerlijke prijs en vakmanschap zoals het hoort.' },
    { name: 'Fam. Peeters', text: 'Volledige dakrenovatie uitgevoerd binnen de planning. Zeer tevreden over de service.' },
  ]

  return (
    <section id="reviews" className="py-16 bg-amber-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Wat klanten zeggen</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-xl bg-white p-6 shadow ring-1 ring-black/5">
              <p className="text-gray-800">“{r.text}”</p>
              <footer className="mt-4 text-sm text-gray-600">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
