<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { LinkedinIcon, IdCardIcon, UsersIcon, BookOpenIcon, BrainCircuitIcon } from 'lucide-svelte';
  </script>
  
  <section class="bg-gradient-to-br from-white to-brand-gold/10 py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-playfair text-4xl sm:text-5xl text-brand-burgundy text-center mb-16">
        Key Benefits of Our Certification Programs
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Benefit 1 -->
        <div class="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <LinkedinIcon class="w-12 h-12 text-brand-burgundy mb-6" />
          <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-4">Prestigious LinkedIn Badge</h3>
          <p class="text-gray-600">Earn a distinguished LinkedIn badge from Leaders Excellence at Harvard Square, making your profile stand out to recruiters and peers.</p>
        </div>
        
        <!-- Benefit 2 -->
        <div class="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <IdCardIcon class="w-12 h-12 text-brand-burgundy mb-6" />
          <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-4">Unique ID on Certificates</h3>
          <p class="text-gray-600">Each certificate features a unique ID, ensuring authenticity and easy verification of your achievement.</p>
        </div>
        
        <!-- Benefit 3 -->
        <div class="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <UsersIcon class="w-12 h-12 text-brand-burgundy mb-6" />
          <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-4">Membership in MLE℠</h3>
          <p class="text-gray-600">Join the Members of Leaders Excellence℠ (MLE℠), connecting you with a global network of professionals and leaders.</p>
        </div>
        
        <!-- Benefit 4 -->
        <div class="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <BookOpenIcon class="w-12 h-12 text-brand-burgundy mb-6" />
          <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-4">Dual Mode Training</h3>
          <p class="text-gray-600">Experience the flexibility of both online and offline training sessions, immersing yourself in the learning process.</p>
        </div>
        
        <!-- Benefit 5 -->
        <div class="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <BrainCircuitIcon class="w-12 h-12 text-brand-burgundy mb-6" />
          <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-4">Focus on Soft Skills</h3>
          <p class="text-gray-600">Develop crucial soft skills to navigate the complexities of the modern workplace with confidence.</p>
        </div>
      </div>
      
      <!-- <div class="mt-16 text-center">
        <Button variant="default" class="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white">
          Download Pitch Deck
        </Button>
      </div> -->
    </div>
  </section>