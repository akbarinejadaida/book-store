import Image from 'next/image';
import { FiClock, FiUser, FiStar } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

export interface CourseCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  duration: string;
  students: string;
  rating: number;
  reviews: number;
  price: number;
}

export function CourseCard({
  title,
  image,
  category,
  duration,
  students,
  rating,
  reviews,
  price
}: CourseCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-background text-foreground">
          {category}
        </Badge>
      </div>

      <div className="p-5 py-4 flex items-center justify-between">
        <div className='flex flex-col gap-2'>
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>

          <div className="flex items-center gap-4 text-sm text-muted-light">
            <div className="flex items-center gap-1">
              <FiClock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiUser className="w-4 h-4" />
              <span>{students}</span>
            </div>
          </div>
        </div>

        <span className="text-lg font-bold text-primary">${price}</span>
      </div>

      <div className="py-3 px-5 flex items-center justify-between border-t border-border">
        <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors cursor-pointer">
          Join Course
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
} 