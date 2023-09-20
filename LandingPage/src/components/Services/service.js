import teacher from "../../assets/teacher.png";
import online from "../../assets/online.png";
import service24 from "../../assets/service24.png";
import "./service.css";
function Service() {
  return (
    <>
      <h1 id="service-title" style={{marginTop:'50px'}}>Service</h1>
      <section className="Services">
        <div className="Why-Are-we">
          <h2>Why We Are The Best</h2>
          <p>
            a learning system based on formalised teaching with help of....{" "}
          </p>
        </div>
        <div className="teacher-cont">
          <img src={teacher} alt="" />
          <h3>Expert Teacher</h3>
          <p>a learning system based on formalised teaching </p>
        </div>
        <div className="online-cont">
          <img src={online} alt="" />
          <h3>Online Courses</h3>
          <p>a learning system based on formalised teaching</p>
        </div>
        <div className="services-24">
          <img src={service24} alt="" />
          <h3>24/7 Support</h3>
          <p>a learning system based on formalised teaching</p>
        </div>
      </section>
    </>
  );
}

export default Service;
