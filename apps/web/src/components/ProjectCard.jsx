import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
    return (
        <div className="group flex flex-col h-full bg-card rounded-2xl p-6 border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                    {project.year}
                </span>
            </div>

            <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                {project.description}
            </p>

            <div className="mt-auto pt-4 border-t flex items-center justify-between">
                <div className="flex gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs text-muted-foreground">
                            {tag}{i < 2 && i < project.tags.length - 1 ? ' • ' : ''}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                        <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}