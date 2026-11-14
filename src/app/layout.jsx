import "@/app/globals.css";
import { LenisProvider, PreloaderProvider } from "@/context";
import { CursorProvider, CursorFollower, CursorHover } from "@/cursor";
import { Preloader } from "@/components";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Awaluddin Togar | Portfolio",
  description: "Creative portfolio",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <LenisProvider>
          <CursorProvider>
            <CursorFollower />
            <CursorHover />
            <PreloaderProvider>
              <Preloader />
              {children}
            </PreloaderProvider>
          </CursorProvider>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
