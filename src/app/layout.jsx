import '@/styles/globals.css';
import { LenisProvider, PreloaderProvider } from '@/context';

export const metadata = {
  title: 'Awaluddin Togar | Portfolio',
  description: 'Creative portfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <LenisProvider>
          <PreloaderProvider root>{children}</PreloaderProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
