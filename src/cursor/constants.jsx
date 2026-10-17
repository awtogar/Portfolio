import { RiArrowRightUpLine, RiCheckLine } from '@remixicon/react';

export const CURSOR_SIZES = {
  small: { idle: 6, hovered: 60 },
  medium: { idle: 6, hovered: 60 },
  large: { idle: 6, hovered: 70 },
  xlarge: { idle: 6, hovered: 70 },
};

export const CURSOR_FILLS = {
  transparent: 'bg-transparent',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
};

export const CURSOR_CONTENTS = {
  arrow: <RiArrowRightUpLine className="w-5 h-5 md:w-6 md:h-6" />,
  text: <span className="text-fg tracking-widest uppercase">children</span>,
  check: <RiCheckLine className="w-5 h-5 md:w-6 md:h-6" />,
};

export const CURSOR_TEXT_COLORS = {
  primary: 'text-fg',
  secondary: 'text-secondary',
  brandPrimary: 'text-brand-primary',
  brandSecondary: 'text-brand-secondary',
  brandTertiary: 'text-brand-tertiary',
};
