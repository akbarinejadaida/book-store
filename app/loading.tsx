export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin">
          <div className="h-full w-full rounded-full border-4 border-primary/30 border-t-primary" />
        </div>
      </div>
    </div>
  );
} 