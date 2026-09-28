import React from "react"

// Turns "[12]" citations into jump links to the reference list and bare URLs into external links
export function RichText({ children }: { children: React.ReactNode }) {
  if (typeof children !== "string") return <>{children}</>

  return (
    <>
      {children.split(/(\[\d+\]|https?:\/\/[^\s]+)/g).map((part, index) => {
        const citation = part.match(/^\[(\d+)\]$/)
        if (citation) {
          return (
            <a
              key={index}
              href={`#ref-${citation[1]}`}
              className="font-mono text-[0.8em] text-foreground/80 hover:text-foreground hover:underline underline-offset-2"
            >
              [{citation[1]}]
            </a>
          )
        }
        if (/^https?:\/\//.test(part)) {
          // Keep sentence punctuation out of the link
          const url = part.replace(/[.,;)]+$/, "")
          return (
            <React.Fragment key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="break-all text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground">
                {url}
              </a>
              {part.slice(url.length)}
            </React.Fragment>
          )
        }
        return <React.Fragment key={index}>{part}</React.Fragment>
      })}
    </>
  )
}

export default RichText
