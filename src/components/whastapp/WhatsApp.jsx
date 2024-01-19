import './WhatsApp.scss'
import icono from "../../assets/icono.svg"

const WhatsApp = ({ phoneNumber }) => {
    const openWhatsapp = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };
    return (
        <div>
            <button onClick={openWhatsapp} className="button">
                <div className='button__icon'>
                    <img src={icono} alt="" />
                </div>
            </button>
        </div>
    )
}

export default WhatsApp