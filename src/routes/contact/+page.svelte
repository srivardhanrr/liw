<script>
  import { enhance } from '$app/forms';
	import Calendly from '$lib/components/sections/Calendly.svelte';

  export let form;

  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  $: if (form?.success) {
    submitted = true;
  }
</script>

<svelte:head>
  <title>Contact Us | Leadership Innovation World</title>
</svelte:head>

<section class="min-h-screen bg-white flex items-center justify-center py-8 sm:py-12">
  <div class="w-full max-w-4xl mx-auto px-4">
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-playfair text-brand-burgundy mb-8 sm:mb-12 text-center">Get in Touch</h1>
    
    <div class="bg-gray-50 p-1 rounded-xl shadow-2xl overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Contact Form -->
        <div class="p-4 sm:p-6 md:p-8 bg-white rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          {#if !submitted}
            <form method="POST" use:enhance class="space-y-4 sm:space-y-6">
              <div class="relative">
                <input type="text" id="name" name="name" bind:value={name} required class="peer w-full border-b border-gray-300 py-2 focus:border-brand-burgundy focus:outline-none bg-transparent transition-colors text-sm sm:text-base" placeholder=" ">
                <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-brand-burgundy">Name</label>
              </div>
              <div class="relative">
                <input type="email" id="email" name="email" bind:value={email} required class="peer w-full border-b border-gray-300 py-2 focus:border-brand-burgundy focus:outline-none bg-transparent transition-colors text-sm sm:text-base" placeholder=" ">
                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-brand-burgundy">Email</label>
              </div>
              <div class="relative">
                <textarea id="message" name="message" bind:value={message} rows="4" required class="peer w-full border-b border-gray-300 py-2 focus:border-brand-burgundy focus:outline-none bg-transparent transition-colors resize-none text-sm sm:text-base" placeholder=" "></textarea>
                <label for="message" class="absolute left-0 -top-3.5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-brand-burgundy">Message</label>
              </div>
              <button type="submit" class="w-full bg-brand-burgundy text-white py-2 sm:py-3 rounded-full hover:bg-brand-gold transition duration-300 font-bricolage text-xs sm:text-sm uppercase tracking-wider">
                Send Message
              </button>
            </form>
          {:else}
            <div class="text-center py-8 sm:py-12">
              <h2 class="text-xl sm:text-2xl font-playfair text-brand-burgundy mb-4">Thank You!</h2>
              <p class="text-gray-700 text-sm sm:text-base">We've received your message and will get back to you shortly.</p>
            </div>
          {/if}
        </div>
        
        <!-- Contact Information -->
        <div class="bg-brand-burgundy text-white p-4 sm:p-6 md:p-8 rounded-b-xl md:rounded-r-xl md:rounded-bl-none flex flex-col justify-between">
          <div>
            <h2 class="text-xl sm:text-2xl font-playfair mb-4 sm:mb-6">Contact Information</h2>
            <ul class="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li class="flex items-center">
                <span class="mr-3">📞</span>
                +91 81234 23009
              </li>
              <li class="flex items-center">
                <span class="mr-3">✉️</span>
                <span class="break-all">info@leadershipinnovationworld.com</span>
              </li>
              <li class="flex items-center">
                <span class="mr-3">📍</span>
                JP Nagar, Bengaluru, India
              </li>
            </ul>
          </div>
          <div class="mt-8 sm:mt-12">
            <h3 class="text-lg sm:text-xl font-playfair mb-3 sm:mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
              <a href=" https://www.linkedin.com/company/leadership-innovation-world/posts/?feedView=all " class="text-white hover:text-brand-dark transition duration-300 text-sm sm:text-base">LinkedIn</a>
              <a href="https://x.com/liw_symposium" class="text-white hover:text-brand-dark transition duration-300 text-sm sm:text-base">Twitter</a>
              <a href="https://www.instagram.com/leadershipinnovationworld" class="text-white hover:text-brand-dark transition duration-300 text-sm sm:text-base">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- <Calendly /> -->