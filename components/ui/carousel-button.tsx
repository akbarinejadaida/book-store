import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { memo } from 'react';
import { cn } from '@/lib/utils';

interface CarouselButtonProps {
  onClick: () => void;
  direction: 'prev' | 'next';
  className?: string;
}

const CarouselButton = memo(function CarouselButton({ 
  onClick, 
  direction,
  className = "text-muted-light"
}: CarouselButtonProps) {
  const Icon = direction === 'prev' ? FiArrowLeft : FiArrowRight;
  
  return (
    <button
      onClick={onClick}
      className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors", className)}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
});

CarouselButton.displayName = 'CarouselButton';

export { CarouselButton }; 