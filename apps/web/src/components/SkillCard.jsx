import React from 'react';
import { motion } from 'framer-motion';

function SkillCard({ skill, index }) {
    const Icon = skill.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="skill-glow bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
        >
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground mb-2">{skill.name}</h4>

                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        />
                    </div>

                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                        {skill.proficiency}% proficiency
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default SkillCard;