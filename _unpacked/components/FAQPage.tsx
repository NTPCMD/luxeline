import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What makes LuxeLine wigs different?',
          a: 'LuxeLine wigs are crafted from 100% premium human hair with HD lace technology for an undetectable, natural appearance. Our glueless designs make installation beginner-friendly while maintaining all-day comfort and security.',
        },
        {
          q: 'Are your wigs suitable for beginners?',
          a: 'Absolutely! Our glueless wigs are specifically designed for easy application. No glue, tape, or professional installation required. Each wig comes with detailed instructions and video tutorials.',
        },
        {
          q: 'How long do LuxeLine wigs last?',
          a: 'With proper care, our wigs can last 1-2 years or longer. The longevity depends on how frequently you wear and maintain your wig. We provide comprehensive care guides with every purchase.',
        },
      ],
    },
    {
      category: 'Styling & Care',
      questions: [
        {
          q: 'Can I style my LuxeLine wig?',
          a: 'Yes! Our 100% human hair wigs can be styled just like your natural hair. You can use heat tools, curl, straighten, dye, and bleach your wig. We recommend using heat protectant and professional products for best results.',
        },
        {
          q: 'How do I wash my wig?',
          a: 'Wash your wig every 10-15 wears using sulfate-free shampoo and conditioner. Gently detangle with a wide-tooth comb, rinse with cool water, and air dry on a wig stand. Detailed care instructions are included with your purchase.',
        },
        {
          q: 'Can I sleep in my wig?',
          a: 'While our wigs are comfortable enough for all-day wear, we recommend removing your wig before sleeping to maintain its quality and longevity. Use a silk bonnet or pillowcase if you choose to sleep in it.',
        },
        {
          q: 'How do I store my wig?',
          a: 'Store your wig on a wig stand or mannequin head in a cool, dry place away from direct sunlight. Cover with a silk or satin cap to protect from dust and maintain the style.',
        },
      ],
    },
    {
      category: 'Ordering & Shipping',
      questions: [
        {
          q: 'What is your shipping policy?',
          a: 'We offer free shipping on orders over $200. Standard shipping takes 3-5 business days within the US. Express shipping is available for an additional fee. International shipping times vary by location.',
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes! We ship worldwide. International shipping times vary from 7-14 business days depending on your location. Customs fees may apply based on your country\'s regulations.',
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order status by logging into your account on our website.',
        },
      ],
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return policy for unworn, unwashed wigs in original packaging. The wig must be in resalable condition with all tags attached. Return shipping is free for exchanges.',
        },
        {
          q: 'Can I exchange my wig?',
          a: 'Yes! We offer free exchanges within 30 days of purchase. Contact our customer service team to initiate an exchange. We\'ll send you a prepaid shipping label.',
        },
        {
          q: 'What if my wig is damaged or defective?',
          a: 'If you receive a damaged or defective wig, contact us immediately with photos. We\'ll either send a replacement or issue a full refund, including return shipping costs.',
        },
      ],
    },
    {
      category: 'Sizing & Fit',
      questions: [
        {
          q: 'How do I choose the right cap size?',
          a: 'Measure your head circumference from hairline to nape, then ear to ear. Small caps fit 20.5-21.5", Medium fits 21.5-22.5", and Large fits 22.5-23.5". We also offer custom sizing.',
        },
        {
          q: 'What if my wig doesn\'t fit?',
          a: 'Our wigs feature adjustable straps for a customized fit. If it still doesn\'t fit properly, you can exchange it for a different size within 30 days of purchase.',
        },
        {
          q: 'Can I get a custom-sized wig?',
          a: 'Yes! We offer custom sizing for an additional fee. Contact our customer service team with your measurements, and we\'ll create a wig specifically for you. Custom orders take 2-3 weeks.',
        },
      ],
    },
    {
      category: 'Payment & Security',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption.',
        },
        {
          q: 'Is my payment information secure?',
          a: 'Yes! We use industry-standard SSL encryption to protect your payment information. We never store your complete credit card details on our servers.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes! We partner with Afterpay and Klarna to offer flexible payment plans. Split your purchase into 4 interest-free payments. Select at checkout.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar cartCount={0} />
      
      <main className="pt-16 md:pt-20">
        {/* Header */}
        <section className="bg-[#FDFBF6] border-b border-[#72513C]/10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-5xl md:text-7xl text-[#121212] mb-6 luxury-heading">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[#72513C]/70 max-w-2xl mx-auto">
              Everything you need to know about LuxeLine wigs, shipping, and care
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-3xl text-[#121212] mb-6 luxury-heading">
                  {section.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${sectionIndex}-${faqIndex}`}
                      className="border-b border-[#72513C]/10"
                    >
                      <AccordionTrigger className="text-left text-[#72513C] hover:text-[#E8B4BC] py-6">
                        <span style={{ fontWeight: 600 }}>{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#72513C]/70 leading-relaxed pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl text-[#121212] mb-6 luxury-heading">
              Still Have Questions?
            </h2>
            <p className="text-lg text-[#72513C]/70 mb-8 max-w-2xl mx-auto">
              Our customer service team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#72513C] hover:bg-[#5d4230] text-white rounded-lg transition-colors">
                Contact Us
              </button>
              <button className="px-8 py-4 border border-[#72513C] text-[#72513C] hover:bg-[#72513C]/5 rounded-lg transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
