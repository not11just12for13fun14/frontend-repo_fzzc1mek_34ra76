import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Er ging iets mis')
      setStatus({ ok: true, message: 'Bedankt! We nemen snel persoonlijk contact op.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Persoonlijk contact</h2>
        <p className="mt-2 text-gray-700">Vul je gegevens in en we bellen je binnen 24u op. Liever rechtstreeks?
          <span className="font-semibold text-gray-900"> 0470 12 34 56</span> •
          <a href="mailto:info@dakwerkersvandenberg.be" className="text-amber-700 hover:underline"> info@dakwerkersvandenberg.be</a>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 bg-white p-6 rounded-xl shadow ring-1 ring-black/5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Naam</label>
              <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Telefoon</label>
              <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Voorkeur contactmoment</label>
              <input name="preferred_contact_time" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bericht</label>
            <textarea name="message" required rows="5" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"></textarea>
          </div>

          <div className="flex items-center gap-4">
            <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700 disabled:opacity-60">
              {loading ? 'Versturen…' : 'Versturen'}
            </button>
            {status && (
              <p className={`${status.ok ? 'text-green-700' : 'text-red-700'} text-sm`}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
