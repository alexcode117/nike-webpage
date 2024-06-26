import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SpecialOffers,
  Services,
  SuperQuality,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="bg-pale-blue padding">
      <Services />
    </section>

    <section className="padding-x py-10">
      <SpecialOffers />
    </section>

    <section className="padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
);

export default App;
