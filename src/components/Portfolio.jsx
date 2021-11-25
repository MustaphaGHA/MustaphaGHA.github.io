import React from "react";
import "../css/Portfolio.css";
import Project1 from '../img/portfolio-1.png';
import Project2 from '../img/portfolio-2.jpg';
import Project3 from '../img/portfolio3.png';

function Portfolio() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          These are the latest projects i worked on , whether it is a freelance project
        </p>
        <p className="heading p__color">
          or a training one to master some new technologies.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Website</h5>
                     <h4 className="project__text">Zaril Tech news blog</h4>
                     <a href="https://github.com/MustaphaGHA/zaril-tech" className="project__btn">View source code</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Web Application</h5>
                     <h4 className="project__text">An Uber clone web application</h4>
                     <a href="https://uber-clone-mustaphagha.vercel.app/" className="project__btn">View web app</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Desktop Application</h5>
                     <h4 className="project__text">Customer relationship management software</h4>
                     <a href="#" className="project__btn">In progress</a>
                     </div>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Portfolio;
