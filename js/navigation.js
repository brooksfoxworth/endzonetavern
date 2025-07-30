/**
 * Navigation Management Module
 * Handles page navigation, footer link states, and menu sub-navigation
 */
class NavigationManager {
    constructor(pageManager) {
        this.pageManager = pageManager;
        this.footerLinks = document.querySelectorAll('footer a[data-page-link]');
        this.currentPage = 'home';
        this.initializeEventListeners();
    }

    /**
     * Initialize navigation event listeners
     */
    initializeEventListeners() {
        this.footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.pageLink;
                this.navigateToPage(page);
            });
        });
    }

    /**
     * Navigate to a specific page
     */
    navigateToPage(page) {
        this.currentPage = page;
        this.pageManager.loadPage(page);
        this.updateFooterActiveStates(page);
        
        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Handle page-specific navigation setup
        if (page === 'menu') {
            this.setupMenuNavigation();
        }
    }

    /**
     * Update footer link active states
     */
    updateFooterActiveStates(activePage) {
        this.footerLinks.forEach(link => {
            const linkPage = link.dataset.pageLink;
            const isActive = linkPage === activePage;
            
            this.resetLinkStyles(link, linkPage);
            
            if (isActive) {
                this.setActiveLinkStyles(link, linkPage);
            }
        });
    }

    /**
     * Reset link styles to default state
     */
    resetLinkStyles(link, linkPage) {
        // Reset text elements to default state
        const textElements = link.querySelectorAll('span, p');
        textElements.forEach(element => {
            element.classList.remove('text-[var(--primary-color)]', 'font-semibold');
            element.classList.add('text-gray-700');
        });
        
        // Remove any background elements that might have been added
        const activeBg = link.querySelector('.absolute.-inset-2');
        if (activeBg) activeBg.remove();
    }

    /**
     * Set active link styles
     */
    setActiveLinkStyles(link, linkPage) {
        // Set active styles for text elements only (no backgrounds or boxes)
        const textElements = link.querySelectorAll('span, p');
        textElements.forEach(element => {
            element.classList.add('text-[var(--primary-color)]', 'font-semibold');
            element.classList.remove('text-gray-700', 'font-medium');
        });
    }

    /**
     * Setup menu page sub-navigation
     */
    setupMenuNavigation() {
        // Wait for menu content to be loaded
        setTimeout(() => {
            const menuSubNavLinks = document.querySelectorAll('nav a[href^="#"]');
            
            // Set 'Entrees' as active by default
            menuSubNavLinks.forEach(link => {
                if (link.textContent.trim() === 'Entrees') {
                    this.setActiveMenuLink(link);
                } else {
                    this.setInactiveMenuLink(link);
                }

                // Add click handler for smooth scrolling and active state
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleMenuLinkClick(link, menuSubNavLinks);
                });
            });
        }, 100);
    }

    /**
     * Handle menu sub-navigation link clicks
     */
    handleMenuLinkClick(clickedLink, allLinks) {
        const targetId = clickedLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            // Update active states
            allLinks.forEach(link => this.setInactiveMenuLink(link));
            this.setActiveMenuLink(clickedLink);
        }
    }

    /**
     * Set menu link as active
     */
    setActiveMenuLink(link) {
        link.classList.add('border-b-[var(--primary-color)]', 'text-black', 'font-bold');
        link.classList.remove('border-b-transparent', 'text-black', 'font-medium', 'hover:text-gray-700');
    }

    /**
     * Set menu link as inactive
     */
    setInactiveMenuLink(link) {
        link.classList.remove('border-b-[var(--primary-color)]', 'text-black', 'font-bold');
        link.classList.add('border-b-transparent', 'text-black', 'font-medium', 'hover:text-gray-700');
    }

    /**
     * Get current page
     */
    getCurrentPage() {
        return this.currentPage;
    }
}
