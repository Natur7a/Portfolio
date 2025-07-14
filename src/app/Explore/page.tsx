'use client'

import { useEffect } from "react";
import { HeroSection } from "./hero"
export default function Portfolio() {
  return (
      useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "a") {
            window.location.href = "/Experience";
          } else if (event.key === "s") {
            window.location.href = "/Education";
          }  else if (event.key === "w") {
            window.location.href = "/Explore";
          }
        }
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
      }, []),
    <div className="min-h-screen bg-background">
      <HeroSection />
    </div>
  )
}
