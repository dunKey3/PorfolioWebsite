import React from 'react'
import type { Metadata } from 'next'
import '@/app/globals.css'

export const metaData : Metadata = {
    title: "Aditya Singh",
    description: "Aditya Singh Portfolio"
}

export default function RootLayout({children} : {children: React.ReactNode}) {
    return (
        <html>
            <body className='min-h-screen background_gradient_black font-poppins'>
                {children}
            </body>
        </html>
    )
}