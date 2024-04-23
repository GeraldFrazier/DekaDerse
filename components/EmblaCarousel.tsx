import React, { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel'; 

type EmblaCarouselProps = {
  children: React.ReactNode;
};

export function EmblaCarousel({ children }: EmblaCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (viewportRef.current && emblaRef && emblaRef.current) {
      emblaRef.current = viewportRef.current;
    }
  }, [emblaRef]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="embla__viewport" ref={viewportRef}>
      <div className="embla__container" ref={emblaRef}>
        {children}
      </div>
    </div>
  );
}
