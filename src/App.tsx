import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Services from '@/components/Services';
import Pipeline from '@/components/Pipeline';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-void-950">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <Pipeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
