import React from 'react';
import "./Foot.css"
export default function Foot() {
  return (
    <>
        <footer className="footer">
        <div className="footer__addr">
        <h1 className="footer__logo">Plate<br/>Perfection</h1>
        <h2>Contact us</h2>
        <address>1234 Culinary Lane, Food City, NY 10001<br/>
            <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
        </div>
  
        <ul className="footer__nav">
        <li className="nav__item">
            <h2 className="nav__title">Operating Hours</h2>
            <ul className="nav__ul">
                <li>
                    <a href="#">Monday-Friday: 10:00 AM – 10:00 PM</a>
                </li>
                <li>
                    <a href="#">Saturday: 9:00 AM – 11:00 PM
                    </a>
                </li>
                <li>
                    <a href="#">Sunday: 9:00 AM – 9:00 PM
                    </a>
                </li>
            </ul>
        </li>
        <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Menu Links:</h2>
            <ul className="nav__ul nav__ul--extra">
                <li>
                    <a href="#">Breakfast</a>
                </li>

                <li>
                    <a href="#">Lunch</a>
                </li>
        
                <li>
                    <a href="#">Dinner</a>
                </li>
        
                <li>
                    <a href="#">Desserts</a>
                </li>
        
                <li>
                    <a href="#">Drinks</a>
                </li>
            </ul>
        </li>
    
        <li className="nav__item">
            <h2 className="nav__title">Reservation And Order Links</h2>
            <ul className="nav__ul">
                <li>
                    <a href="#">Reserve a Table</a>
                </li>
        
                <li>
                    <a href="#">Order for Deliver</a>
                </li>
            </ul>
        </li>
        </ul>
  
        <div className="legal">
             <p>&copy; 2024. All rights reserved.</p>
    
            {/* <div className="legal__links">
                <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
         </div> */}
            </div>
        </footer>
    </>
  );
}