import Link from "next/link"
import { categories } from "~/data/navigation"

export default function Categories() {
  return (
    <section className="py-12 border-t border-gray-100">
      <h2 className="font-serif text-2xl font-bold mb-6 text-primary">Categories</h2>
      <div className="flex flex-wrap gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="text-secondary hover:text-accent-blue hover:underline transition-colors"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  )
}

