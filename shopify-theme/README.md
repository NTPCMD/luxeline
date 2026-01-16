# LuxeLine Shopify Theme

A complete, production-ready Shopify Online Store 2.0 theme for LuxeLine (luxeline.com.au), a luxury wig and hair accessories brand.

## Overview

This theme has been fully converted from React/TSX components to pure Shopify Liquid templates, maintaining the original design aesthetic while implementing Shopify best practices.

## Brand Identity

- **Primary Color**: #72513C (Brown)
- **Accent Color**: #E8B4BC (Pink)
- **Background**: #FDFBF6 (Cream)
- **Typography**: Playfair Display (headings), Inter/system fonts (body)

## Quick Start

### Installation
1. **Zip the `shopify-theme` folder**
2. **In Shopify Admin**: Online Store → Themes → Upload theme
3. **Publish the theme** or preview it first

### Initial Setup
1. **Configure Theme Settings**: 
   - Upload logo
   - Set social media URLs
   - Customize announcement bar
2. **Create Menus**:
   - `main-menu` for header navigation
   - Footer menus for link columns
   - `legal-menu` for footer legal links
3. **Assign Page Templates**:
   - About → `page.about.json`
   - FAQ → `page.faq.json`
   - Contact → `page.contact.json`
   - Lookbook → `page.lookbook.json`

## Available Templates

### Main Pages
- **index.json** - Homepage with hero, featured collections, best sellers
- **product.json** - Product page with variants, gallery, details
- **collection.json** - Collection/shop page with filters
- **cart.json** - Shopping cart
- **search.json** - Search results
- **password.json** - Password/coming soon page

### Content Pages
- **page.about.json** - About page
- **page.contact.json** - Contact form
- **page.faq.json** - FAQ accordion
- **page.lookbook.json** - Lookbook gallery

### Customer Pages
- **customers/login.json** - Customer login
- **customers/register.json** - Registration
- **customers/account.json** - Account dashboard
- **customers/order.json** - Order details

## Key Features

### Ajax Cart
- Add to cart without page reload
- Live quantity updates
- Cart count badge in header
- Shipping progress indicator

### Product Pages
- Color swatches for variants
- Image gallery with thumbnails
- Quantity selector
- Accordion details sections
- Related products
- Trust badges (free shipping, returns, quality)

### Collection Pages
- Product grid with cards
- Sidebar filters (desktop)
- Sort dropdown
- Pagination
- Quick add to cart

### Mobile Responsive
- Collapsible mobile menu
- Touch-optimized product gallery
- Mobile-friendly filters
- Responsive grids

### Password/Coming Soon Page
Set launch date in Theme Editor:
- Open "Password Page" section
- Set "Launch Date" in ISO format: `2026-06-01T00:00:00`
- Countdown timer displays automatically
- Email capture form included

## Theme Structure

### Core Assets
- **base.css** - Brand styles, typography, components, utilities
- **theme.css** - Additional theme-specific styles
- **theme.js** - Mobile menu, countdown, accordions
- **cart.js** - Ajax cart operations
- **product.js** - Variant selection, gallery

### Reusable Snippets
- **icon.liquid** - 25+ SVG icons
- **product-card.liquid** - Product card component
- **price.liquid** - Price display with sale logic

### Sections Library
- **Hero & CTAs**: hero-home, quiz-cta, cta
- **Products**: best-sellers, featured-collection
- **Content**: testimonials, features-grid, values-grid
- **Forms**: newsletter, contact-form
- **Pages**: main-product, main-collection, main-cart, main-search
- **Customer**: customer-login, customer-register, customer-account
- **Special**: main-password, lookbook-gallery, faq-accordion

## Customization

### Colors
Update in Theme Settings or `assets/base.css`:
```css
:root {
  --luxeline-primary: #72513C;
  --luxeline-accent: #E8B4BC;
  --luxeline-bg: #FDFBF6;
}
```

### Typography
Playfair Display (headings) is loaded in `layout/theme.liquid`. Body text uses system fonts for performance.

### Section Settings
All sections have customizable settings in the Shopify theme editor.

## Configuration Files

- **settings_schema.json** - Theme settings schema
- **settings_data.json** - Default brand colors
- **en.default.json** - All text translations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome)
- Responsive down to 320px width

## Performance

- Lazy loading images
- Optimized CSS with minimal specificity
- Minimal JavaScript footprint
- CDN-ready static assets

## Accessibility

- Semantic HTML5
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to content link

## Support

For questions or customization:
- Email: hello@luxeline.com.au
- Website: luxeline.com.au

## Credits

© 2025 LuxeLine. All rights reserved.

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Shopify Theme Structure**: Online Store 2.0
