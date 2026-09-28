import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

function Details() {
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

    const eyebrow = "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground";
    const pill = "px-2.5 py-1 font-mono text-xs border border-border bg-card text-muted-foreground rounded-full";

    return (
        <div className="mt-6 sm:mt-10 w-full">
            {projects.map((project, index) => (
                <div key={index} data-aos="fade-up">
                    <div className="w-full h-px bg-border" />
                    <div className="flex flex-col lg:flex-row py-8 w-full lg:space-x-8">
                        <div className="flex w-full lg:w-2/5 flex-col items-start mb-6 lg:mb-0">
                            {/* Project Name and Link */}
                            <p className="text-lg font-semibold tracking-tight">
                                {project.title}
                            </p>
                            <p className="mt-2 font-mono text-xs text-muted-foreground">
                                Personal Project
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:bg-foreground/5"
                            >
                                <Github size={14} />
                                View on GitHub
                                <ArrowUpRight size={14} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>

                        <div className="flex w-full lg:flex-1 flex-col">
                            <p className="text-sm leading-relaxed mb-6">{project.summary}</p>
                            <h3 className={`${eyebrow} mb-3`}>
                                Highlights
                            </h3>
                            <ul className="list-disc pl-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground/50">
                                {project.work.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <div className="mt-6 max-w-full">
                                <h3 className={`${eyebrow} mb-3`}>Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
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
