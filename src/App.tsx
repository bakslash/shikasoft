import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/OurWork';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-canvas-900 text-titanium selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
      
        <CaseStudies />
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;