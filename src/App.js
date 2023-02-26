import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Navigation />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
