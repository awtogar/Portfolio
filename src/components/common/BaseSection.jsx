import React from 'react';

const BaseSection = ({ as: Component = 'section', children, containerID = '', sectionClassName = 'section-padding-xy', containerClassName = 'max-w-[1920px]' }) => {
  return (
    <Component className={`relative z-10 w-full ${sectionClassName}`} id={containerID}>
      <div className={`m-auto w-full ${containerClassName}`}>{children}</div>
    </Component>
  );
};

export default BaseSection;
