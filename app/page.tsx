/**
 * Home page of the site.
 *
 * This page introduces visitors to the clinic and provides a call to
 * action.  As you build out the site you can enhance this component
 * using shadcn/ui components for cards, buttons, and animations.
 */
export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Dobrodo\u0161li u na\u0161u stomatolo\u0161ku ordinaciju
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Brinemo o va\u0161em osmehu koriste\u0107i najmoderniju opremu i metode.
        Na\u0161 tim stru\u010dnjaka vam pru\u017ea sve vrste stomatolo\u0161kih usluga na
        jednom mestu.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="/usluge"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Pogledajte usluge
        </a>
        <a
          href="/kontakt"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full shadow hover:bg-blue-50 transition"
        >
          Zaka\u017eite pregled
        </a>
      </div>
    </section>
  );
}
