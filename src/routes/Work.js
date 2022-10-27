import "../index.css";
import "../style/Work.css";

import Project from "../component/Project/Project";

import mowee from "../assets/img/Mowee.png";
import foodApp from "../assets/img/FoodApp.png";
import eatIs from "../assets/img/EatIs.png";

export default function Work() {
  return (
    <div className="container grid">
      <div data-aos="fade-right" className="titleContainer pt-80 pb-80">
        <h1 className="title">
          We enjoy making ideas and turn them into{" "}
          <mark className="markedTitle">reality</mark>!
        </h1>
      </div>

      <div className="grid grid--1x2 pb-40">
        <div className="mr-20" data-aos="fade-up">
          <Project img={mowee} name="Mowee" />
        </div>
        <div className=" mt-10" data-aos="fade-up">
          <Project img={foodApp} name="FoodApp" />
        </div>
        <div className="mr-20 mt-10" data-aos="fade-up">
          <Project img={eatIs} name="EatIs" />
        </div>
      </div>
    </div>
  );
}
