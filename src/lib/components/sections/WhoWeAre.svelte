<script lang="ts">
    import { Button } from "$lib/components/ui/button";
	import { onMount } from "svelte";

    let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });

    const section = document.querySelector('.who-we-are-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  });
  </script>
  
  <section class="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="space-y-12">
          <h2 class="font-playfair text-4xl sm:text-5xl text-brand-burgundy">
            Who We Are
          </h2>
          <p class="font-sans text-lg text-brand-black leading-relaxed">
            Leadership Innovation World is dedicated to reshaping education by merging academic wisdom with industry foresight. We don't just prepare students for their first job; we empower them to become tomorrow's leaders.
          </p>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-brand-gold text-brand-burgundy">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bricolage font-medium text-brand-black">Cutting-edge Programs</h3>
                <p class="mt-2 text-base text-gray-600">Our programs blend academic rigor with real-world applications.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-brand-gold text-brand-burgundy">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bricolage font-medium text-brand-black">Industry Connections</h3>
                <p class="mt-2 text-base text-gray-600">We connect students with top industry experts through exclusive symposiums.</p>
              </div>
            </div>
          </div>
          <a href="/our-story">
          <Button variant="outline" class="mt-8 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-colors duration-300">
            Learn More About Us
          </Button>
        </a>
        </div>
  
        <!-- Image -->
        <div class="overflow-hidden relative :h-auto">
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
					<!-- <path d="M200 300 L 300 200" stroke="white" stroke-width="4" />
					<path d="M200 200 L 300 300" stroke="white" stroke-width="4" /> -->
				<!-- </svg> -->
          <!-- <div class="absolute inset-0 bg-brand-burgundy mix-blend-multiply opacity-20 rounded-lg"></div> -->
          <div class="absolute inset-0 bg-gradient-to-br from-brand-gold/30 to-transparent mix-blend-overlay rounded-lg"></div>
        </div>
        <!-- <div class="md:w-5/12 transition-all duration-1000 ease-out delay-500" class:opacity-0={!isVisible} class:translate-x-10={!isVisible}>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-liw-burgundy to-red-950 rounded-lg transform rotate-6"></div>
            <img
              src="/images/bg-image.png"
              alt="Leadership Innovation World"
              class="relative z-10 rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div> -->
      </div>
    </div>
  </section>