import Link from "next/link";
import { categories } from "~/data/navigation";

export default function Categories() {
  return (
    <section className="border-t border-gray-100 py-12">
      <h2 className="mb-6 font-serif text-2xl font-bold text-primary">
        Categories
      </h2>
      <div className="flex flex-wrap gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="text-secondary transition-colors hover:text-accent-blue hover:underline"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
