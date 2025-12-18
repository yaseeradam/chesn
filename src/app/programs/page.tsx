import Link from "next/link";
import type { Metadata } from "next";
import { SyringeIcon, FamilyIcon, HeartIcon, HomeIcon, BabyIcon, EmergencyIcon, WaterIcon, CheckIcon } from "@/components/Icons";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Our Programs | CHESN Warji Branch",
    description: "Explore CHESN Warji Branch program areas including immunization, family planning, maternal care, sanitation, and WASH initiatives.",
};

interface Program {
    icon: ReactNode;
    title: string;
    description: string;
    activities: string[];
}

const programs: Program[] = [
    {
        icon: <SyringeIcon />,
        title: "Immunization & Routine Vaccination Awareness",
        description: "We work tirelessly to increase community awareness about the importance of routine immunization for children and adults. Our campaigns focus on dispelling myths, providing accurate information, and encouraging families to complete vaccination schedules.",
        activities: [
            "Community sensitization campaigns",
            "House-to-house vaccination awareness",
            "Collaboration with health facilities",
            "Tracking and follow-up on vaccination schedules"
        ]
    },
    {
        icon: <FamilyIcon />,
        title: "Family Planning Education",
        description: "Our family planning program aims to educate couples and individuals about reproductive health choices. We provide information on various family planning methods and help community members make informed decisions about their reproductive health.",
        activities: [
            "Counseling sessions for couples",
            "Youth reproductive health education",
            "Distribution of educational materials",
            "Referral to family planning services"
        ]
    },
    {
        icon: <HeartIcon />,
        title: "Antenatal & Postnatal Care Advocacy",
        description: "We encourage pregnant women to attend regular antenatal care visits and follow up with postnatal care. Early and consistent care helps reduce maternal and infant mortality rates in our community.",
        activities: [
            "Identifying pregnant women in communities",
            "Encouraging early ANC registration",
            "Birth preparedness education",
            "Postnatal visit reminders and follow-up"
        ]
    },
    {
        icon: <HomeIcon />,
        title: "Environmental Sanitation & Waste Management",
        description: "Clean environments lead to healthy communities. We organize sanitation campaigns, educate households on proper waste disposal, and advocate for clean surroundings to prevent the spread of diseases.",
        activities: [
            "Community cleanup exercises",
            "Household sanitation inspections",
            "Waste management training",
            "Construction of refuse disposal points"
        ]
    },
    {
        icon: <BabyIcon />,
        title: "Nutrition & Exclusive Breastfeeding Promotion",
        description: "Proper nutrition is the foundation of good health. We promote exclusive breastfeeding for the first six months and educate mothers on proper infant and child nutrition practices.",
        activities: [
            "Breastfeeding support groups",
            "Nutrition education for mothers",
            "Complementary feeding guidance",
            "Identification of malnourished children"
        ]
    },
    {
        icon: <EmergencyIcon />,
        title: "Health Emergency Response Education",
        description: "We prepare communities to respond to health emergencies through first aid training, disease outbreak awareness, and emergency preparedness education.",
        activities: [
            "First aid training sessions",
            "Disease outbreak awareness",
            "Emergency contact information distribution",
            "Community health volunteer training"
        ]
    },
    {
        icon: <WaterIcon />,
        title: "Water, Sanitation and Hygiene (WASH)",
        description: "Access to clean water and proper hygiene is essential for disease prevention. Our WASH program promotes safe water practices, handwashing, and proper hygiene behaviors.",
        activities: [
            "Handwashing demonstrations",
            "Safe water storage education",
            "Latrine use promotion",
            "Menstrual hygiene management"
        ]
    }
];

export default function ProgramsPage() {
    return (
        <div className="pt-16">
            {/* Page Header */}
            <section className="py-8">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="badge mb-4">📋 What We Do</span>
                        <h1 className="heading-xl mb-4">
                            <strong>Our</strong> <span className="text-accent">Program Areas</span>
                        </h1>
                        <p className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                            <strong className="text-accent">Seven focused programs</strong> designed to create lasting health improvements in Warji LGA.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-8">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {[
                            { emoji: "💉", title: "Immunization Programs", desc: "Vaccination awareness and community outreach", activities: ["Door-to-door campaigns", "Health facility partnerships", "Vaccination tracking"] },
                            { emoji: "👨‍👩‍👧‍👦", title: "Family Planning", desc: "Reproductive health education and counseling", activities: ["Couple counseling", "Youth education", "Method information"] },
                            { emoji: "🤱", title: "Maternal Care", desc: "Supporting mothers through pregnancy and beyond", activities: ["ANC registration", "Birth preparedness", "Postnatal follow-up"] },
                            { emoji: "🧹", title: "Environmental Sanitation", desc: "Clean communities for healthier living", activities: ["Community cleanups", "Waste management", "Sanitation training"] },
                            { emoji: "🍼", title: "Child Nutrition", desc: "Promoting proper nutrition from birth", activities: ["Breastfeeding support", "Nutrition education", "Growth monitoring"] },
                            { emoji: "🚨", title: "Health Emergency Response", desc: "Preparing communities for health crises", activities: ["First aid training", "Emergency planning", "Volunteer coordination"] },
                            { emoji: "🚰", title: "WASH Programs", desc: "Water, sanitation, and hygiene initiatives", activities: ["Handwashing campaigns", "Safe water practices", "Hygiene education"] }
                        ].map((program, index) => (
                            <div key={index} className="card hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">{program.emoji}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-accent">{program.title}</h3>
                                        <p className="font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>{program.desc}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {program.activities.map((activity, actIndex) => (
                                        <div key={actIndex} className="flex items-center gap-2 text-sm">
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                            <span style={{ color: 'var(--text-secondary)' }}>{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 section-alt">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h2 className="heading-md mb-4">
                            <strong>Ready to</strong> <span className="text-accent">Get Involved?</span>
                        </h2>
                        <p className="mb-6 text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Join our <strong className="text-accent">community health programs</strong> and make a real difference in Warji LGA.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary">
                                <strong>🚀 Start Volunteering</strong>
                            </Link>
                            <Link href="/leadership" className="btn btn-outline">
                                <strong>👥 Meet Our Team</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
