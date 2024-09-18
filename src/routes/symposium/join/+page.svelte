<script>
  import { Mic, Mail, Phone, Linkedin, BookOpen } from 'lucide-svelte';
  import { enhance } from '$app/forms';

  export let form;

  let formData = {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    expertise: ''
  };

  $: submitted = form?.success || false;
</script>

<section class='py-24 bg-white text-brand-dark relative overflow-hidden'>
  <div class='container mx-auto px-4 max-w-xl relative z-10'>
      <h2 class='text-4xl md:text-5xl font-playfair text-brand-burgundy mb-8 text-center leading-tight'>
          Join as a <span class="text-brand-gold">Speaker</span> or <span class="text-brand-gold">Panelist</span>
      </h2>
      <p class='text-lg md:text-xl font-bricolage text-center mb-12 leading-relaxed'>
          Please fill out the form below to submit your details and join our esteemed panel of thought leaders.
      </p>
      {#if !submitted}
          <form method="POST" use:enhance class='space-y-6'>
              <div class="relative">
                  <Mic class="absolute top-3 left-3 text-brand-burgundy w-5 h-5" />
                  <input 
                      type='text' 
                      id='name' 
                      name='name'
                      bind:value={formData.name} 
                      required 
                      placeholder="Full Name"
                      class='pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition duration-300 font-inter'
                  />
              </div>
              <div class="relative">
                  <Mail class="absolute top-3 left-3 text-brand-burgundy w-5 h-5" />
                  <input 
                      type='email' 
                      id='email' 
                      name='email'
                      bind:value={formData.email} 
                      required 
                      placeholder="Email Address"
                      class='pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition duration-300 font-inter'
                  />
              </div>
              <div class="relative">
                  <Phone class="absolute top-3 left-3 text-brand-burgundy w-5 h-5" />
                  <input 
                      type='tel' 
                      id='phone' 
                      name='phone'
                      bind:value={formData.phone} 
                      required 
                      placeholder="Phone Number"
                      class='pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition duration-300 font-inter'
                  />
              </div>
              <div class="relative">
                  <Linkedin class="absolute top-3 left-3 text-brand-burgundy w-5 h-5" />
                  <input 
                      type='url' 
                      id='linkedin' 
                      name='linkedin'
                      bind:value={formData.linkedin} 
                      required 
                      placeholder="LinkedIn Profile URL"
                      class='pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition duration-300 font-inter'
                  />
              </div>
              <div class="relative">
                  <BookOpen class="absolute top-3 left-3 text-brand-burgundy w-5 h-5" />
                  <textarea 
                      id='expertise' 
                      name='expertise'
                      bind:value={formData.expertise} 
                      required 
                      placeholder="Area of Expertise"
                      class='pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition duration-300 font-inter h-32 resize-none'
                  ></textarea>
              </div>
              <div class='text-center'>
                  <button 
                      type='submit' 
                      class='inline-block bg-brand-burgundy text-brand-gold font-inter font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-brand-tertiary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                  >
                      Submit Application
                  </button>
              </div>
          </form>
      {:else}
          <div class="text-center py-12 rounded-lg">
              <h3 class="text-2xl font-playfair text-brand-burgundy mb-4">Application Submitted!</h3>
              <p class="text-gray-700">Thank you for your interest. We'll review your application and get back to you soon.</p>
          </div>
      {/if}
  </div>
  
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-brand-gold rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-brand-tertiary rounded-full transform translate-x-1/2 translate-y-1/2"></div>
  </div>
</section>
