import React from 'react';

const Slide = props => {
  return (
    <div style={{ left: props.left }} className="relative flex whitespace-nowrap text-based">
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img style={{ objectFit: 'cover' }} src={src} alt="image" className="w-full h-full" />
      </span>
    </div>
  );
};

export default Slide;
