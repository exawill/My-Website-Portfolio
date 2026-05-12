import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import { Button } from '@/components/ui/button';

function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Frontend', 'Full-Stack', 'Backend'];

    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'A full-featured online store with payment integration, inventory management, and real-time order tracking. Built with scalability in mind.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
            techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            category: 'Full-Stack',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 2,
            title: 'Task Management Dashboard',
            description: 'Collaborative project management tool with drag-and-drop kanban boards, team chat, and progress analytics.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            techStack: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
            category: 'Frontend',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'RESTful API Service',
            description: 'High-performance API with authentication, rate limiting, and comprehensive documentation. Handles 10k+ requests per minute.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            techStack: ['Node.js', 'Express', 'MongoDB', 'Redis'],
            category: 'Backend',
            liveUrl: null,
            githubUrl: '#'
        },
        {
            id: 4,
            title: 'Real-time Analytics Platform',
            description: 'Data visualization dashboard with live updates, custom reports, and export functionality for business intelligence.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            techStack: ['React', 'D3.js', 'WebSocket', 'Node.js'],
            category: 'Full-Stack',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 5,
            title: 'Portfolio Website Builder',
            description: 'No-code platform for creatives to build stunning portfolio sites with customizable templates and drag-and-drop editor.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
            techStack: ['React', 'Next.js', 'TailwindCSS', 'Vercel'],
            category: 'Frontend',
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="min-h-screen flex flex-col noise-texture dark">
            <Helmet>
                <title>Portfolio - Alex Rivera</title>
                <meta name="description" content="Explore my web development projects showcasing expertise in React, Node.js, and modern web technologies." />
            </Helmet>

            <Header />

            <main className="flex-1 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            My work
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            A selection of projects that showcase my skills in building modern web applications
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-3 mb-16"
                    >
                        {filters.map((filter) => (
                            <Button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                variant={activeFilter === filter ? 'default' : 'outline'}
                                className={`transition-all duration-200 active:scale-[0.98] ${activeFilter === filter
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                        : 'border-border hover:bg-muted'
                                    }`}
                            >
                                {filter}
                            </Button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-muted-foreground text-lg">
                                No projects found in this category
                            </p>
                        </motion.div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PortfolioPage;