import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono, Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

//fasepay-logo.png

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'], // Space Mono is available only in 400 (regular) and 700 (bold)
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FaasPay',
  description: 'Transactions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
