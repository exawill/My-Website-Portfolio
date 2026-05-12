import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/rasyapake.d', label: 'Instagram' },
        { icon: Github, href: 'https://github.com/vixtralstudios', label: 'GitHub' },
        { icon: Twitter, href: 'https://x.com/exawill_', label: 'Twitter' },
        { icon: Linkedin, href: 'https://id.linkedin.com/in/muhfr', label: 'LinkedIn' },
    ];

    return (
        <footer className="border-t border-border bg-card text-card-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-sm font-medium opacity-80 text-center md:text-left">
                            © 2026 Muhammad Fatthan Rasyad. Built with React & Tailwind
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 active:scale-95"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;