import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar cartCount={0} />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1648065460033-5c59f2ef1d97?w=1200"
            alt="LuxeLine Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
              <h1 className="text-5xl md:text-7xl text-white mb-4 luxury-heading">
                Our Story
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Redefining beauty through luxury, quality, and confidence
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 luxury-heading">
              Designed for Confidence
            </h2>
            <p className="text-lg text-[#72513C]/70 leading-relaxed mb-8">
              At LuxeLine, we believe every woman deserves to feel beautiful, confident, and empowered. 
              Our mission is to provide premium quality wigs that look natural, feel comfortable, and 
              elevate your everyday style. From our carefully sourced human hair to our innovative 
              glueless designs, every detail is crafted with you in mind.
            </p>
            <p className="text-lg text-[#72513C]/70 leading-relaxed">
              We're more than just a wig brand—we're a community of women supporting women, 
              celebrating individuality, and embracing beauty in all its forms.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-12 text-center luxury-heading">
              What We Stand For
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Sparkles size={32} className="text-[#E8B4BC]" />,
                  title: 'Premium Quality',
                  desc: 'Only the finest 100% human hair, ethically sourced and carefully selected for natural beauty.',
                },
                {
                  icon: <Heart size={32} className="text-[#E8B4BC]" />,
                  title: 'Customer Love',
                  desc: 'Your satisfaction is our priority. We provide exceptional service and support every step of the way.',
                },
                {
                  icon: <Award size={32} className="text-[#E8B4BC]" />,
                  title: 'Craftsmanship',
                  desc: 'Each wig is meticulously crafted by skilled artisans with attention to every detail.',
                },
                {
                  icon: <Users size={32} className="text-[#E8B4BC]" />,
                  title: 'Community',
                  desc: 'Building a supportive community where women feel confident, beautiful, and empowered.',
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-[#72513C] mb-3" style={{ fontWeight: 600 }}>
                    {value.title}
                  </h3>
                  <p className="text-[#72513C]/70 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 luxury-heading">
                  Our Quality Promise
                </h2>
                <div className="space-y-4 text-[#72513C]/70">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E8B4BC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#E8B4BC]">✓</span>
                    </div>
                    <div>
                      <p className="text-[#72513C] mb-1" style={{ fontWeight: 600 }}>
                        100% Premium Human Hair
                      </p>
                      <p className="text-sm">
                        Ethically sourced, virgin hair that can be styled, dyed, and treated like your own.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E8B4BC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#E8B4BC]">✓</span>
                    </div>
                    <div>
                      <p className="text-[#72513C] mb-1" style={{ fontWeight: 600 }}>
                        Natural Hairline Technology
                      </p>
                      <p className="text-sm">
                        HD lace and pre-plucked hairlines for an undetectable, natural appearance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E8B4BC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#E8B4BC]">✓</span>
                    </div>
                    <div>
                      <p className="text-[#72513C] mb-1" style={{ fontWeight: 600 }}>
                        Glueless Comfort Design
                      </p>
                      <p className="text-sm">
                        Beginner-friendly installation with secure fit and all-day comfort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E8B4BC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#E8B4BC]">✓</span>
                    </div>
                    <div>
                      <p className="text-[#72513C] mb-1" style={{ fontWeight: 600 }}>
                        Long-Lasting Durability
                      </p>
                      <p className="text-sm">
                        With proper care, your LuxeLine wig will maintain its beauty for years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#f5ebe5] to-[#fdf0ed]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 luxury-heading">
              Join the LuxeLine Family
            </h2>
            <p className="text-lg text-[#72513C]/70 mb-8 max-w-2xl mx-auto">
              Experience the difference that premium quality and thoughtful design can make
            </p>
            <Button size="lg" className="bg-[#72513C] hover:bg-[#5d4230] text-white">
              Shop Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
