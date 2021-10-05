import React, { useState, useEffect } from "react";

const Slider = ({ mediaArray }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) => {
        const res = current === mediaArray.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 7500);
    return () => clearInterval();
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : mediaArray.length - 1;
  const nextImgIndex =
    activeIndex === mediaArray.length - 1 ? 0 : activeIndex + 1;
  return (
    <div className="club__media-box">
      <div className="backdrop"></div>

      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {mediaArray[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {mediaArray[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {mediaArray[nextImgIndex]}
      </div>
    </div>
  );
};
export default Slider;
