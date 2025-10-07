import "./Deals.css"

function Deals() {
  const deals = [
    { id: 1, title: "Summer Sale", discount: "50% OFF", description: "Selected clothing items", color: "#ff6b35" },
    { id: 2, title: "Tech Week", discount: "30% OFF", description: "All electronics", color: "#4f46e5" },
    { id: 3, title: "Home Refresh", discount: "40% OFF", description: "Home & decor products", color: "#10b981" },
  ]

  return (
    <section id="deals" className="deals-section">
      <div className="container">
        <h2 className="section-title">Special Deals</h2>
        <div className="deals-grid">
          {deals.map((deal) => (
            <div key={deal.id} className="deal-card" style={{ borderColor: deal.color }}>
              <div className="deal-badge" style={{ backgroundColor: deal.color }}>
                {deal.discount}
              </div>
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <button className="deal-button" style={{ backgroundColor: deal.color }}>
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Deals
