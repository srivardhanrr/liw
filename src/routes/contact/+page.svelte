<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
    // Here you would typically send the form data to a server
    console.log({ name, email, message });
    submitted = true;
  }
</script>

<svelte:head>
  <title>Contact Us | Leadership Innovation World</title>
</svelte:head>

<section class="min-h-screen bg-white flex items-center justify-center py-12">
  <div class="w-full max-w-4xl mx-auto px-4">
    <h1 class="text-5xl md:text-6xl font-playfair text-brand-burgundy mb-12 text-center">Get in Touch</h1>
    
    <div class="bg-gray-50 p-1 rounded-xl shadow-2xl overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Contact Form -->
        <div class="p-8 bg-white rounded-l-xl">
          {#if !submitted}
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <div class="relative">
                <input type="text" id="name" bind:value={name} required class="peer w-full border-b border-gray-300 py-2 focus:border-brand-burgundy focus:outline-none bg-transparent transition-colors" placeholder=" ">
                <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-burgundy">Name</label>
              </div>
              <div class="relative">
                <input type="email" id="email" bind:value={email} required class="peer w-full border-b border-gray-300 py-2 focus:border-brand-burgundy focus:outline-none bg-transparent transition-colors" placeholder=" ">
                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-burgundy">Email</label>
              </div>
              <div class="relative">
                <textarea id="message" bind:value={message} rows="4" required class="peer w-full border-b border-gray-300 py-2 focus:border-brand-burgundy focus:outline-none bg-transparent transition-colors resize-none" placeholder=" "></textarea>
                <label for="message" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-burgundy">Message</label>
              </div>
              <button type="submit" class="w-full bg-brand-burgundy text-white py-3 rounded-full hover:bg-brand-gold transition duration-300 font-bricolage text-sm uppercase tracking-wider">
                Send Message
              </button>
            </form>
          {:else}
            <div class="text-center py-12">
              <h2 class="text-2xl font-playfair text-brand-burgundy mb-4">Thank You!</h2>
              <p class="text-gray-700">We've received your message and will get back to you shortly.</p>
            </div>
          {/if}
        </div>
        
        <!-- Contact Information -->
        <div class="bg-brand-burgundy  text-white p-8 rounded-r-xl flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-playfair mb-6">Contact Information</h2>
            <ul class="space-y-4">
              <li class="flex items-center">
                <span class="mr-3">📞</span>
                +91 74066 59377
              </li>
              <li class="flex items-center">
                <span class="mr-3">✉️</span>
                info@leadershipinnovationworld.com
              </li>
              <li class="flex items-center">
                <span class="mr-3">📍</span>
                Bengaluru, India
              </li>
            </ul>
          </div>
          <div class="mt-12">
            <h3 class="text-xl font-playfair mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
              <!-- <a href="#" class="text-white hover:text-brand-dark transition duration-300">LinkedIn</a> -->
              <a href="https://x.com/liw_symposium" class="text-white hover:text-brand-dark transition duration-300">Twitter</a>
              <a href="https://www.instagram.com/leadershipinnovationworld" class="text-white hover:text-brand-dark transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Add any additional styles here */
</style>
