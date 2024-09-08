<script>
    import { fade } from 'svelte/transition';
    import { Mail } from 'lucide-svelte';
  
    let email = '';
    let isSubmitted = false;
  
    function handleSubmit() {
      // Here you would typically send the email to your server
      console.log('Subscribed email:', email);
      // Reset form and show success message
      email = '';
      isSubmitted = true;
      setTimeout(() => {
        isSubmitted = false;
      }, 5000);
    }
  </script>
  
  <section class="newsletter-section relative py-24 bg-brand-primary overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-playfair text-brand-secondary mb-4">
          Stay Informed
        </h2>
        <p class="text-xl font-inter text-white">
          Subscribe to our newsletter for the latest symposium updates and industry insights.
        </p>
      </div>
  
      <form 
        on:submit|preventDefault={handleSubmit}
        class="max-w-md mx-auto"
        in:fade="{{ duration: 1000 }}"
      >
        <div class="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            bind:value={email}
            placeholder="Enter your email"
            required
            class="flex-grow px-6 py-4 font-inter text-brand-dark focus:outline-none"
          />
          <button
            type="submit"
            class="bg-brand-secondary text-brand-primary px-6 py-4 font-bricolage font-bold transition-colors duration-300 hover:bg-brand-tertiary flex items-center"
          >
            <Mail class="mr-2" size={20} />
            Subscribe
          </button>
        </div>
      </form>
  
      {#if isSubmitted}
        <p class="text-center text-brand-secondary mt-4 font-bricolage" in:fade>
          Thank you for subscribing!
        </p>
      {/if}
    </div>
  
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-tertiary opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
  </section>