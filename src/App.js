import "./App.css";
import { useRef, useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["Space Grotesk", "sans-serif"].join(","),
  },
});
function App() {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    }); 
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        scroll={scroll}
        Home={home}
        About={about}
        Project={project}
        Contact={contact}
      />

      <Home refs={home} scroll={scroll} Contact={contact} />
      <About refs={about} />
      <Project refs={project}/>
      <Contact refs={contact} />
    </ThemeProvider>
  );
}

export default App;
