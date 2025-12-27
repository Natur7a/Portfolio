import Image from 'next/image';
import React from 'react';

function Details() {
    const experiences = [
        {
            title: "Associate Member at Bina Nusantara School",
            company: "Binus IT Division",
            duration: "March 2025 - Present",
            imageUrl: "/it_div.jpeg",
            work: [
                "Developed a cloud-based notification and email function for late and absent attendance within the BinusSchool system.",
                "Developed a blocking system in the BinusSchool system for an easier way moving to toddle.",
                "Designed and implemented score entry workflows with clear status tracking (Submitted, Unsubmitted, Upcoming, Pending, In Progress), improving transparency for academic staff.",
                "Participated in code reviews and contributed to team knowledge sharing."
            ],
            techStack: [
                "BootStrap", 
                "LinQ", 
                "SQL", 
                "C#", 
                ".NET",
                "HTML5/JavaScript"
            ],
        },
        
    ]

    return (
        <div className="mt-10">
            {experiences.map((experience, index) => (
                <div key={index}>
                    <div className="w-full h-[1px] bg-neutral-200 mb-6" />
                    <div className="flex flex-col lg:flex-row p-5 w-full lg:space-x-4">
                        <div className="flex w-full lg:w-2/5 flex-col mb-5 lg:mb-0">
                            {/* Company Logo and Name */}
                            <div className="flex flex-row w-full items-center pr-5">
                                <div className="flex-shrink-0 relative">
                                    <Image
                                        src={experience.imageUrl}
                                        alt={experience.company}
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                </div>
                                <p className="font-semibold ml-5 flex-grow">
                                    {experience.company}
                                </p>
                            </div>
                            {/* Duration and Location */}
                            <div className="text-neutral-300 text-sm mt-2">
                                {experience.duration}
                            </div>
                            <div className="text-neutral-300 text-sm mt-1">
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
                                            className="px-3 py-1 text-sm bg-neutral-100 text-neutral-700 rounded-full"
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