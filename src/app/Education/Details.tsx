import { GraduationCap } from 'lucide-react';
import React from 'react';

function Details() {
    const Study = [
        {
            University: "Bina Nusantara University",
            degree: "Bachelor of Computer Science",
            duration: "August 2024 - August 2028 (Expected)",
            GPA: "3.77/4.00",
            imageUrl: "/binus_logo.png",
            description: "Currently pursuing a Bachelor's degree in Computer Science with a focus on full-stack development and machine learning.",
        },
        
    ]

    return (
        <div className="mt-10">
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
                                <div className='text-white text-xl font-semibold'>
                                    {study.University}
                                </div>
                                <div className='text-gray-400 mt-1'>
                                    {study.degree}
                                </div>
                                <p className="text-gray-200 mt-5 text-lg">
                                    {study.duration}
                                </p>
                                <p className="text-gray-200 mt-2 text-lg">
                                    GPA: {study.GPA}
                                </p>
                                <p className="text-gray-200 mt-2 text-lg">
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