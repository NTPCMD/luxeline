import { Star, ShoppingCart } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  image?: string;
  colors?: string[];
  onQuickAdd?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  badge,
  image,
  colors = [],
  onQuickAdd,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#f5f1ea] h-80 md:h-96">
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge 
              className={`${
                badge === 'Best Seller' 
                  ? 'bg-[#E8B4BC] text-[#121212]' 
                  : badge === 'New'
                  ? 'bg-[#72513C] text-white'
                  : 'bg-white text-[#72513C]'
              } hover:opacity-90`}
            >
              {badge}
            </Badge>
          </div>
        )}
        
        {/* Placeholder gradient or image */}
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#f5f1ea] to-[#e8ddd5]"></div>
        )}

        {/* Quick Add Button - Shows on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            onClick={() => onQuickAdd?.(id)}
            className="w-full bg-white text-[#72513C] hover:bg-white/90"
          >
            <ShoppingCart size={16} className="mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-[#72513C] mb-2 group-hover:text-[#E8B4BC] transition-colors" style={{ fontWeight: 600 }}>
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                fill={i < Math.floor(rating) ? "#E8B4BC" : "none"}
                stroke="#E8B4BC"
              />
            ))}
          </div>
          <span className="text-xs text-[#72513C]/60">({reviewCount})</span>
        </div>

        {/* Color Options */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1 mb-2">
            {colors.slice(0, 5).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-[#72513C]/20"
                style={{ backgroundColor: color }}
              ></div>
            ))}
            {colors.length > 5 && (
              <span className="text-xs text-[#72513C]/60 ml-1">+{colors.length - 5}</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-xl text-[#72513C]" style={{ fontWeight: 600 }}>
            ${price}
          </p>
          {originalPrice && (
            <p className="text-sm text-[#72513C]/40 line-through">
              ${originalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
