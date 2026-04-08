import { useLoading } from '../../context/LoadingProvider';

export default function TransitionLink({ to, children, onClick, className, ...props }) {
  const { navigateTo } = useLoading();
  const handleClick = e => {
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
