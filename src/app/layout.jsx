import ClientProviders from '@/components/common/ClientProviders';
import '@/styles/globals.css';

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
      <body suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
