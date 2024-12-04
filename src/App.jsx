import Cards from "./components/Cards";
import Footer from "./components/Fotter";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";
import About from "./pages/AboutSection";
import Hero from "./pages/HeroSection";
import Select from "./pages/SelectionSection";

function App() {
  return (
    <main className="p-3 container mx-auto">
      <Hero>
        <NavBar />
      </Hero>
      <Cards />
      <Select />
      <About />
      <Partners />
      <Footer />
    </main>
  );
}

export default App;
