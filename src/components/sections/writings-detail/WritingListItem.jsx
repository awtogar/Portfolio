"use client";

import Link from "next/link";

export default function WritingListItem({
  writing,
  onMouseEnter,
  onMouseLeave,
}) {
  const date = new Date(`${writing.date}T00:00:00`);
  const formattedDate = Number.isNaN(date.getTime())
    ? writing.date
    : `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

  const row = (hidden) => (
    <Link
      href={`/writings/${writing.slug}`}
      className="writing-list-link group/item items-center grid grid-cols-1 gap-2 px-4 py-5 md:grid-cols-[9rem_1fr] md:gap-6 md:py-6 transition-colors duration-200"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <span className="text-base-sm text-fg/60 transition-colors duration-200 group-hover/item:text-white/60">
        {formattedDate}
      </span>
      <span className="text-h500 uppercase leading-[1.1] md:text-h400 text-fg transition-colors duration-200 group-hover/item:text-white">
        {writing.title}
      </span>
    </Link>
  );

  return (
    <div className="border-b border-black/25 bg-transparent text-fg transition-colors duration-700 ease-out hover:bg-neutral-900 hover:text-bg hover:duration-200">
      <div
        className="outter-container writing-roll"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className="writing-roll__track">
          <span className="block">{row(false)}</span>
          <span aria-hidden="true" className="block">
            {row(true)}
          </span>
        </span>
      </div>
    </div>
  );
}
