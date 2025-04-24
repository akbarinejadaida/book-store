'use client';

import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { memo } from 'react';

export interface TeamMemberProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  position?: number;
  badgeColor?: string;
}

const TeamMember = memo(function TeamMember({ 
  image, 
  name, 
  location, 
  rating, 
  position, 
  badgeColor 
}: TeamMemberProps) {
  return (
    <div className="text-center bg-card flex flex-col gap-4 items-center justify-center p-4 sm:p-6 rounded-2xl w-full sm:w-[180px] md:w-[200px]">
      <div className="relative flex items-center justify-between w-full">
        {position && (
          <Badge
            className={cn(
              "px-3 py-1 rounded-full flex items-center justify-center",
              badgeColor
            )}
          >
            #{position}
          </Badge>
        )}

        <div className="flex items-center justify-center gap-1 ml-auto">
          <span className="text-yellow-400">★</span>
          <span className="font-medium">{rating}</span>
        </div>
      </div>

      <div className="relative w-16 sm:w-20 h-16 sm:h-20">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 64px, 80px"
          className="object-cover rounded-full"
          loading="lazy"
        />
        <FiCheck className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 p-1 rounded-full bg-primary text-primary-foreground" />
      </div>

      <div>
        <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
});

TeamMember.displayName = 'TeamMember';

export { TeamMember }; 