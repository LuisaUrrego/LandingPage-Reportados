import "./Video.scss";
import Wrapper from "../wrapper/Wrapper";
import video from "../../assets/video.mp4"

const Video = () => {
  return (
    <section id="section2" className="video">
        <Wrapper className="video__container">
        <video className="video__report"  controls>
        <source src={video} type="video/mp4" />
      </video>
        </Wrapper>
    </section>
  )
}

export default Video