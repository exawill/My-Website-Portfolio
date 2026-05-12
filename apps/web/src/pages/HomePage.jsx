import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
    const highlights = [
        {
            icon: Code2,
            title: 'Full-stack development',
            description: 'Building scalable web applications with modern frameworks and best practices'
        },
        {
            icon: Zap,
            title: 'Performance focused',
            description: 'Optimizing load times and user experience through efficient code and architecture'
        },
        {
            icon: Sparkles,
            title: 'Clean design',
            description: 'Creating intuitive interfaces that users love with attention to detail'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col noise-texture dark">
            <Helmet>
                <title>Alex Rivera - Full-Stack Developer</title>
                <meta name="description" content="Portfolio of Alex Rivera, a full-stack developer specializing in React, Node.js, and modern web technologies." />
            </Helmet>

            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1588838084447-6b600a14fd60)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />

                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                Building digital experiences
                                <br />
                                <span className="text-primary">that matter</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                                Full-stack developer crafting performant web applications with React, Node.js, and modern technologies
                            </p>

                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20"
                                asChild
                            >
                                <Link to="/portfolio">
                                    View my work
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="py-24 bg-muted/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                                What I bring to the table
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Combining technical expertise with creative problem-solving to deliver exceptional results
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-primary/10 rounded-xl">
                                                <Icon className="w-8 h-8 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                                                    {highlight.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {highlight.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
                            >
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                                            Ready to start a project?
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Let's discuss how I can help bring your ideas to life
                                        </p>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
                                        asChild
                                    >
                                        <Link to="/contact">Get in touch</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;