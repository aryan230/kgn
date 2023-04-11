import React from "react";
import { motion } from "framer-motion";
const textVariants = {
  offScreen: {
    x: -500,
    opacity: 0,
  },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "spring", duration: 1.5 },
  },
};
function WhyChoose() {
  return (
    <section className="why-choose-us">
      <div className="wcu-inside">
        <div className="stars-of-life-wcu">
          <img
            src="https://airpopmedia.com/wp-content/uploads/2022/08/Shapewhitebig.png"
            alt=""
          />
        </div>
        <motion.h1
          className="wcu-header"
          variants={textVariants}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{
            once: false,
            amount: 0.1,
          }}
        >
          Why choose us <br />
          for your next project?
        </motion.h1>
        <div className="wcu-middle">
          <div className="wcu-left">
            <p className="wcu-description">
              Our goal is to provide our clients with comprehensive web
              solutions that meet their specific needs and exceed their
              expectations. Let's work together to create a powerful online
              presence for your business!
            </p>
            <button className="wcu-button">View Templates</button>
          </div>
          <div className="wcu-right">
            <img src="./assets/wcu.png" alt="" className="wcu-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
