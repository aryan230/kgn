import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero-content">
      <div className="main-content-inside">
        <div className="left-main">
          <div className="left-main-top">
            <h1 className="left-main-heading">
              Build your dream <span className="color-span"> project</span> at
              minimal cost.
            </h1>
          </div>
          <div className="left-main-middle">
            <button className="left-main-button">Let's Talk</button>
          </div>
          <div className="left-main-bottom">
            <h2 className="left-main-footer">
              Trusted by some of the leading brands:
            </h2>
            <div className="left-bottom-logos">
              <img
                src="https://airpopmedia.com/wp-content/uploads/2022/03/tool-4.png"
                alt=""
              />
              <img
                src="https://airpopmedia.com/wp-content/uploads/2022/03/tool-5.png"
                alt=""
              />
              <img
                src="https://airpopmedia.com/wp-content/uploads/2022/03/tool-3.png"
                alt=""
              />
              <img
                src="https://airpopmedia.com/wp-content/uploads/2022/03/tool-10.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", duration: 2 }}
          className="right-main"
        >
          <img src="./assets/main-logo.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
