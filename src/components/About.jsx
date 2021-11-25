import React from "react";
import "../css/About.css";
import aboutImg from "../img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <br /><br /><br /><br />
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am Mustapha Ghannouchi , 26 years old , i live in Tunisia , 
                got my bachelor's in computer science in 2020 . Since then, i 
                started working as a fulltime backend developer using Java core and Java swing 
                while studying for my engineering degree in computer science .   
              </p>
              <p className="about__text p__color">
                Apart from that , i'm an enthusiastic to web & mobile development , especially new technologies 
                such as ReactJS and Native , Flutter ... I've been following technology news to be always up to date . 
              </p>
              <p className="about__text p__color">
                Below , you can find my cv attached , my Linkedin Profile and my Github profile if you want to check out projects i worked on .
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://github.com/MustaphaGHA/MustaphaGHA.github.io/raw/master/MustaphaGhannouchi.pdf">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="https://www.linkedin.com/in/mustapha-ghannouchi/">
                  <button className="about btn pointer">Linkedin</button>
                </a>
                <a href="https://github.com/MustaphaGHA">
                  <button className="about btn pointer">Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
