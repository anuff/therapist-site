import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  // weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  weight: ['400'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={noto.className}>
      <body>
        <Navbar />
        <body className="overflow-x-hidden">{children}</body>
        <Footer />
      </body>
    </html>
  );
}
