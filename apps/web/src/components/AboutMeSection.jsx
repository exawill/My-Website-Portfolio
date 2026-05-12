import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code2, Server, Wrench, Heart } from 'lucide-react';
export default function AboutMeSection() {
    const skillCategories = [{
        id: "frontend",
        title: "Frontend Development",
        icon: Code2,
        skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    }, {
        id: "backend",
        title: "Backend Development",
        icon: Server,
        skills: ["Node.js", "Express", "Python", "RESTful APIs", "SQL/NoSQL"]
    }, {
        id: "tools",
        title: "Tools & Technologies",
        icon: Wrench,
        skills: ["Git & GitHub", "VS Code", "Figma", "Docker", "Postman"]
    }, {
        id: "interests",
        title: "Interests & Hobbies",
        icon: Heart,
        skills: ["Open-source contributions", "UI/UX design", "Tech blogging", "Photography"]
    }];
    return <section id="about" className="py-24 min-h-screen flex flex-col justify-center border-t">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Bio Section */}
            <motion.div initial={{
                opacity: 0,
                x: -20
            }} whileInView={{
                opacity: 1,
                x: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.6
            }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I am an Information Systems student and passionate Fullstack Engineer dedicated to crafting elegant digital experiences. My academic background provides a strong foundation in systems architecture, while my hands-on development experience allows me to turn complex requirements into robust applications.
                    </p>
                    <p>
                        I thrive in environments where logic meets creativity. Whether I'm designing a responsive user interface or architecting a database schema, I focus on delivering clean, maintainable, and highly performant code.
                    </p>
                    <p>
                        When I'm not studying or writing code, I'm usually exploring new design trends, contributing to open-source projects.
                    </p>
                </div>
            </motion.div>

            {/* Skills Accordion */}
            <motion.div initial={{
                opacity: 0,
                x: 20
            }} whileInView={{
                opacity: 1,
                x: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.6
            }} className="bg-card border rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Capabilities</h3>
                <Accordion type="single" collapsible className="w-full" defaultValue="frontend">
                    {skillCategories.map(category => {
                        const Icon = category.icon;
                        return <AccordionItem key={category.id} value={category.id} className="border-b-0 mb-2 last:mb-0">
                            <AccordionTrigger className="hover:no-underline bg-secondary/50 px-4 rounded-xl hover:bg-secondary transition-colors">
                                <div className="flex items-center gap-3">
                                    <Icon className="w-5 h-5 text-muted-foreground" />
                                    <span className="font-medium text-base">{category.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-2 px-4">
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, index) => <span key={index} className="px-3 py-1.5 bg-background border rounded-lg text-sm font-medium text-foreground">
                                        {skill}
                                    </span>)}
                                </div>
                            </AccordionContent>
                        </AccordionItem>;
                    })}
                </Accordion>
            </motion.div>
        </div>
    </section>;
}