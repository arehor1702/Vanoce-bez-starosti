import React, { useState } from "react";

export default function Home() {
  const sizes = [
    { id: "s", label: "S – 120–150 cm", price: "od 490 Kč" },
    { id: "m", label: "M – 150–180 cm", price: "od 690 Kč" },
    { id: "l", label: "L – 180–220 cm", price: "od 890 Kč" },
    { id: "xl", label: "XL – 220+ cm", price: "od 1190 Kč" }
  ];

  const [selected, setSelected] = useState("m");

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800 font-sans">
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-lg font-bold text-emerald-700">🎄 Vánoce bez starostí</h1>
          <a
            href="#order"
            className="rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-700"
          >
            Objednat stromek
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Dovezeme vám vánoční stromek až domů 🎁
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Vyberte si živý stromek, my ho přivezeme, případně ozdobíme, a po svátcích odvezeme a
            ekologicky zrecyklujeme.
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-8">
            <li>✔️ Doručení po Praze a okolí</li>
            <li>✔️ Možnost instalace a stojanu</li>
            <li>✔️ Odvoz a recyklace po svátcích</li>
          </ul>
          <a
            href="#order"
            className="rounded-xl bg-emerald-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-emerald-700"
          >
            Objednat stromek
          </a>
        </div>
        <img
          src="/stromek1.jpg"
          alt="Vánoční stromek"
          className="rounded-3xl shadow-lg w-full object-cover"
        />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12" id="order">
        <h3 className="text-2xl font-bold mb-6">Vyberte velikost stromku</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`cursor-pointer border rounded-2xl p-6 shadow-sm hover:shadow-md ${
                selected === s.id ? "border-emerald-600" : "border-slate-200"
              }`}
            >
              <h4 className="text-lg font-semibold">{s.label}</h4>
              <p className="text-slate-600">{s.price}</p>
            </div>
          ))}
        </div>

        <form className="mt-10 grid gap-4 max-w-lg">
          <input
            type="text"
            placeholder="Jméno a příjmení"
            className="border rounded-xl p-3"
            required
          />
          <input type="email" placeholder="E-mail" className="border rounded-xl p-3" required />
          <input type="text" placeholder="Telefon" className="border rounded-xl p-3" required />
          <input type="text" placeholder="Adresa doručení" className="border rounded-xl p-3" required />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl shadow"
          >
            Odeslat objednávku
          </button>
        </form>
      </section>

      <footer className="border-t mt-20 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Vánoce bez starostí – všechna práva vyhrazena
      </footer>
    </main>
  );
}
