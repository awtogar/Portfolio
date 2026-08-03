import ClientProviders from '@/components/common/ClientProviders';
import '@/styles/globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Creative portfolio',
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
