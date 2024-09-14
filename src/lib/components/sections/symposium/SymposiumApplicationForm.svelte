<script>
  import { AlertCircle, CheckCircle, Send } from 'lucide-svelte';
  import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';

  let formData = {
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    preferredDate: '',
    expectedAttendees: '',
    additionalInfo: ''
  };

  let submitted = false;

  function handleSubmit(event) {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    submitted = true;
  }
</script>

<div id="symposium-form" class="bg-white text-brand-black py-16">
  <div class="container mx-auto px-4">
    <h2 class="font-playfair text-4xl md:text-5xl font-bold mb-8 text-brand-burgundy text-center">Host a Symposium</h2>
    <p class="font-bricolage text-xl md:text-2xl mb-12 text-center">Transform your institution with a Leadership Innovation World symposium</p>
    
    <div class="flex flex-col lg:flex-row gap-12">
      <div class="lg:w-1/2 shadow-2xl p-4 rounded-lg">
        <form on:submit={handleSubmit} class="space-y-6">
          <div>
            <label for="institutionName" class="block font-bricolage text-lg mb-2">Institution Name</label>
            <input
              type="text"
              id="institutionName"
              bind:value={formData.institutionName}
              required
              class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
            />
          </div>
          <div class="flex gap-4">
            <div class="flex-1">
              <label for="contactPerson" class="block font-bricolage text-lg mb-2">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                bind:value={formData.contactPerson}
                required
                class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
              />
            </div>
            <div class="flex-1">
              <label for="email" class="block font-bricolage text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
              />
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-1">
              <label for="phone" class="block font-bricolage text-lg mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
              />
            </div>
            <div class="flex-1">
              <label for="preferredDate" class="block font-bricolage text-lg mb-2">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                bind:value={formData.preferredDate}
                class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
              />
            </div>
          </div>
          <div>
            <label for="expectedAttendees" class="block font-bricolage text-lg mb-2">Expected Attendees</label>
            <input
              type="number"
              id="expectedAttendees"
              bind:value={formData.expectedAttendees}
              class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
            />
          </div>
          <div>
            <label for="additionalInfo" class="block font-bricolage text-lg mb-2">Additional Information</label>
            <textarea
              id="additionalInfo"
              bind:value={formData.additionalInfo}
              rows="4"
              class="w-full p-3 border border-brand-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="w-full bg-brand-burgundy text-white font-bricolage py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors text-lg flex items-center justify-center"
          >
            <Send class="mr-2" size={20} />
            Submit Request
          </button>
        </form>
      </div>
      <div class="lg:w-1/2 flex flex-col justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-auto mb-8">
          <rect width="400" height="300" fill="#FFF" />
          <circle cx="200" cy="150" r="100" fill="#76142D" opacity="0.1" />
          <circle cx="200" cy="150" r="80" fill="#76142D" opacity="0.2" />
          <circle cx="200" cy="150" r="60" fill="#76142D" opacity="0.3" />
          <path d="M200,90 L200,210 M140,150 L260,150" stroke="#76142D" stroke-width="4" />
          <circle cx="200" cy="150" r="10" fill="#FCD57E" />
          <path d="M180,130 Q200,110 220,130 M180,170 Q200,190 220,170" fill="none" stroke="#111716" stroke-width="3" />
        </svg>
        <Alert>
          <AlertCircle class="h-4 w-4" />
          <AlertTitle>Why host with us?</AlertTitle>
          <AlertDescription>
            Our symposiums are tailored to your institution's needs, bringing together industry leaders, academics, and students for a transformative experience.
          </AlertDescription>
        </Alert>
      </div>
    </div>
    
    {#if submitted}
      <Alert class="mt-8 bg-green-100 border-green-500">
        <CheckCircle class="h-4 w-4 text-green-500" />
        <AlertTitle>Request Submitted!</AlertTitle>
        <AlertDescription>
          Thank you for your interest. Our team will contact you shortly to discuss the details of hosting a symposium at your institution.
        </AlertDescription>
      </Alert>
    {/if}
  </div>
</div>