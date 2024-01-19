import "./Banner.scss";
import Wrapper from "../wrapper/Wrapper";
import imagenBanner from "../../assets/Banner.png"
const Banner = ({ reference }) => {
  return (
    <section className="banner"  ref={reference} id="seccion1">
        <Wrapper className="banner__container">
            <div className="banner__imagen">
                <img src={imagenBanner} alt="" />
            </div>
        </Wrapper>

    </section>
  )
}

export default Banner