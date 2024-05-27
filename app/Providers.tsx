"use client"
import { ThemeProvider } from 'next-themes'

export default function Providers({children}: any) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-black-color dark:text-gray-color text-gray-600 transition-colors duration-300 min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>
  )
}