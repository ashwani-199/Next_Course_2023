import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Service";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";



const Home = () => {
  return (
    <main>
      <Hero/>
      <About />
      <Services/>
      <Work/>
      <Reviews />
      <Cta/>
    </main>
  );
}

export default Home;