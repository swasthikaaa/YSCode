import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import './ContactPage.css';

const contactInfo = [
    { icon: <Mail size={22} />, label: 'Email', value: 'swasthikalingaraj@gmail.com', link: 'mailto:swasthikalingaraj@gmail.com' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'Sri Lanka', link: null },
    { icon: <Clock size={22} />, label: 'Response Time', value: 'Within 24 hours', link: null },
];

const faqs = [
    { q: 'What is your typical project timeline?', a: 'Most projects are completed within 2-6 weeks, depending on complexity and scope. We provide detailed timelines during our initial consultation.' },
    { q: 'Do you offer ongoing maintenance?', a: 'Yes, we provide flexible maintenance packages to keep your website secure, updated, and running smoothly after launch.' },
    { q: 'What technologies do you work with?', a: 'We specialize in the MERN stack (MongoDB, Express, React, Node.js), along with Tailwind CSS, Next.js, and various other modern tools.' },
    { q: 'How do I get started?', a: 'Simply fill out the contact form or email us directly. We will schedule a free consultation to discuss your project requirements.' },
];

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <>
            <section className="section contact-page">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-header"
                    >
                        <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
                        <p className="section-subtitle">
                            Ready to start your project? Contact us today for a free consultation.
                        </p>
                    </motion.div>

                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="contact-info-section"
                        >
                            <h3>Contact Information</h3>
                            <p>Feel free to reach out through any of the following channels. We look forward to hearing from you.</p>

                            <div className="contact-info-list">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-info-item">
                                        <div className="contact-info-icon">{info.icon}</div>
                                        <div>
                                            <span className="contact-info-label">{info.label}</span>
                                            {info.link ? (
                                                <a href={info.link} className="contact-info-value">{info.value}</a>
                                            ) : (
                                                <span className="contact-info-value">{info.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="contact-features">
                                <div className="contact-feature"><CheckCircle size={18} /> Free Consultation</div>
                                <div className="contact-feature"><CheckCircle size={18} /> Quick Response</div>
                                <div className="contact-feature"><CheckCircle size={18} /> No Commitment</div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass-card contact-form-card"
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                        placeholder="Tell us about your project and requirements..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-full" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Sending...' : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>

                                {status === 'success' && <p className="success-message">Your message has been sent successfully. We will get back to you shortly.</p>}
                                {status === 'error' && <p className="error-message">Something went wrong. Please try again later.</p>}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
                        <p className="section-subtitle">
                            Answers to common questions about working with us.
                        </p>
                    </motion.div>

                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="faq-item"
                            >
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
