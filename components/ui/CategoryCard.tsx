import Link from 'next/link';
import { CategoryCardProps } from '@/lib/types';

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
      <h3 className="text-xl font-bold text-black mb-2">{category}</h3>
      <p className="text-gray-600 text-sm">Reservedeler og forbruksvarer</p>
      <div className="mt-4">
        <Link
          href="/kontakt"
          className="text-primary-brown hover:text-primary-brown-dark text-sm font-medium transition-all duration-300"
        >
          Kontakt oss →
        </Link>
      </div>
    </div>
  );
}

