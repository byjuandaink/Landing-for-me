import { Header, Footer } from '../components/layout';
import { Hero } from '../components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}