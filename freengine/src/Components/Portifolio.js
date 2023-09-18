import React from "react";
import "../App.css";
import Starz from "../Components/5.jpg";
import Prodi from "../Components/4.jpg";
import cpjsp from "../Components/3.png";
function Portifolio() {
  return (
    <div className="portifolio">
      <h1 className="portifolio-title">Our recent work</h1>
      <div className="cards-space">
        <div className="work-card">
          <img className="starz" src={Starz} alt='portifolioimage' />
          <div className="content">
            <h3 className="head3">888starz</h3>
            <p className="para">
              Mobile payment functionality on mobile and all networks in Rwanda.
            </p>
            <a className="url" href="https://888starz.bet" target="_blank">
              Learn more
            </a>
          </div>
        </div>

        <div className="work-card">
          <img className="starz" src={cpjsp} alt='portifolioimage' />
          <div className="content">
            <h3 className="head3">CPJSP</h3>
            <p className="para">
              PHP admin panel in which admin performs CRUD operations.
            </p>
          </div>
        </div>

        <div className="work-card">
          <img className="starz" src={Prodi} alt='portifolioimage' />
          <div className="content">
            <h3 className="head3">Prodi</h3>
            <p className="para">
              Wordpress site with online booking system and administration.
            </p>
            <a className="url" href="https://prodi.rw" target="_blank">
              Learn more
            </a>
          </div>
        </div>
        <div className="work-card">
          <img className="starz" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadmx-l8WF4ZidZQy0PGoFV9QfWpxDQKW2pWuSyT7Qdht3xW9bbhmSvAcgT4MdxT71rB0&usqp=CAU" alt='portifolioimage' />
          <div className="content">
            <h3 className="head3">Lightcenter</h3>
            <p className="para">
              Wordpress site with online booking system and administration.
            </p>
            <a className="url" href="https://lightcenter.rw" target="_blank">
              Learn more
            </a>
          </div>
        </div>
        <div className="work-card">
          <img className="starz" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadmx-l8WF4ZidZQy0PGoFV9QfWpxDQKW2pWuSyT7Qdht3xW9bbhmSvAcgT4MdxT71rB0&usqp=CAU" alt='portifolioimage' />
          <div className="content">
            <h3 className="head3">Uwezo</h3>
            <p className="para">
              Wordpress site with online booking system and administration.
            </p>
            <a className="url" href="https://uwezogroupe.com" target="_blank">
              Learn more
            </a>
          </div>
        </div>
        <div className="work-card">
          <img className="starz" src="https://static.vecteezy.com/system/resources/thumbnails/005/611/079/small/businessman-designing-a-website-by-coding-on-a-desktop-computer-images-for-web-banners-free-vector.jpg" alt='portifolioimage' />
          <div className="content">
            <h3 className="head3">Bookingrenders</h3>
            <p className="para">
              Wordpress site with online booking system and administration.
            </p>
            <a className="url" href="https://bookingrenders.com" target="_blank">
              Learn more
            </a>
          </div>
        </div>

        {/*Styling the services info */}
      </div>
    </div>
  );
}

export default Portifolio;
