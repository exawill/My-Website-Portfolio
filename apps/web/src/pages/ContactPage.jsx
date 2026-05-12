import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters')
});

function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Store in localStorage
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        setIsSubmitting(false);
        toast.success('Message sent successfully');
        reset();
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'alex.rivera@example.com',
            href: 'mailto:alex.rivera@example.com'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'San Francisco, CA',
            href: null
        }
    ];

    return (
        <div className="min-h-screen flex flex-col noise-texture dark">
            <Helmet>
                <title>Contact - Alex Rivera</title>
                <meta name="description" content="Get in touch with Alex Rivera for web development projects, collaborations, or inquiries." />
            </Helmet>

            <Header />

            <main className="flex-1 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            Get in touch
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Have a project in mind or just want to chat? I'd love to hear from you
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold text-foreground mb-6">
                                    Contact information
                                </h2>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => {
                                        const Icon = info.icon;
                                        const content = (
                                            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                                                <div className="p-3 bg-primary/10 rounded-lg">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground font-medium mb-1">
                                                        {info.label}
                                                    </p>
                                                    <p className="text-card-foreground font-medium">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );

                                        return info.href ? (
                                            <a key={index} href={info.href} className="block">
                                                {content}
                                            </a>
                                        ) : (
                                            <div key={index}>{content}</div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Looking for collaboration?
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm always interested in hearing about new projects and opportunities. Whether you need a full-stack developer for your team or want to discuss a freelance project, feel free to reach out.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="text-foreground">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        {...register('name')}
                                        className="mt-2 bg-input text-foreground placeholder:text-muted-foreground"
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-foreground">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        className="mt-2 bg-input text-foreground placeholder:text-muted-foreground"
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-destructive mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-foreground">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        {...register('message')}
                                        rows={6}
                                        className="mt-2 bg-input text-foreground placeholder:text-muted-foreground resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-destructive mt-1">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ContactPage;