import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <Link to="/" className="footer-logo">
                        <Code2 /> yscode
                    </Link>

                    <div className="footer-links">
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/services" className="footer-link">Services</Link>
                        <Link to="/projects" className="footer-link">Projects</Link>
                        <Link to="/team" className="footer-link">Team</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/swasthikaaa" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} yscode. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
