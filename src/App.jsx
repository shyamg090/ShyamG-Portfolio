import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { getConfigData } from "./data/configReader";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";
import { useSelector } from "react-redux";

function App() {

  const theme = useSelector((state) => state.theme.mode);

  return (
    // <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
    // <div className={`${theme} darkmode:bg-[#333] darkmode:text-[#fff]`}>

    <div>
      <Navbar />
      <div className="pt-[5rem] px-2 py-2">
        <div className="mx-auto max-w-3xl rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">

              <SiteRoutes />

              <Social />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
