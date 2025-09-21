interface Food {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  restaurant: string;
}

interface FoodCardProps {
  food: Food;
}

function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {food.image}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 shadow-md">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-sm font-medium text-gray-700">{food.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {food.name}
          </h3>
          <p className="text-sm text-gray-500">
            {food.restaurant}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">
            ${food.price}
          </span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;