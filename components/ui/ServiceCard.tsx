import Image from 'next/image';
import Link from 'next/link';
import { ServiceCardProps } from '@/lib/types';

export default function ServiceCard({
  service,
  showLink = false,
  linkHref = '/tjenester',
  linkText = 'Les mer →',
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
      <div className="relative h-64 w-full">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.subtitle}</p>
        <p className="text-gray-600">{service.description}</p>
        {showLink && (
          <Link
            href={linkHref}
            className="inline-block mt-4 text-primary-brown hover:text-primary-brown-dark transition-all duration-300"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}

