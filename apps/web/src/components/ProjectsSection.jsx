import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

const projects = [
    {
        id: 1,
        title: 'Payment Gateway',
        description: 'A secure payment processing system with integration capabilities and transaction management.',
        year: '2026',
        tags: ['HTML5', 'Tailwind CSS', 'TypeScript']
    },
    {
        id: 2,
        title: 'SaaS Website',
        description: 'A modern Software-as-a-Service platform with subscription management and user dashboards.',
        year: '2025',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 3,
        title: 'Data Processing Software',
        description: 'A comprehensive data processing application with advanced analytics and visualization capabilities.',
        year: '2023',
        tags: ['Python', 'JavaScript', 'Web UI']
    },
    {
        id: 4,
        title: 'B2P Website',
        description: 'A business-to-person platform built with WordPress for seamless client interactions.',
        year: '2016',
        tags: ['WordPress']
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 min-h-screen flex flex-col justify-center border-t">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    A selection of my recent work across web development, focusing on user experience, performance, and clean code.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}