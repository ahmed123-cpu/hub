import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    id: 1,
    image: "./laptop-stand.png",
    title: "Welcome to Qanas-Hub",
    subtitle: "Discover amazing products at unbeatable prices",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "./wireless-headphones.png",
    title: "Latest Collections",
    subtitle: "Stay ahead with our newest arrivals",
    buttonText: "Explore",
  },
  {
    id: 3,
    image: "./bluetooth-speaker.jpg",
    title: "Unbeatable Offers",
    subtitle: "Grab your favorite items at the best prices",
    buttonText: "Get Started",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToShop = () => {
    const element = document.getElementById("shop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.6), 
              rgba(0, 0, 0, 0.3)
            ), url(${slide.image})`,
          }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button className="hero-button" onClick={scrollToShop}>
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
