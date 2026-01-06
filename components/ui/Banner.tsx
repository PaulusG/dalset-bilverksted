import { BannerProps } from '@/lib/types';

const variantStyles = {
  brown: 'bg-primary-brown text-white',
  green: 'bg-primary-green text-white',
  white: 'bg-white text-black',
};

export default function Banner({
  title,
  subtitle,
  variant = 'brown',
  className = '',
  children,
}: BannerProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${variantStyles[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${variant === 'white' ? 'text-gray-700' : 'text-white/90'}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

