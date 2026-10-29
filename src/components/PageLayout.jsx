import Header from "./Header";

export default function PageLayout({
  children,
  layoutClassName = "",
  layoutStyles,
}) {
  return (
    <main className={`min-h-screen ${layoutClassName}`} style={layoutStyles}>
      <Header />
      {children}
    </main>
  );
}
