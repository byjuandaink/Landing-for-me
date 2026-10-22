import { Header, Footer } from '../components/layout';
import { Hero, Skills,  } from '../components/sections';
import About from '../components/ui/About';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
                <About/>
        <Skills />
      </main>
      <Footer />
    </>
  );
}