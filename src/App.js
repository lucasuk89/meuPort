/* eslint-disable no-unused-vars */
import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Footer from "./components/Footer/footer";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import header from "./components/header/header";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="corpoNavbar"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <header />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
