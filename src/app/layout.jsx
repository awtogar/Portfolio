import "@/app/globals.css";
import { LenisProvider, PreloaderProvider } from "@/context";
import { CursorProvider, CursorFollower, CursorHover } from "@/cursor";
import { Preloader } from "@/components";

export const metadata = {
  title: "Awaluddin Togar | Portfolio",
  description: "Creative portfolio",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
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
      </body>
    </html>
  );
}
