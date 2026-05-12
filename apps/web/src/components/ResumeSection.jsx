import React from 'react';
import ExperienceItem from './ExperienceItem.jsx';

const experiences = [
    {
        role: 'AI Engineer',
        company: 'Self-Employed',
        period: '2025 - Present',
        description: 'Exploring through various AI to determine which is better for specific tasks',
        achievements: []
    },
    {
        role: 'Cybersecurity - Penetration Testing',
        company: 'Self-Employed',
        period: '2021 - 2022',
        description: 'Penetrated government website, and university website. Reporting the vulnerabilities of the critical data such as Personal ID, and Family NIK',
        achievements: []
    }
];

export default function ResumeSection() {
    return (
        <section id="resume" className="py-24 min-h-screen flex flex-col justify-center border-t border-border">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    My professional journey, technical background, and independent projects.
                </p>
            </div>

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
        </section>
    );
}