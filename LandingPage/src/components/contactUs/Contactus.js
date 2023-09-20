import './Contactus.css'
function Contactus() {
  return (
    <>
    <h1 id='conact-head'>Contact Us</h1>
      <div class="contuctus">
        <div class="mail">
          <i class="fa-regular fa-envelope-open fa-lg" style={{color:"#fff"}}></i>
          <div class="center-text">
            <h3>Email</h3>
            <p>Sadaqa@Sadaqa.com</p>
          </div>
        </div>
        <div class="phone">
          <i class="fa-solid fa-phone fa-lg" style={{color: "#ffffff"}}></i>
          <h3>Phone</h3>
          <p>+962 7 9661 8504</p>
        </div>
        <div class="location">
          <i class="fa-solid fa-location-dot fa-lg" style={{color: "#fff"}}></i>
          <h3>Office</h3>
          <p>Orange Coding Academy</p>
        </div>
      </div>
    </>
  );
}
export default Contactus;