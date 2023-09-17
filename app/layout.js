import { Inter } from 'next/font/google';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fantasy">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
