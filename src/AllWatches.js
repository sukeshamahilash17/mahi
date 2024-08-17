import React from 'react';

const AllWatches = () => {
  const watches = [
    {
      id: 1,
      name: "Men's Classic Watch",
      description: "A timeless classic watch designed for elegance and durability.",
      price: 250,
      image: '/images/elegant .jpeg',
      category: 'men'
    },
   
    {
      id: 3,
      name: "spoerty watches",
      description: "A sporty chronograph watch with precise timekeeping features.",
      price: 300,
      image: '/images/spoerty.jpeg',
      category: 'unisex'
    },
    {
      id: 4,
      name: "Diver's Waterproof Watch",
      description: "A robust waterproof watch designed for diving enthusiasts.",
      price: 350,
      image: '/images/diverswatch.jpeg',
      category: 'men'
    },
    {
      id: 5,
      name: "Fashionable Women's Watch",
      description: "A fashionable watch that complements any outfit.",
      price: 150,
      image: '/images/fashion.jpeg',
      category: 'women'
    },
    {
      id: 6,
      name: "Smart Fitness Tracker",
      description: "A smartwatch with fitness tracking capabilities for active lifestyles.",
      price: 200,
      image: '/images/fitness.jpeg',
      category: 'unisex'
    },
    {
      id: 7,
      name: "Luxury Gold Watch",
      description: "An exquisite gold watch crafted for luxury enthusiasts.",
      price: 500,
      image: '/images/Luxury Gold Watch.jpeg',
      category: 'men'
    },
    {
      id: 8,
      name: "Chic Women's Bracelet Watch",
      description: "A chic bracelet watch that combines fashion with functionality.",
      price: 220,
      image: '/images/ChicWomensBraceletWatch.jpeg',
      category: 'women'
    },
    {
      id: 9,
      name: "Digital Sports Watch",
      description: "A digital sports watch with multiple functionalities for athletes.",
      price: 120,
      image: '/images/Digital Sports Watch.jpeg',
      category: 'unisex'
    },
    {
      id: 10,
      name: "Men's Formal Dress Watch",
      description: "A sleek and sophisticated watch for formal occasions.",
      price: 280,
      image: '/images/MensFormalDressWatch.jpeg',
      category: 'men'
    },
    
  ];

  return (
    <div>
      <h2>All Watches Collection</h2>
      <div className="watch-list">
        {watches.map(watch => (
          <div className="watch-item" key={watch.id}>
            <img src={process.env.PUBLIC_URL + watch.image} alt={watch.name} />
            <div className="watch-details">
              <h3>{watch.name}</h3>
              <p>{watch.description}</p>
              <p>Price: ${watch.price}</p>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buy Now</button>
              <button className="btn btn-warning">Add cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWatches;
