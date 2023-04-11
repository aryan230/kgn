import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
function ServicesHome() {
  const [width, setWidth] = useState(0);
  const slider_ref = useRef();

  useEffect(() => {
    setWidth(slider_ref.current.scrollWidth);
  }, []);
  return (
    <section className="services">
      <h1 className="services-heading">The services we can help you</h1>
      <p className="services-description">
        As a web development firm, we offer a range of services to help
        businesses create and maintain a professional and effective online
        presence. Our services include:
      </p>

      <motion.div
        className="services-bottom"
        ref={slider_ref}
        whileTap={{
          cursor: "grabbing",
        }}
        whileHover={{
          cursor: "grabbing",
        }}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <div className="service-div">
          <div className="service-div-container">
            <i className="fa-solid fa-window" />
            <h1 className="servide-div-top-header">Web Development</h1>
            <p className="services-div-description">
              As a web development firm, we offer a range of services to help
              businesses create and maintain a professional and effective online
              presence. Our services include:
            </p>
            <div className="service-div-bottom">
              <button className="service-button">View More</button>
            </div>
          </div>
        </div>
        <div className="service-div">
          <div className="service-div-container">
            <i className="fa-solid fa-bag-shopping" />
            <h1 className="servide-div-top-header">E-commerce Development</h1>
            <p className="services-div-description">
              We help businesses sell their products and services online by
              building secure and scalable e-commerce platforms that provide a
              seamless shopping experience for customers.
            </p>
            <div className="service-div-bottom">
              <button className="service-button">View More</button>
            </div>
          </div>
        </div>
        <div className="service-div">
          <div className="service-div-container">
            <i className="fa-solid fa-bag-shopping" />
            <h1 className="servide-div-top-header">E-commerce Development</h1>
            <p className="services-div-description">
              We help businesses sell their products and services online by
              building secure and scalable e-commerce platforms that provide a
              seamless shopping experience for customers.
            </p>
            <div className="service-div-bottom">
              <button className="service-button">View More</button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ServicesHome;
