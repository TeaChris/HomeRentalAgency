import './globals.css'

export const metadata = {
  title: 'Home Rental Service Agency',
  description: 'Your number one sure plug rental service agency',
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
