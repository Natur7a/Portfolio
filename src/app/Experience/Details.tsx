import Image from 'next/image';
import React from 'react';

function Details() {
    const experiences = [
        {
            title: "Junior Software Engineer",
            company: "Bina Nusantara IT Division (Binus School Team)",
            duration: "Mar 2026 — Present",
            current: true,
            imageUrl: "/it_div.jpeg",
            work: [
                "Develop and maintain finance and operational systems that support internal business processes and daily school operations across Binus School.",
                "Enhance production-grade internal web applications using .NET and C#, improving system reliability and usability for non-technical stakeholders.",
                "Troubleshoot and resolve production issues in a live environment, collaborating with cross-functional teams to keep operational workflows running.",
            ],
            techStack: [
                ".NET",
                "C#",
                "ASP.NET Core Razor Pages",
                "LINQ",
                "JavaScript",
                "SQL",
                "Bootstrap",
                "Azure DevOps"
            ],
        },
        {
            title: "Full-Stack Developer Intern (Associate Member Program)",
            company: "Bina Nusantara IT Division (Binus School Team)",
            duration: "Mar 2025 — Feb 2026",
            current: false,
            imageUrl: "/it_div.jpeg",
            work: [
                "Redesigned the Copy Score system, cutting execution time from over 30 minutes to under 10 seconds (~99% faster) by batching large queries and using dictionary-based lookups for constant-time data access.",
                "Designed and implemented score entry workflows with status tracking (Submitted, Unsubmitted, Upcoming, Pending, In Progress), improving teacher productivity by approximately 40%.",
                "Built and deployed a cloud-based notification and email service for student absence handling using .NET and Azure DevOps, now actively used in production.",
                "Maintained production web systems for academic scoring used daily by teachers and educational staff across Binus School.",
                "Diagnosed and resolved data consistency issues in relational data models with complex many-to-many mappings, working alongside senior engineers.",
                "Delivered features in Agile sprints, contributing to sprint planning, estimation, and peer code reviews in a shared codebase."
            ],
            techStack: [
                ".NET",
                "C#",
                "ASP.NET Core Razor Pages",
                "LINQ",
                "JavaScript",
                "SQL",
                "Bootstrap",
                "Azure DevOps"
            ],
        },
    ]

    const eyebrow = "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground";
    const pill = "px-2.5 py-1 font-mono text-xs border border-border bg-card text-muted-foreground rounded-full";

    return (
        <div className="mt-6 sm:mt-10 w-full">
            {experiences.map((experience, index) => (
                <div key={index} data-aos="fade-up">
                    <div className="w-full h-px bg-border" />
                    <div className="flex flex-col lg:flex-row py-8 w-full lg:space-x-8">
                        <div className="flex w-full lg:w-2/5 flex-col mb-6 lg:mb-0">
                            {/* Company Logo and Name */}
                            <div className="flex flex-row w-full items-center gap-4">
                                <div className="flex-shrink-0 relative">
                                    <Image
                                        src={experience.imageUrl}
                                        alt={experience.company}
                                        width={80}
                                        height={80}
                                        className="rounded-xl ring-1 ring-border w-14 h-14"
                                    />
                                </div>
                                <p className="font-semibold tracking-tight leading-snug flex-grow">
                                    {experience.company}
                                </p>
                            </div>
                            {/* Role and Duration */}
                            <p className="mt-4 font-medium">
                                {experience.title}
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                <span className="font-mono text-xs text-muted-foreground">
                                    {experience.duration}
                                </span>
                                {experience.current && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        Current
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex w-full lg:flex-1 flex-col">
                            <h3 className={`${eyebrow} mb-3`}>
                                Responsibilities & Achievements
                            </h3>
                            <ul className="list-disc pl-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground/50">
                                {experience.work.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <div className="mt-6 max-w-full">
                                <h3 className={`${eyebrow} mb-3`}>Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.techStack.map((tech, idx) => (
                                        <span key={idx} className={pill}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Details;
