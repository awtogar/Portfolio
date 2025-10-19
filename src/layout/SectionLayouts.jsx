import React from 'react';


// A reusable layout component for sections. biar konsisten tiap padding yg gw buat
const SectionLayout = ({ children, containerID = '' }) => {
  const sectionClassName = 'section-padding-xy';
  const containerClassName = 'lg:max-w-[1440px]';

  return (
    <section className={`z-10 ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
