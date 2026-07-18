import { forwardRef } from 'react';
import { useLoading } from '@/context';

const TransitionLink = forwardRef(({ to, children, onClick, className, ...props }, ref) => {
  const { navigateTo } = useLoading();
  const handleClick = e => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigateTo(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} ref={ref} {...props}>
      {children}
    </a>
  );
});

export default TransitionLink;
