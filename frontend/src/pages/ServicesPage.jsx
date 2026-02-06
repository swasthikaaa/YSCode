import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Search, Code, Rocket, Layout, Palette, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import './ServicesPage.css';

const services = [
    {
        icon: <Monitor size={28} />,
        title: 'Custom Web Design',
        desc: 'Stunning, unique designs tailored to your brand identity. We create memorable digital experiences, not just websites.',
        features: ['Brand-aligned aesthetics', 'User-focused layouts', 'Modern design trends']
    },
    {
        icon: <Code size={28} />,
        title: 'Full-Stack Development',
        desc: 'Robust and scalable web applications using the latest technologies like React, Node.js, and modern databases.',
        features: ['React & Node.js', 'MongoDB & PostgreSQL', 'RESTful APIs']
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Responsive & Mobile-First',
        desc: 'Flawless experiences across all devices. Your site will look and perform perfectly on phones, tablets, and desktops.',
        features: ['Cross-device testing', 'Touch-optimized UI', 'Fast mobile loads']
    },
    {
        icon: <Search size={28} />,
        title: 'SEO Optimization',
        desc: 'Get found by your audience. We implement best practices to improve your ranking on all major search engines.',
        features: ['Technical SEO', 'Content optimization', 'Analytics setup']
    },
    {
        icon: <Rocket size={28} />,
        title: 'Performance Tuning',
        desc: 'Lightning-fast load times. We optimize every asset to ensure your users never have to wait.',
        features: ['Code splitting', 'Image optimization', 'Caching strategies']
    },
    {
        icon: <Layout size={28} />,
        title: 'UI/UX Design',
        desc: 'User-centric interfaces that drive engagement and conversion. We design with empathy and purpose.',
        features: ['Wireframing', 'Prototyping', 'User testing']
    },
    {
        icon: <Palette size={28} />,
        title: 'Brand Identity',
        desc: 'Cohesive visual identity across all platforms. From logos to color palettes, we ensure your brand stands out.',
        features: ['Logo design', 'Color systems', 'Typography']
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Maintenance & Support',
        desc: 'Ongoing support to keep your site secure, updated, and running smoothly long after launch.',
        features: ['Security updates', 'Bug fixes', '24/7 monitoring']
    }
];

const processSteps = [
    { number: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target audience to create a strategic plan.' },
    { number: '02', title: 'Design', desc: 'Our designers create stunning mockups and prototypes for your approval.' },
    { number: '03', title: 'Development', desc: 'We build your site using clean, scalable code and modern frameworks.' },
    { number: '04', title: 'Launch', desc: 'After thorough testing, we deploy your site and provide ongoing support.' },
];

const ServicesPage = () => {
    return (
        <>
            <section className="section services-page">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-header"
                    >
                        <h1 className="section-title">Our <span className="gradient-text">Services</span></h1>
                        <p className="section-subtitle">
                            We provide a comprehensive suite of digital solutions to help your business thrive in the modern world.
                        </p>
                    </motion.div>

                    <div className="grid-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="glass-card service-card"
                            >
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}><CheckCircle size={14} /> {feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
                        <p className="section-subtitle">
                            A streamlined approach to deliver exceptional results on time and within budget.
                        </p>
                    </motion.div>

                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="process-step"
                            >
                                <span className="process-number">{step.number}</span>
                                <h4 className="process-title">{step.title}</h4>
                                <p className="process-desc">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="tech-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title">Technologies We <span className="gradient-text">Use</span></h2>
                        <p className="section-subtitle">
                            We leverage the most powerful and reliable technologies to build your digital solutions.
                        </p>
                    </motion.div>
                    <div className="tech-grid">
                        {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'PostgreSQL', 'Next.js', 'TypeScript', 'Vite', 'Git', 'Vercel', 'Stripe'].map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="tech-item"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="cta-card"
                    >
                        <h2>Have a Project in Mind?</h2>
                        <p>Let's discuss how we can help bring your vision to life with our expert development services.</p>
                        <Link to="/contact" className="btn btn-primary">
                            Get Free Quote <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
