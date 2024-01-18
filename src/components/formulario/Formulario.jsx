import Wrapper from '../wrapper/Wrapper'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillHouseFill } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";
import "./Formulario.scss"

const Formulario = () => {
    return (
        <div className='form'>
            <Wrapper>
                <div className="form-container">
                    <form className="form__formulario" >
                        <div className="input-group">
                        <HiOutlineMail  className='icon'/>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Correo Electrónico"
                            />
                        </div>
                        <div className="input-group">
                        <BsFillHouseFill  className='icon'/>
                            <input
                                type="text"
                                name="residencia"
                                className="input"
                                placeholder="Direccion de residencia"
                            />
                        </div>
                        <div className="input-group">
                        <WiTime3  className='icon'/>
                            <input
                                type="text"
                                name="tiempoReportado"
                                className="input"
                                placeholder="¿Hace cuánto se encuentra reportado?"
                            />
                        </div>
                        <button type="submit" className="button">
                            Enviar
                        </button>
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}

export default Formulario