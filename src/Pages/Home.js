import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ServicesHome from "../Components/ServicesHome";
import WhyChoose from "../Components/WhyChoose";
import BookHome from "../Components/BookHome";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-content-wrapper">
        <Header />
        <Hero />
      </section>
      <ServicesHome />
      <WhyChoose />
      <BookHome />
    </div>
  );
}

export default Home;
