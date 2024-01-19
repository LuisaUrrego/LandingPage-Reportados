import React, {useRef} from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Video from "../video/Video"
import Formulario from "../formulario/Formulario"
import Footer from "../footer/Footer";

const Rutas = () => {
    const refSeccion1 = useRef(null);
    const refSeccion2 = useRef(null);
    const refSeccion3 = useRef(null);
    const refSeccion4 = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar
        onSeccion1Click={() => scrollToSection(refSeccion1)}
        onSeccion2Click={() => scrollToSection(refSeccion2)}
        onSeccion3Click={() => scrollToSection(refSeccion3)}
        onSeccion4Click={() => scrollToSection(refSeccion4)}
      />

      <Banner reference={refSeccion1} />
      <Video reference={refSeccion2} />
      <Formulario reference={refSeccion2} />
      <Footer reference={refSeccion2} />
    </div>
  )
}

export default Rutas