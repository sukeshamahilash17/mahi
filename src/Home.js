import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Slider from "./Slider";
import Contact from "./footer"; 
import './App.css'; // Ensure correct file extension for CSS


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const products = [
    { id: 1, name: "FARER CRONOGRAPH", price: "$699.99", img: "https://www.thecoolector.com/wp-content/uploads/2019/02/fa9-580x580.jpg"},
    { id: 2, name: "FOSSIL FS5401", price: "$799.99", img: "https://c.76.my/Malaysia/fossil-fs5401-men-s-commuter-chronograph-leather-strap-brown-davis-1804-23-DAVIS@18.jpg" },
    { id: 3, name: "TIMEX", price: "$999.99", img: "https://res.cloudinary.com/mavrck/image/fetch/f_jpg/https://s3.amazonaws.com/SPLASHSCORE-MOBILE/action_images/24890_1600322778416.jpg" },
    { id: 4, name: "LICARR", price: "$989.99", img: "https://my-test-11.slatic.net/p/34d0b4f6794fcf5564913c4f6465e6ba.jpg" },
    { id: 5, name: "CURREN", price: "$567.99", img: "https://i.pinimg.com/originals/22/a2/97/22a2975ec49f00d6032b1f1cef1692b3.jpg" },
    { id: 6, name: "LUMINOUS QUARTZ", price: "$898.99", img: "https://i5.walmartimages.com/asr/968cbbfd-03c2-4e32-8493-f26267e0af34_1.6fe710d9a965f7f2e100f209e5cd61f6.jpeg" },
    { id: 7, name: "MVMT Chronograph", price: "$1,199.99", img: "https://i.otto.de/i/otto/e24e0d60-c693-5685-8cc0-5ced444fd38f/mvmt-chronograph-mvmt-herrenuhr-chrono-mc02-blbl.jpg?$formatz$" },
    { id: 8, name: "Rolex GMT-Master II", price: "$15,999.99", img: "https://th.bing.com/th/id/OIP.C2Nnj0Ma-FlgMuHQXK7L8gHaE8?rs=1&pid=ImgDetMain" },
    { id: 9, name: "Casio G-Shock", price: "$499.99", img: "https://th.bing.com/th/id/OIP.7Y0O5QhDpYVWt0Ld4A1B-gHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.4&pid=1.7" }
  ];

  const query = useQuery();
  const searchQuery = query.get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div style={{ backgroundColor: '#89CFF0', minHeight: '100vh' }}>
      <Slider />
      
      <div className="container text-center mt-5">
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card card-hover-effect" style={{ width: "100%" }}>
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={`${product.name} Watch`}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'blue' }}>{product.name}</h5>
                  <p className="card-text" style={{ color: 'red' }}>{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-warning">
                    VIEW details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <h2 style={{ color: 'green' }}>Why Choose Us?</h2>
          <p>
            We offer a wide selection of high-quality watches, ranging from luxury timepieces to everyday essentials. Our commitment to customer satisfaction ensures a seamless shopping experience with expert support and guidance.
          </p>
          <p>
            Explore our collection and find the perfect watch that suits your style and needs. Whether it's for a special occasion or daily wear, we have something for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
