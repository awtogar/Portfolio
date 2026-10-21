'use client';
import Link from 'next/link';

function RollingText({ children, className = '' }) {
  return (
    <span className={`writing-roll ${className}`}>
      <span className="writing-roll__track">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}

export default function WritingListItem({ writing }) {
  const date = new Date(`${writing.date}T00:00:00`);
  const formattedDate = Number.isNaN(date.getTime()) ? writing.date : `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

  return (
    <div className="border-b border-fg/20">
      <Link href={`/writings/${writing.slug}`} className="writing-list-link group grid grid-cols-1 gap-2 py-5 md:grid-cols-[9rem_1fr] md:gap-6 md:py-6">
        <span className="text-base-sm text-fg/60">{formattedDate}</span>
        <RollingText className="text-h500 md:text-h400 uppercase leading-[1.1]">{writing.title}</RollingText>
      </Link>
    </div>
  );
}
