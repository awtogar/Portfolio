import { useTransition } from '../../context/TransitionContext';

export default function TransitionLink({ to, children, onClick, className, ...props }) {
  const { navigateTo } = useTransition();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigateTo(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
