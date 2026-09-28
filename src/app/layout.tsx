import "./globals.css"
import { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import Navigation from "./component/navigation"
import AOSInit from "./component/AOSinit"
import KeyboardShortcuts from "./component/keyboardShortcuts"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Moses Handoyo | Junior Software Engineer",
  description: "Moses Handoyo’s portfolio — Junior Software Engineer specializing in .NET, C#, and full-stack development",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

// Runs before paint so a visitor who chose light mode never sees a dark flash; dark is the default
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSInit />
        <KeyboardShortcuts />
        <div className="flex min-h-screen">
          {/* Sidebar on desktop, top bar + slide-out drawer on mobile */}
          <Navigation />

          {/* Main content area */}
          <main className="flex-1 min-w-0 md:ml-64 px-4 pt-20 pb-6 sm:px-6 md:pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
