<script>
  import { enhance } from '$app/forms';

  export let form;

  let name = '';
  let email = '';
  let selectedCourse = '';
  let message = '';

  $: submitted = form?.success || false;
</script>

<section id="course-enroll" class="bg-brand-light py-16">
  <div class="container mx-auto px-4">
      <h2 class="font-playfair text-4xl text-brand-burgundy mb-8 text-center">Register for a Course</h2>
      
      <div class="flex flex-col md:flex-row gap-8">
          <!-- Form on the left -->
          <div class="w-full md:w-1/2">
              {#if !submitted}
                  <form method="POST" use:enhance class="bg-white rounded-lg shadow-lg p-8">
                      <div class="mb-4">
                          <label for="name" class="block text-brand-dark font-bricolage mb-2">Name</label>
                          <input type="text" id="name" name="name" bind:value={name} required
                                 class="w-full px-3 py-2 border border-brand-gold rounded-md">
                      </div>
                      <div class="mb-4">
                          <label for="email" class="block text-brand-dark font-bricolage mb-2">Email</label>
                          <input type="email" id="email" name="email" bind:value={email} required
                                 class="w-full px-3 py-2 border border-brand-gold rounded-md">
                      </div>
                      <div class="mb-4">
                          <label for="course" class="block text-brand-dark font-bricolage mb-2">Course</label>
                          <select id="course" name="course" bind:value={selectedCourse} required
                                  class="w-full px-3 py-2 border border-brand-gold rounded-md">
                              <option value="">Select a course</option>
                              <option value="leadership">Leadership and Management</option>
                              <option value="personal">Personal Development</option>
                              <option value="marketing">Marketing and Sales</option>
                              <option value="hr">Human Resources</option>
                              <option value="organizational">Organizational Essentials</option>
                              <option value="administrative">Administrative Skills</option>
                              <option value="professional">Professional Advancement</option>
                              <option value="career">Advanced Career Building</option>
                          </select>
                      </div>
                      <div class="mb-4">
                          <label for="message" class="block text-brand-dark font-bricolage mb-2">Message</label>
                          <textarea id="message" name="message" bind:value={message} required
                                    class="w-full px-3 py-2 border border-brand-gold rounded-md"></textarea>
                      </div>
                      <button type="submit" 
                              class="w-full bg-brand-burgundy text-white font-bricolage py-2 px-4 rounded-md hover:bg-brand-gold transition duration-300">
                          Register
                      </button>
                  </form>
              {:else}
                  <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                      <h3 class="text-2xl font-playfair text-brand-burgundy mb-4">Registration Successful!</h3>
                      <p class="text-brand-dark">Thank you for registering. We'll be in touch with more information about your course.</p>
                  </div>
              {/if}
          </div>
          
          <!-- SVG Graphic on the right -->
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <svg
            class="h-auto w-full"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"> -->
  <!-- World map background -->
  <path d="M50,250 Q125,200 250,250 T450,250" fill="none" stroke="#FCD57E" stroke-width="2" />
  <path d="M50,275 Q125,225 250,275 T450,275" fill="none" stroke="#FCD57E" stroke-width="2" />
  <path d="M50,300 Q125,250 250,300 T450,300" fill="none" stroke="#FCD57E" stroke-width="2" />

  <!-- Central node (hub of innovation) -->
  <circle cx="250" cy="250" r="60" fill="#76142D" />
  
  <!-- Connected nodes (global network) -->
  <circle cx="150" cy="150" r="30" fill="#E8B654" />
  <circle cx="350" cy="150" r="30" fill="#E8B654" />
  <circle cx="150" cy="350" r="30" fill="#E8B654" />
  <circle cx="350" cy="350" r="30" fill="#E8B654" />
  
  <!-- Connection lines -->
  <line x1="250" y1="250" x2="150" y2="150" stroke="#76142D" stroke-width="4" />
  <line x1="250" y1="250" x2="350" y2="150" stroke="#76142D" stroke-width="4" />
  <line x1="250" y1="250" x2="150" y2="350" stroke="#76142D" stroke-width="4" />
  <line x1="250" y1="250" x2="350" y2="350" stroke="#76142D" stroke-width="4" />
  
  <!-- Growth arrows -->
  <path d="M250,190 L270,170 L250,150 L230,170 Z" fill="white" />
  <path d="M310,250 L330,230 L350,250 L330,270 Z" fill="white" />
  
  <!-- Lightbulb (innovation) -->
  <path d="M240,240 Q250,220 260,240 L255,260 Q250,265 245,260 Z" fill="white" />
  <rect x="245" y="260" width="10" height="5" fill="white" />
</svg>
        </div>
      </div>
    </div>
  </section>
  