import { BaseSection } from "@/components";
import { ListLayout } from "@/components/sections/writings";
import { getAllWritings } from "@/lib/writings";

export const metadata = {
  title: "Writings | Awaluddin Togar",
  description: "Notes, reflections, and breakdowns on design and development.",
};

export default function WritingsPage() {
  const writings = getAllWritings();

  return (
    <main>
      <section className="section-padding-x pt-[clamp(8rem,14vw,14rem)]">
        <ListLayout writings={writings} />
      </section>
    </main>
  );
}
