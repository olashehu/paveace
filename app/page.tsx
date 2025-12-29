import About from "./components/About";
import Contact from "./components/Contact";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <About />
      <Contact />
    </>
  );
}
