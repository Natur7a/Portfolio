import Image from 'next/image';
import React from 'react';

function Details() {
    const experiences = [
        {
            title: "Junior Software Engineer",
            company: "Bina Nusantara IT Division (Binus School Team)",
            duration: "March 2026 - Present",
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
            duration: "March 2025 - February 2026",
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

    const projects = [
        {
            title: "ScoutUp AI",
            link: "https://github.com/ray-s-org/ScoutUp",
            summary: "Computer vision system that analyses football drill videos to measure player performance and generate structured assessment scores for coaches and scouts.",
            work: [
                "Built an end-to-end computer vision pipeline that converts football drill videos into structured performance metrics and a 0-100 execution score, using pose-derived features and drill-specific video analysis.",
                "Designed a human-in-the-loop camera calibration system with reusable geometry presets, perspective transformation, resolution-aware coordinate scaling, and validation checks to prevent silent measurement errors.",
                "Implemented asynchronous video inference and partial-result handling, allowing multiple drills to be processed independently while explicitly rejecting unreliable measurements instead of generating fabricated results; GPU inference runs at approximately 2x real-time."
            ],
            techStack: [
                "Python",
                "YOLO",
                "Pose Estimation",
                "REST API",
                "Computer Vision"
            ],
        },
    ]

    return (
        <div className="mt-6 sm:mt-10 w-full">
            {experiences.map((experience, index) => (
                <div key={index}>
                    <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-200 mb-6" />
                    <div className="flex flex-col lg:flex-row py-5 sm:p-5 w-full lg:space-x-4">
                        <div className="flex w-full lg:w-2/5 flex-col mb-5 lg:mb-0">
                            {/* Company Logo and Name */}
                            <div className="flex flex-row w-full items-center pr-5">
                                <div className="flex-shrink-0 relative">
                                    <Image
                                        src={experience.imageUrl}
                                        alt={experience.company}
                                        width={80}
                                        height={80}
                                        className="rounded-lg w-14 h-14 sm:w-20 sm:h-20"
                                    />
                                </div>
                                <p className="font-semibold ml-5 flex-grow">
                                    {experience.company}
                                </p>
                            </div>
                            {/* Duration and Location */}
                            <div className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
                                {experience.duration}
                            </div>
                            <div className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">
                                {experience.title}
                            </div>
                        </div>

                        <div className="flex w-full lg:flex-1 flex-col">
                            <h3 className="font-semibold mb-2">
                                Responsibilities & Achievements:
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                {experience.work.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <div className="mt-4 max-w-full">
                                <h3 className="font-semibold mb-2">Tech Stack:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-100 text-neutral-700 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {projects.map((project, index) => (
                <div key={index}>
                    <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-200 mb-6" />
                    <div className="flex flex-col lg:flex-row py-5 sm:p-5 w-full lg:space-x-4">
                        <div className="flex w-full lg:w-2/5 flex-col mb-5 lg:mb-0">
                            {/* Project Name and Link */}
                            <p className="font-semibold">
                                {project.title}
                            </p>
                            <div className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
                                Project
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 dark:text-neutral-300 text-sm mt-1 hover:underline"
                            >
                                View on GitHub
                            </a>
                        </div>

                        <div className="flex w-full lg:flex-1 flex-col">
                            <p className="text-sm mb-4">{project.summary}</p>
                            <h3 className="font-semibold mb-2">
                                Highlights:
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                {project.work.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <div className="mt-4 max-w-full">
                                <h3 className="font-semibold mb-2">Tech Stack:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-100 text-neutral-700 rounded-full"
                                        >
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
