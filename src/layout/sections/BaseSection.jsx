import React from 'react';

// A reusable layout component for sections. use default padding but can be overridden via props.
const BaseSection = ({ children, containerID = '', sectionClassName = 'section-padding-xy', containerClassName = 'md:max-w-[768px]' }) => {
  return (
    <section className={`z-10 ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default BaseSection;
