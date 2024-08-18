import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VerticalName from "./components/VerticalName";
import VerticalIcons from "./components/VerticalIcons";

function App() {
  return (
    <>
      <Header />
      <VerticalName/>
      <VerticalIcons/>
      
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
