interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
      <div className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.image}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600">
          {category.description}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;