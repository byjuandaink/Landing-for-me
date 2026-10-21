import { Header, Footer } from '../components/layout';
import { Hero, Skills } from '../components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </>
  );
}