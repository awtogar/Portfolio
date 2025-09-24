const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-primary-muted bg-clip-text inline-block ${disabled ? '' : 'animate-shine group'} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(120deg,var(--color-primary-muted) 40%, var(--color-brand-primary) 50%, var(--color-primary) 60%)
        `,
        backgroundSize: '300% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
