import HoverRotate from '../components/ui/HoverRotate';

export default function SectionNavLink({ title, links, scrollToSection }) {
  return (
    <div className="flex flex-col gap-s100">
      <span className="text-primary-muted inline-block border-b border-primary-muted pb-1 w-fit">{title}</span>

      {links.map((link, index) => (
        <HoverRotate key={index} href={link.href} scrollToSection={link.scrollable ? scrollToSection : undefined} target={link.target || undefined} rel={link.rel || undefined}>
          {link.title}
        </HoverRotate>
      ))}
    </div>
  );
}
