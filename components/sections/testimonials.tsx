'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, memo } from 'react';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { CarouselButton } from '@/components/ui/carousel-button';
import { testimonialsData } from '@/data/testimonials';

const Testimonials = memo(function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      </div>

      <div className="relative py-16">
        <div className='bg-primary rounded-2xl absolute w-[90%] inset-0 mx-auto -z-10'></div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 px-8">
            {testimonialsData.map((testimonial, index) => (
              <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]" key={index}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <CarouselButton 
            onClick={scrollPrev} 
            direction="prev"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          />
          <CarouselButton 
            onClick={scrollNext} 
            direction="next"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          />
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export { Testimonials }; 