import Toolbar from "./Component/Navigation/Toolbar/Toolbar";
import Home from "./Component/Layouts/Home/home";
import About from "./Component/Layouts/About/about";
import Service from "./Component/Layouts/Service/service";
import Portfolio from "./Component/Layouts/Portfolio/Portfolio";
import ContactMe from "./Component/Layouts/Contact/Contactme";
import Footer from "./Component/Layouts/Footer/footer";
import Education from "./Component/Layouts/Education/education";

function App() {
  return (
    <>
      <Toolbar />
      <Home />
      <About />
      <Education />
      <Service />
      <Portfolio />
      <ContactMe />

      <Footer />
    </>
  );
}

export default App;
