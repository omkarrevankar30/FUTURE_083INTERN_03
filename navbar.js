class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(100, 116, 139, 0.3);
}
                
                .nav-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    height: 5rem;
                }
                
                .logo {
                    height: 2.5rem;
                }
                
                .nav-link {
                    position: relative;
                    padding: 0.5rem 1rem;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #2874F0;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background: #2874F0;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: calc(100% - 2rem);
                }
                
                .mobile-menu {
                    transition: all 0.3s ease;
                }
                
                @media (max-width: 767px) {
                .mobile-menu {
                    position: absolute;
                    top: 5rem;
                    left: 0;
                    right: 0;
                    background: #1e293b;
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(100, 116, 139, 0.3);
}
                }
            </style>
            
            <div class="nav-container flex items-center justify-between">
                <a href="/" class="flex items-center">
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart 2.0" class="logo h-10">
<span class="ml-2 text-xl font-bold text-primary hidden sm:inline">X</span>
                </a>
                
                <div class="hidden md:flex items-center space-x-6">
                    <a href="/" class="nav-link font-medium text-dark">Home</a>
                    <a href="#products" class="nav-link font-medium text-dark">Products</a>
                    <a href="#features" class="nav-link font-medium text-dark">Features</a>
                    <a href="#vehicles" class="nav-link font-medium text-dark">Vehicles</a>
                    <a href="/price-optimiser.html" class="nav-link font-medium text-dark">Price Optimiser</a>
                    <a href="#about" class="nav-link font-medium text-dark">About</a>
</div>
                
                <div class="flex items-center space-x-4">
                    <a href="#" class="p-2 text-dark hover:text-primary">
                        <i data-feather="search"></i>
                    </a>
                    <a href="#" class="p-2 text-dark hover:text-primary">
                        <i data-feather="shopping-cart"></i>
                    </a>
                    <a href="#" class="p-2 text-dark hover:text-primary">
                        <i data-feather="user"></i>
                    </a>
                    <button class="md:hidden p-2 text-dark hover:text-primary" onclick="toggleMobileMenu()">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="mobile-menu hidden absolute left-0 right-0 bg-white shadow-lg flex-col p-4 space-y-3">
                <a href="/" class="py-2 px-4 font-medium text-dark hover:text-primary">Home</a>
                <a href="#products" class="py-2 px-4 font-medium text-dark hover:text-primary">Products</a>
                <a href="#features" class="py-2 px-4 font-medium text-dark hover:text-primary">Features</a>
                <a href="#vehicles" class="py-2 px-4 font-medium text-dark hover:text-primary">Vehicles</a>
                <a href="/price-optimiser.html" class="py-2 px-4 font-medium text-dark hover:text-primary">Price Optimiser</a>
                <a href="#about" class="py-2 px-4 font-medium text-dark hover:text-primary">About</a>
<div class="pt-2 mt-2 border-t border-gray-200">
                    <a href="#" class="inline-flex items-center py-2 px-4 bg-primary text-white rounded-lg">
                        <i data-feather="log-in" class="mr-2"></i>
                        Login
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);