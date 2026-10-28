import "@/styles/globals.css";
import { LenisProvider, PreloaderProvider } from "@/context";
import { CursorProvider, CursorFollower, CursorHover } from "@/cursor";
import Header from "@/components/Header";

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
            <PreloaderProvider root>
              <Header />
              {children}
            </PreloaderProvider>
          </CursorProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
