import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about-container" style={{ backgroundColor: '#d3f1cd', padding: '20px' }}>
            <section className="about-section">
           
                <h2 className="about-heading">Our Story</h2>
                <p className="about-text">
                    Founded with a passion for timepieces, we aim to offer watches that blend elegance with functionality. Our journey began in [Your Location], driven by a commitment to quality craftsmanship and customer satisfaction. We strive to innovate and create watches that not only keep time accurately but also reflect timeless style.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-heading">Key Features</h2>
                <ul className="about-list">
                    <li>Durable and stylish designs crafted from premium materials</li>
                    <li>Precise quartz and automatic movements</li>
                    <li>Water-resistant options suitable for various environments</li>
                    <li>Varied styles to suit all preferences, from classic to contemporary</li>
                    <li>Extended battery life and low maintenance</li>
                </ul>
            </section>

            <section className="about-section">
                <h2 className="about-heading">Customer Care</h2>
                <p className="about-text">
                    At [Your Company Name], customer satisfaction is paramount. We offer dedicated support to assist you with any queries or concerns regarding our products. Our knowledgeable team is available to provide personalized recommendations and ensure your shopping experience is seamless. Contact us via email at <a href="mailto:info@yourcompany.com">info@yourcompany.com</a> or call us at <a href="tel:+1234567890">+1 234 567 890</a>.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-heading">Quality Assurance</h2>
                <p className="about-text">
                    Each watch undergoes rigorous testing to meet our high standards of quality assurance. From materials selection to final assembly, we prioritize durability and reliability. Rest assured, every timepiece from [Your Company Name] is crafted with attention to detail and backed by our commitment to excellence.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-heading">Community Engagement</h2>
                <p className="about-text">
                    Beyond creating exceptional watches, we are dedicated to giving back to the community. Through partnerships and initiatives, we support causes that align with our values of social responsibility and sustainability. Join us in making a positive impact and explore our latest community projects.
                </p>
            </section>
        </div>
    );
}

export default About;
