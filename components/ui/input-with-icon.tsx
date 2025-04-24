import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface InputWithIconProps {
  type?: 'text' | 'email' | 'search';
  name: string;
  placeholder: string;
  Icon: IconType;
  onSubmit?: (value: string) => void;
  iconClassName?: string;
  className?: string;
}

export function InputWithIcon({
  type = 'text',
  name,
  placeholder,
  Icon,
  onSubmit,
  iconClassName = 'rotate-0',
  className
}: InputWithIconProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get(name) as string;
    if (onSubmit) onSubmit(value);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full h-12 px-4 py-3.5 border-2 border-border rounded-[90px] font-secondary text-sm text-input placeholder:text-input focus:outline-none focus:border-secondary transition-colors"
      />
      <button
        type="submit"
        className={cn("absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-colors", iconClassName)}
      >
        <Icon className="w-6 h-6" />
      </button>
    </form>
  );
} 