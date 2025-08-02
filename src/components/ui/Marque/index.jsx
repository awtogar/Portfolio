import React from 'react';
import './index.css';
import iconArrowRight from '../../../assets/images/arrow.svg';

export default function MarqueAnimation() {
  const marqueContent = (
    <>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
      <div className="marquee_part">
        modern creative studio
        <div className="arrow">
          <img src={iconArrowRight} alt="arrow right" />
        </div>
      </div>
    </>
  );

  return (
    <div className="justify-center items-center h-screen w-[100svw]">
      <div className="marquee-container">
        <section className="spacer"></section>
        <section className="marquee">
          <div className="marquee_inner">
            {marqueContent}
            {marqueContent}
          </div>
        </section>
        <section className="spacer"></section>
      </div>
    </div>
  );
}
