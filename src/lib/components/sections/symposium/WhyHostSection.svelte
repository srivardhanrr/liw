<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
  
    let isVisible = false;
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
        }
      }, { threshold: 0.1 });
  
      const section = document.querySelector('.why-host-section');
      if (section) {
        observer.observe(section);
      }
  
      return () => observer.disconnect();
    });
  </script>
  
  <section class="why-host-section relative py-24 bg-gradient-to-r from-white to-yellow-50 overflow-hidden">
    <!-- Content Container -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl text-brand-burgundy font-playfair text-brand-primary mb-12 text-center">
        Why Host the Symposium at Your Institution?
      </h2>
  
      {#if isVisible}
        <div class="grid md:grid-cols-2 gap-12" in:fade="{{ duration: 1000 }}">
          <!-- Enhance Student Experience -->
          <div class="bg-brand-secondary bg-opacity-10 p-8 rounded-lg border border-brand-secondary">
            <h3 class="text-2xl text-brand-burgundy font-bricolage text-brand-primary mb-4">
              Enhance Student Experience
            </h3>
            <p class="text-lg text-brand-black font-inter text-brand-dark">
              Offer your students the opportunity to learn from and interact with industry leaders, 
              gaining insights that extend beyond the classroom.
            </p>
          </div>
  
          <!-- Strengthen Industry Connections -->
          <div class="bg-brand-tertiary bg-opacity-10 p-8 rounded-lg border border-brand-tertiary">
            <h3 class="text-2xl text-brand-burgundy font-bricolage text-brand-primary mb-4">
              Strengthen Industry Connections
            </h3>
            <p class="text-lg font-inter text-brand-dark">
              Build and reinforce partnerships with top companies and professionals, 
              positioning your institution as a leader in student development.
            </p>
          </div>
        </div>
      {/if}
  
      <!-- CTA Button -->
      <!-- <div class="text-center mt-16">
        <a
          href="#contact"
          class="inline-block bg-brand-primary text-brand-burgundy font-bricolage text-lg px-8 py-3 rounded-full transition-all hover:bg-brand-secondary hover:text-brand-dark"
        >
          Host a Symposium
        </a>
      </div> -->
    </div>
  
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-brand-secondary opacity-10 rounded-br-full"></div>
    <div class="absolute bottom-0 right-0 w-48 h-48 bg-brand-tertiary opacity-10 rounded-tl-full"></div>
  </section>