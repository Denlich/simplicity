import "../../index.css";
import "./Form.css";

export default function Form() {
  return (
    <form action="https://formsubmit.co/muchalovych@gmail.com" method="POST">
      <div data-aos="zoom-in-left" className="pb-20">
        <label>Name:</label> <br />
        <input type="text" name="name" required />
      </div>

      <div data-aos="zoom-in-right" className="pb-20">
        <label>Email adress:</label> <br />
        <input type="email" name="email" required />
      </div>

      <div data-aos="zoom-in-left" className="pb-20">
        <label>Subject:</label> <br />
        <input type="text" name="subject" required />
      </div>

      <div data-aos="zoom-in-right" className="pb-20">
        <label>Company:</label> <br />
        <input type="text" name="company" required />
      </div>

      <div data-aos="zoom-in-left" className="pb-20">
        <label>Details information:</label> <br />
        <input type="text" name="details" required />
      </div>

      <input data-aos="fade-up" type="submit" value="Send" />
    </form>
  );
}
