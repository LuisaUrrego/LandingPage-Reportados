import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Formulario from "./components/formulario/Formulario";
import Navbar from "./components/navbar/Navbar";
import Tiendas from "./components/tiendas/Tiendas";
import Video from "./components/video/Video";
import WhatsApp from "./components/whastapp/WhatsApp";
function App() {
  const phoneNumber = '573052079018'
  return (
    <>
      <Navbar/>
      <Banner/>
      <Video/>
      <Tiendas/>
      <Formulario/>
      <WhatsApp phoneNumber={phoneNumber}/>
      <Footer/>
    </>
  )
}

export default App
