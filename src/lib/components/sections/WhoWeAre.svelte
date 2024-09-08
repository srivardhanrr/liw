<script lang="ts">
    import { Button } from "$lib/components/ui/button";
  </script>
  
  <section class="bg-white py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="space-y-8">
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
          <Button variant="outline" class="mt-8 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-colors duration-300">
            Learn More About Us
          </Button>
        </div>
  
        <!-- Image -->
        <div class="overflow-hidden relative :h-auto">
          <img
            src="/images/who-we-are.png"
            alt="Students collaborating with industry professionals"
            class="object-fit w-full h-full rounded-lg shadow-xl"
          />
          <!-- <div class="absolute inset-0 bg-brand-burgundy mix-blend-multiply opacity-20 rounded-lg"></div> -->
          <div class="absolute inset-0 bg-gradient-to-br from-brand-gold/30 to-transparent mix-blend-overlay rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>