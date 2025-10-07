import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Qanas-Hub</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to Qanas-Hub, your one-stop destination for quality products at amazing prices. We're passionate
              about bringing you the best selection of electronics, clothing, and home decor items.
            </p>
            <p>
              Founded in 2024, we've been committed to providing exceptional customer service and curating products that
              enhance your lifestyle. Our team carefully selects each item to ensure quality and value for our
              customers.
            </p>
            <p>
              Shop with confidence knowing that we stand behind every product we sell with our satisfaction guarantee
              and hassle-free returns.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
            <div className="feature">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
