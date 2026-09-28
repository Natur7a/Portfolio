import { GraduationCap } from 'lucide-react';
import React from 'react';

function Details() {
    const Study = [
        {
            University: "Bina Nusantara University",
            degree: "Bachelor of Engineering in Computer Science (Global Class)",
            duration: "2024 - 2028 (Expected)",
            GPA: "3.75/4.00",
            imageUrl: "/binus_logo.png",
            description: "Currently pursuing a Bachelor's degree in Computer Science while working as a Junior Software Engineer, with a focus on full-stack development and computer vision.",
        },
        
    ]

    return (
        <div className="mt-6 sm:mt-10 w-full">
            {Study.map((study, index) => (
                <div key={index} className="w-full rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-8 mb-6">
                    <div className="flex items-start gap-4 sm:gap-5">
                        <div className="flex-shrink-0 rounded-xl bg-foreground text-background p-2.5 flex items-center justify-center">
                            <GraduationCap size={28} strokeWidth={1.75} />
                        </div>
                        <div className="flex flex-col flex-grow min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                <div>
                                    <div className='text-lg sm:text-xl font-semibold tracking-tight'>
                                        {study.University}
                                    </div>
                                    <div className='text-muted-foreground mt-1'>
                                        {study.degree}
                                    </div>
                                </div>
                                <p className="font-mono text-xs text-muted-foreground sm:pt-1.5 whitespace-nowrap">
                                    {study.duration}
                                </p>
                            </div>
                            <div className="mt-5 flex">
                                <span className="inline-flex items-baseline gap-2 rounded-full border border-border px-3 py-1">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">GPA</span>
                                    <span className="font-semibold">{study.GPA}</span>
                                </span>
                            </div>
                            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                                {study.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;
