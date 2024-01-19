import "./Video.scss";
import Wrapper from "../wrapper/Wrapper";
import video from "../../assets/video.mp4"

const Video = ({ reference }) => {
  return (
    <section className="video" ref={reference} id="seccion2" >
        <Wrapper className="video__container">
        <video className="video__report"  controls>
        <source src={video} type="video/mp4" />
      </video>
        </Wrapper>
    </section>
  )
}

export default Video