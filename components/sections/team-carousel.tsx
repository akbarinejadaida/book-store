'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useWindowSize } from '@/hooks/use-window-size';
import { TeamMember } from '@/components/ui/team-member';
import { CarouselButton } from '@/components/ui/carousel-button';
import { teamData } from '@/data/team';

export function TeamCarousel() {
  const { width } = useWindowSize();
  
  const { firstRow, secondRow, cardsPerPage } = useMemo(() => {
    const counts = (() => {
      if (width < 640) return { firstRow: 2, secondRow: 2 };
      if (width < 768) return { firstRow: 3, secondRow: 2 };
      if (width < 1024) return { firstRow: 3, secondRow: 3 };
      return { firstRow: 5, secondRow: 4 };
    })();
    return { ...counts, cardsPerPage: counts.firstRow + counts.secondRow };
  }, [width]);

  const dynamicPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < teamData.length; i += cardsPerPage) {
      pages.push(teamData.slice(i, i + cardsPerPage));
    }
    return pages;
  }, [cardsPerPage]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
        emblaApi.off('select', onSelect)
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {dynamicPages.map((page, pageIndex) => (
            <div 
              key={pageIndex} 
              className="flex-[0_0_100%] min-w-0"
              aria-hidden={pageIndex !== activeIndex}
            >
              <div className="flex flex-col gap-4 sm:gap-6 container">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 justify-items-center">
                  {page.slice(0, firstRow).map((member, index) => (
                    <TeamMember key={`${pageIndex}-${index}`} {...member} />
                  ))}
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 justify-items-center w-full lg:w-[80%] mx-auto">
                  {page.slice(firstRow).map((member, index) => (
                    <TeamMember key={`${pageIndex}-${index + firstRow}`} {...member} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <CarouselButton onClick={scrollPrev} direction="prev" />
        <CarouselButton onClick={scrollNext} direction="next" />
      </div>
    </>
  );
} 