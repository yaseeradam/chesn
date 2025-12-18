'use client';

import Link from "next/link";
import Image from "next/image";
import { BriefcaseIcon, DocumentIcon, FamilyIcon, MoneyIcon, MegaphoneIcon, BookIcon, BroomIcon, BabyIcon, HandHeartIcon, PencilIcon, PhoneIcon, ArrowRightIcon } from "@/components/Icons";
import { ReactNode } from "react";

interface Leader {
    position: string;
    name: string;
    phone?: string;
    description: string;
    icon: ReactNode;
}

const executiveCouncil: Leader[] = [
    {
        position: "Chairperson",
        name: "Lukman Abdulrazak",
        phone: "08037966138",
        description: "Provides leadership, presides over meetings, and represents the organization.",
        icon: <BriefcaseIcon />
    },
    {
        position: "Secretary General",
        name: "Yakubu Danazumi",
        phone: "08136452010",
        description: "Manages documentation, correspondence, and records.",
        icon: <DocumentIcon />
    },
    {
        position: "Vice Chairperson",
        name: "Position Holder",
        description: "Assists and acts on behalf of the Chairperson when absent.",
        icon: <FamilyIcon />
    },
    {
        position: "Treasurer",
        name: "Position Holder",
        description: "Handles finances, dues, and expenditures.",
        icon: <MoneyIcon />
    },
    {
        position: "Public Relations Officer",
        name: "Position Holder",
        description: "Manages communications, public awareness, and media relations.",
        icon: <MegaphoneIcon />
    },
    {
        position: "Director of Programs & Training",
        name: "Position Holder",
        description: "Oversees health education activities and training sessions.",
        icon: <BookIcon />
    },
    {
        position: "Director of Sanitation",
        name: "Position Holder",
        description: "Coordinates environmental sanitation campaigns.",
        icon: <BroomIcon />
    },
    {
        position: "Director of MCH",
        name: "Position Holder",
        description: "Leads maternal, newborn, and child health initiatives.",
        icon: <BabyIcon />
    },
    {
        position: "Welfare Officer",
        name: "Position Holder",
        description: "Ensures member welfare and support.",
        icon: <HandHeartIcon />
    },
    {
        position: "Assistant Secretary",
        name: "Position Holder",
        description: "Assists the Secretary and keeps minutes in their absence.",
        icon: <PencilIcon />
    }
];

const membershipTypes = [
    {
        type: "Full Members",
        description: "Active participants in CHESN activities with voting rights.",
        rights: ["Vote and be voted for", "Participate in programs and decision making", "Receive training and educational materials"]
    },
    {
        type: "Associate Members",
        description: "Supporters who participate occasionally in organization activities.",
        rights: ["Participate in programs", "Receive educational materials", "Attend meetings as observers"]
    },
    {
        type: "Honorary Members",
        description: "Individuals recognized for outstanding contributions to the organization.",
        rights: ["Special recognition", "Advisory role", "Attend special events"]
    }
];

export default function LeadershipPage() {
    return (
        <div className="pt-16">
            {/* Page Header */}
            <section className="py-8">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="badge mb-4">👥 Our Team</span>
                        <h1 className="heading-xl mb-4">
                            <strong>Meet Our</strong> <span className="text-accent">Leadership</span>
                        </h1>
                        <p className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                            <strong className="text-accent">Dedicated leaders</strong> working together to improve health outcomes in our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Leaders */}
            <section className="py-8">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Chairman */}
                        <div className="card hover:shadow-xl transition-all duration-300 leadership-card-chairman">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 mb-4 sm:mb-6 group">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary-600 p-2">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/leaders/chairman.jpg"
                                                alt="Lukman Abdulrazak"
                                                width={288}
                                                height={288}
                                                className="rounded-full object-cover"
                                                onError={(e: any) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="text-6xl sm:text-8xl lg:text-9xl text-accent hidden">👑</div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg">
                                        👑
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-black mb-1">Lukman Abdulrazak</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'var(--accent)', color: 'white' }}>
                                    <span className="text-xs sm:text-sm font-bold">CHAIRPERSON</span>
                                </div>
                                <p className="text-xs sm:text-sm mb-4 font-medium leading-relaxed px-2 sm:px-0" style={{ color: 'var(--text-secondary)' }}>
                                    Leading our organization with <strong className="text-accent">vision and dedication</strong>, 
                                    driving community health initiatives across Warji LGA.
                                </p>
                                <a href="tel:08037966138" className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all font-bold text-xs sm:text-sm">
                                    <PhoneIcon className="w-4 h-4" />
                                    08037966138
                                </a>
                            </div>
                        </div>

                        {/* Secretary General */}
                        <div className="card hover:shadow-xl transition-all duration-300 leadership-card-secretary">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 mb-4 sm:mb-6 group">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary-600 p-2">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/leaders/ECCYaqub.png"
                                                alt="Yakubu Danazumi"
                                                width={288}
                                                height={288}
                                                className="rounded-full object-cover"
                                                onError={(e: any) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="text-6xl sm:text-8xl lg:text-9xl text-accent hidden">📄</div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg">
                                        📄
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-black mb-1">Yakubu Danazumi</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'var(--accent)', color: 'white' }}>
                                    <span className="text-xs sm:text-sm font-bold">SECRETARY GENERAL</span>
                                </div>
                                <p className="text-xs sm:text-sm mb-4 font-medium leading-relaxed px-2 sm:px-0" style={{ color: 'var(--text-secondary)' }}>
                                    Managing <strong className="text-accent">operations and coordination</strong>, 
                                    ensuring smooth organizational processes and documentation.
                                </p>
                                <a href="tel:08136452010" className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all font-bold text-xs sm:text-sm">
                                    <PhoneIcon className="w-4 h-4" />
                                    08136452010
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executive Council */}
            <section className="py-8 section-alt">
                <div className="container">
                    <div className="text-center mb-6">
                        <span className="badge mb-4">🏆 Executive Team</span>
                        <h2 className="heading-md mb-4"><strong>Our</strong> <span className="text-accent">Leadership Council</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {[
                            { emoji: "👥", title: "Vice Chairperson", desc: "Strategic support" },
                            { emoji: "💰", title: "Treasurer", desc: "Financial management" },
                            { emoji: "📢", title: "Public Relations", desc: "Community outreach" },
                            { emoji: "📚", title: "Programs Director", desc: "Training oversight" },
                            { emoji: "🧹", title: "Sanitation Director", desc: "Environmental health" },
                            { emoji: "👶", title: "MCH Director", desc: "Maternal & child health" },
                            { emoji: "❤️", title: "Welfare Officer", desc: "Member support" },
                            { emoji: "✍️", title: "Assistant Secretary", desc: "Documentation support" }
                        ].map((role, index) => (
                            <div key={index} className="card text-center py-4">
                                <div className="text-3xl mb-2">{role.emoji}</div>
                                <h3 className="font-bold text-sm mb-1">{role.title}</h3>
                                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership & Stats */}
            <section className="py-8">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div>
                            <h2 className="heading-md mb-4"><strong>Join Our</strong> <span className="text-accent">Community</span></h2>
                            <div className="space-y-4">
                                {[
                                    { emoji: "🎆", title: "Full Members", desc: "Active participants with voting rights" },
                                    { emoji: "🤝", title: "Associate Members", desc: "Supporters who participate occasionally" },
                                    { emoji: "🏅", title: "Honorary Members", desc: "Recognized for outstanding contributions" }
                                ].map((type, index) => (
                                    <div key={index} className="card">
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl">{type.emoji}</div>
                                            <div>
                                                <h3 className="font-bold text-accent">{type.title}</h3>
                                                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{type.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="heading-md mb-4"><strong>Our</strong> <span className="text-accent">Impact</span></h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "32+", label: "Active Members", emoji: "👥" },
                                    { number: "10", label: "Executive Officers", emoji: "🏆" },
                                    { number: "3", label: "Membership Types", emoji: "🎆" },
                                    { number: "2022", label: "Established", emoji: "📅" }
                                ].map((stat, index) => (
                                    <div key={index} className="card text-center py-6">
                                        <div className="text-2xl mb-2">{stat.emoji}</div>
                                        <div className="text-2xl font-black text-accent mb-1">{stat.number}</div>
                                        <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA */}
            <section className="py-8 section-alt">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-4xl mb-4">🚀</div>
                        <h2 className="heading-md mb-4">
                            <strong>Ready to</strong> <span className="text-accent">Lead Change?</span>
                        </h2>
                        <p className="mb-6 text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Join our <strong className="text-accent">leadership team</strong> and help shape the future of community health in Warji LGA.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            <strong>🤝 Become a Member</strong>
                            <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
