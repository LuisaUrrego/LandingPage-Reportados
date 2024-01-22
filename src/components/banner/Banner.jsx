import "./Banner.scss";
import Wrapper from "../wrapper/Wrapper";
import imagenBanner from "../../assets/Banner.png"
const Banner = () => {
  return (
    <section id="section1" className="banner">
        <Wrapper className="banner__container">
            <div className="banner__imagen">
                <img src={imagenBanner} alt="" />
            </div>
        </Wrapper>

    </section>
  )
}

export default Banner