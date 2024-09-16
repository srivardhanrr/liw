<script>
    import { Mic, Users, Lightbulb } from 'lucide-svelte';
  </script>
  
  <section class="py-24 bg-white text-brand-black relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      <h2 class="text-4xl md:text-5xl font-playfair text-brand-burgundy mb-8 text-center leading-tight">
        Want to join us as a <span class="text-brand-gold">speaker</span> or <span class="text-brand-gold">panelist</span> for the symposium?
      </h2>
      
      <p class="text-xl font-bricolage text-center mb-12 leading-relaxed">
        Are you a thought leader, innovator, or expert in your field? We're glad to welcome dynamic voices to inspire the next generation.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="flex flex-col items-center text-center">
          <Mic class="text-brand-burgundy w-16 h-16 mb-4" />
          <h3 class="text-xl font-playfair text-brand-burgundy mb-2">Share Your Knowledge</h3>
          <p class="font-inter">Inspire others with your expertise and insights</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Users class="text-brand-burgundy w-16 h-16 mb-4" />
          <h3 class="text-xl font-playfair text-brand-burgundy mb-2">Connect with Leaders</h3>
          <p class="font-inter">Network with industry professionals and innovators</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Lightbulb class="text-brand-burgundy w-16 h-16 mb-4" />
          <h3 class="text-xl font-playfair text-brand-burgundy mb-2">Shape the Future</h3>
          <p class="font-inter">Contribute to shaping future innovation and leadership</p>
        </div>
      </div>
      
      <div class="text-center">
        <a 
          href="/symposium/join" 
          class="inline-block bg-brand-burgundy text-white font-inter font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-brand-tertiary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Join as a Speaker or Panelist
        </a>
      </div>
    </div>
    
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-brand-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  </section>
  