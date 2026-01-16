import { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Star, Heart, Share2, Check, Truck, RotateCcw, Shield, Minus, Plus } from 'lucide-react';

export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedLength, setSelectedLength] = useState('18"');
  const [selectedColor, setSelectedColor] = useState('Natural Black');
  const [selectedCapSize, setSelectedCapSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://images.unsplash.com/photo-1500336624523-d727130c3328?w=800',
    'https://images.unsplash.com/photo-1603132789551-47b97377046e?w=800',
    'https://images.unsplash.com/photo-1576378472295-596704e00e19?w=800',
  ];

  const lengths = ['14"', '16"', '18"', '20"', '22"', '24"'];
  const colors = [
    { name: 'Natural Black', hex: '#1a1a1a' },
    { name: 'Dark Brown', hex: '#4a3228' },
    { name: 'Light Brown', hex: '#8b5a3c' },
    { name: 'Blonde', hex: '#c4a57b' },
  ];
  const capSizes = ['Small', 'Medium', 'Large'];

  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: `related-${i}`,
    name: `Luxury ${['Wave', 'Curly', 'Straight', 'Body Wave'][i]} Wig`,
    price: 249 + (i * 50),
    rating: 4.8,
    reviewCount: 87 + (i * 10),
    colors: ['#1a1a1a', '#4a3228', '#8b5a3c'],
  }));

  return (
    <div className="min-h-screen">
      <Navbar cartCount={0} />
      
      <main className="pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#72513C]/60 mb-8">
            <a href="#" className="hover:text-[#72513C]">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-[#72513C]">Shop</a>
            <span>/</span>
            <span className="text-[#72513C]">Luxury Straight Wig</span>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-[#f5f1ea] mb-4 h-[500px]">
                <img
                  src={images[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                  <Heart size={20} className="text-[#72513C]" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg h-24 ${
                      selectedImage === index ? 'ring-2 ring-[#72513C]' : ''
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start gap-2 mb-2">
                <Badge className="bg-[#E8B4BC] text-[#121212]">Best Seller</Badge>
                <Badge className="bg-[#72513C] text-white">New Arrival</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl text-[#121212] mb-4 luxury-heading">
                Luxury Straight Wig
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#E8B4BC" stroke="#E8B4BC" />
                  ))}
                </div>
                <span className="text-[#72513C]">4.9</span>
                <span className="text-[#72513C]/60">(284 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-8">
                <p className="text-4xl text-[#72513C]" style={{ fontWeight: 600 }}>
                  $299
                </p>
                <p className="text-xl text-[#72513C]/40 line-through">
                  $399
                </p>
                <Badge variant="outline" className="border-[#E8B4BC] text-[#E8B4BC]">
                  Save 25%
                </Badge>
              </div>

              <p className="text-[#72513C]/70 mb-8 leading-relaxed">
                Premium 100% human hair wig with natural hairline and glueless installation. 
                Features HD lace for flawless blending and lightweight comfort. Perfect for 
                beginners and experienced wig wearers alike.
              </p>

              {/* Length Selection */}
              <div className="mb-6">
                <label className="block text-[#72513C] mb-3" style={{ fontWeight: 600 }}>
                  Length: {selectedLength}
                </label>
                <div className="flex flex-wrap gap-2">
                  {lengths.map((length) => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedLength === length
                          ? 'border-[#72513C] bg-[#72513C] text-white'
                          : 'border-[#72513C]/30 text-[#72513C] hover:border-[#72513C]'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-[#72513C] mb-3" style={{ fontWeight: 600 }}>
                  Color: {selectedColor}
                </label>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-[#72513C] scale-110'
                          : 'border-[#72513C]/20'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check size={20} className="absolute inset-0 m-auto text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cap Size Selection */}
              <div className="mb-8">
                <label className="block text-[#72513C] mb-3" style={{ fontWeight: 600 }}>
                  Cap Size: {selectedCapSize}
                </label>
                <div className="flex gap-2">
                  {capSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedCapSize(size)}
                      className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                        selectedCapSize === size
                          ? 'border-[#72513C] bg-[#72513C] text-white'
                          : 'border-[#72513C]/30 text-[#72513C] hover:border-[#72513C]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-[#72513C] mb-3" style={{ fontWeight: 600 }}>
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-[#72513C]/30 flex items-center justify-center hover:bg-[#72513C]/5"
                  >
                    <Minus size={16} className="text-[#72513C]" />
                  </button>
                  <span className="text-lg text-[#72513C] min-w-[40px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-[#72513C]/30 flex items-center justify-center hover:bg-[#72513C]/5"
                  >
                    <Plus size={16} className="text-[#72513C]" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button className="flex-1 h-12 bg-[#72513C] hover:bg-[#5d4230] text-white">
                  Add to Cart
                </Button>
                <Button className="flex-1 h-12 bg-[#121212] hover:bg-[#121212]/90 text-white">
                  Buy Now
                </Button>
                <Button variant="outline" className="h-12 border-[#72513C]/30 text-[#72513C]">
                  <Share2 size={20} />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#FDFBF6] rounded-xl">
                <div className="flex items-start gap-3">
                  <Truck size={20} className="text-[#72513C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#72513C]" style={{ fontWeight: 600 }}>Free Shipping</p>
                    <p className="text-xs text-[#72513C]/60">On orders over $200</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw size={20} className="text-[#72513C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#72513C]" style={{ fontWeight: 600 }}>Easy Returns</p>
                    <p className="text-xs text-[#72513C]/60">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield size={20} className="text-[#72513C] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#72513C]" style={{ fontWeight: 600 }}>Quality Guarantee</p>
                    <p className="text-xs text-[#72513C]/60">100% premium hair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Accordion */}
          <div className="mb-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="text-[#72513C] text-lg">
                  Product Details
                </AccordionTrigger>
                <AccordionContent className="text-[#72513C]/70">
                  <ul className="space-y-2">
                    <li>• Material: 100% Premium Human Hair</li>
                    <li>• Cap Construction: HD Lace with Glueless Design</li>
                    <li>• Density: 150% Natural Density</li>
                    <li>• Hair Texture: Silky Straight</li>
                    <li>• Can be dyed, bleached, and heat styled</li>
                    <li>• Pre-plucked hairline for natural look</li>
                    <li>• Baby hair included</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="care">
                <AccordionTrigger className="text-[#72513C] text-lg">
                  Care Instructions
                </AccordionTrigger>
                <AccordionContent className="text-[#72513C]/70">
                  <ul className="space-y-2">
                    <li>• Wash with sulfate-free shampoo and conditioner</li>
                    <li>• Use wide-tooth comb to detangle when wet</li>
                    <li>• Air dry or use low heat setting</li>
                    <li>• Store on wig stand when not in use</li>
                    <li>• Apply leave-in conditioner for extra moisture</li>
                    <li>• Avoid sleeping in wig to maintain longevity</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-[#72513C] text-lg">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-[#72513C]/70">
                  <p className="mb-4">
                    <strong>Shipping:</strong> Free shipping on orders over $200. Standard delivery takes 3-5 business days. Express shipping available at checkout.
                  </p>
                  <p>
                    <strong>Returns:</strong> We offer a 30-day return policy. Items must be unworn, unwashed, and in original packaging. Return shipping is free for exchanges.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl md:text-4xl text-[#121212] mb-8 luxury-heading">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
