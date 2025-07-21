/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Hero Section -->
            <div class="relative h-96 md:h-[600px] mb-8 rounded-xl mx-4 overflow-hidden shadow-2xl" style="animation: fadeInUp 0.8s ease-out;">
                <!-- Background with overlay -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-red-900/30 animate-pulse"></div>
                </div>
                
                <!-- Hero Content -->
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                    <h1 class="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">Endzone Tavern</h1>
                    <p class="text-xl md:text-2xl mb-8 max-w-2xl text-white/90 drop-shadow">Myrtle Beach's Premier Sports Bar & Grill</p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="bg-white text-[var(--primary-color)] px-8 py-4 rounded-xl font-bold btn-animated card-hover shadow-xl text-lg border-2 border-transparent hover:border-white hover:shadow-2xl" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                            View Our Menu
                        </button>
                    </div>
                </div>
            </div>

            <!-- Live Music & Entertainment -->
            <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-700/50" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-white mb-6">Live Music<br><span class="text-red-500">Every Weekend</span></h2>
                            <p class="text-xl text-gray-200 mb-6">Experience the best local bands and artists in Myrtle Beach at Endzone Tavern. Our stage comes alive with great music every Friday and Saturday night.</p>
                            <button class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('events')">
                                View Music Schedule
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-gray-800 rounded-xl p-1 border border-gray-700 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="./assets/images/livemusicthumbnail.jpg" 
                                         alt="Live Music at Endzone Tavern" 
                                         class="max-w-full max-h-full object-contain">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bar Features -->
            <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-700/50" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="text-center w-full mb-8">
                    <h2 class="text-4xl font-bold text-white section-header">More Than Just a Sports Bar</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div class="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl shadow-lg p-6 text-center card-hover border border-gray-700">
                        <div class="text-5xl mb-4 text-red-500">🍗</div>
                        <h3 class="text-xl font-bold text-white mb-3">Gourmet Pub Grub</h3>
                        <p class="text-gray-300 text-sm">Elevated bar food, from juicy burgers to our famous loaded nachos.</p>
                    </div>
                    <div class="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl shadow-lg p-6 text-center card-hover border border-gray-700">
                        <div class="text-5xl mb-4 text-blue-400">🍺</div>
                        <h3 class="text-xl font-bold text-white mb-3">Ice-Cold Drinks</h3>
                        <p class="text-gray-300 text-sm">Enjoy our wide selection of beers, cocktails, and non-alcoholic beverages.</p>
                    </div>
                    <div class="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl shadow-lg p-6 text-center card-hover border border-gray-700">
                        <div class="text-5xl mb-4 text-green-400">📺</div>
                        <h3 class="text-xl font-bold text-white mb-3">All The Big Games</h3>
                        <p class="text-gray-300 text-sm">Never miss a game with our multiple HD screens showing all the biggest matchups.</p>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-700/50" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-white section-header">Game Day Favorites</h2>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-700 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="./images/nachos.jpeg" alt="Epic Nacho Platter" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <h3 class="absolute bottom-4 left-4 text-2xl font-bold text-white">Epic Nacho Platter</h3>
                          </div>
                          <div class="p-4 flex-grow flex flex-col">
                              <p class="text-gray-300 mb-4 text-sm flex-grow">Loaded with cheese, jalapeños, sour cream, and your choice of chicken or beef.</p>
                              <div class="flex justify-between items-center mt-auto">
                                  <span class="text-xl font-bold text-white">$14.99</span>
                                  <button class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm" onclick="window.PierogiApp.getCartManager().addItem({ id: 'gameday-1', name: 'Epic Nacho Platter', price: 14.99, image: './images/nachos.jpeg' })">
                                      Add to Order
                                  </button>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-700 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="relative">
                              <img src="./images/wings.jpeg" alt="Signature Wings" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <h3 class="absolute bottom-4 left-4 text-2xl font-bold text-white">Signature Wings</h3>
                          </div>
                          <div class="p-4 flex-grow flex flex-col">
                              <p class="text-gray-300 mb-4 text-sm flex-grow">A dozen crispy wings tossed in your choice of our 10 signature sauces.</p>
                              <div class="flex justify-between items-center mt-auto">
                                  <span class="text-xl font-bold text-white">$16.99</span>
                                  <button class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm" onclick="window.PierogiApp.getCartManager().addItem({ id: 'gameday-2', name: 'Signature Wings', price: 16.99, image: './images/wings.jpeg' })">
                                      Add to Order
                                  </button>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-700 group swiper-card" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="relative">
                              <img src="./images/sliders.jpeg" alt="Game Day Sliders" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <h3 class="absolute bottom-4 left-4 text-2xl font-bold text-white">Game Day Sliders</h3>
                          </div>
                          <div class="p-4 flex-grow flex flex-col">
                              <p class="text-gray-300 mb-4 text-sm flex-grow">Four juicy beef sliders with cheddar cheese, pickles, and our secret sauce.</p>
                              <div class="flex justify-between items-center mt-auto">
                                  <span class="text-xl font-bold text-white">$15.99</span>
                                  <button class="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm" onclick="window.PierogiApp.getCartManager().addItem({ id: 'gameday-3', name: 'Game Day Sliders', price: 15.99, image: './images/sliders.jpeg' })">
                                      Add to Order
                                  </button>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View Full Menu & Order Online
                    </a>
                </div>
            </div>

            <!-- Customer Testimonials -->
            <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-700/50" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-white section-header">What Our Fans Say</h2>
                </div>
                <div class="swiper fans-say-swiper w-full mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 swiper-card border border-gray-700/80 flex flex-col" style="animation: slideInLeft 0.5s ease-out 0.4s both;">
                        <p class="text-gray-300 italic mb-4 flex-grow">Best sports bar in Myrtle Beach! The atmosphere during games is electric, and the wings are absolutely killer. Perfect spot for Sunday football!</p>
                        <div class="flex items-center mt-auto">
                            <div class="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4 flex items-center justify-center text-2xl">
                                🏈
                            </div>
                            <div>
                                <h4 class="font-bold text-white">Jake R.</h4>
                                <div class="flex text-yellow-400">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 swiper-card border border-gray-700 flex flex-col" style="animation: fadeInUp 0.6s ease-out 1s both;">
                        <p class="text-gray-300 italic mb-4 flex-grow">The Endzone Burger is a game-changer! Cooked to perfection every time. Great beer selection too. Our go-to spot for game nights!</p>
                        <div class="flex items-center mt-auto">
                            <div class="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4 flex items-center justify-center text-2xl">
                                🍔
                            </div>
                            <div>
                                <h4 class="font-bold text-white">Mike & Sarah D.</h4>
                                <div class="flex text-yellow-400">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 swiper-card border border-gray-700 flex flex-col" style="animation: slideInRight 0.6s ease-out 1.2s both;">
                        <p class="text-gray-300 italic mb-4 flex-grow">As a sports fan, I'm in heaven here. 30+ screens, great sightlines, and the loaded nachos are next level. Staff is super friendly too!</p>
                        <div class="flex items-center mt-auto">
                            <div class="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4 flex items-center justify-center text-2xl">
                                ⚾
                            </div>
                            <div>
                                <h4 class="font-bold text-white">Chris T.</h4>
                                <div class="flex text-yellow-400">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Cart Items</h2>
                <div id="cart-items-list"></div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xl font-bold text-[var(--text-dark)]">Total:</span>
                    <span id="cart-total" class="text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                </div>
                <button class="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `,

    about: `
                <div class="mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--primary-color)]">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-[var(--primary-color)] mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Our Story</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            Endzone Tavern opened its doors in 2025 with a simple vision: to create Myrtle Beach's ultimate sports bar experience. We combine great food, cold drinks, and an unbeatable game-day atmosphere to bring fans together. Our founders, lifelong sports enthusiasts, wanted to create a place where every game feels like the championship.
                        </p>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg">
                            Located in the heart of Myrtle Beach, we've become the go-to spot for sports fans, families, and anyone looking for great food and a fun atmosphere. Our state-of-the-art screens and sound system ensure you won't miss a moment of the action, no matter where you're seated.
                        </p>
                    </div>
                </div>

                <!-- Why Myrtle Beach Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-blue-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Why Endzone Tavern?</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            At Endzone Tavern, we're more than just a sports bar - we're a community hub where fans come together to celebrate the games they love. Our unique atmosphere combines the excitement of live sports with the comfort of your favorite local hangout.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Game Day Experience</h3>
                                <p class="text-[var(--text-medium)] text-sm">Multiple HD screens and a stadium-quality sound system</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-green-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Fan Favorite Menu</h3>
                                <p class="text-[var(--text-medium)] text-sm">Signature dishes and drinks that score big with our guests</p>
                            </div>
                        </div>
                </div>

                <!-- Our Mission & Values -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Mission</h2>
                        <p class="text-[var(--text-medium)] leading-relaxed">
                            To be the ultimate sports destination in Myrtle Beach, where every game feels like home field advantage. We're committed to delivering an unbeatable combination of great food, cold drinks, and the best game-day atmosphere on the Grand Strand.
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Values</h2>
                        <ul class="text-[var(--text-medium)] space-y-2">
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Best game-day atmosphere</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Premium sports viewing</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Fan-first service</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Community engagement</li>
                        </ul>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-2">Our Commitment</h2>
                        <p class="text-[var(--primary-color)] font-semibold">"Where Every Game Feels Like Home"</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg text-center">
                            Whether you're here for the big game, a casual night out, or to enjoy our weekly specials, we're committed to making every visit memorable. Our team works tirelessly to ensure you have the best seats, the coldest drinks, and the most delicious game-day fare in Myrtle Beach. At Endzone Tavern, you're not just a fan - you're part of our team.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <span class="text-[var(--primary-color)] font-semibold">Phone:</span>
                            <a href="tel:843-945-1056" class="text-[var(--text-medium)] hover:text-yellow-400 transition-colors">843-945-1056</a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-[var(--primary-color)] font-semibold">Email:</span>
                            <span class="text-[var(--text-medium)]">endzonetavernsc@gmail.com</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-[var(--primary-color)] font-semibold">Address:</span>
                            <span class="text-[var(--text-medium)]">637 Broadway St, Myrtle Beach, SC 29577</span>
                        </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Hours</h2>
                    <div class="space-y-3">
                        <div class="flex flex-col items-center text-center">
                            <span class="text-[var(--text-medium)]">Every Day</span>
                            <span class="text-[var(--text-dark)] font-medium text-lg">3:00 PM - 12:00 AM</span>
                        </div>
                </div>
            </div>
        </div>
    `,

};
