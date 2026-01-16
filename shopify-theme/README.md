# LuxeLine Shopify Theme

A complete, production-ready Shopify Online Store 2.0 theme for LuxeLine (luxeline.com.au), a luxury wig and hair accessories brand.

## Overview

This theme has been fully converted from React/TSX components to pure Shopify Liquid templates, maintaining the original design aesthetic while implementing Shopify best practices.

## Brand Identity

- **Primary Color**: #72513C (Brown)
- **Accent Color**: #E8B4BC (Pink)
- **Background**: #FDFBF6 (Cream)
- **Typography**: Playfair Display (headings), Inter (body text)

## Quick Start

### Step 1: Prepare Theme Package

**IMPORTANT**: You must zip ONLY the contents of the `shopify-theme` folder, not the folder itself.

**Correct Method** (choose one):

**Option A - Using GUI (Recommended for beginners)**:
1. Navigate to the `shopify-theme` folder
2. Select ALL files and folders INSIDE (assets, config, layout, locales, sections, snippets, templates)
3. Right-click → "Compress" or "Send to" → "Compressed folder"
4. Name the zip file: `luxeline-theme.zip`

**Option B - Using Command Line (Mac/Linux)**:
```bash
cd shopify-theme
zip -r ../luxeline-theme.zip * -x "*.DS_Store" -x "__MACOSX/*"
```

**Option C - Using Command Line (Windows PowerShell)**:
```powershell
cd shopify-theme
Compress-Archive -Path * -DestinationPath ../luxeline-theme.zip
```

**What NOT to do**: ❌ Don't zip the `shopify-theme` folder itself - Shopify needs the contents directly at the root level.

### Step 2: Upload to Shopify Admin

1. Log into your Shopify Admin panel
2. Navigate to: **Online Store** → **Themes**
3. Scroll down to the "Theme library" section
4. Click **"Add theme"** → **"Upload zip file"**
5. Select your `luxeline-theme.zip` file
6. Wait for the upload to complete (usually 30-60 seconds)
7. The theme will appear in your Theme library

### Step 3: Configure Theme Settings (Before Publishing)

**CRITICAL**: Configure these settings BEFORE publishing the theme.

1. Click **"Customize"** on the newly uploaded theme
2. Click the theme settings icon (⚙️) in the left sidebar
3. Configure the following:

#### Logo Settings
- **Logo Image**: Upload your LuxeLine logo (recommended: PNG with transparency, 180-250px wide)
- **Logo Width**: Adjust slider (recommended: 180px for desktop)
- **Favicon**: Upload 32x32px or 64x64px square logo for browser tabs

#### Colors (Pre-configured, but verify)
- **Primary Brown**: #72513C
- **Pink Accent**: #E8B4BC  
- **Background Cream**: #FDFBF6
- **Text Color**: #72513C
- **Heading Color**: #121212

#### Social Media Links
- **Instagram URL**: https://instagram.com/yourbrand
- **TikTok URL**: https://tiktok.com/@yourbrand
- **Facebook URL**: https://facebook.com/yourbrand

#### Typography
- **Base Font Size**: 16px (recommended, adjust if needed)

#### Announcement Bar
- **Enable**: Toggle on/off
- **Text**: "Free Shipping on Orders Over $150 🎉"
- **Background Color**: Customize or use default
- **Text Color**: Customize or use default

### Step 4: Create Navigation Menus

1. Go to **Online Store** → **Navigation**
2. Click **"Add menu"**

#### Main Menu (Header Navigation)
- **Menu name**: `main-menu`
- **Add links**:
  - Home → `/`
  - Shop → `/collections/all`
  - About → `/pages/about`
  - FAQ → `/pages/faq`
  - Lookbook → `/pages/lookbook`
  - Contact → `/pages/contact`

#### Footer Menus

**Quick Links** (Handle: `footer-links`):
- Shop All
- New Arrivals
- Best Sellers
- Gift Cards

**Customer Care** (Handle: `footer-customer`):
- Contact Us
- FAQ
- Shipping & Delivery
- Returns & Exchanges

**Legal** (Handle: `legal-menu`):
- Privacy Policy
- Terms of Service
- Refund Policy
- Shipping Policy

### Step 5: Create and Assign Page Templates

#### Create Pages

Go to **Online Store** → **Pages** → **Add page**

**About Page**:
- Title: "About"
- Template suffix: `about`
- Content: Add your about text

**FAQ Page**:
- Title: "FAQ"
- Template suffix: `faq`
- Content: Questions will be managed in theme editor sections

**Contact Page**:
- Title: "Contact"
- Template suffix: `contact`
- Content: Contact form will be automatically displayed

**Lookbook Page**:
- Title: "Lookbook"
- Template suffix: `lookbook`
- Content: Gallery will be managed in theme editor

#### Assign Templates

1. Go to each page you created
2. In the right sidebar, find **"Template"**
3. Select the matching template:
   - About page → `page.about`
   - FAQ page → `page.faq`
   - Contact page → `page.contact`
   - Lookbook page → `page.lookbook`
4. Click **"Save"**

### Step 6: Enable Password Mode (Pre-Launch)

If you want to use the theme as a "coming soon" page before launch:

1. Go to **Online Store** → **Preferences**
2. Scroll to **"Password protection"**
3. Check **"Enable password"**
4. Set a password for yourself and visitors
5. Go to **Themes** → Select your theme → **Customize**
6. Find the **"Password Page"** section
7. Set **"Launch Date"** in ISO format: `YYYY-MM-DDTHH:MM:SS` (e.g., `2024-12-15T09:00:00`)
8. Countdown timer will display automatically
9. Customize email capture form text

### Step 7: Final Checks and Publish

**Before Publishing - Checklist**:
- [ ] Logo displays correctly in header
- [ ] All menu links work
- [ ] Social media icons link to correct profiles
- [ ] Test add to cart functionality
- [ ] Test mobile menu (resize browser)
- [ ] Check all pages load correctly
- [ ] Test search functionality
- [ ] Verify colors match brand identity
- [ ] Check footer displays all links

**To Publish**:

⚠️ **WARNING**: Publishing makes the theme live to ALL customers immediately. Ensure thorough testing first!

1. Go to **Online Store** → **Themes**
2. Find your customized theme
3. Click **"Actions"** → **"Publish"**
4. **Review the warning**: Shopify will show a confirmation dialog
5. Click **"Publish"** to confirm
6. Your theme is now live! 🎉

💡 **Tip**: Consider publishing during low-traffic hours to minimize impact of any unforeseen issues.

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

## Troubleshooting Common Issues

### Theme Upload Fails

**Problem**: "Invalid theme package" or upload error

**Solutions**:
1. **Check zip structure**: Make sure you zipped the CONTENTS of shopify-theme folder, not the folder itself
2. **Re-zip properly**: Follow Step 1 instructions exactly
3. **Check file names**: Ensure no special characters in file names
4. **Try again**: Sometimes Shopify servers are busy, wait a minute and retry

### Logo Doesn't Display

**Problem**: Logo shows as text (shop name) instead of image

**Solutions**:
1. Go to theme customizer → Theme settings → Logo
2. Click "Select image" and upload your logo file
3. Recommended format: PNG with transparency
4. Recommended size: 180-250px wide, 60-100px tall
5. Click "Save"

### Fonts Look Different

**Problem**: Text doesn't match screenshots, fonts look generic

**Solutions**:
1. **Check browser console**: Press F12, look for font errors
2. **Clear cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. **Verify font loading**: In browser dev tools → Network tab → filter "font" → refresh page
4. Inter and Playfair Display should load from Google Fonts
5. If blocked by ad blocker, whitelist fonts.googleapis.com and fonts.gstatic.com

### Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open on mobile

**Solutions**:
1. Clear browser cache
2. Check if JavaScript loaded: View page source, search for "theme.js"
3. Test in incognito/private window
4. Try different mobile device or browser

### Products Not Showing in Collections

**Problem**: Collection page is empty or missing products

**Solutions**:
1. **Add products to collection**: 
   - Go to Products → Collections
   - Select collection → Add products manually or set automatic conditions
2. **Check product availability**: Ensure products are not in "Draft" status
3. **Verify collection exists**: Check that collection handle matches menu link

### Cart Count Not Updating

**Problem**: Cart icon shows wrong number or doesn't update

**Solutions**:
1. Check if cart.js loaded (view page source)
2. Clear browser cache and cookies
3. Test in incognito window
4. Verify no JavaScript errors in browser console (F12)

### Search Returns No Results

**Problem**: Search finds nothing even when products exist

**Solutions**:
1. **Wait for indexing**: New stores need 24-48 hours for search index
2. **Check product titles**: Search looks in product titles, descriptions, tags
3. **Verify products published**: Draft products won't appear in search
4. **Test with simple terms**: Try "wig" or "hair" instead of full product names

### Customer Pages Show 404

**Problem**: Login/register/account pages don't work

**Solutions**:
1. **Enable customer accounts**: 
   - Go to Settings → Checkout → Customer accounts
   - Select "Accounts are optional" or "Accounts are required"
2. **Check URL structure**: Should be `/account/login`, `/account/register`
3. **Clear theme cache**: In theme editor, make a small change and save

### Colors Don't Match Brand

**Problem**: Theme colors are wrong or generic

**Solutions**:
1. Go to theme customizer → Theme settings → Colors
2. Update each color:
   - Primary Brown: #72513C
   - Pink Accent: #E8B4BC
   - Background Cream: #FDFBF6
   - Text Color: #72513C
   - Heading Color: #121212
3. Click "Save"
4. Hard refresh browser (Ctrl+Shift+R)

### Page Templates Not Available

**Problem**: Can't find page.about or page.faq in template dropdown

**Solutions**:
1. **Check template name**: Must be exact - `page.about.json` not `page-about`
2. **Re-upload theme**: If templates are missing, theme upload may have failed
3. **Create page first**: Template dropdown appears only when editing existing page
4. **Check file structure**: Verify templates/page.about.json exists in your zip

### Sections Missing in Theme Editor

**Problem**: Can't find hero, features, or other sections

**Solutions**:
1. **Check context**: Some sections only appear on specific templates
2. **Hero section**: Only available on homepage (index template)
3. **Page-specific sections**: page-hero only shows on page templates
4. **Re-upload theme**: Sections may not have uploaded correctly

### Form Submissions Not Working

**Problem**: Contact form or newsletter doesn't submit

**Solutions**:
1. **Check form action**: Forms use Shopify built-in endpoints
2. **Enable email notifications**: Settings → Notifications → Configure contact form
3. **Test with different email**: Some email providers block automated forms
4. **Check spam folder**: Submissions may arrive in spam
5. **Verify no JavaScript errors**: Open browser console (F12)

### Images Not Loading

**Problem**: Product images, hero images, or other media not showing

**Solutions**:
1. **Upload images**: Go to Products/Pages and upload actual images
2. **Check image URLs**: In theme editor, sections should have image pickers
3. **Optimize images**: Shopify automatically optimizes, but very large images may timeout
4. **Use supported formats**: JPG, PNG, WebP (recommended)
5. **Check file names**: Remove special characters from file names

## Support

For questions or customization:
- Email: hello@luxeline.com.au
- Website: luxeline.com.au
- Shopify Help: https://help.shopify.com

## Credits

© 2025 LuxeLine. All rights reserved.

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Shopify Theme Structure**: Online Store 2.0
