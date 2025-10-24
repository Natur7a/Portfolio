'use client'

import React, { useEffect } from "react";
import Details from "./Details";

export default function Portfolio() {
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
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 flex items-center justify-center">
        <div className="max-w-4xl w-full px-6 flex flex-col items-start space-y-8">
          <div className="space-y-4 w-full">
            <h1 className="text-7xl font-bold text-white">Experience</h1>
            <p className="text-lg text-gray-300">
              Here are some of my work experiences and projects that showcase my skills and contributions.
            </p>
          </div>
          <Details />
        </div>
      </section>
    </div>
  )
}