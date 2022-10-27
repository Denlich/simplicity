import "../../index.css";
import "./Footer.css";

import telegram from "../../assets/img/icons/telegram.png";
import instagram from "../../assets/img/icons/instagram.png";
import facebook from "../../assets/img/icons/facebook.png";
import github from "../../assets/img/icons/github.png";
import dribbble from "../../assets/img/icons/dribbble.png";
import behance from "../../assets/img/icons/behance.png";
import linkedin from "../../assets/img/icons/linkedin.png";

import MarkedTitle from "../MarkedTitle";

const size = "24px";

const social = [
  { img: telegram, url: "/" },
  { img: instagram, url: "/" },
  { img: facebook, url: "/" },
  { img: github, url: "/" },
  { img: dribbble, url: "https://dribbble.com/Denlich" },
  { img: behance, url: "/" },
  { img: linkedin, url: "/" },
];

export default function Footer() {
  return (
    <div className="footer container pt-80 pb-80  ">
      <div className="row pb-80 grid grid--1x2 pt-40">
        <div className="contact col pb-40--mob">
          <MarkedTitle text="Contact" />

          <div className="contactInfo">
            <p>+380 123 456 789</p>
            <p>denys@simplicity.com</p>
            <p>maxym@simplicity.com</p>
          </div>
        </div>

        <div className="social col">
          <MarkedTitle text="Social" />

          <div className="socailLinks row">
            {(() => {
              let post = [];

              for (var i = 0; i < social.length; i++) {
                post.push(
                  <a href={social[i].url} target="_blank" className="link">
                    <img src={social[i].img} width={size} height={size} />
                  </a>
                );
              }

              return post;
            })()}
          </div>
        </div>
      </div>

      <p>Copyrights @ 2022 Simplicity. All rights reserved.</p>
    </div>
  );
}
