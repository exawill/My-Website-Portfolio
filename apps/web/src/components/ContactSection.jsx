import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
export default function ContactSection() {
    const socialLinks = [{
        name: 'GitHub',
        icon: Github,
        url: 'https://github.com'
    }, {
        name: 'LinkedIn',
        icon: Linkedin,
        url: 'https://linkedin.com'
    }, {
        name: 'Twitter',
        icon: Twitter,
        url: 'https://twitter.com'
    }];
    return <section id="contact" className="py-24 border-t relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30 -z-10" />

        <motion.div className="max-w-2xl mx-auto text-center" initial={{
            opacity: 0,
            y: 20
        }} whileInView={{
            opacity: 1,
            y: 0
        }} viewport={{
            once: true
        }} transition={{
            duration: 0.6
        }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <a href="mailto:contact@example.com" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 mb-16">
                <Mail className="w-5 h-5" />
                mhrasyad19@gmail.com
            </a>

            <div className="flex justify-center gap-6">
                {socialLinks.map(link => {
                    const Icon = link.icon;
                    return <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name} className="p-4 bg-card border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-md transition-all hover:-translate-y-1">
                        <Icon className="w-6 h-6" />
                    </a>;
                })}
            </div>
        </motion.div>

        <div className="text-center mt-24 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Your Name. Built with React & Tailwind.</p>
        </div>
    </section>;
}