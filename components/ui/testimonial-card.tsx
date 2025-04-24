'use client';

import { FiStar } from 'react-icons/fi';
import { memo } from 'react';

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
}

// Create a static array for stars to prevent hydration mismatch
const STARS = [0, 1, 2, 3, 4];

const TestimonialCard = memo(function TestimonialCard({ content, author, role }: TestimonialProps) {
  return (
    <div className="bg-background rounded-2xl p-8 shadow-sm flex flex-col h-full">
      <div className="flex gap-1 text-yellow-400 mb-6">
        {STARS.map((i) => (
          <FiStar key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>

      <p className="text-muted-light flex-grow mb-6">{content}</p>

      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-muted-light">{role}</p>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export { TestimonialCard }; 