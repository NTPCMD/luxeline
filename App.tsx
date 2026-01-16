import { useState } from 'react';
import { ComingSoonModel } from './components/ComingSoonModel';
import { ComingSoonMinimal } from './components/ComingSoonMinimal';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { ProductPage } from './components/ProductPage';
import { AboutPage } from './components/AboutPage';
import { LookbookPage } from './components/LookbookPage';
import { FAQPage } from './components/FAQPage';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';

type Page = 'coming-soon-model' | 'coming-soon-minimal' | 'home' | 'shop' | 'product' | 'about' | 'lookbook' | 'faq';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('coming-soon-model');

  // Page switcher for demo purposes
  const PageSwitcher = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-3 border border-[#72513C]/20 max-h-[90vh] overflow-y-auto">
      <p className="text-xs text-[#72513C]/60 mb-2 font-medium">Demo Navigation</p>
      <div className="flex flex-col gap-1">
        <Button
          size="sm"
          variant={currentPage === 'coming-soon-model' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('coming-soon-model')}
          className={currentPage === 'coming-soon-model' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          Coming Soon (Model)
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'coming-soon-minimal' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('coming-soon-minimal')}
          className={currentPage === 'coming-soon-minimal' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          Coming Soon (Minimal)
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'home' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('home')}
          className={currentPage === 'home' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          Home Page
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'shop' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('shop')}
          className={currentPage === 'shop' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          Shop Page
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'product' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('product')}
          className={currentPage === 'product' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          Product Page
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'about' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('about')}
          className={currentPage === 'about' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          About Page
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'lookbook' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('lookbook')}
          className={currentPage === 'lookbook' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          Lookbook
        </Button>
        <Button
          size="sm"
          variant={currentPage === 'faq' ? 'default' : 'ghost'}
          onClick={() => setCurrentPage('faq')}
          className={currentPage === 'faq' ? 'bg-[#72513C] text-white' : 'text-[#72513C]'}
        >
          FAQ
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'coming-soon-model' && <ComingSoonModel />}
      {currentPage === 'coming-soon-minimal' && <ComingSoonMinimal />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'shop' && <ShopPage />}
      {currentPage === 'product' && <ProductPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'lookbook' && <LookbookPage />}
      {currentPage === 'faq' && <FAQPage />}
      
      <PageSwitcher />
      <Toaster position="top-center" />
    </>
  );
}