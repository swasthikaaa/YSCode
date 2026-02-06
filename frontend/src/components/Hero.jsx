import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Users, Globe, Award } from 'lucide-react';
import './Hero.css';

const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
];

const features = [
    'Custom Web Development',
    'E-commerce Solutions',
    'Mobile-First Design',
    'SEO Optimization',
];

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="bg-blob-1"></div>
                <div className="bg-blob-2"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <Sparkles size={16} />
                        Crafting Digital Excellence
                    </div>

                    <h1 className="hero-title">
                        Scale Your Vision With <br />
                        <span className="gradient-text">Next-Gen Web Solutions</span>
                    </h1>

                    <p className="hero-description">
                        We are yscode. We transform ideas into stunning, high-performance websites.
                        Elevate your brand with our modern design and engineering expertise.
                    </p>

                    <div className="hero-features">
                        {features.map((feature, index) => (
                            <div key={index} className="hero-feature">
                                <CheckCircle size={16} /> {feature}
                            </div>
                        ))}
                    </div>

                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">
                            Start Project <ArrowRight size={18} />
                        </Link>
                        <Link to="/projects" className="btn btn-secondary">
                            View Our Work
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="stat-card"
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section">
                <div className="container">
                    <div className="why-content">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="why-text"
                        >
                            <h2 className="section-title">Why Choose <span className="gradient-text">yscode</span>?</h2>
                            <p className="why-description">
                                We don't just build websites – we craft digital experiences that drive results.
                                Our team combines cutting-edge technology with creative design to deliver solutions
                                that stand out in today's competitive landscape.
                            </p>
                            <div className="why-points">
                                <div className="why-point">
                                    <div className="why-icon"><Users size={24} /></div>
                                    <div>
                                        <h4>Client-Centric Approach</h4>
                                        <p>Your vision is our priority. We work closely with you at every step.</p>
                                    </div>
                                </div>
                                <div className="why-point">
                                    <div className="why-icon"><Globe size={24} /></div>
                                    <div>
                                        <h4>Modern Technologies</h4>
                                        <p>We use the latest frameworks and tools for optimal performance.</p>
                                    </div>
                                </div>
                                <div className="why-point">
                                    <div className="why-icon"><Award size={24} /></div>
                                    <div>
                                        <h4>Quality Guaranteed</h4>
                                        <p>Every project is tested rigorously for perfection before delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/services" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                                Explore Services <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="cta-card"
                    >
                        <h2>Ready to Transform Your Digital Presence?</h2>
                        <p>Let's discuss your project and bring your vision to life with a website that truly represents your brand.</p>
                        <Link to="/contact" className="btn btn-primary">
                            Get Free Consultation <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
