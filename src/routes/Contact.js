import Form from "../component/Form/Form";
import "../index.css";

export default function Contact() {
  return (
    <div className="container">
      <div data-aos="fade-right" className="titleContainer pt-80 pb-80">
        <h1 className="title">
          Get in touch <br />
          Let's work <mark className="markedTitle">together</mark>.
        </h1>
      </div>

      <Form />
    </div>
  );
}
