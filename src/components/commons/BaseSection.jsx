import React from 'react';

const BaseSection = ({
  children,
  containerID = '',
  sectionClassName = 'section-padding-xy',
  containerClassName = 'max-w-[1920px]',
}) => {
  return (
    <section className={`relative z-10 w-full ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default BaseSection;
