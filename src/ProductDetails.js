import React from "react";
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data (you can replace this with actual data fetching logic)
  const products = [
    { id: 1, name: "FARER CRONOGRAPH", description: "The FARER CRONOGRAPH watch is a masterpiece of design and precision. It features a sleek and modern chronograph dial with multiple sub-dials for accurate timekeeping. Crafted with premium materials, this watch exudes luxury and durability. Whether you're in the boardroom or exploring the outdoors, the FARER CRONOGRAPH ensures you stand out with its elegant design and impeccable craftsmanship", image: "https://www.thecoolector.com/wp-content/uploads/2019/02/fa9-580x580.jpg", price: "$699.99", rating: 4.5 },
    { id: 2, name: "FOSSIL FS5401",  description: "The FOSSIL FS5401 is a sophisticated chronograph watch designed for the modern gentleman. It features a robust stainless steel case with a rich leather strap, combining style with durability. The watch dial includes multiple sub-dials for precise timekeeping and a date window for added functionality. With its timeless design and reliable performance, the FOSSIL FS5401 is perfect for both formal and casual occasions.", image: "https://c.76.my/Malaysia/fossil-fs5401-men-s-commuter-chronograph-leather-strap-brown-davis-1804-23-DAVIS@18.jpg", price: "$799.99", rating: 4.0 },
    { id: 3, name: "TIMEX",  description: "The TIMEX watch combines classic design with modern technology. Featuring a sleek stainless steel case and a comfortable leather strap, it offers durability and style in one package. The watch face includes luminous hands and markers for easy readability in any lighting condition. With its reliable quartz movement, the TIMEX watch ensures accurate timekeeping. Whether you're at work or on a weekend adventure, this timepiece is your perfect companion for every occasion.",image: "https://res.cloudinary.com/mavrck/image/fetch/f_jpg/https://s3.amazonaws.com/SPLASHSCORE-MOBILE/action_images/24890_1600322778416.jpg", price: "$999.99", rating: 4.3 },
    { id: 4, name: "LICARR", description: "The LICARR watch is a testament to elegant simplicity. f a minimalist design with a polished stainless steel case and a genuine leather strap, it exudes sophistication. The watch dial is adorned with subtle hour markers and hands, offering a clean and timeless look. Powered by precise quartz movement, the LICARR watch ensures accurate timekeeping. Whether you're attending a formal event or enjoying a casual outing, this watch adds a touch of refinement to your attire.", image: "https://my-test-11.slatic.net/p/34d0b4f6794fcf5564913c4f6465e6ba.jpg", price: "$989.99", rating: 4.7 },
    { id: 5, name: "CURREN", description: "The CURREN watch combines rugged durability with urban style. Featuring a robust stainless steel case and a comfortable leather strap, it is designed for both functionality and fashion. The watch face is crafted with precision, featuring luminous hands and hour markers for clear visibility in any lighting. Powered by quartz movement, the CURREN watch ensures reliable timekeeping. Whether you're exploring the city streets or attending a casual gathering, this watch is your perfect companion.", image: "https://i.pinimg.com/originals/22/a2/97/22a2975ec49f00d6032b1f1cef1692b3.jpg", price: "$567.99", rating: 3.9 },
    { id: 6, name: "LUMINOUS QUARTZ", description: "The LUMINOUS QUARTZ watch is crafted with sophistication and functionality in mind. It features a sleek design with a stainless steel case and bracelet, exuding elegance and durability. The watch dial showcases luminous hands and markers, ensuring easy readability in any lighting condition. Powered by quartz movement, it offers precise timekeeping. Whether worn for formal occasions or daily use, the LUMINOUS QUARTZ watch is a symbol of style and reliability.", image: "https://i5.walmartimages.com/asr/968cbbfd-03c2-4e32-8493-f26267e0af34_1.6fe710d9a965f7f2e100f209e5cd61f6.jpeg", price: "$898.99", rating: 4.8 },
    { id: 7, name: "MVMT Chronograph", description: "The MVMT Chronograph is a statement of modern sophistication and precision engineering. With its stainless steel case and bracelet, this timepiece exudes robust elegance. It features a chronograph function for precise time measurement, complemented by luminous hands and markers on the sleek black dial. Powered by quartz movement, the MVMT Chronograph ensures reliable and accurate timekeeping. Whether worn in the boardroom or during outdoor adventures, this watch combines style with functionality, making it an essential accessory for the discerning individual.", image: "https://i.otto.de/i/otto/e24e0d60-c693-5685-8cc0-5ced444fd38f/mvmt-chronograph-mvmt-herrenuhr-chrono-mc02-blbl.jpg?$formatz$", price: "$1,199.99", rating: 4.6 },
    { id: 8, name: "Rolex GMT-Master II", description: "The Rolex GMT-Master II is the ultimate expression of luxury and precision. This iconic timepiece is crafted from premium materials, including 18-carat white gold. It features a distinctive blue and black ceramic bezel, known as the 'Batman' bezel, which rotates to display multiple time zones. The black dial is adorned with luminous hour markers and hands, ensuring readability in any lighting condition. Powered by Rolex's self-winding movement, the GMT-Master II delivers unparalleled accuracy and reliability. Whether worn for business meetings or adventurous journeys, this watch exemplifies timeless elegance and functionality.", image: "https://th.bing.com/th/id/OIP.C2Nnj0Ma-FlgMuHQXK7L8gHaE8?rs=1&pid=ImgDetMain", price: "$15,999.99", rating: 4.9 },
    { id: 9, name: "Casio G-Shock", description: "The Casio G-Shock is a legendary timepiece renowned for its durability and robust design. Designed to withstand harsh conditions, it features shock resistance, water resistance up to 200 meters, and a rugged construction that ensures reliability in challenging environments. The watch includes a range of advanced functionalities such as multiple time zones, stopwatch, countdown timer, and daily alarms. Its digital display provides clear visibility of time and date, enhanced by an electro-luminescent backlight for nighttime use. Ideal for outdoor activities and sports enthusiasts, the Casio G-Shock combines toughness with practicality.", image: "https://th.bing.com/th/id/OIP.7Y0O5QhDpYVWt0Ld4A1B-gHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.4&pid=1.7" , price: "$499.99", rating: 4.2 },
  ];

  const product = products.find(p => p.id === parseInt(id));

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const starStyle = {
      color: 'yellow',
      textShadow: '0 0 6px black' 
    };
  
    return (
      <>
        {[...Array(fullStars)].map((_, i) => <i key={`full-${i}`} className="fas fa-star" style={starStyle}></i>)}
        {halfStar && <i key="half" className="fas fa-star-half-alt" style={starStyle}></i>}
        {[...Array(emptyStars)].map((_, i) => <i key={`empty-${i}`} className="far fa-star" style={starStyle}></i>)}
      </>
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div>{renderStars(product.rating)}</div>
          <h1 style={{ color: 'red' }}>{product.price}</h1>
          <div className="row">
            
              <button className="btn btn-primary btn-block btn-lg">Add to Cart</button>
            </div>
            <div className="mt-3"> 
            <div className="row">
            
              <button className="btn btn-warning btn-block btn-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default ProductDetails;
