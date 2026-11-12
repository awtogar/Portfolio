"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import PageLayout from "@/components/PageLayout";

const images = Array.from(
  { length: 13 },
  (_, i) => `/assets/images/labs/${i + 1}.webp`
);
const config = {
  imageCount: images.length,
  visibleSlidesRight: 12,
  visibleSlidesLeft: 2,
  offsetStep: 12,
  rotationStep: -7,
  scaleStep: 0.05,
  blurStep: 0.25,
  brightnessStep: 0.1,
  minBrightness: 0.25,
  wheelSensitivity: 0.005,
  touchSensitivity: 0.0075,
  maxWheelDelta: 200,
  smoothing: 0.075,
  snapDelay: 250,
  swapThreshold: 0.5,
};

const slideCount = config.visibleSlidesLeft + config.visibleSlidesRight + 2;

export default function LabsPage() {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slidesContainer = slidesRef.current;
    if (!slider || !slidesContainer) return;

    const slides = Array.from(slidesContainer.querySelectorAll(".slide"));

    let currentPosition = 0;
    let targetPosition = 0;
    let scrollDirection = 1;
    let snapTimeout;

    const wrapOffset = gsap.utils.wrap(
      -(config.visibleSlidesLeft + 1),
      slideCount - (config.visibleSlidesLeft + 1)
    );
    const wrapImageIndex = gsap.utils.wrap(0, config.imageCount);

    function updateSlideImage(slide, position) {
      const imageIndex = wrapImageIndex(Math.round(position));
      if (slide.dataset.image === String(imageIndex)) return;
      slide.dataset.image = String(imageIndex);
      const img = slide.querySelector("img");
      if (img) img.src = images[imageIndex];
    }

    function getSlideZIndex(offset) {
      const travelOffset = offset * scrollDirection;
      if (travelOffset >= 0) return Math.round(1000 - travelOffset * 10);
      if (travelOffset > -config.swapThreshold) return 1001;
      return Math.round(500 + travelOffset * 10);
    }

    function getSlideOpacity(offset) {
      const opacity =
        offset < 0
          ? config.visibleSlidesLeft + 1 + offset
          : config.visibleSlidesRight + 1 - offset;
      return gsap.utils.clamp(0, 1, opacity);
    }

    function renderSlides() {
      slides.forEach((slide, index) => {
        const offset = wrapOffset(index - currentPosition);
        const distance = Math.abs(offset);
        const blur = distance * config.blurStep;
        const brightness = Math.max(
          config.minBrightness,
          1 - distance * config.brightnessStep
        );

        updateSlideImage(slide, currentPosition + offset);

        gsap.set(slide, {
          xPercent: offset * config.offsetStep,
          rotation: offset * config.rotationStep,
          scale: 1 - distance * config.scaleStep,
          filter: `blur(${blur}px) brightness(${brightness})`,
          opacity: getSlideOpacity(offset),
          zIndex: getSlideZIndex(offset),
        });
      });
    }

    renderSlides();

    function snapToSlide() {
      const outgoingPosition =
        scrollDirection > 0
          ? Math.floor(targetPosition)
          : Math.ceil(targetPosition);
      const distanceMoved = Math.abs(targetPosition - outgoingPosition);
      targetPosition =
        distanceMoved < config.swapThreshold
          ? outgoingPosition
          : outgoingPosition + scrollDirection;
    }

    function moveSlider(amount) {
      if (!amount) return;
      scrollDirection = Math.sign(amount);
      targetPosition += amount;
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(snapToSlide, config.snapDelay);
    }

    const onWheel = (event) => {
      event.preventDefault();
      const delta = gsap.utils.clamp(
        -config.maxWheelDelta,
        config.maxWheelDelta,
        event.deltaY
      );
      moveSlider(delta * config.wheelSensitivity);
    };

    let lastTouchY = 0;
    const onTouchStart = (event) => {
      lastTouchY = event.touches[0].clientY;
    };
    const onTouchMove = (event) => {
      const touchY = event.touches[0].clientY;
      moveSlider((lastTouchY - touchY) * config.touchSensitivity);
      lastTouchY = touchY;
    };

    const tick = () => {
      if (currentPosition === targetPosition) return;
      currentPosition += (targetPosition - currentPosition) * config.smoothing;
      if (Math.abs(targetPosition - currentPosition) < 0.001) {
        currentPosition = targetPosition;
      }
      renderSlides();
    };

    slider.addEventListener("wheel", onWheel, { passive: false });
    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchmove", onTouchMove);
    gsap.ticker.add(tick);

    return () => {
      clearTimeout(snapTimeout);
      slider.removeEventListener("wheel", onWheel);
      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchmove", onTouchMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <PageLayout>
      <section className="slider " ref={sliderRef}>
        <div className="slides " ref={slidesRef}>
          {Array.from({ length: slideCount }, (_, i) => (
            <div className="slide" key={i}>
              <div className="slide-img">
                <img alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <span className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-bg mix-blend-difference">
        under development
      </span>
    </PageLayout>
  );
}
