import React from 'react';
import './styles.css';

const WomensWatches = () => {
  return (
    <div className="womens-watches">
      <h2>Women's Watches</h2>
      <p>Discover our collection of stylish and sophisticated women's watches. From classic designs to modern timepieces, find the perfect watch to complement your style.</p>

      <div className="watch-list">
        <div className="watch-item">
          <img src="/images/fashion.jpeg" alt="Watch 1" />
          <div className="watch-details">
            <h3>Elegance Redefined</h3>
            <p>Explore our latest collection featuring timeless elegance and precision craftsmanship. These watches are crafted with premium materials and are perfect for any occasion.</p>
            <p>Price Range: $100 - $500</p>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
            <button className="btn btn-warning">Add cart</button>
          </div>
        </div>

        <div className="watch-item">
          <img src="/images/analogwatches.jpeg" alt="Watch 2" />
          <div className="watch-details">
            <h3>Modern Chic</h3>
            <p>Find the perfect blend of fashion and function with our contemporary designs. These watches combine cutting-edge technology with stylish aesthetics, making them a must-have accessory.</p>
            <p>Price Range: $200 - $800</p>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
            <button className="btn btn-warning">Add cart</button>
          </div>
        </div>

        <div className="watch-item">
          <img src="/images/contena.jpeg" alt="Watch 3" />
          <div className="watch-details">
            <h3>Sporty and Durable</h3>
            <p>For the active woman, our sporty watches offer durability and performance without compromising on style. These watches are water-resistant and built to withstand tough conditions.</p>
            <p>Price Range: $80 - $300</p>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
            <button className="btn btn-warning">Add cart</button>
          </div>
        </div>

        {/* Add more watch items as needed */}
      </div>
    </div>
  );
}

export default WomensWatches;
