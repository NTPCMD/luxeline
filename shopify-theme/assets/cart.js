// Luxeline Cart JS - Shopify Ajax API
class LuxelineCart {
  constructor() {
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.updateCartCount();
  }
  
  bindEvents() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-add-to-cart]');
      if (addBtn) {
        e.preventDefault();
        this.addToCart(addBtn);
      }
      
      // Update quantity
      const updateBtn = e.target.closest('[data-cart-update]');
      if (updateBtn) {
        e.preventDefault();
        this.updateQuantity(updateBtn);
      }
      
      // Remove item
      const removeBtn = e.target.closest('[data-cart-remove]');
      if (removeBtn) {
        e.preventDefault();
        this.removeItem(removeBtn);
      }
    });
  }
  
  async addToCart(button) {
    const form = button.closest('form');
    if (!form) return;
    
    const formData = new FormData(form);
    const id = formData.get('id');
    const quantity = parseInt(formData.get('quantity') || 1);
    
    button.disabled = true;
    button.classList.add('loading');
    
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quantity })
      });
      
      if (!response.ok) throw new Error('Failed to add to cart');
      
      const item = await response.json();
      this.updateCartCount();
      this.showNotification('Added to cart!');
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showNotification('Error adding to cart', 'error');
    } finally {
      button.disabled = false;
      button.classList.remove('loading');
    }
  }
  
  async updateQuantity(button) {
    const line = button.dataset.line;
    const quantity = parseInt(button.dataset.quantity);
    
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ line, quantity })
      });
      
      if (!response.ok) throw new Error('Failed to update cart');
      
      await this.refreshCart();
      
    } catch (error) {
      console.error('Error updating cart:', error);
      this.showNotification('Error updating cart', 'error');
    }
  }
  
  async removeItem(button) {
    const line = button.dataset.line;
    
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ line, quantity: 0 })
      });
      
      if (!response.ok) throw new Error('Failed to remove item');
      
      await this.refreshCart();
      
    } catch (error) {
      console.error('Error removing item:', error);
      this.showNotification('Error removing item', 'error');
    }
  }
  
  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const countElements = document.querySelectorAll('[data-cart-count]');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
      
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }
  
  async refreshCart() {
    if (window.location.pathname === '/cart') {
      window.location.reload();
    } else {
      await this.updateCartCount();
    }
  }
  
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `luxeline-notification luxeline-notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: ${type === 'success' ? '#72513C' : '#d4183d'};
      color: white;
      border-radius: 0.75rem;
      z-index: 10000;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Initialize cart
document.addEventListener('DOMContentLoaded', () => {
  new LuxelineCart();
});
