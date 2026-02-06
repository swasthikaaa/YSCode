import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './ProjectsPage.css';

const projects = [
    {
        title: 'Lumiere Cosmetic',
        desc: 'A premium e-commerce platform tailored for luxury beauty brands. Implements advanced filtering, secure Stripe payment integration, user wishlists, and a high-performance responsive UI built with Tailwind CSS to ensure a seamless shopping experience across all devices.',
        tags: ['MERN Stack', 'Tailwind', 'Stripe'],
        liveUrl: 'https://lumiere-orpin-six.vercel.app/login',
        highlights: ['Payment Integration', 'User Authentication', 'Product Filtering', 'Wishlist System']
    },
    {
        title: 'BookIt - Slot Booking System',
        desc: 'A full-stack slot booking application that allows users to reserve time-based resources with real-time availability and conflict prevention. Features secure authentication, role-based access, booking management, and an intuitive calendar-style interface.',
        tags: ['MERN Stack', 'Tailwind', 'Calendar UI'],
        liveUrl: 'https://book-it-two-jade.vercel.app/login',
        highlights: ['Real-time Availability', 'Conflict Prevention', 'Role-based Access', 'Calendar Interface']
    },
    {
        title: 'Student Management System',
        desc: 'A comprehensive school management platform featuring secure authentication, student profiles, attendance tracking, and grade management. Built using the MERN stack for scalability and Tailwind CSS for a refined, modern user interface.',
        tags: ['MERN Stack', 'Tailwind', 'Dashboard'],
        liveUrl: 'https://student-management-iota-virid.vercel.app/login',
        highlights: ['Student Profiles', 'Attendance Tracking', 'Grade Management', 'Admin Dashboard']
    },
    {
        title: 'Vantage POS - Business Analysis',
        desc: 'Conducted a complete business requirements and process analysis for a retail Point of Sale system. Defined BRD and SRS documentation, user stories, acceptance criteria, and As-Is/To-Be workflows to improve billing efficiency, inventory accuracy, and stakeholder alignment.',
        tags: ['Business Analysis', 'BRD', 'SRS', 'Documentation'],
        liveUrl: 'https://github.com/swasthikaaa/business-analysis-portfolio/blob/d11115925de8dd1fced7af209664b2d858b656e7/Vantage_POS_Business_Requirements_2025.pdf',
        highlights: ['Requirements Gathering', 'Process Mapping', 'Stakeholder Analysis', 'Documentation']
    }
];

const ProjectsPage = () => {
    return (
        <>
            <section className="section projects-page">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-header"
                    >
                        <h1 className="section-title">Our <span className="gradient-text">Projects</span></h1>
                        <p className="section-subtitle">
                            A showcase of our recent work, demonstrating our expertise in full-stack development, design, and business analysis.
                        </p>
                    </motion.div>

                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="project-card-large"
                            >
                                <div className="project-content">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.desc}</p>

                                    <div className="project-highlights">
                                        <h4>Key Features:</h4>
                                        <ul>
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        <ExternalLink size={16} /> View Project
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work With Us Section */}
            <section className="work-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="work-content"
                    >
                        <h2 className="section-title">Want Your Project <span className="gradient-text">Here?</span></h2>
                        <p className="section-subtitle">
                            We love taking on new challenges. Whether you need an e-commerce platform, booking system,
                            or a custom web application, we have the skills to make it happen.
                        </p>
                        <div className="work-features">
                            <div className="work-feature">
                                <span className="work-feature-number">01</span>
                                <div>
                                    <h4>Share Your Idea</h4>
                                    <p>Tell us about your project requirements and vision.</p>
                                </div>
                            </div>
                            <div className="work-feature">
                                <span className="work-feature-number">02</span>
                                <div>
                                    <h4>Get a Free Quote</h4>
                                    <p>We'll provide a detailed proposal and timeline.</p>
                                </div>
                            </div>
                            <div className="work-feature">
                                <span className="work-feature-number">03</span>
                                <div>
                                    <h4>See It Come to Life</h4>
                                    <p>Watch as we build and launch your project.</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Start Your Project <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
