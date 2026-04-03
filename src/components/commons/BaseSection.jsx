import React from 'react';

const BaseSection = ({
  children,
  containerID = '',
  sectionClassName = 'section-padding-xy',
  containerClassName = 'max-w-full md:max-w-[768px] lg:max-w-[1080px] xl:max-w-[1440px]',
}) => {
  return (
    <section className={`z-10 ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default BaseSection;
