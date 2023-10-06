import React from "react";
import './footer.css';

export const Footer = ({ company }) => (
    <footer className="footer">
        <img src={'./img/logo.svg'} alt="logo Space X" className="logo" />
        <nav className="footer-nav">
            <ul className="list">
                <li className="item"><a href={company.elon_twitter} rel="noopener noreferrer" target='_blank' className="item-link">Elon Musk
                    Twitter</a></li>
                <li className="item"><a href={company.flickr} rel="noopener noreferrer" target='_blank' className="item-link">Flickr</a></li>
                <li className="item"><a href={company.twitter} rel="noopener noreferrer" target='_blank' className="item-link">Twitter</a>
                </li>
                <li className="item"><a href={company.website} rel="noopener noreferrer" target='_blank' className="item-link">Website</a>
                </li>
            </ul>
        </nav>
        <p className="footer-text">
            For tefullinn fraaje, kontakt&#160;
            <a className="footer-link" href="mailto:rideshare@spacex.com">rideshare@spacex.com</a>
        </p>

    </footer>
);
