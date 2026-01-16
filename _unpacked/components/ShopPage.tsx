import { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SlidersHorizontal, X } from 'lucide-react';

export function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Mock product data
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: `product-${i}`,
    name: `Luxury ${['Straight', 'Wave', 'Curly', 'Body Wave'][i % 4]} Wig`,
    price: 199 + (i * 50),
    originalPrice: i % 3 === 0 ? 299 + (i * 50) : undefined,
    rating: 4.5 + (i % 3) * 0.2,
    reviewCount: 50 + (i * 10),
    badge: i === 0 ? 'Best Seller' : i === 1 ? 'New' : i % 5 === 0 ? 'Limited' : undefined,
    colors: ['#1a1a1a', '#4a3228', '#8b5a3c', '#c4a57b'],
  }));

  const filterCategories = [
    {
      name: 'Length',
      options: ['Short (8-12")', 'Medium (14-18")', 'Long (20-24")', 'Extra Long (26"+)'],
    },
    {
      name: 'Color',
      options: ['Natural Black', 'Dark Brown', 'Light Brown', 'Blonde', 'Colored'],
    },
    {
      name: 'Cap Size',
      options: ['Small', 'Medium', 'Large', 'Custom'],
    },
    {
      name: 'Density',
      options: ['130%', '150%', '180%', '200%'],
    },
  ];

  const FilterSection = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="text-[#72513C] mb-4" style={{ fontWeight: 600 }}>
          Price Range
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={1000}
          step={50}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm text-[#72513C]/70">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Filter Categories */}
      {filterCategories.map((category) => (
        <div key={category.name}>
          <h3 className="text-[#72513C] mb-4" style={{ fontWeight: 600 }}>
            {category.name}
          </h3>
          <div className="space-y-3">
            {category.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox id={`${category.name}-${option}`} className="border-[#72513C]/30" />
                <label
                  htmlFor={`${category.name}-${option}`}
                  className="text-sm text-[#72513C]/70 cursor-pointer hover:text-[#72513C]"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Reset Filters */}
      <Button variant="outline" className="w-full border-[#72513C]/30 text-[#72513C]">
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar cartCount={0} />
      
      <main className="pt-16 md:pt-20">
        {/* Header */}
        <div className="bg-[#FDFBF6] border-b border-[#72513C]/10 py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl text-[#121212] mb-4 luxury-heading">
              Shop All Wigs
            </h1>
            <p className="text-[#72513C]/70 max-w-2xl">
              Discover our complete collection of premium human hair wigs designed for flawless beauty
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden border-[#72513C]/30 text-[#72513C]"
              >
                <SlidersHorizontal size={16} className="mr-2" />
                Filters
              </Button>
              <p className="text-[#72513C]/70">
                {products.length} Products
              </p>
            </div>

            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px] border-[#72513C]/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <FilterSection />
              </div>
            </div>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-[#121212]/50" onClick={() => setMobileFiltersOpen(false)}></div>
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl text-[#72513C]" style={{ fontWeight: 600 }}>
                      Filters
                    </h2>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <X size={24} className="text-[#72513C]" />
                    </button>
                  </div>
                  <FilterSection />
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onQuickAdd={(id) => console.log('Quick add:', id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button variant="outline" className="border-[#72513C]/30 text-[#72513C]">
                  Previous
                </Button>
                {[1, 2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? 'default' : 'outline'}
                    className={
                      page === 1
                        ? 'bg-[#72513C] text-white'
                        : 'border-[#72513C]/30 text-[#72513C]'
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" className="border-[#72513C]/30 text-[#72513C]">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
