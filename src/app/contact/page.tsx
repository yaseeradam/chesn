'use client';

import { useState } from 'react';
import { CheckIcon, MapPinIcon, BriefcaseIcon, DocumentIcon, CalendarIcon, PhoneIcon } from "@/components/Icons";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="pt-16">
            {/* Page Header */}
            <section className="py-8">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="badge mb-4">📞 Get in Touch</span>
                        <h1 className="heading-xl mb-4">
                            <strong>Let's</strong> <span className="text-accent">Connect</span>
                        </h1>
                        <p className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Ready to <strong className="text-accent">join our mission</strong> or have questions about our programs? We're here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-8">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">✉️</div>
                                <h2 className="heading-md"><strong>Send us a</strong> <span className="text-accent">Message</span></h2>
                            </div>

                            {submitted ? (
                                <div className="card text-center py-12">
                                    <div className="icon-box w-16 h-16 mx-auto mb-4">
                                        <CheckIcon />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                    <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                                        Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({
                                                name: '',
                                                email: '',
                                                phone: '',
                                                subject: '',
                                                message: ''
                                            });
                                        }}
                                        className="btn btn-outline"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <div className="card">
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="input"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="input"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="input"
                                                    placeholder="080XXXXXXXX"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                I&apos;m interested in
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="input"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="membership">Becoming a Member</option>
                                                <option value="volunteer">Volunteering</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="program">Program Information</option>
                                                <option value="other">Other Inquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="input resize-none"
                                                placeholder="Tell us how we can help you..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">📍</div>
                                <h2 className="heading-md"><strong>Contact</strong> <span className="text-accent">Information</span></h2>
                            </div>

                            <div className="space-y-4">
                                {/* Address */}
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">🏢</div>
                                        <div>
                                            <h3 className="font-bold mb-2 text-accent">Our Office</h3>
                                            <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>
                                                Tuya, El-Wadata, Homes and Shops<br />
                                                Room 001-002, Ranga Ward<br />
                                                <span className="text-accent font-bold">Warji LGA, Bauchi State</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chairman */}
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">👑</div>
                                        <div>
                                            <h3 className="font-bold mb-1 text-accent">Chairman</h3>
                                            <p className="font-bold" style={{ color: 'var(--text-primary)' }}>Lukman Abdulrazak</p>
                                            <a
                                                href="tel:08037966138"
                                                className="inline-flex items-center gap-2 text-accent hover:underline mt-2 font-medium"
                                            >
                                                <PhoneIcon className="w-4 h-4" />
                                                08037966138
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Secretary */}
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📄</div>
                                        <div>
                                            <h3 className="font-bold mb-1 text-accent">Secretary General</h3>
                                            <p className="font-bold" style={{ color: 'var(--text-primary)' }}>Yakubu Danazumi</p>
                                            <a
                                                href="tel:08136452010"
                                                className="inline-flex items-center gap-2 text-accent hover:underline mt-2 font-medium"
                                            >
                                                <PhoneIcon className="w-4 h-4" />
                                                08136452010
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Meeting Info */}
                                <div className="card">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📅</div>
                                        <div>
                                            <h3 className="font-bold mb-2 text-accent">Meeting Schedule</h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>General Meetings: Monthly</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>Executive Meetings: Bi-weekly</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section section-alt">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="card-flat h-64 flex items-center justify-center">
                            <div className="text-center">
                                <div className="icon-box w-16 h-16 mx-auto mb-4">
                                    <MapPinIcon />
                                </div>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    Located in Ranga Ward, Warji LGA, Bauchi State
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
