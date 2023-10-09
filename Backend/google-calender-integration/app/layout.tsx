
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productivity App',
  description: 'App to track days progress and productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
