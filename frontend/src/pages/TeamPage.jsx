import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Linkedin, Github, ArrowRight, Target, Lightbulb, Users as UsersIcon, Code } from 'lucide-react';
import './TeamPage.css';

const values = [
    {
        icon: <Target size={28} />,
        title: 'Client-Focused',
        desc: 'Your success is our success. We prioritize understanding your goals and delivering solutions that exceed expectations.'
    },
    {
        icon: <Lightbulb size={28} />,
        title: 'Innovation First',
        desc: 'We stay ahead of the curve, adopting the latest technologies and methodologies to give you a competitive edge.'
    },
    {
        icon: <UsersIcon size={28} />,
        title: 'Collaborative',
        desc: 'We work as an extension of your team, maintaining open communication and transparency throughout the project.'
    },
    {
        icon: <Code size={28} />,
        title: 'Quality Driven',
        desc: 'Every line of code we write is tested, optimized, and built to last. We never compromise on quality.'
    },
];

const TeamPage = () => {
    return (
        <>
            <section className="section team-page">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-header"
                    >
                        <h1 className="section-title">Meet The <span className="gradient-text">Team</span></h1>
                        <p className="section-subtitle">
                            Passionate developers building the next generation of web experiences.
                        </p>
                    </motion.div>

                    <div className="team-grid">
                        {/* Founder 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="team-card-large"
                        >
                            <div className="member-image-wrapper">
                                <div className="member-image">
                                    <User size={60} />
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">Swasthika</h3>
                                <p className="member-role">Founder & Lead Developer</p>
                                <p className="member-bio">
                                    Visionary full-stack developer with a passion for creating seamless, beautiful, and highly functional web applications.
                                    With expertise in the MERN stack and modern UI/UX design, Swasthika leads the technical direction of all projects,
                                    ensuring every solution is built with precision and care.
                                </p>
                                <div className="member-skills">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>
                                    <span>UI/UX</span>
                                </div>
                                <div className="member-socials">
                                    <a href="https://github.com/swasthikaaa" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                                    <a href="#"><Linkedin size={20} /></a>
                                    <a href="mailto:swasthikalingaraj@gmail.com"><Mail size={20} /></a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Founder 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="team-card-large"
                        >
                            <div className="member-image-wrapper">
                                <div className="member-image">
                                    <User size={60} />
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">Co-Founder</h3>
                                <p className="member-role">Product & Strategy</p>
                                <p className="member-bio">
                                    Strategic thinker focused on delivering value and ensuring our solutions meet real-world business needs.
                                    Bridges the gap between technology and client success by translating complex requirements into
                                    actionable development plans and maintaining strong client relationships.
                                </p>
                                <div className="member-skills">
                                    <span>Product Strategy</span>
                                    <span>Client Relations</span>
                                    <span>Business Analysis</span>
                                </div>
                                <div className="member-socials">
                                    <a href="#"><Linkedin size={20} /></a>
                                    <a href="#"><Mail size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="values-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title">Our <span className="gradient-text">Values</span></h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do at yscode.
                        </p>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="glass-card value-card"
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-desc">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us / CTA */}
            <section className="join-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="cta-card"
                    >
                        <h2>Want to Work With Us?</h2>
                        <p>We're always looking for talented individuals to join our mission. Reach out if you'd like to collaborate.</p>
                        <Link to="/contact" className="btn btn-primary">
                            Get in Touch <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TeamPage;
