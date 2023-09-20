import serv1_image from "../../assets/schdual.png";
import serv2_image from "../../assets/screen.png";
import serv3_image from "../../assets/serv.png";
import "./OurFeature.css";
function Aboutus() {
  return (
    <>
      <div className="container-service">
        <div>
          <h1 id="service-header-caption">Out Features</h1>
        </div>
        <section className="About-us">
          <div className="outer-cont">
            <div className="service-section-image">
              <img src={serv1_image} alt="" />
            </div>
            <h4>Personalized Learning Paths</h4>
            <p>
              By employing adaptive technologies, we can tailor learning paths
              to match each student's pace and preferences, fostering
              personalized and effective education.
            </p>
          </div>
          <div  className="outer-cont">
            <div className="service-section-image">
              <img src={serv2_image} alt="" />
            </div>
            <h4>Hybrid Learning</h4>
            <p>
              Experience the best of both worlds with our app's innovative
              Hybrid Learning approach, empowering you to achieve academic
              excellence on your own terms.
            </p>
          </div>
          <div className="outer-cont">
            <div className="service-section-image">
              <img src={serv3_image} alt="" />
            </div>
            <h4>Appointment Booking</h4>
            <p>
              Through an intuitive online platform, students can seamlessly book
              appointments with teachers, fostering one-on-one interactions for
              truly personalized learning experiences.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutus;
