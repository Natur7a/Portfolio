import React from "react";
import Details from "./Details";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black" data-aos="fade-up">
        <section className="py-24 flex items-center justify-center" data-aos="fade-right">
            <div className="max-w-4xl w-full px-6 flex flex-col items-start space-y-8">
                <div className="space-y-4 w-full">
                    <h1 className="text-7xl font-bold text-white">Education</h1>
                    <p className="text-lg text-gray-300">
                        "Education is learning what you didn't even know you didn't know." —Daniel J. Boorstin
                    </p>
                </div>
                <Details />

            </div>
        </section>
    </div>
  )
}