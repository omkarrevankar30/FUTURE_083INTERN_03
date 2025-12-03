class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #0f172a;
                    color: #e2e8f0;
                    border-top: 1px solid rgba(100, 116, 139, 0.3);
}
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #878787;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: white;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #2874F0;
                    text-decoration: underline;
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                .social-link {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(100, 116, 139, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: #3b82f6;
transform: translateY(-3px);
                }
                
                .copyright {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.875rem;
                    text-align: center;
                }
                
                @media (min-width: 768px) {
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-grid">
                    <div>
                        <h3 class="footer-title">ABOUT</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Contact Us</a>
                            <a href="#" class="footer-link">About Us</a>
                            <a href="#" class="footer-link">Careers</a>
                            <a href="#" class="footer-link">FlipKart Stories</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">HELP</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Payments</a>
                            <a href="#" class="footer-link">Shipping</a>
                            <a href="#" class="footer-link">Returns</a>
                            <a href="#" class="footer-link">FAQ</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">POLICY</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Return Policy</a>
                            <a href="#" class="footer-link">Terms of Use</a>
                            <a href="#" class="footer-link">Security</a>
                            <a href="#" class="footer-link">Privacy</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">SOCIAL</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Facebook</a>
                            <a href="#" class="footer-link">Twitter</a>
                            <a href="#" class="footer-link">Instagram</a>
                            <a href="#" class="footer-link">YouTube</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-title">Mail Us:</h3>
                        <address class="not-italic text-white/80">
                            Flipkart 2.0 Internet Private Limited,<br>
Buildings Alyssa, Begonia &<br>
                            Clove Embassy Tech Village,<br>
                            Bengaluru, 560103
                        </address>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="facebook"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="youtube"></i>
                        </a>
                    </div>
                    
                    <p class="copyright">
                        © 2023 Flipkart 2.0. All rights reserved.
</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);