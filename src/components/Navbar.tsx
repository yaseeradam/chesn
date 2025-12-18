'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 transition-all group-hover:scale-110">
                            <Image
                                src="/logo.jpg"
                                alt="CHESN Logo"
                                fill
                                className="object-contain rounded-full ring-2 ring-accent/20"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-black text-accent">CHESN</span>
                            <span className="block text-xs font-bold" style={{ color: 'var(--text-muted)' }}>Warji Branch</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-bold text-sm transition-all hover:text-accent hover:scale-105 px-3 py-2 rounded-lg hover:bg-accent/10"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full transition-all hover:bg-accent/10 hover:scale-110"
                                style={{ color: 'var(--accent)' }}
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                            </button>
                        )}

                        <Link href="/contact" className="btn btn-primary text-sm px-6">
                            <strong>🚀 Join Us</strong>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full transition-all hover:bg-accent/10"
                                style={{ color: 'var(--accent)' }}
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
                            </button>
                        )}
                        <button
                            className="p-2 rounded-lg transition-all hover:bg-accent/10"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            style={{ color: 'var(--accent)' }}
                        >
                            {isMobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t rounded-lg" style={{ borderColor: 'var(--border-color)', background: 'var(--background-alt)' }}>
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-bold py-3 px-4 rounded-lg transition-all hover:text-accent hover:bg-accent/10"
                                    style={{ color: 'var(--text-secondary)' }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="btn btn-primary text-sm text-center mt-3 mx-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <strong>🚀 Join Us</strong>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
