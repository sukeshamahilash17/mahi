// src/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <h1>About Us</h1>
                    <p style={{ color: 'white', marginRight: '70px' }}>
                        We are a leading company in our industry, committed to providing quality services and products to our customers. Our mission is to innovate and lead the market while maintaining our core values of integrity and excellence.
                    </p>
                </div>
                <div className="footer-section">
                    <h1 style={{ color: '#3498db' }}>CONTACT</h1>
                    <ul>
                        <li><a href="mailto:info@company.com"><i className="fas fa-envelope"></i> info@company.com</a></li>
                        <li><a href="tel:+918870065633"><i className="fas fa-phone"></i> +91 8974082765</a></li>
                        <li className="white-text"><i className="fas fa-map-marker-alt"></i> 1234 Street Name, City, State, Country</li>

                    </ul>
                </div>  
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-media">
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
