import React from 'react';
import ReactDOM from 'react-dom/client';
// import Cv from './cv.jsx'
import './index.css';
import $ from 'jquery'

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass("fa-times");
        $("header").toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $("#menu").removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});

function Cv() {
  return <div>
      <header>
          <div className="user">
                <img src="https://raw.githubusercontent.com/obaidmuneer/my_new_cv/main/img/pic1.jpg" alt="Pics" />
                  <h3 className="name">Obaid Muneer</h3>
                  <p className="post">This is Obaid Muneer</p>
          </div>

          <ul className="nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
          </ul>
      </header>

      <div id="menu" className="fas fa-bars"></div>

      <section className="home" id="home">
          <h3>YO!</h3>
          <h1>I am <span>Obaid Muneer</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit earum cum recusandae ipsa minus blanditiis repudiandae repellat laborum facilis, accusantium accusamus omnis magni. Corrupti maxime exercitationem cupiditate similique odio sequi?</p>
          <a href="#about"><button className="btn">About me <i className="fas fa-user"></i></button></a>
      </section>

      <div className="about" id="about">
          <h1 className="heading"><span>About</span> me</h1>

          <div className="row">
              <div className="info">
                  <h3><span>Name:</span>Obaid Muneer</h3>
                  <h3><span>Age:</span>24</h3>
                  <h3><span>Qualification:</span>درسِ نظامی</h3>
                  <h3><span>language:</span>Urdu</h3>
              </div>

              <div className="counter">
                  <div className="box">
                      <span>100+</span>
                      <h3>Project Completed</h3>
                  </div>
                  <div className="box">
                      <span>100+</span>
                      <h3>Happy Clients</h3>
                  </div>
                  <div className="box">
                      <span>12+</span>
                      <h3>Awards Won</h3>
                  </div>
                  <div className="box">
                      <span>12+</span>
                      <h3>Its 12:34AM</h3>
                  </div>
              </div>
          </div>


      </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cv />
  </React.StrictMode>
);


