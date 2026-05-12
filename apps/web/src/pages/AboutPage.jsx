import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Layers, Server, Smartphone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillCard from '@/components/SkillCard.jsx';
import ExperienceItem from '@/components/ExperienceItem.jsx';

function AboutPage() {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React & Next.js', icon: Code2, proficiency: 92 },
                { name: 'TypeScript', icon: Layers, proficiency: 87 },
                { name: 'TailwindCSS', icon: Smartphone, proficiency: 94 }
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js & Express', icon: Server, proficiency: 89 },
                { name: 'PostgreSQL & MongoDB', icon: Database, proficiency: 83 },
                { name: 'REST & GraphQL APIs', icon: Layers, proficiency: 86 }
            ]
        },
        {
            title: 'Tools & DevOps',
            skills: [
                { name: 'Git & GitHub', icon: Wrench, proficiency: 91 },
                { name: 'Docker & CI/CD', icon: Server, proficiency: 78 },
                { name: 'AWS & Vercel', icon: Database, proficiency: 81 }
            ]
        }
    ];

    const experiences = [
        {
            role: 'Senior Full-Stack Developer',
            company: 'Meridian Labs',
            period: 'Jan 2024 - Present',
            description: 'Leading development of cloud-based SaaS platform serving 50k+ users. Architecting scalable microservices and mentoring junior developers.',
            achievements: [
                'Reduced API response time by 43% through database optimization',
                'Implemented real-time features using WebSocket, improving user engagement by 28%',
                'Led migration from monolith to microservices architecture'
            ]
        },
        {
            role: 'Full-Stack Developer',
            company: 'Coastal Digital',
            period: 'Mar 2022 - Dec 2023',
            description: 'Built and maintained multiple client projects ranging from e-commerce platforms to custom CMS solutions.',
            achievements: [
                'Delivered 12+ projects on time and within budget',
                'Improved site performance scores to 95+ on Lighthouse',
                'Established coding standards and review processes for the team'
            ]
        },
        {
            role: 'Frontend Developer',
            company: 'Pixel & Code Studio',
            period: 'Jun 2020 - Feb 2022',
            description: 'Developed responsive web applications with focus on user experience and accessibility standards.',
            achievements: [
                'Created reusable component library used across 8 projects',
                'Achieved WCAG AA compliance on all delivered projects',
                'Collaborated with designers to implement pixel-perfect interfaces'
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col noise-texture dark">
            <Helmet>
                <title>About - Alex Rivera</title>
                <meta name="description" content="Learn about Alex Rivera's background, skills, and professional experience in full-stack web development." />
            </Helmet>

            <Header />

            <main className="flex-1 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-24"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            About me
                        </h1>
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I'm a full-stack developer with over 4 years of experience building web applications that solve real problems. My journey started with a curiosity about how websites work, which quickly evolved into a passion for creating digital experiences that users love.
                                </p>
                                <p>
                                    I specialize in the React ecosystem and Node.js, but I'm always exploring new technologies and best practices. Whether it's optimizing database queries, implementing complex UI interactions, or architecting scalable systems, I approach each challenge with enthusiasm and attention to detail.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
                                </p>
                            </div>
                            <div className="bg-card rounded-2xl p-8 border border-border">
                                <h3 className="text-xl font-semibold text-card-foreground mb-4">Quick facts</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Based in San Francisco, CA</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>4+ years of professional experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Contributed to 15+ open-source projects</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Passionate about web performance and accessibility</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
                            Skills & expertise
                        </h2>
                        <div className="space-y-12">
                            {skillCategories.map((category, categoryIndex) => (
                                <div key={categoryIndex}>
                                    <h3 className="text-xl font-semibold text-foreground mb-6 uppercase tracking-wide text-sm">
                                        {category.title}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <SkillCard
                                                key={skillIndex}
                                                skill={skill}
                                                index={categoryIndex * 3 + skillIndex}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
                            Work experience
                        </h2>
                        <div className="max-w-3xl">
                            {experiences.map((experience, index) => (
                                <ExperienceItem
                                    key={index}
                                    experience={experience}
                                    index={index}
                                    isLast={index === experiences.length - 1}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default AboutPage;