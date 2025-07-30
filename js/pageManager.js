/**
 * Page Management Module
 * Handles page loading, content rendering, and page-specific functionality
 */
class PageManager {
    constructor(cartManager) {
        this.cartManager = cartManager;
        this.mainContent = document.getElementById('main-content');
        this.dynamicHeaderContent = document.getElementById('dynamic-header-content');
    }

    /**
     * Load and render a specific page
     */
    loadPage(page) {
        // Clear previous content
        this.mainContent.innerHTML = '';
        this.dynamicHeaderContent.innerHTML = '';

        // Render header with logos
        this.renderHeader(page);
        
        // Setup navigation listeners after header is rendered
        this.setupNavigationListeners();

        // Get page content
        const content = this.getPageContent(page);
        
        // Render content
        this.mainContent.innerHTML = content;

        // Setup page-specific functionality
        this.setupPageFunctionality(page);
        
        // Initialize Swiper after content is loaded
        setTimeout(() => {
            this.initializeSwipers();
        }, 100);
    }

    /**
     * Render the header with desktop navigation and centered logo
     */
    renderHeader(currentPage = 'home') {
        const headerHTML = `
            <!-- Mobile Header (Logo only) -->
            <div class="flex flex-col items-center justify-center py-4 md:hidden">
                <img src="assets/images/489023442_122104664978828908_4227706092568628383_n.jpg" 
                     alt="Endzone Tavern Logo" 
                     class="h-16 object-contain">
                <a href="tel:843-945-1056" class="mt-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors">
                    <i class="fas fa-phone-alt mr-2"></i>843-945-1056
                </a>
            </div>
            
            <!-- Desktop Header with Navigation -->
            <div class="hidden md:flex items-center justify-center px-8 py-6 w-full">
                <div class="flex items-center justify-center max-w-6xl mx-auto">
                    <!-- Left Navigation Items -->
                    <div class="flex items-center space-x-8 mr-12">
                        <a href="#" data-page-link="home" class="${currentPage === 'home' ? 'text-yellow-400' : 'text-white'} text-lg font-medium hover:text-yellow-400 transition-colors whitespace-nowrap">Home</a>
                        <a href="#" data-page-link="menu" class="${currentPage === 'menu' ? 'text-yellow-400' : 'text-white'} text-lg font-medium hover:text-yellow-400 transition-colors whitespace-nowrap">Menu</a>
                        <a href="#" data-page-link="gallery" class="${currentPage === 'gallery' ? 'text-yellow-400' : 'text-white'} text-lg font-medium hover:text-yellow-400 transition-colors whitespace-nowrap">Gallery</a>
                    </div>
                    
                    <!-- Centered Logo -->
                    <div class="flex items-center justify-center flex-shrink-0">
                        <img src="assets/images/489023442_122104664978828908_4227706092568628383_n.jpg" 
                             alt="Endzone Tavern Logo" 
                             class="h-16 object-contain">
                    </div>
                    
                    <!-- Right Navigation Items -->
                    <div class="flex items-center space-x-8 ml-12">
                        <a href="#" data-page-link="about" class="${currentPage === 'about' ? 'text-yellow-400' : 'text-white'} text-lg font-medium hover:text-yellow-400 transition-colors whitespace-nowrap">About Us</a>
                        <a href="#" data-page-link="contact" class="${currentPage === 'contact' ? 'text-yellow-400' : 'text-white'} text-lg font-medium hover:text-yellow-400 transition-colors whitespace-nowrap">Contact</a>
                        <a href="#" data-page-link="order" class="flex items-center ${currentPage === 'order' ? 'text-yellow-400' : 'text-white'} text-lg font-medium hover:text-yellow-400 transition-colors whitespace-nowrap">
                            <span class="mr-2">My Order</span>
                            <div class="relative">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M236,85.46A16,16,0,0,0,224,80H187.63L134,18.73a8,8,0,0,0-12,0L68.37,80H32A16,16,0,0,0,16.14,98.11L30,202.12A16,16,0,0,0,45.87,216H210.13A16,16,0,0,0,226,202.12l13.87-104A16,16,0,0,0,236,85.46ZM128,36.15,166.37,80H89.63ZM210.13,200H45.87L32.12,96h191.76Z"></path>
                                </svg>
                                <span id="cart-item-count-desktop" class="absolute -top-1 -right-1 text-xs font-bold bg-blue-500 text-white rounded-full size-4 flex items-center justify-center">0</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;
        this.dynamicHeaderContent.innerHTML = headerHTML;
    }

    /**
     * Get content for a specific page
     */
    getPageContent(page) {
        if (page === 'menu') {
            return this.renderMenuPage();
        }
        
        return PageContent[page] || PageContent.home;
    }

    /**
     * Render the menu page with dynamic content
     */
    renderMenuPage() {
        const menuSections = ['Pizza', 'Wings & Chicken', 'Appetizers', 'Sides'];
        
        let menuHTML = `
            <div id="menu-content">
                <div class="text-center mb-6">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Our Menu</h1>
                    <p class="text-gray-800">Game day favorites and sports bar classics</p>
                </div>
                
                <nav class="mb-8">
                    <div class="overflow-x-auto">
                        <div class="flex space-x-4 border-b border-[var(--border-color)] min-w-max px-4 md:justify-center">
                            <a href="#Pizza" class="px-3 py-2 border-b-2 border-b-[var(--primary-color)] text-black font-bold whitespace-nowrap">Pizza</a>
                            <a href="#Wings & Chicken" class="px-3 py-2 border-b-2 border-b-transparent text-black font-medium hover:text-gray-700 whitespace-nowrap">Wings & Chicken</a>
                            <a href="#Appetizers" class="px-3 py-2 border-b-2 border-b-transparent text-black font-medium hover:text-gray-700 whitespace-nowrap">Appetizers</a>
                            <a href="#Sides" class="px-3 py-2 border-b-2 border-b-transparent text-black font-medium hover:text-gray-700 whitespace-nowrap">Sides</a>

                        </div>
                    </div>
                </nav>
        `;

        // Add each menu section
        menuSections.forEach(section => {
            const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);
            menuHTML += `
                <div id="${section}" class="mb-12">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">${sectionTitle}</h2>
                    <div class="space-y-4">
                        ${MenuData[section].map(item => this.createMenuItemHTML(item)).join('')}
                    </div>
                </div>
            `;
        });

        menuHTML += '</div>';
        return menuHTML;
    }
    
    /**
     * Initialize Swiper instances after content is loaded
     */
    initializeSwipers() {
        console.log('Initializing Swipers...');
        console.log('Swiper available:', typeof Swiper !== 'undefined');
        
        if (typeof Swiper !== 'undefined') {
            // Game Day Favorites Swiper
            const gameDayElement = document.querySelector('.game-day-swiper');
            console.log('Game Day Swiper element found:', !!gameDayElement);
            
            if (gameDayElement) {
                const slides = gameDayElement.querySelectorAll('.swiper-slide');
                console.log('Game Day slides found:', slides.length);
                
                try {
                    const gameSwiper = new Swiper('.game-day-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.game-day-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Game Day Swiper initialized successfully!');
                            },
                            slideChange: function() {
                                console.log('Game Day slide changed to:', this.activeIndex);
                            }
                        }
                    });
                    console.log('Game Day Swiper instance:', gameSwiper);
                } catch (error) {
                    console.error('Error initializing Game Day Swiper:', error);
                }
            }

            // Fans Say Swiper
            const fansElement = document.querySelector('.fans-say-swiper');
            console.log('Fans Say Swiper element found:', !!fansElement);
            
            if (fansElement) {
                const slides = fansElement.querySelectorAll('.swiper-slide');
                console.log('Fans Say slides found:', slides.length);
                
                try {
                    const fansSwiper = new Swiper('.fans-say-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.fans-say-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Fans Say Swiper initialized successfully!');
                            }
                        }
                    });
                    console.log('Fans Say Swiper instance:', fansSwiper);
                } catch (error) {
                    console.error('Error initializing Fans Say Swiper:', error);
                }
            }
        } else {
            console.error('Swiper library not loaded!');
        }
    }

    /**
     * Create HTML for a menu item
     */
    createMenuItemHTML(item) {
        return `
            <div class="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span class="text-gray-400">🍽️</span>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-1">${item.name}</h3>
                    <p class="text-gray-800 text-sm mb-2">${item.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-[var(--primary-color)]">${item.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                                data-item-id="${item.id}" 
                                data-item-name="${item.name}" 
                                data-item-price="${item.price}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    setupPageFunctionality(page) {
        switch (page) {
            case 'menu':
                this.setupMenuPageFunctionality();
                break;
            case 'order':
                this.setupOrderPageFunctionality();
                break;
            default:
                // No specific setup needed for other pages
                break;
        }
    }

    /**
     * Setup menu page functionality
     */
    setupMenuPageFunctionality() {
        // Attach add-to-cart event listeners
        setTimeout(() => {
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.dataset.itemId;
                    const itemName = e.currentTarget.dataset.itemName;
                    const itemPrice = parseFloat(e.currentTarget.dataset.itemPrice);
                    this.cartManager.addItem(itemId, itemName, itemPrice);
                });
            });
        }, 100);
    }

    /**
     * Setup order page functionality
     */
    setupOrderPageFunctionality() {
        // Render cart items when order page loads
        setTimeout(() => {
            this.cartManager.renderCart();
        }, 100);
    }
    
    /**
     * Setup navigation event listeners for header links
     */
    setupNavigationListeners() {
        // Event listeners for header navigation (desktop)
        const headerLinks = document.querySelectorAll('header a[data-page-link]');
        headerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.pageLink;
                this.loadPage(page);
            });
        });
    }
}
