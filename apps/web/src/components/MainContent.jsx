import React, { useEffect, useRef } from 'react';
import HeroSection from './HeroSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import AboutMeSection from './AboutMeSection.jsx';
import ResumeSection from './ResumeSection.jsx';
import ContactSection from './ContactSection.jsx';

export default function MainContent({ setActiveSection }) {
    const contentRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Triggers when section is in the middle of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id]');

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [setActiveSection]);

    return (
        <main
            ref={contentRef}
            className="flex-1 md:ml-64 px-6 md:px-12 lg:px-24 pt-16 md:pt-0 max-w-7xl"
        >
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
            <ResumeSection />
            <ContactSection />
        </main>
    );
}