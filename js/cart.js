/**
 * Cart Management Module
 * Handles all cart-related functionality including adding/removing items and updating UI
 */
class CartManager {
    constructor() {
        this.cart = [];
        this.cartItemCount = document.getElementById('cart-item-count');
    }

    /**
     * Add item to cart or increase quantity if already exists
     */
    addItem(itemId, itemName, itemPrice) {
        const existingItem = this.cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({ 
                id: itemId, 
                name: itemName, 
                price: itemPrice, 
                quantity: 1 
            });
        }
        this.updateCartCount();
        console.log('Cart updated:', this.cart);
    }

    /**
     * Remove item from cart or decrease quantity
     */
    removeItem(itemId) {
        const itemIndex = this.cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            if (this.cart[itemIndex].quantity > 1) {
                this.cart[itemIndex].quantity--;
            } else {
                this.cart.splice(itemIndex, 1);
            }
            this.updateCartCount();
            this.renderCart();
        }
    }

    /**
     * Update the cart count badge in the footer
     */
    updateCartCount() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        this.cartItemCount.textContent = totalItems;
        
        if (totalItems > 0) {
            this.cartItemCount.classList.remove('hidden');
        } else {
            this.cartItemCount.classList.add('hidden');
        }
    }

    /**
     * Render cart items in the cart page
     */
    renderCart() {
        const cartItemsList = document.getElementById('cart-items-list');
        const cartTotalElement = document.getElementById('cart-total');
        
        if (!cartItemsList || !cartTotalElement) return;

        cartItemsList.innerHTML = '';
        let total = 0;

        if (this.cart.length === 0) {
            cartItemsList.innerHTML = this.getEmptyCartHTML();
        } else {
            this.cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                cartItemsList.insertAdjacentHTML('beforeend', this.getCartItemHTML(item, itemTotal));
            });
        }

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
        this.attachRemoveButtonListeners();
    }

    /**
     * Get HTML for empty cart state
     */
    getEmptyCartHTML() {
        return `
            <div class="text-gray-700 text-center py-8">
                Your cart is empty. Add some delicious items!
            </div>
        `;
    }

    /**
     * Get HTML for a single cart item
     */
    getCartItemHTML(item, itemTotal) {
        return `
            <div class="flex items-center justify-between gap-4 py-3 border-b border-[var(--border-color)] last:border-b-0">
                <div class="flex flex-col flex-1">
                    <h3 class="text-gray-900 text-base font-bold leading-tight">${item.name}</h3>
                    <p class="text-gray-700 text-sm">Qty: ${item.quantity} x $${item.price.toFixed(2)}</p>
                </div>
                <span class="text-gray-900 text-base font-bold">$${itemTotal.toFixed(2)}</span>
                <button class="remove-from-cart-btn text-[var(--primary-color)] text-sm font-semibold" data-item-id="${item.id}">Remove</button>
            </div>
        `;
    }

    /**
     * Attach event listeners to remove buttons
     */
    attachRemoveButtonListeners() {
        document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIdToRemove = e.target.dataset.itemId;
                this.removeItem(itemIdToRemove);
            });
        });
    }

    /**
     * Get cart items for external use
     */
    getCartItems() {
        return [...this.cart];
    }

    /**
     * Get total cart value
     */
    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    /**
     * Clear all items from cart
     */
    clearCart() {
        this.cart = [];
        this.updateCartCount();
        this.renderCart();
    }
}
