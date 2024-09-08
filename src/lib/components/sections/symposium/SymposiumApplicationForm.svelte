<script>
    import { fade } from 'svelte/transition';
  
    let formData = {
      institutionName: '',
      contactName: '',
      email: '',
      phone: '',
      proposedDates: '',
      additionalInfo: ''
    };
  
    function handleSubmit() {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', formData);
      // Reset form after submission
      formData = {
        institutionName: '',
        contactName: '',
        email: '',
        phone: '',
        proposedDates: '',
        additionalInfo: ''
      };
      alert('Thank you for your interest! We will get back to you soon.');
    }
  </script>
  
  <section class="symposium-form-section relative py-24 bg-white overflow-hidden">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-playfair text-brand-primary mb-12 text-center">
        Host a Symposium
      </h2>
  
      <form 
        on:submit|preventDefault={handleSubmit}
        class="bg-white shadow-xl rounded-lg p-8 space-y-6"
        in:fade="{{ duration: 1000 }}"
      >
        <div class="space-y-2">
          <label for="institutionName" class="block text-lg font-bricolage text-brand-black">Institution Name</label>
          <input
            type="text"
            id="institutionName"
            bind:value={formData.institutionName}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          />
        </div>
  
        <div class="space-y-2">
          <label for="contactName" class="block text-lg font-bricolage text-brand-black">Contact Name</label>
          <input
            type="text"
            id="contactName"
            bind:value={formData.contactName}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          />
        </div>
  
        <div class="space-y-2">
          <label for="email" class="block text-lg font-bricolage text-brand-black">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          />
        </div>
  
        <div class="space-y-2">
          <label for="phone" class="block text-lg font-bricolage text-brand-black">Phone</label>
          <input
            type="tel"
            id="phone"
            bind:value={formData.phone}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          />
        </div>
  
        <div class="space-y-2">
          <label for="proposedDates" class="block text-lg font-bricolage text-brand-black">Proposed Dates</label>
          <input
            type="text"
            id="proposedDates"
            bind:value={formData.proposedDates}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          />
        </div>
  
        <div class="space-y-2">
          <label for="additionalInfo" class="block text-lg font-bricolage text-brand-black">Additional Information</label>
          <textarea
            id="additionalInfo"
            bind:value={formData.additionalInfo}
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
          ></textarea>
        </div>
  
        <div class="text-center">
          <button
            type="submit"
            class="inline-block bg-brand-primary text-white font-bricolage text-lg px-8 py-3 rounded-full transition-all hover:bg-brand-secondary hover:text-brand-dark"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-brand-secondary opacity-10 rounded-br-full"></div>
    <div class="absolute bottom-0 right-0 w-48 h-48 bg-brand-tertiary opacity-10 rounded-tl-full"></div>
  </section>