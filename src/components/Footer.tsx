'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon } from './Icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: 'var(--background-alt)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.jpg"
                                    alt="CHESN Logo"
                                    fill
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-accent">CHESN</span>
                                <span className="block text-xs" style={{ color: 'var(--text-muted)' }}>Warji Branch</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Promoting community health education, sanitation, and well-being in Warji LGA and beyond.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Programs', 'Leadership', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                                        className="text-sm transition-colors hover:text-accent"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-semibold mb-4 text-accent">Our Programs</h4>
                        <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <li>Immunization Awareness</li>
                            <li>Family Planning</li>
                            <li>Maternal & Child Health</li>
                            <li>Environmental Sanitation</li>
                            <li>WASH Initiatives</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
                        <address className="not-italic text-sm space-y-3" style={{ color: 'var(--text-secondary)' }}>
                            <div className="flex items-start gap-2">
                                <span className="text-accent mt-0.5"><MapPinIcon /></span>
                                <div>
                                    <p>Tuya, El-Wadata, Homes and Shops</p>
                                    <p>Room 001-002, Ranga Ward</p>
                                    <p>Warji LGA, Bauchi State, Nigeria</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-accent"><PhoneIcon /></span>
                                <a href="tel:08037966138" className="hover:text-accent transition-colors">
                                    08037966138
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-accent"><PhoneIcon /></span>
                                <a href="tel:08136452010" className="hover:text-accent transition-colors">
                                    08136452010
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        © {currentYear} CHESN Warji Branch. All rights reserved.
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Established November 20, 2022
                    </p>
                </div>
            </div>
        </footer>
    );
}
