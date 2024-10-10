<script>
    import {Wrench, Users, Presentation, Network } from 'lucide-svelte';
  </script>
  
  <section class="bg-white md:p-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-playfair text-brand-burgundy mb-10 text-center">
        Agenda Overview
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Opening Keynote -->
        <div class="flex items-start space-x-4">
          <div class="text-brand-dark">
            <Presentation class="text-brand-burgundy" size={32} />
          </div>
          <div>
            <h3 class="text-xl font-bricolage text-brand-burgundy mb-2">
              Opening Keynote
            </h3>
            <p class="text-md font-inter text-brand-dark">
              A visionary industry leader will set the tone for the event, discussing the future of technology and leadership.
            </p>
          </div>
        </div>
  
        <!-- Panel Discussions -->
        <div class="flex items-start space-x-4">
          <div class="text-brand-dark">
            <Users class="text-brand-burgundy" size={32} />
          </div>
          <div>
            <h3 class="text-xl font-bricolage text-brand-burgundy mb-2">
              Panel Discussions
            </h3>
            <p class="text-base font-inter text-brand-dark">
              Experts will dive into emerging trends, including the impact of IoT and cybersecurity on global industries.
            </p>
          </div>
        </div>
  
        <!-- Hands-On Workshops -->
        <div class="flex items-start space-x-4">
          <div class="text-brand-dark">
            <Wrench class="text-brand-burgundy" size={32} />
          </div>
          <div>
            <h3 class="text-xl font-bricolage text-brand-burgundy mb-2">
              Hands-On Workshops
            </h3>
            <p class="text-base font-inter text-brand-dark">
              Interactive sessions where participants will gain practical skills in areas directly relevant to current market needs.
            </p>
          </div>
        </div>
  
        <!-- Networking Sessions -->
        <div class="flex items-start space-x-4">
          <div class="text-brand-dark">
            <Network class="text-brand-burgundy" size={32} />
          </div>
          <div>
            <h3 class="text-xl font-bricolage text-brand-burgundy mb-2">
              Networking Sessions
            </h3>
            <p class="text-base font-inter text-brand-dark">
              Dedicated time for one-on-one networking, where leaders and students can connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  