<section class="bg-white py-20 overflow-hidden">
  <div class="container mx-auto px-4 flex flex-col items-center relative">
    <h2 class="text-3xl md:text-4xl lg:text-5xl text-center font-playfair text-brand-burgundy mb-12 relative z-10">
      Exclusive Partnership with <span class="text-brand-dark-gold">Leaders Excellence</span>
      <span class="block text-2xl md:text-3xl mt-2">at Harvard Square</span>
    </h2>

    <!-- Background decorative element -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-secondary opacity-10 rounded-full blur-3xl"></div>

    <!-- Images with Symbol Column -->
    <div class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mb-16 relative z-10">
      <!-- Logo of LIW -->
      <img
        src="/images/logo/liw-logo.png"
        alt="Leadership Innovation World Logo"
        class="w-48 md:w-56 h-auto transition-transform duration-300 hover:scale-105"
      />
      <!-- Separator Symbol -->
      <div class="text-5xl font-playfair text-brand-dark">
        ×
      </div>
      <!-- Logo of Leaders Excellence -->
      <img
        src="/images/leadersexc.png"
        alt="Leaders Excellence Harvard Square Logo"
        class="w-48 md:w-56 h-auto transition-transform duration-300 hover:scale-105"
      />
    </div>

    <!-- Content and Seal Column -->
    <div class="flex flex-col md:flex-row items-start justify-between relative z-10 max-w-5xl mx-auto">
      <!-- Content Column -->
      <div class="text-center md:text-left max-w-3xl mx-auto md:mx-0">
        <div class="p-8 rounded-lg">
          <p class="text-md md:text-lg font-inter text-brand-dark leading-relaxed mb-6">
            Leadership Innovation World (LIW) is proud to be the exclusive agent for Leaders Excellence at Harvard Square in India, offering premier leadership development programs to schools and universities.
          </p>
          <p class="text-md md:text-lg font-inter text-brand-dark leading-relaxed mb-8">
            This prestigious collaboration brings world-class leadership development programs right to the heart of India's academic institutions, empowering future leaders with top-tier education and globally recognized certification.
          </p>
        </div>
      </div>

      <!-- Seal Image -->
      <div class="flex sm:flex-col flex-row justify-center items-center mt-8 md:mt-0 md:ml-8 flex-shrink-0">
        <img
          src="/images/seal.webp"
          alt="Leaders Excellence Seal"
          class="w-24 h-24 md:w-48 md:h-48 object-contain"
        />
        <img
          src="/images/HS-seal.png"
          alt="Leaders Excellence Seal"
          class="md:-mt-10 w-24 h-24 md:w-48 md:h-48 object-contain"
        />
        <img
          src="/images/BEA-seal.png"
          alt="Leaders Excellence Seal"
          class="md:-mt-10 m-1 md:hidden w-24 h-24 md:w-48 md:h-48 object-contain"
        />
      </div>
    </div>

    <!-- Decorative element -->
    <div class="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-64 h-64 bg-brand-primary opacity-5 rounded-full blur-3xl"></div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .float-animation {
    animation: float 6s ease-in-out infinite;
  }
</style>
