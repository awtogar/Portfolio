import React from 'react';

// A reusable layout component for sections. use default padding but can
const BaseSection = ({
  children,
  containerID = '',
  sectionClassName = 'section-padding-xy',
  containerClassName = 'max-w-full lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]',
}) => {
  return (
    <section className={`z-10 ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default BaseSection;
