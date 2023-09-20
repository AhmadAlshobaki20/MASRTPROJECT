import "./landing.css";
import HeroSection from "./HeroSection/HeroSection";
import Header from "./Header/Header";
import Aboutus from "./Aboutus/OurFeature";
import Service from "./Services/service";
import Download from "./Download/Download";
import Contactus from "./contactUs/Contactus";
import Footer from "./Footer/Footer";
function landingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <div style={{width:"80%", margin:"0 auto", height:"20px" , background:"white", borderBottom:"1px solid black"}}></div> */}
      <Aboutus />
      {/* <div style={{width:"80%", margin:"0 auto", height:"20px" , background:"white", borderBottom:"1px solid black"}}></div> */}
      <Service />
      {/* <div style={{width:"80%", margin:"0 auto", height:"20px" , background:"white", borderBottom:"1px solid black"}}></div> */}
      <Download />
      {/* <div style={{width:"80%", margin:"0 auto", height:"20px" , background:"white", borderBottom:"1px solid black"}}></div> */}
      <Contactus />
      <Footer />
    </>
  );
}

export default landingPage;
