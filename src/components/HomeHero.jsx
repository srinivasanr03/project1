import React from "react";
import "../styles/homehero.css";
import Typewriter from 'typewriter-effect';
const HomeHero = () => {
  // const images = [
  //   {
  //     title: "learn",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
  //     link: "https://unstop.com/courses",
  //   },
  //   {
  //     title: "practice",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
  //     link: "https://unstop.com/practice",
  //   },
  //   {
  //     title: "mentorships",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
  //     link: "https://unstop.com/mentor",
  //   },
  //   {
  //     title: "compete",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406",
  //     link: "https://unstop.com/compete",
  //   },
  //   {
  //     title: "jobs",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406",
  //     link: "https://unstop.com/job-portal",
  //   },
  //   {
  //     title: "blogs",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406",
  //     link: "https://unstop.com/blog",
  //   },
  // ];

  return (
    <section className="home-hero">
      <div className="home-hero-container container">
        <div className="home-hero-left">
          <h1>
            {/* Connecting */}
            <strong>
            Empowering Futures
            by Connecting
            </strong>
            <span><Typewriter
              options={{
                strings: ['Students', 'Colleges', 'Recruiters!'],
                autoStart: true,
                loop: true,
              }}
              /></span>
            {/* Students, Colleges, <br/>and Recruiters!.  */}
          </h1>
          <p>
          
          </p>
        </div>
        <div className="home-hero-right-image">
          {/* <div className="home-hero-right-images">
            {images.map((ele) => {
              return (
                <div
                  className="home-hero-image"
                  key={ele.image}
                >
                  <span>{ele.title}</span>
                  <a href={ele.link}>
                    <img
                      src={ele.image}
                      alt={ele.title}
                    />
                  </a>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
