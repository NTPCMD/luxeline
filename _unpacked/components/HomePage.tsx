import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: '#FDFBF6' }}>
      <Navbar cartCount={0} />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section - Redesigned */}
        <section className="relative min-h-[80vh] md:min-h-[85vh] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1">
                <Badge className="mb-6 bg-[#E8B4BC] text-[#121212] hover:bg-[#E8B4BC]/90 inline-flex items-center gap-2">
                  <Sparkles size={14} />
                  New Collection
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#121212] mb-6 luxury-heading">
                  Elevate Your<br />Natural Beauty
                </h1>
                <p className="text-xl text-[#72513C] mb-10 max-w-lg leading-relaxed">
                  Premium human hair wigs designed for confidence, comfort, and flawless beauty. Experience luxury that looks and feels natural.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#72513C] hover:bg-[#5d4230] text-white shadow-lg">
                    Shop Collection
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-[#72513C] text-[#72513C] hover:bg-[#72513C] hover:text-white">
                    Take Quiz
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap gap-8">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="#E8B4BC" stroke="#E8B4BC" />
                      ))}
                    </div>
                    <span className="text-sm text-[#72513C]">4.9/5 (2,400+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={18} stroke="#72513C" strokeWidth={2.5} />
                    <span className="text-sm text-[#72513C]">100% Human Hair</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#E8B4BC]/20 to-[#72513C]/20 rounded-3xl blur-2xl"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1760551733861-4bca371a263d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBoYWlyJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgzOTI3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="LuxeLine Luxury Wig"
                      className="w-full h-[500px] md:h-[600px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-[#121212] mb-4 luxury-heading">
                Why Choose LuxeLine
              </h2>
              <p className="text-[#72513C]/70 text-lg max-w-2xl mx-auto">
                Experience the perfect blend of luxury, comfort, and natural beauty
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Natural Hairline', desc: 'Flawless blend with your natural hair for an undetectable look' },
                { title: 'Glueless Comfort', desc: 'Easy application, beginner-friendly, no adhesive needed' },
                { title: 'Premium Quality', desc: '100% human hair, highest quality, ethically sourced' },
                { title: 'Fast Shipping', desc: 'Worldwide delivery in 3-5 days with premium packaging' },
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl hover:bg-[#FDFBF6] transition-colors">
                  <h3 className="text-[#72513C] mb-2" style={{ fontWeight: 600 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[#72513C]/70 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#121212] mb-4 luxury-heading">
                Shop by Style
              </h2>
              <p className="text-[#72513C]/70 text-lg max-w-2xl mx-auto">
                Discover our curated collections designed for every occasion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Glueless Wigs', image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbHV4dXJ5JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgzOTI3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', items: '24 Styles' },
                { name: 'Lace Front', image: 'https://images.unsplash.com/photo-1760895535234-2c39c57cf187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwaGFpcmNhcmUlMjBsdXh1cnl8ZW58MXx8fHwxNzY4MzkyNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', items: '18 Styles' },
                { name: 'Colored Wigs', image: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoYWlyJTIwd29tYW58ZW58MXx8fHwxNzY4MTQ3NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080', items: '32 Styles' },
              ].map((collection, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer h-[450px] shadow-lg hover:shadow-2xl transition-all duration-300">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-[#121212]/40 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                    <h3 className="text-3xl text-white mb-2 luxury-heading">
                      {collection.name}
                    </h3>
                    <p className="text-white/80 mb-4">{collection.items}</p>
                    <div className="flex items-center text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-medium">Shop Now</span>
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl text-[#121212] luxury-heading mb-2">
                  Best Sellers
                </h2>
                <p className="text-[#72513C]/70">Our most loved styles</p>
              </div>
              <Button variant="ghost" className="text-[#72513C] hover:text-[#5d4230] hover:bg-[#FDFBF6]">
                View All <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#f5f1ea] h-80 shadow-md hover:shadow-xl transition-shadow">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-[#E8B4BC] text-[#121212] hover:bg-[#E8B4BC]">
                        Best Seller
                      </Badge>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-[#f5f1ea] to-[#e8ddd5]"></div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-[#72513C] mb-1" style={{ fontWeight: 600 }}>
                        Luxury Straight Wig
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12} fill="#E8B4BC" stroke="#E8B4BC" />
                          ))}
                        </div>
                        <span className="text-xs text-[#72513C]/60">(124)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-[#72513C]" style={{ fontWeight: 600 }}>
                    $299
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #f5ebe5 0%, #fdf0ed 100%)'
            }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 luxury-heading">
              Find Your Perfect Match
            </h2>
            <p className="text-xl text-[#72513C] mb-8 max-w-2xl mx-auto">
              Take our quick 2-minute quiz to discover the perfect wig for your style, face shape, and lifestyle needs.
            </p>
            <Button size="lg" className="bg-[#72513C] hover:bg-[#5d4230] text-white shadow-lg">
              Start Quiz <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#121212] mb-4 luxury-heading">
                Loved by Thousands
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="#E8B4BC" stroke="#E8B4BC" />
                  ))}
                </div>
                <span className="text-[#72513C]" style={{ fontWeight: 600 }}>4.9 out of 5</span>
              </div>
              <p className="text-[#72513C]/70">Based on 2,400+ verified reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah M.', review: 'Absolutely stunning quality! The natural hairline is incredible and it\'s so comfortable to wear all day. Worth every penny!', rating: 5 },
                { name: 'Jessica T.', review: 'I was nervous to try my first wig, but LuxeLine made it so easy. The glueless application is genius and the hair is gorgeous!', rating: 5 },
                { name: 'Michelle R.', review: 'Best investment ever! The quality is unmatched and I get compliments every single day. Feels just like my natural hair.', rating: 5 },
              ].map((testimonial, index) => (
                <div key={index} className="bg-[#FDFBF6] rounded-2xl p-6 border border-[#72513C]/10 hover:border-[#72513C]/20 transition-colors">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="#E8B4BC" stroke="#E8B4BC" />
                    ))}
                  </div>
                  <p className="text-[#72513C] mb-4 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <p className="text-sm text-[#72513C]" style={{ fontWeight: 600 }}>- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl text-[#121212] mb-4 luxury-heading">
              Join the LuxeLine Family
            </h2>
            <p className="text-[#72513C]/70 mb-8 text-lg">
              Get exclusive access to new collections, styling tips, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg border-2 border-[#72513C]/20 bg-white text-[#72513C] placeholder:text-[#72513C]/40 focus:outline-none focus:border-[#72513C]"
              />
              <Button className="bg-[#72513C] hover:bg-[#5d4230] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}