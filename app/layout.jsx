import './globals.css';
import localFont from 'next/font/local';
import Footer from './components/Footer.jsx';

const gopher = localFont({
  src: [
    {
      path: '../public/fonts/Gopher-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gopher-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gopher-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gopher',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gopher.variable}>
      <body className="overflow-x-hidden">{children}</body>
      <Footer />
    </html>
  );
}
