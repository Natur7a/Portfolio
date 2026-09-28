import "./globals.css"
import { ReactNode } from "react"
import Navigation from "./component/navigation"

export const metadata = {
  title: "Moses Handoyo | Junior Software Engineer",
  description: "Moses Handoyo’s portfolio — Junior Software Engineer specializing in .NET, C#, and full-stack development",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Left sidebar navigation, always visible */}
          <Navigation />

          {/* Main content area */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}