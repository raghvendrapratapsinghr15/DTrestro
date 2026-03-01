import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to our restaurant, where taste meets tradition.
              We believe that food is not just about eating — it’s about experience, memories, and happiness.

              Our chefs use fresh ingredients and authentic recipes to create dishes that bring comfort and joy to every table. Whether you are here for a family dinner, a celebration, or a casual meal, we promise quality, flavor, and warm hospitality.

              Come hungry, leave happy
            </p>
            <Link to="/menu">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;