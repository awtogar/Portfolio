import '@/styles/globals.css';
import { LenisProvider, PreloaderProvider } from '@/context';
import { CursorProvider, CustomCursor } from '@/cursor';


export const metadata = {
  title: 'Awaluddin Togar | Portfolio',
  description: 'Creative portfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-black">
        <LenisProvider>
          <CursorProvider>
            <PreloaderProvider root>
              {children}
            </PreloaderProvider>
          </CursorProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
