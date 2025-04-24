import { CourseCard } from '@/components/ui/course-card';
import { coursesData } from '@/data/course';

export function Tracks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Our Tracks</h2>
          <p className="text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
} 