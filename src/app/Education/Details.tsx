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
                <div key={index} className="flex items-start mb-6"> {/* Changed to items-start */}
                    <div className="flex">
                        <div className="bg-gray-300 p-2 rounded-lg flex items-center justify-center">
                            <GraduationCap 
                                className="text-4xl text-black" 
                                size={35}
                            />
                        </div>
                    </div>
                    <div className="ml-4 flex flex-col flex-grow"> {/* Added flex-grow */}
                        <div className="flex justify-between items-start"> {/* Added container for title and duration */}
                            <div>
                                <div className='text-neutral-900 dark:text-white text-lg sm:text-xl font-semibold'>
                                    {study.University}
                                </div>
                                <div className='text-gray-500 dark:text-gray-400 mt-1'>
                                    {study.degree}
                                </div>
                                <p className="text-gray-700 dark:text-gray-200 mt-5 text-base sm:text-lg">
                                    {study.duration}
                                </p>
                                <p className="text-gray-700 dark:text-gray-200 mt-2 text-base sm:text-lg">
                                    GPA: {study.GPA}
                                </p>
                                <p className="text-gray-700 dark:text-gray-200 mt-2 text-base sm:text-lg">
                                    {study.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
            ))}
        </div>
    )
}

export default Details;