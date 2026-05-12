import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Image as ImageIcon } from 'lucide-react';

export default function HeroSection() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="hero" className="min-h-screen relative flex flex-col justify-center pt-16 md:pt-0">
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[100px] opacity-50" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                        Contact Me
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                        Hi, I'm <span className="text-primary">Muhammad Fatthan Rasyad</span>.
                        <br />
                        Full-Stack Developer.
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                        Crafting elegant fullstack solutions to complex problems. Passionate about building intuitive UIs, robust backends, and scalable applications that perform flawlessly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all active:scale-95"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all active:scale-95"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Placeholder Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-md aspect-[4/5] bg-muted/50 rounded-3xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-muted-foreground relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                        <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                        <span className="font-medium tracking-wide opacity-75">Photo Placeholder</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-0 right-0 flex justify-center hidden md:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <button
                    onClick={scrollToAbout}
                    className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors animate-bounce"
                    aria-label="Scroll down"
                >
                    <ArrowDown className="w-5 h-5" />
                </button>
            </motion.div>
        </section>
    );
}