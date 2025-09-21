import { Link } from "react-router-dom";
import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: 1, name: "Pizza", image: "🍕", description: "Delicious pizzas with fresh toppings" },
    { id: 2, name: "Burgers", image: "🍔", description: "Juicy burgers made to perfection" },
    { id: 3, name: "Asian", image: "🍜", description: "Authentic Asian cuisine" },
    { id: 4, name: "Desserts", image: "🍰", description: "Sweet treats and desserts" },
    { id: 5, name: "Healthy", image: "🥗", description: "Fresh and healthy options" },
    { id: 6, name: "Mexican", image: "🌮", description: "Spicy and flavorful Mexican food" }
  ];

  const popularFoods = [
    { id: 1, name: "Margherita Pizza", price: 12.99, image: "🍕", rating: 4.8, restaurant: "Tony's Pizza" },
    { id: 2, name: "Classic Burger", price: 9.99, image: "🍔", rating: 4.6, restaurant: "Burger Palace" },
    { id: 3, name: "Chicken Ramen", price: 11.50, image: "🍜", rating: 4.9, restaurant: "Ramen House" },
    { id: 4, name: "Caesar Salad", price: 8.99, image: "🥗", rating: 4.5, restaurant: "Green Garden" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delicious Food <br />
              <span className="text-yellow-300">Delivered Fast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Order from your favorite restaurants and get it delivered in minutes
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search for restaurants or dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 text-gray-800 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <span className="text-gray-400 text-xl">🔍</span>
                  </div>
                </div>
                <button className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <Link 
              to="/menu" 
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover your favorite type of cuisine
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Foods Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Right Now
            </h2>
            <p className="text-xl text-gray-600">
              Most ordered dishes this week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              View All Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose FoodieExpress?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in 30 minutes or less</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Food</h3>
              <p className="text-gray-600">Fresh ingredients and top-rated restaurants</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Ordering</h3>
              <p className="text-gray-600">Simple and intuitive ordering process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;