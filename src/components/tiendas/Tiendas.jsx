import './Tiendas.scss';
import Wrapper from "../wrapper/Wrapper";
import icono from "../../assets/feature-2.svg";
import tienda8 from "../../assets/tienda8.jpeg";
import tiendaCucuta from "../../assets/tiendacucuta.jpeg";
import tienda from "../../assets/tienda.jpeg";
import tienda6 from "../../assets/tienda6.jpeg";
import tienda3 from "../../assets/tienda3.jpeg";
import tienda5 from "../../assets/tienda5.jpeg";
import { CiLocationOn } from "react-icons/ci";

const Tiendas = () => {
  return (
    <div id="section3" className='tiendas'>
        <Wrapper>
            <div className='tiendas__text'>
                <h2>¡ALGUNAS DE NUESTRAS TIENDAS!</h2>
            </div>
            <div className="tiendas__container">
                <div className="tiendas__feature dark-feature">
                    <img src={tienda5}  />
                    <h4 className='dark-features-title'><CiLocationOn />CALI</h4>
                    <p>Carrera 5 # 13-22 lc 8</p>
                </div>

                <div className="tiendas__feature white-feature">
                    <img src={tiendaCucuta}  />
                    <h4 className='white-features-title'><CiLocationOn />CUCÚTA</h4>
                    <p>Avenida 7 # 7-82 barrio centro</p>
                </div>

                <div className="tiendas__feature dark-feature">
                    <img src={tienda}  />
                    <h4 className='dark-features-title'><CiLocationOn />MARINILLA</h4>
                    <p>Calle 31 #28-20</p>
                </div>

                <div className="tiendas__feature white-feature">
                    <img src={tienda6}  />
                    <h4 className='white-features-title'><CiLocationOn />Villavicencio</h4>
                    <p>Carrera 31a # 36 39 local 28, Centro Comercial El Parque</p>
                </div>

                <div className="tiendas__feature dark-feature">
                    <img src={tienda3}  />
                    <h4 className='dark-features-title'><CiLocationOn />OCAÑA</h4>
                    <p>	Calle 11 # 10-25 Local 37 - Centro Comercial Cañaveral</p>
                </div>

                <div className="tiendas__feature white-feature">
                    <img src={tienda8}  />
                    <h4 className='white-features-title'><CiLocationOn />FUSA</h4>
                    <p>	Carrera 6 # 7-21</p>
                </div>
            </div>

         
        </Wrapper>
    </div>
  )
}

export default Tiendas