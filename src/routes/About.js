import "../index.css";
import "../style/About.css";
import MarkedTitle from "../component/MarkedTitle";

export default function About() {
  return (
    <div className="container">
      <div data-aos="fade-right" className="titleContainer pt-80 pb-40">
        <h1 className="title">
          <mark className="markedTitle">Hi</mark>!
        </h1>
      </div>

      <div data-aos="fade-left" className="textContainer pb-80 about--details">
        <p className="pb-20">
          We`re passionate and pragmatic software engineers, specializing in
          mobile development using React Native on the frontend and Node JS on
          the backend.
        </p>
        <p className="pb-20">
          Strong understanding of the main concepts of React, repeated work with
          NoSQL databases such as MongoDB are all about us.
        </p>
        <p className="pb-20">
          Our team can <mark>always</mark> help with your ideas in all stages of
          our journey.
        </p>
        <p className="pb-20">
          Determination and passion of all our members makes work perfect and{" "}
          <markg>always</markg> in time.
        </p>
        <p>
          We aim to make things simple during development, it is one of our main
          concepts.
        </p>
      </div>

      <div className="practicalInfo row grid grid--1x2">
        <div data-aos="zoom-in" className="col about--details mb-20">
          <MarkedTitle text="Skills" />

          <p className="pb-20">
            Adobe CC (Xd, Ps, Ai) <br />
            Figma <br />
            JavaScript <br />
            Typescript <br />
            React native <br />
            React.js <br />
            HTML / CSS <br />
          </p>

          <p>
            Node.js <br />
            NoSQL/NoSQL <br />
            MongoDB
          </p>
        </div>
        <div data-aos="zoom-in" className="col about--details">
          <MarkedTitle text="Experience" />
        </div>
      </div>
    </div>
  );
}
