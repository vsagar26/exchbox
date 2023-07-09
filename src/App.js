import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AllRoutes from "./Routes/AllRoutes";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

function App() {
  return (
    <>
      <div className="root scroll-smooth">
        <Menu />
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
