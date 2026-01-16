// Luxeline Product JS
class LuxelineProduct {
  constructor() {
    this.productForm = document.querySelector('[data-product-form]');
    if (!this.productForm) return;
    
    this.init();
  }
  
  init() {
    this.setupImageGallery();
    this.setupVariantSelection();
    this.setupQuantitySelector();
  }
  
  setupImageGallery() {
    const thumbnails = document.querySelectorAll('[data-thumbnail]');
    const mainImage = document.querySelector('[data-main-image]');
    
    if (!mainImage) return;
    
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active state
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        
        // Update main image
        const imageSrc = thumb.dataset.image;
        const imageAlt = thumb.dataset.alt || '';
        
        if (mainImage.tagName === 'IMG') {
          mainImage.src = imageSrc;
          mainImage.alt = imageAlt;
        }
      });
    });
  }
  
  setupVariantSelection() {
    const variantSelects = this.productForm.querySelectorAll('[data-variant-input]');
    const masterSelect = this.productForm.querySelector('[name="id"]');
    
    if (!masterSelect) return;
    
    variantSelects.forEach(select => {
      select.addEventListener('change', () => {
        this.updateVariant();
      });
    });
    
    // Color swatches
    const colorSwatches = document.querySelectorAll('[data-color-swatch]');
    colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active state
        colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        
        // Update hidden select
        const colorSelect = this.productForm.querySelector('[data-variant-input="Color"]');
        if (colorSelect) {
          colorSelect.value = swatch.dataset.value;
          this.updateVariant();
        }
      });
    });
  }
  
  updateVariant() {
    const selectedOptions = {};
    const variantInputs = this.productForm.querySelectorAll('[data-variant-input]');
    
    variantInputs.forEach(input => {
      const optionName = input.dataset.variantInput;
      selectedOptions[optionName] = input.value;
    });
    
    // Find matching variant
    const productData = JSON.parse(
      document.querySelector('[data-product-json]')?.textContent || '{}'
    );
    
    if (!productData.variants) return;
    
    const matchedVariant = productData.variants.find(variant => {
      return Object.keys(selectedOptions).every(key => {
        const optionIndex = productData.options.indexOf(key);
        return variant.options[optionIndex] === selectedOptions[key];
      });
    });
    
    if (matchedVariant) {
      this.updateMasterSelect(matchedVariant.id);
      this.updatePrice(matchedVariant);
      this.updateAvailability(matchedVariant);
      this.updateImage(matchedVariant);
    }
  }
  
  updateMasterSelect(variantId) {
    const masterSelect = this.productForm.querySelector('[name="id"]');
    if (masterSelect) {
      masterSelect.value = variantId;
    }
  }
  
  updatePrice(variant) {
    const priceElement = document.querySelector('[data-product-price]');
    const comparePriceElement = document.querySelector('[data-product-compare-price]');
    
    if (priceElement) {
      priceElement.textContent = this.formatMoney(variant.price);
    }
    
    if (comparePriceElement) {
      if (variant.compare_at_price && variant.compare_at_price > variant.price) {
        comparePriceElement.textContent = this.formatMoney(variant.compare_at_price);
        comparePriceElement.style.display = 'inline';
      } else {
        comparePriceElement.style.display = 'none';
      }
    }
  }
  
  updateAvailability(variant) {
    const addToCartBtn = this.productForm.querySelector('[data-add-to-cart]');
    const availabilityText = document.querySelector('[data-availability-text]');
    
    if (addToCartBtn) {
      if (variant.available) {
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = addToCartBtn.dataset.textAvailable || 'Add to Cart';
      } else {
        addToCartBtn.disabled = true;
        addToCartBtn.textContent = addToCartBtn.dataset.textSoldOut || 'Sold Out';
      }
    }
    
    if (availabilityText) {
      availabilityText.textContent = variant.available ? 'In Stock' : 'Out of Stock';
      availabilityText.className = variant.available ? 'text-success' : 'text-error';
    }
  }
  
  updateImage(variant) {
    if (!variant.featured_image) return;
    
    const mainImage = document.querySelector('[data-main-image]');
    if (mainImage && mainImage.tagName === 'IMG') {
      mainImage.src = variant.featured_image.src;
      mainImage.alt = variant.featured_image.alt || '';
    }
  }
  
  setupQuantitySelector() {
    const quantityWrapper = document.querySelector('[data-quantity-wrapper]');
    if (!quantityWrapper) return;
    
    const input = quantityWrapper.querySelector('[data-quantity-input]');
    const decreaseBtn = quantityWrapper.querySelector('[data-quantity-decrease]');
    const increaseBtn = quantityWrapper.querySelector('[data-quantity-increase]');
    
    if (!input) return;
    
    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
          input.value = currentValue - 1;
        }
      });
    }
    
    if (increaseBtn) {
      increaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        input.value = currentValue + 1;
      });
    }
  }
  
  formatMoney(cents) {
    const dollars = (cents / 100).toFixed(2);
    return `$${dollars}`;
  }
}

// Initialize product
document.addEventListener('DOMContentLoaded', () => {
  new LuxelineProduct();
});
