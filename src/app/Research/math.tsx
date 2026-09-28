import React from "react"

// Minimal typeset helpers for the handful of equations in the papers (avoids pulling in a full TeX renderer)

export function Frac({ num, den }: { num: React.ReactNode; den: React.ReactNode }) {
  return (
    <span className="inline-flex flex-col items-center align-middle mx-1 text-center leading-tight">
      <span className="px-1 pb-0.5 border-b border-current">{num}</span>
      <span className="px-1 pt-0.5">{den}</span>
    </span>
  )
}

export function Sym({ base, sub, sup }: { base: React.ReactNode; sub?: React.ReactNode; sup?: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap">
      <i>{base}</i>
      {sup !== undefined && sub !== undefined ? (
        // Stack super- and subscript like z^{(i)}_{runtime}
        <span className="inline-flex flex-col align-middle text-[0.7em] leading-[1.1] ml-px -translate-y-[0.1em]">
          <span>{sup}</span>
          <span>{sub}</span>
        </span>
      ) : (
        <>
          {sup !== undefined && <sup>{sup}</sup>}
          {sub !== undefined && <sub>{sub}</sub>}
        </>
      )}
    </span>
  )
}
