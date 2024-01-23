import Wrapper from '../wrapper/Wrapper';
import './Footer.scss';
import logoInstagram from '../../assets/logoIg_1.svg'
import logoFacebook from '../../assets/logofc.svg'
import logoTecno from '../../assets/logoTecno.svg'

const Footer = () => {
    return (
        <div id="section5" className='footer'  >
            <Wrapper>
                <div className='footer__container'>
                <div className='footer__text'>
                    <h3>¡Siguenos en nuestras redes sociales!</h3>
                </div>
                <div className='footer__social'>
                    <div className='footer__instagram'>
                        <a href="https://www.instagram.com/tecnosuper.co/" target="_blank" rel="noopener noreferrer">
                            <img src={logoInstagram} alt="" />
                            <h5>@tecnosuper.co</h5>
                        </a>
                    </div>
                    <div className='footer__facebook'>
                    <a href="https://www.facebook.com/TecnoSuper0" target="_blank" rel="noopener noreferrer">
                            <img src={logoFacebook} alt="" />
                            <h5>@tecnosuper.co</h5>
                        </a>
                    </div>
                </div>

                <div className='footer__logo'>
                    <img src={logoTecno} alt="" />
                </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer