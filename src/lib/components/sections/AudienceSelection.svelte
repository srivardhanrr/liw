<script>
    import { fade, fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
  
    const audiences = [
      { id: 'student', label: "I'm a Student", icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z' },
      { id: 'professional', label: "I'm a Professional", icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
      { id: 'founder', label: "I'm a Startup Founder", icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    ];
  
    function handleSelection(audienceId) {
      console.log(`Selected audience: ${audienceId}`);
      // Here you would typically handle the selection, perhaps by updating a store or navigating to a new page
    }
  </script>
  
  <section class="py-24 bg-gradient-to-br from-white to-brand-gold/10 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <svg class="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
        </pattern>
        <rect width="100" height="100" fill="url(#circles)" />
      </svg>
    </div>
  
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-playfair text-brand-burgundy mb-12 text-center" in:fade={{ duration: 1000, delay: 200 }}>
        Select Your Audience
      </h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each audiences as audience, index}
          <button
            on:click={() => handleSelection(audience.id)}
            class="group bg-white rounded-lg shadow-xl p-8 transition-all duration-300 hover:bg-brand-burgundy hover:shadow-2xl transform hover:-translate-y-1"
            in:fly="{{ y: 50, duration: 500, delay: index * 200, easing: cubicOut }}"
          >
            <div class="flex flex-col items-center text-center">
              <svg class="w-16 h-16 mb-4 text-brand-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={audience.icon}></path>
              </svg>
              <h3 class="text-xl font-bricolage text-brand-charcoal group-hover:text-white transition-colors duration-300">{audience.label}</h3>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </section>