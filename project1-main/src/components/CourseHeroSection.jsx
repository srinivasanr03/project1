import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { BsCameraVideo } from "react-icons/bs";
import "../styles/CourseHeroSection.scss"


const CourseHeroSection = ({ course }) => {
    const {
      title,
      description,
      rating,
      studentsCount,
      language,
      lecturesCount,
      image,
      newCost,
      oldCost,
      courseDetails,
      whatYouWillLearn,
    } = course;

  return (
    <div className="banner">
    
          <div className="left">
            <span>{title}</span>
            <div className="descrp">
              <p>{description}</p>
            </div>
            <div className="starrating">
              <h6>{rating}</h6>
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
              <span className="nof">{studentsCount} students</span>
            </div>
            <div className="tagline">
              <div className="lang">
                <span>
                  <GrLanguage /> {language}
                </span>
              </div>
              <div className="lect">
                {" "}
                <span>
                  <BsCameraVideo /> {lecturesCount} Lectures
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="right">
            <div className="card">
              <div className="card-img">
                <img src={image} alt="" />
              </div>

              <div className="course-cost">
                <span className="new-cost">₹{newCost}</span>
                <span className="old-cost">₹{oldCost}</span>
              </div>

              <div className="buy-button">Enroll Now</div>

              <div className="course-details">
                <h2>This Course Includes:</h2>
                <ul>
                  {courseDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


      <div className="learn">
        <h2>What you'll learn</h2>
        <ul>
          {whatYouWillLearn.map((learn, index) => (
            <li key={index}>{learn}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CourseHeroSection;