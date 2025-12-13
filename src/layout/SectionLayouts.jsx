import React from 'react';

// A reusable layout component for sections. use default padding but can be overridden via props.
const SectionLayout = ({ children, containerID = '', sectionClassName = 'section-padding-xy', containerClassName = 'lg:max-w-[1440px]' }) => {
  return (
    <section className={`z-10 ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default SectionLayout;
