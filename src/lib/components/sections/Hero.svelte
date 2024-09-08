<script lang="ts">
    import { Button } from "$lib/components/ui/button";
  </script>
  
  <section class="relative h-screen flex flex-col lg:flex-row overflow-hidden">
    <!-- Content Side -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 z-10">
      <div class="max-w-xl">
        <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl text-brand-burgundy mb-6">
          Reshaping Education for Tomorrow's Leaders
        </h1>
        <p class="font-sans text-lg md:text-xl text-brand-black mb-8">
          We merge academic wisdom with industry foresight, empowering students to lead in a fast-paced world.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <Button variant="default" class="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white">
            Explore Programs
          </Button>
          <Button variant="outline" class="border-brand-gold text-brand-burgundy hover:bg-brand-gold/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  
    <!-- Image Side -->
    <div class="absolute inset-0 lg:inset-auto lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
      <div class="relative h-full w-full">
        <div class="absolute inset-0 bg-gradient-to-r to-transparent z-10 lg:hidden"></div>
        <img
          src="/images/liw-hero.svg"
          alt="Students collaborating with industry professionals"
          class="object-cover h-full w-full"
        />
      </div>
    </div>
  
    <!-- Decorative Element -->
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-gold/20 to-transparent z-20"></div>
  </section>