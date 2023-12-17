import React from 'react'

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-xl">Hola mundo</span>
      {children}
    </main>
  )
}

export default GeneralLayout
