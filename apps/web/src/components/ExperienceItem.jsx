import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

function ExperienceItem({ experience, index, isLast }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-8 pb-12"
        >
            {!isLast && <div className="timeline-connector" />}

            <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex-1">
                        <h4 className="font-semibold text-lg text-card-foreground">{experience.role}</h4>
                        <p className="text-primary font-medium">{experience.company}</p>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground font-medium mb-3 tracking-wide">
                    {experience.period}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                </p>

                {experience.achievements && experience.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                        {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}

export default ExperienceItem;