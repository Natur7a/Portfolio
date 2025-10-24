'use client'

import React, { useEffect } from "react";
import Details from "./Details";

export default function Portfolio() {
  return (
        useEffect(() => {
            const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "a") {
                window.location.href = "/Experience";
            } else if (event.key === "s") {
                window.location.href = "/Education";
            } else if (event.key === "d") {
                window.location.href = "#contact";
            } else if (event.key === "w") {
                window.location.href = "/Explore";
            }
            }
            
            window.addEventListener('keydown', handleKeyDown);
            return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        }, []),
    <div className="min-h-screen bg-background" data-aos="fade-up">
        <section className="py-24 flex items-center justify-center">
            <div className="max-w-4xl w-full px-6 flex flex-col items-start space-y-8">
                <div className="space-y-4 w-full">
                    <h1 className="text-7xl font-bold text-white">Education</h1>
                    <p className="text-lg text-gray-300">
                        &ldquo;Education is learning what you didn&apos;t even know you didn&apos;t know.&rdquo; -Daniel J. Boorstin
                    </p>
                </div>
                <Details />
            </div>
        </section>
    </div>
  )
}