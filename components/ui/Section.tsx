interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'brown' | 'green';
  padding?: 'sm' | 'md' | 'lg';
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  brown: 'bg-primary-brown',
  green: 'bg-primary-green',
};

const paddingStyles = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-20',
  lg: 'py-16 md:py-24',
};

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'md',
}: SectionProps) {
  return (
    <section className={`w-full ${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

