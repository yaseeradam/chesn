'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, ArrowDownIcon, MapPinIcon } from './Icons';

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--background)' }}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: 'linear-gradient(135deg, var(--primary-100), transparent)', filter: 'blur(80px)' }} />
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full" style={{ background: 'linear-gradient(135deg, var(--primary-200), transparent)', filter: 'blur(60px)' }} />
            </div>

            <div className="container relative z-10 py-12 pt-24">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Logo */}
                    <div className="relative w-20 h-20 mx-auto mb-6 shadow-xl rounded-full ring-4 ring-white">
                        <Image
                            src="/logo.jpg"
                            alt="CHESN Logo"
                            fill
                            className="object-contain rounded-full"
                            priority
                        />
                    </div>

                    {/* Badge */}
                    <span className="badge mb-4">Community Health Organization</span>

                    {/* Title */}
                    <h1 className="heading-xl mb-4 animate-fade-up">
                        <span className="text-accent">Community Health</span>
                        <br />
                        Education & Sanitation
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg mb-4 animate-fade-up delay-100" style={{ color: 'var(--text-secondary)' }}>
                        <span className="font-semibold text-accent">CHESN</span> Warji Branch
                    </p>

                    {/* Mission Statement */}
                    <p className="text-xl mb-8 animate-fade-up delay-200 max-w-3xl mx-auto leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                        We're dedicated to <strong className="text-accent">improving health outcomes</strong> in Warji LGA through 
                        community education, sanitation programs, and grassroots health initiatives.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up delay-300">
                        <Link href="/about" className="btn btn-primary">
                            <strong>Discover Our Work</strong>
                            <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/contact" className="btn btn-outline">
                            <strong>Get Involved</strong>
                        </Link>
                    </div>

                    {/* Location Badge */}
                    <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full animate-fade-up delay-400" style={{ background: 'var(--background-alt)', border: '2px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                        <span className="text-accent"><MapPinIcon className="w-5 h-5" /></span>
                        <span className="font-semibold">Serving Warji LGA, Bauchi State</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: 'var(--accent)' }}>
                <ArrowDownIcon />
            </div>
        </section>
    );
}
