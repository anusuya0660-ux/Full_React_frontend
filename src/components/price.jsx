import React from 'react'
import "../pages/price.css";
const plans = [
  {
    id: 1,
    name: "Basic",
    price: "$9/mo",
    features: ["1 User", "5 Projects", "Basic Support"],
    popular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$29/mo",
    features: ["5 Users", "20 Projects", "Priority Support"],
    popular: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "$59/mo",
    features: ["Unlimited Users", "Unlimited Projects", "24/7 Support"],
    popular: false,
  },
];
function price() {
  return (
    <div className="pricing">

      {/* Header */}
      <section className="pricing-header">
        <h1>Pricing Plans</h1>
        <p>Choose a plan that fits your needs</p>
      </section>

      {/* Cards */}
      <section className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.id}
          >
            {plan.popular && <div className="badge">Most Popular</div>}

            <h2>{plan.name}</h2>
            <h3 className="price">{plan.price}</h3>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            <button className="btn">Choose Plan</button>
          </div>
        ))}
      </section>

    </div>
  )
}

export default price