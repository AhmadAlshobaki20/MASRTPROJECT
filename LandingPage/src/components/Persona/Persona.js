import Persona_image from "../../assets/Persona_image.png";
import './Persona.css'
function Persona() {
  return (
    <>
      <section className="Persona">
        <img src={Persona_image} id="Persona-image" alt=".." />
        <p id="Persona-text">
          “Your application gave me an amazing opportunity to form a new habit
          to learn language regularly and of course improve my language skills.”
        </p>
      </section>
    </>
  );
}

export default Persona; 