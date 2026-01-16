import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LookbookPage() {
  const lookbookImages = [
    {
      src: 'https://images.unsplash.com/photo-1728280199884-21df1e3b0f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwd29tYW58ZW58MXx8fHwxNzY4MjE0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Classic Elegance',
      desc: 'Timeless beauty meets modern luxury',
      tall: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1758467797061-cd44f1ca4363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MjIzMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Natural Radiance',
      desc: 'Effortlessly beautiful',
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY4MTUxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Redefined',
      desc: 'Bold and sophisticated',
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoYWlyJTIwd29tYW58ZW58MXx8fHwxNzY4MTQ3NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Everyday Glamour',
      desc: 'Perfect for any occasion',
      tall: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgyMjAxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Signature Style',
      desc: 'Your confidence, elevated',
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1762843353166-e0542bba1a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBtb2RlbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODIyMjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fashion Forward',
      desc: 'Contemporary luxury',
      tall: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar cartCount={0} />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#FDFBF6] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-5xl md:text-7xl text-[#121212] mb-6 luxury-heading">
              Lookbook
            </h1>
            <p className="text-xl text-[#72513C]/70 max-w-2xl mx-auto">
              Discover how our luxury wigs transform everyday beauty into extraordinary confidence
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Masonry Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lookbookImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    image.tall ? 'md:row-span-2' : ''
                  }`}
                  style={{ 
                    height: image.tall ? '600px' : '400px' 
                  }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-[#121212]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl text-white mb-2 luxury-heading">
                        {image.title}
                      </h3>
                      <p className="text-white/80">
                        {image.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collection CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 luxury-heading">
              Fall in Love with Your Look
            </h2>
            <p className="text-lg text-[#72513C]/70 mb-8 max-w-2xl mx-auto">
              Every LuxeLine wig is designed to help you express your unique beauty and confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#72513C] hover:bg-[#5d4230] text-white rounded-lg transition-colors">
                Shop the Collection
              </button>
              <button className="px-8 py-4 border border-[#72513C] text-[#72513C] hover:bg-[#72513C]/5 rounded-lg transition-colors">
                Book a Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Instagram Feed Placeholder */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#121212] mb-4 luxury-heading">
                Follow Us on Instagram
              </h2>
              <p className="text-[#72513C]/70">@luxeline</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden bg-[#f5f1ea] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#f5ebe5] to-[#e8ddd5]"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
