'use client';

import Hero from "@/components/Hero";
import Link from "next/link";
import { SyringeIcon, FamilyIcon, HeartIcon, BroomIcon, BabyIcon, HomeIcon, EmergencyIcon, WaterIcon, ArrowRightIcon } from "@/components/Icons";

const objectives = [
  {
    icon: <SyringeIcon />,
    title: "Immunization Awareness",
    description: "Increasing knowledge of immunization and essential health services"
  },
  {
    icon: <FamilyIcon />,
    title: "Family Planning",
    description: "Promoting family planning education and reproductive health"
  },
  {
    icon: <HeartIcon />,
    title: "Maternal Care",
    description: "Encouraging early and regular antenatal care attendance"
  },
  {
    icon: <BroomIcon />,
    title: "Environmental Sanitation",
    description: "Improving community participation in sanitation initiatives"
  },
  {
    icon: <BabyIcon />,
    title: "Child Nutrition",
    description: "Advocating for exclusive breastfeeding and proper nutrition"
  },
  {
    icon: <FamilyIcon />,
    title: "Community Collaboration",
    description: "Working with local health authorities and NGOs"
  }
];

const programs = [
  { name: "Immunization & Routine Vaccination", icon: <SyringeIcon /> },
  { name: "Family Planning Education", icon: <FamilyIcon /> },
  { name: "Antenatal & Postnatal Care", icon: <HeartIcon /> },
  { name: "Environmental Sanitation", icon: <HomeIcon /> },
  { name: "Nutrition & Breastfeeding", icon: <BabyIcon /> },
  { name: "Health Emergency Response", icon: <EmergencyIcon /> },
  { name: "Water, Sanitation & Hygiene (WASH)", icon: <WaterIcon /> }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Vision Section */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <span className="badge mb-4">🌟 Why We Exist</span>
            <h2 className="heading-lg mb-6">
              <strong>Our Vision for</strong> <span className="text-accent">Warji LGA</span>
            </h2>
            <p className="text-xl leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
              We envision <strong className="text-accent">thriving communities</strong> where every family has access to 
              quality health education, clean environments, and the knowledge they need to live healthier lives.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-10">
            <span className="badge mb-4">🎯 Our Impact Areas</span>
            <h2 className="heading-lg mb-4"><strong>How We're Making</strong> <span className="text-accent">a Difference</span></h2>
            <p className="max-w-3xl mx-auto text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
              From immunization campaigns to sanitation programs, we're working on the ground 
              to create <strong className="text-accent">lasting health improvements</strong> in our communities.
            </p>
          </div>
          <div className="grid-cards">
            {objectives.map((obj, index) => (
              <div key={index} className="card">
                <div className="icon-box mb-4">
                  {obj.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{obj.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <span className="badge mb-4">📋 Active Programs</span>
            <h2 className="heading-lg mb-4"><strong>Seven Key Areas</strong> <span className="text-accent">We Focus On</span></h2>
            <p className="max-w-3xl mx-auto text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
              Each program addresses critical health needs in Warji LGA, from <strong className="text-accent">maternal care</strong> 
              to <strong className="text-accent">environmental sanitation</strong>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full transition-all hover:shadow-md"
                style={{
                  background: 'var(--background-alt)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <span className="text-accent">{program.icon}</span>
                <span className="font-medium text-sm">{program.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/programs" className="btn btn-primary">
              <strong>Explore Our Programs</strong>
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              <strong>Join Our</strong> <span className="text-accent">Health Movement</span>
            </h2>
            <p className="mb-8 text-xl font-medium" style={{ color: 'var(--text-secondary)' }}>
              Whether you're a <strong className="text-accent">healthcare worker</strong>, community leader, or simply someone who cares 
              about improving health outcomes in Warji LGA - <strong>we need you</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn btn-primary">
                <strong>Start Your Journey</strong>
              </Link>
              <Link href="/about" className="btn btn-outline">
                <strong>Meet Our Team</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <span className="badge mb-4">📈 Our Impact</span>
            <h2 className="heading-md mb-4"><strong>Growing</strong> <span className="text-accent">Together</span></h2>
          </div>
          <div className="grid-stats max-w-5xl mx-auto">
            {[
              { number: "32+", label: "Dedicated Members", desc: "Community volunteers" },
              { number: "7", label: "Active Programs", desc: "Health focus areas" },
              { number: "10", label: "Leadership Team", desc: "Executive officers" },
              { number: "2022", label: "Founded", desc: "Years of service" }
            ].map((stat, index) => (
              <div key={index} className="card text-center py-8">
                <div className="text-4xl md:text-5xl font-black text-accent mb-3">{stat.number}</div>
                <div className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.label}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
