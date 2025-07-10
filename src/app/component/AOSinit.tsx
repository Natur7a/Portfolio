"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return null
}
export default AOSInit
