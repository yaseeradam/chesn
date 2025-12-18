import Link from "next/link";
import type { Metadata } from "next";
import { EyeIcon, TargetIcon, MapPinIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
    title: "About Us | CHESN Warji Branch",
    description: "Learn about the Community Health Education and Sanitation Network (CHESN) Warji Branch - our vision, mission, and objectives.",
};

const objectives = [
    "Increase awareness and knowledge of immunization, family planning, antenatal care, and other essential health services among community members.",
    "Promote positive health behaviors through regular community health education sessions, outreach programs, and household sensitization.",
    "Encourage early and regular antenatal care (ANC) attendance among pregnant women in the community.",
    "Improve community participation in environmental sanitation to reduce the burden of preventable communicable diseases.",
    "Advocate for and support child survival strategies, including exclusive breastfeeding and proper nutrition.",
    "Collaborate with local health authorities, NGOs, and community leaders to strengthen health promotion initiatives in Warji LGA.",
    "Organize capacity-building activities for volunteers, community health educators, and youth groups on effective communication and health promotion.",
    "Contribute to the reduction of maternal, newborn, and childhood illnesses through coordinated health awareness campaigns.",
    "Monitor and evaluate community health education activities to ensure their effectiveness and sustainability.",
    "Foster community ownership and long-term engagement in maintaining a clean and healthy living environment."
];

export default function AboutPage() {
    return (
        <div className="pt-16">
            {/* Page Header */}
            <section className="section pb-0">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="badge mb-4">🏥 About CHESN</span>
                                <h1 className="heading-xl mb-4">
                                    <strong>Transforming Health</strong> <span className="text-accent">in Warji LGA</span>
                                </h1>
                                <p className="text-lg leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    We're a <strong className="text-accent">grassroots organization</strong> working directly with communities 
                                    to improve health outcomes through education, advocacy, and hands-on programs.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="card text-center py-6">
                                    <div className="text-3xl mb-2">🎯</div>
                                    <div className="font-bold text-accent">32+</div>
                                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Active Members</div>
                                </div>
                                <div className="card text-center py-6">
                                    <div className="text-3xl mb-2">📍</div>
                                    <div className="font-bold text-accent">7</div>
                                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Program Areas</div>
                                </div>
                                <div className="card text-center py-6">
                                    <div className="text-3xl mb-2">👥</div>
                                    <div className="font-bold text-accent">2022</div>
                                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Established</div>
                                </div>
                                <div className="card text-center py-6">
                                    <div className="text-3xl mb-2">🏆</div>
                                    <div className="font-bold text-accent">10</div>
                                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Leaders</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-8">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Mission */}
                            <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary-50), var(--background-card))' }}>
                                <div className="flex items-start gap-4">
                                    <div className="text-5xl">🎯</div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-3 text-accent">Our Mission</h3>
                                        <p className="text-lg font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            Empowering <strong className="text-accent">Warji LGA communities</strong> through comprehensive health education, 
                                            sustainable sanitation practices, and <strong className="text-accent">grassroots advocacy</strong> that creates lasting change.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Vision */}
                            <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary-100), var(--background-card))' }}>
                                <div className="flex items-start gap-4">
                                    <div className="text-5xl">🔮</div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-3 text-accent">Our Vision</h3>
                                        <p className="text-lg font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            A <strong className="text-accent">thriving Warji LGA</strong> where every family has access to quality health education, 
                                            lives in clean environments, and makes <strong className="text-accent">informed health decisions</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Core Values */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { emoji: "🤝", title: "Community First", desc: "Local needs drive our programs" },
                                { emoji: "🔍", title: "Transparency", desc: "Open about our work and impact" },
                                { emoji: "🏆", title: "Excellence", desc: "High standards in everything we do" },
                                { emoji: "📈", title: "Impact Focus", desc: "Measurable results that matter" }
                            ].map((value, index) => (
                                <div key={index} className="card text-center py-6">
                                    <div className="text-3xl mb-3">{value.emoji}</div>
                                    <h4 className="font-bold text-accent mb-2">{value.title}</h4>
                                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Key Focus Areas */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="heading-lg mb-4">
                            <strong>What We</strong> <span className="text-accent">Focus On</span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Our work centers around <strong className="text-accent">five core areas</strong> that create the biggest impact in community health.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: "💉", title: "Immunization Programs", desc: "Vaccination awareness and tracking" },
                            { icon: "👨‍👩‍👧‍👦", title: "Family Planning", desc: "Reproductive health education" },
                            { icon: "🤱", title: "Maternal Care", desc: "Antenatal and postnatal support" },
                            { icon: "🧹", title: "Sanitation", desc: "Clean environment initiatives" },
                            { icon: "🍼", title: "Child Nutrition", desc: "Breastfeeding and nutrition programs" },
                            { icon: "🚰", title: "WASH Programs", desc: "Water, sanitation, and hygiene" }
                        ].map((focus, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-4xl mb-3">{focus.icon}</div>
                                <h3 className="text-lg font-bold mb-2 text-accent">{focus.title}</h3>
                                <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>{focus.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Involved */}
            <section className="section section-alt">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-5xl mb-6">🤝</div>
                        <h2 className="heading-lg mb-6">
                            <strong>Ready to</strong> <span className="text-accent">Make an Impact?</span>
                        </h2>
                        <p className="text-xl mb-8 font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Join our team of <strong className="text-accent">dedicated volunteers</strong> working to improve health outcomes in Warji LGA.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="card">
                                <div className="text-3xl mb-3">📍</div>
                                <h3 className="font-bold mb-2">Find Us</h3>
                                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Tuya, El-Wadata, Ranga Ward<br/>
                                    <span className="text-accent">Warji LGA, Bauchi State</span>
                                </p>
                            </div>
                            <div className="card">
                                <div className="text-3xl mb-3">📅</div>
                                <h3 className="font-bold mb-2">Join Our Meetings</h3>
                                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Monthly general meetings<br/>
                                    <span className="text-accent">All community members welcome</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary">
                                <strong>🚀 Get Started</strong>
                                <ArrowRightIcon className="ml-2 w-5 h-5" />
                            </Link>
                            <Link href="/programs" className="btn btn-outline">
                                <strong>📋 View Programs</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
