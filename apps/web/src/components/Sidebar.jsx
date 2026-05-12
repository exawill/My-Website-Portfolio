import React from 'react';
import { Menu, User, Briefcase, FileText, Mail, Home } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
const navItems = [{
    id: 'hero',
    label: 'Home',
    icon: Home
}, {
    id: 'about',
    label: 'About Me',
    icon: User
}, {
    id: 'projects',
    label: 'Projects',
    icon: Briefcase
}, {
    id: 'resume',
    label: 'Resume',
    icon: FileText
}, {
    id: 'contact',
    label: 'Contact',
    icon: Mail
}];
export default function Sidebar({
    activeSection
}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const scrollToSection = id => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };
    const NavContent = () => <nav className="flex flex-col gap-2 w-full">
        {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left w-full
              ${isActive ? 'bg-primary text-primary-foreground font-medium shadow-sm' : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'}`}>
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
            </button>;
        })}
    </nav>;
    return <>
        {/* Mobile Top Bar */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b z-50 flex items-center justify-between px-4">
            <span className="font-semibold text-lg tracking-tight">Portfolio</span>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Menu">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                    <SheetHeader className="mb-8 text-left">
                        <SheetTitle className="text-2xl font-bold">Navigation</SheetTitle>
                    </SheetHeader>
                    <NavContent />
                </SheetContent>
            </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 border-r bg-card px-6 py-10 z-40">
            <div className="mb-12">
                <h2 className="text-2xl font-bold tracking-tight">Call me, Rasya!</h2>
                <p className="text-sm text-muted-foreground mt-1">Information Systems Student</p>
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <NavContent />
            </div>
        </aside>
    </>;
}