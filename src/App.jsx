import "./App.css";
import { DemoPages } from "./component/DemoPages";
import { Features } from "./component/Features";
import { Footer } from "./component/Footer";
import { Hero } from "./component/Hero";
function App() {
  return (
    <>
      <Hero />
      <DemoPages />
      <Features />
      <Footer />
    </>
  );
}

export default App;
