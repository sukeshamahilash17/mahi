import React from 'react';

const MensWatches = () => {
  return (
    <div>
      <h2>Men's Watches Collection</h2>
      <p>Explore our exclusive collection of men's watches, designed for style, precision, and durability.</p>

      <div className="watch-list">
        {/* Watch Item 1: Classic Elegance */}
        <div className="watch-item">
          <img src="/images/mens classic.jpeg" alt="Men's Watch 1" />
          <div className="watch-details">
            <h3>Classic Elegance</h3>
            <p>
              Discover timeless sophistication with our classic men's watches. Crafted from premium materials and designed for lasting comfort.
            </p>
            <p>Price Range: $200 - $1000</p>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
    <button className="btn btn-warning">Add cart</button>
          </div>
        </div>

        {/* Watch Item 2: Sporty Performance */}
        <div className="watch-item">
          <img src="/images/spoerty.jpeg" alt="Men's Watch 2" />
          <div className="watch-details">
            <h3>Sporty Performance</h3>
            <p>
              For the active gentleman, our sporty watches offer robust features and reliability. Built to withstand the rigors of an active lifestyle.
            </p>
            <p>Price Range: $150 - $800</p>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
            <button className="btn btn-warning">Add cart</button>
          </div>
        </div>

        {/* Watch Item 3: Luxury and Prestige */}
        <div className="watch-item">
          <img src="/images/luxury prestige.jpeg" alt="Men's Watch 3" />
          <div className="watch-details">
            <h3>Luxury and Prestige</h3>
            <p>
              Indulge in luxury with our premium men's watches collection. Each timepiece exudes elegance and refinement, making it a statement of success.
            </p>
            <p>Price Range: $500 - $5000</p>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
            <button className="btn btn-warning">Add cart</button>
          </div>
        </div>

        {/* Add more watch items as needed */}
      </div>
    </div>
  );
};

export default MensWatches;
