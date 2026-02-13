import './globals.css';
import { Albert_Sans, Montserrat_Alternates } from 'next/font/google';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat-alternates',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`{albertSans.className} ${montserratAlternates.variable}`}
    >
      <body>
        <Navbar />
        <body className="overflow-x-hidden">{children}</body>
        <Footer />
      </body>
    </html>
  );
}
