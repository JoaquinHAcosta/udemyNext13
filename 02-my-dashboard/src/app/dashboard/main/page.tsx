import { SimpleWidget, WidgetsGrid } from '@/components'
import React from 'react'

export const metadata = {
  title: 'Admin dashboard',
  description: 'Description',
}

const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetsGrid />
    </div>
  )
}

export default MainPage
